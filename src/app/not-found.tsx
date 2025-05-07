import { Column, Heading, Text, Button, Flex } from "@/once-ui/components";
import Link from "next/link";
import { RevealFx } from "@/once-ui/components";

// Fonction pour générer le nom de fichier du CV
const getCVFilename = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `CV - NICOLAS Ethan - ${year}${month}`;
};

export default function NotFound() {
  // Nom du fichier CV pour le téléchargement
  const cvFilename = getCVFilename();
  
  return (
    <>
      <Column as="section" fill center paddingBottom="160">
        <Text marginBottom="s" variant="display-strong-xl">
          404
        </Text>
        <Heading marginBottom="l" variant="display-default-xs">
          Page Non Trouvée
        </Heading>
        <Text onBackground="neutral-weak" marginBottom="l">La page que vous recherchez n'existe pas.</Text>
        
        <Flex gap="16" wrap horizontal="center">
        <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
                Revenir à l'accueil
            </Button>
          </RevealFx>
        </Flex>
      </Column>
    </>
  );
}
