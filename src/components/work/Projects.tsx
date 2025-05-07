import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => {
        // Extraction des liens GitHub et de démo à partir des liens dans les métadonnées
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
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member: any) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            tags={post.metadata.tags || []}
            github={githubLink}
            demo={demoLink}
          />
        );
      })}
    </Column>
  );
}
