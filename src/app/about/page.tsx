import { baseURL } from "@/app/resources";
import { person, about, social } from "@/app/resources/content";
import { LocalizedAboutPage } from "@/components/LocalizedAboutPage";

// Fonction pour générer le nom de fichier du CV
const getCVFilename = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `CV - NICOLAS Ethan - ${year}${month}`;
};

export async function generateMetadata() {
  const title = about.title;
  const description = `À propos de ${person.name}, ${person.role} - Découvrez mon parcours, mes compétences et mes expériences professionnelles.`;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    keywords: [
      "Ethan Nicolas",
      "Développeur",
      "Ingénieur informatique",
      "CV Ethan Nicolas",
      "Profil informatique",
      "Compétences développement",
      "Sup Galilée",
      "Alternance informatique",
      "Parcours professionnel"
    ],
    openGraph: {
      title,
      description,
      type: "profile",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
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

export default function About() {
  const cvFilename = getCVFilename();

  return (
    <LocalizedAboutPage 
      person={person}
      social={social}
      about={about}
      cvFilename={cvFilename}
    />
  );
}
