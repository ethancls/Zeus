import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ethan",
  lastName: "Nicolas",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Apprenti ingénieur informatique (M1)",
  avatar: "/images/avatar.jpg",
  location: "Europe/Paris",
  languages: ["Français", "Anglais"],
};

const newsletter = {
  display: false,
  title: <>S'abonner à ma newsletter</>,
  description: (
    <>
      Je publie occasionnellement des articles sur les dernières actualités tech, du gaming à la cybersécurité, ainsi que mes projets personnels.
      Inscrivez-vous pour recevoir mes articles directement dans votre boîte mail.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ethancls",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ethannicolas",
  },
  {
    name: "Orcid",
    icon: "orcid",
    link: "https://orcid.org/0009-0006-8555-4396",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@ethancls.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} - Portfolio`,
  description: `Portfolio de ${person.name} en tant qu' ${person.role}.`,
  headline: <>Apprenti ingénieur informatique</>,
  subline: (
    <>
      Je suis Ethan, apprenti ingénieur informatique en M2 à Sup Galilée, actuellement en alternance chez Abeille Assurances dans le domaine de l’IAM (Identity and Access Management).  
      Je recherche un stage de 9 semaines à l’étranger afin de renforcer mes compétences techniques, découvrir de nouveaux environnements professionnels et élargir ma vision internationale de l’ingénierie informatique.
    </>
  ),
};

const about = {
  label: "À propos",
  title: "À propos",
  description: `Découvrez ${person.name}, ${person.role} basé à ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ethancls",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Je suis Ethan, apprenti ingénieur informatique en M1 à Sup Galilée, passionné par la résolution de problèmes complexes et leur transformation en solutions techniques et designs élégantes.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences professionnelles",
    experiences: [
      {
        company: "Abeille Assuances",
        timeframe: "Septembre 2024 – Présent",
        role: "Alternant - Analyste programmeur",
        achievements: [
          <>Mise en place d'un outil de gestion des identités et des accès (SailPoint ISC).</>,
          <>Developpement de scripts sur une application Django/Angular pour automatiser des tâches.</>,
          <>Prise en main rapide de l'outillage de l'entreprise.</>,
        ],
        images: [],
      },
      {
        company: "ASE – Le Bourget",
        timeframe: "Août 2023",
        role: "Saisonnier - Adjoint administratif",
        achievements: [
          <>Renforcement des effectifs et maintien de la qualité du service public.</>,
          <>Modification et mise à jour du système interne de fichiers.</>,
          <>Prise en main rapide de logiciels métiers.</>,
        ],
        images: [],
      },
      {
        company: "RATP – Val de Fontenay",
        timeframe: "Juin 2019",
        role: "Stagiaire",
        achievements: [
          <>Observation du fonctionnement d'un projet sous la responsabilité d'un ingénieur.</>,
          <>Approfondissement des connaissances techniques et informatiques sur les applications sécurisées.</>,
          <>Conception de modèles 3D sur FreeCAD.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formations",
    institutions: [
      {
        name: "Sup Galilée – Villetaneuse",
        description: <>Diplôme d'ingénieur informatique (2023 – Présent)</>,
      },
      {
        name: "Institut Galilée – Villetaneuse",
        description: <>Cursus préparatoire intégré (2021 – 2023)</>,
      },
      {
        name: "Lycée Saint-Germain – Drancy",
        description: <>Baccalauréat mention Très Bien (spécialités Maths et Physique, 2021)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      { title: "Langages", description: <>C, Python, SQL, Java, HTML, CSS, UML, MIPS, OCL, MatLab</>, images: [] },
      { title: "Logiciels", description: <>Pack Office, Photoshop, FreeCAD</>, images: [] },
      { title: "IDE", description: <>Visual Studio, Xcode, CLion, IntelliJ</>, images: [] },
      { title: "OS", description: <>MacOS, Linux, Windows</>, images: [] },
    ],
  },
};

const blog = {
  label: "Articles",
  title: "Mes articles",
  description: `Mes articles sur les dernières actualités tech, du gaming à la cybersécurité, ainsi que mes projets personnels.`,
};

const work = {
  label: "Projets",
  title: "Mes projets",
  description: `Mes projets personnels et professionnels`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
