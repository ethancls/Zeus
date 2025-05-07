import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { AvatarGroup, Button, Column, Flex, Heading, SmartImage, Text, Tag, Icon } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";

// Fonction pour obtenir l'icône correspondant au tag
function getIconForTag(tag: string): string {
  const tagIconMap: Record<string, string> = {
    "React": "reactLogo",
    "Node.js": "nodejsLogo",
    "NextJS": "nextjsLogo",
    "TailwindCSS": "tailwindLogo",
    "JavaScript": "javascriptLogo",
    "TypeScript": "typescriptLogo",
    "HTML": "htmlLogo",
    "CSS": "cssLogo",
    "Java": "javaLogo",
    "C": "cLogo",
    "Python": "pythonLogo",
    "Haskell": "haskellLogo",
    "Algorithmie": "algorithm",
    "Algorithmie (Alpha-Beta)": "algorithm",
    "Métaheuristique": "algorithm",
    "Calcul matriciel": "calculator",
    "Interpolation": "chart",
    "Modélisation": "model",
    "Programmation fonctionnelle": "code",
    "JavaFX": "layout",
    "XML": "code",
    "Image I/O": "image",
    "I/O": "fileImport",
    "Optimisation": "chartBar",
    "Gesion de mémoire": "memory",
  };

  return tagIconMap[tag] || "tag"; // Retourne l'icône correspondante ou "tag" par défaut
}

interface WorkParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params: { slug } }: WorkParams) {
  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata;
  let ogImage = image ? `https://${baseURL}${image}` : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    images,
    team,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/work/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Project({ params }: WorkParams) {
  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];
    
  // Extraction des liens GitHub et de démo
  let githubLink = '';
  let demoLink = '';
  
  if (post.metadata.links) {
    const githubLinkObj = post.metadata.links.find((link: any) => link.title === "GitHub");
    const demoLinkObj = post.metadata.links.find((link: any) => link.title === "Démo");
    
    if (githubLinkObj) {
      githubLink = githubLinkObj.url;
    }
    
    if (demoLinkObj) {
      demoLink = demoLinkObj.url;
    }
  }

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/work/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button href="/work" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          Retour aux projets
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.images[0]}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="16" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="m" />}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        
        {/* Affichage des tags avec leurs logos */}
        {post.metadata.tags && post.metadata.tags.length > 0 && (
          <Flex gap="8" wrap marginBottom="24">
            {post.metadata.tags.map((tag: string, index: number) => (
              <Tag key={index} size="l">
                <Flex gap="8" vertical="center">
                  <Icon name={getIconForTag(tag)} size="s" />
                  <Text>{tag}</Text>
                </Flex>
              </Tag>
            ))}
          </Flex>
        )}
        
        {/* Liens vers GitHub et démo */}
        {(githubLink || demoLink) && (
          <Flex gap="16" wrap marginBottom="24">
            {githubLink && (
              <Button
                href={githubLink}
                variant="secondary"
                size="s"
                prefixIcon="github"
              >
                GitHub
              </Button>
            )}
            {demoLink && (
              <Button
                href={demoLink}
                variant="secondary"
                size="s"
                prefixIcon="externalLink"
              >
                Démonstration
              </Button>
            )}
          </Flex>
        )}
        
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
