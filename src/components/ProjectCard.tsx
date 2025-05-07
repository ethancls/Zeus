"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Tag,
  Icon,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  tags?: string[];
  github?: string;
  demo?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  tags = [],
  github,
  demo,
}) => {
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim() || tags.length > 0) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            
            {tags.length > 0 && (
              <Flex gap="8" wrap>
                {tags.map((tag, index) => (
                  <Tag key={index} size="l">
                    <Flex gap="8" vertical="center">
                      <Icon name={getIconForTag(tag)} size="s" />
                      <Text>{tag}</Text>
                    </Flex>
                  </Tag>
                ))}
              </Flex>
            )}
            
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Accéder au projet</Text>
                </SmartLink>
              )}
              {github && (
                <SmartLink
                  suffixIcon="github"
                  style={{ margin: "0", width: "fit-content" }}
                  href={github}
                >
                  <Text variant="body-default-s">GitHub</Text>
                </SmartLink>
              )}
              {demo && (
                <SmartLink
                  suffixIcon="externalLink"
                  style={{ margin: "0", width: "fit-content" }}
                  href={demo}
                >
                  <Text variant="body-default-s">Démonstration</Text>
                </SmartLink>
              )}
              {link && !github && !demo && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">Voir le projet</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};

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
