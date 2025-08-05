import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ethan",
  lastName: "Nicolas",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: {
    fr: "Apprenti ingénieur informatique (M1)",
    en: "Computer Engineering Student (M1)",
    es: "Estudiante de Ingeniería Informática (M1)",
    ja: "コンピュータ工学学生 (M1)"
  },
  avatar: "/images/avatar.jpg",
  location: "Europe/Paris",
  languages: {
    fr: ["Français", "Anglais"],
    en: ["French", "English"],
    es: ["Francés", "Inglés"],
    ja: ["フランス語", "英語"]
  },
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

// Contenu multilingue
const content = {
  fr: {
    newsletter: {
      display: false,
      title: <>S'abonner à ma newsletter</>,
      description: (
        <>
          Je publie occasionnellement des articles sur les dernières actualités tech, du gaming à la cybersécurité, ainsi que mes projets personnels.
          Inscrivez-vous pour recevoir mes articles directement dans votre boîte mail.
        </>
      ),
    },

    home: {
      label: "Accueil",
      title: `${person.name} - Portfolio`,
      description: `Portfolio de ${person.name} en tant qu' ${person.role.fr}.`,
      headline: <>Apprenti ingénieur informatique</>,
      subline: (
        <>
          Je suis Ethan, apprenti ingénieur informatique en M1 à Sup Galilée, passionné par la résolution de problèmes complexes et leur transformation en solutions techniques et design élégantes.
        </>
      ),
    },

    about: {
      label: "À propos",
      title: "À propos",
      description: `Découvrez ${person.name}, ${person.role.fr} basé à ${person.location}`,
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
        title: "Prendre rendez-vous",
      },
      cv: {
        title: "Télécharger mon CV",
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
    },

    blog: {
      label: "Articles",
      title: "Mes articles",
      description: `Mes articles sur les dernières actualités tech, du gaming à la cybersécurité, ainsi que mes projets personnels.`,
    },

    work: {
      label: "Projets",
      title: "Mes projets",
      description: `Mes projets personnels et professionnels`,
    },

    gallery: {
      label: "Galerie",
      title: "Ma galerie photo",
      description: `Une collection de photos par ${person.name}`,
      images: [],
    },
  },

  en: {
    newsletter: {
      display: false,
      title: <>Subscribe to my newsletter</>,
      description: (
        <>
          I occasionally publish articles about the latest tech news, from gaming to cybersecurity, as well as my personal projects.
          Subscribe to receive my articles directly in your inbox.
        </>
      ),
    },

    home: {
      label: "Home",
      title: `${person.name} - Portfolio`,
      description: `Portfolio of ${person.name} as a ${person.role.en}.`,
      headline: <>Computer Engineering Student</>,
      subline: (
        <>
          I'm Ethan, a computer engineering student in M1 at Sup Galilée, passionate about solving complex problems and transforming them into elegant technical and design solutions.
        </>
      ),
    },

    about: {
      label: "About",
      title: "About",
      description: `Meet ${person.name}, ${person.role.en} based in ${person.location}`,
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
        title: "Schedule a meeting",
      },
      cv: {
        title: "Download my CV",
      },
      intro: {
        display: true,
        title: "Introduction",
        description: (
          <>
            I'm Ethan, a computer engineering student in M1 at Sup Galilée, passionate about solving complex problems and transforming them into elegant technical and design solutions.
          </>
        ),
      },
      work: {
        display: true,
        title: "Professional Experience",
        experiences: [
          {
            company: "Abeille Assuances",
            timeframe: "September 2024 – Present",
            role: "Apprentice - Programmer Analyst",
            achievements: [
              <>Implementation of an identity and access management tool (SailPoint ISC).</>,
              <>Development of python scripts on a Django/Angular application to automate tasks.</>,
              <>Quick mastery of company tools.</>,
            ],
            images: [],
          },
          {
            company: "ASE – Le Bourget",
            timeframe: "August 2023",
            role: "Seasonal - Administrative Assistant",
            achievements: [
              <>Staff reinforcement and maintaining quality of public service.</>,
              <>Modification and update of internal file system.</>,
              <>Quick mastery of business software.</>,
            ],
            images: [],
          },
          {
            company: "RATP – Val de Fontenay",
            timeframe: "June 2019",
            role: "Intern",
            achievements: [
              <>Observing project operation under engineer's responsibility.</>,
              <>Deepening technical and computer knowledge on secure applications.</>,
              <>3D model design on FreeCAD.</>,
            ],
            images: [],
          },
        ],
      },
      studies: {
        display: true,
        title: "Education",
        institutions: [
          {
            name: "Sup Galilée – Villetaneuse",
            description: <>Computer Engineering Degree (2023 – Present)</>,
          },
          {
            name: "Institut Galilée – Villetaneuse",
            description: <>Integrated preparatory course (2021 – 2023)</>,
          },
          {
            name: "Lycée Saint-Germain – Drancy",
            description: <>Baccalauréat with Highest Honors (specializations Math and Physics, 2021)</>,
          },
        ],
      },
      technical: {
        display: true,
        title: "Technical Skills",
        skills: [
          { title: "Languages", description: <>C, Python, SQL, Java, HTML, CSS, UML, MIPS, OCL, MatLab</>, images: [] },
          { title: "Software", description: <>Office Suite, Photoshop, FreeCAD</>, images: [] },
          { title: "IDE", description: <>Visual Studio, Xcode, CLion, IntelliJ</>, images: [] },
          { title: "OS", description: <>MacOS, Linux, Windows</>, images: [] },
        ],
      },
    },

    blog: {
      label: "Blog",
      title: "My articles",
      description: `My articles about the latest tech news, from gaming to cybersecurity, as well as my personal projects.`,
    },

    work: {
      label: "Work",
      title: "My projects",
      description: `My personal and professional projects`,
    },

    gallery: {
      label: "Gallery",
      title: "My photo gallery",
      description: `A photo collection by ${person.name}`,
      images: [],
    },
  },

  es: {
    newsletter: {
      display: false,
      title: <>Suscríbete a mi boletín</>,
      description: (
        <>
          Publico ocasionalmente artículos sobre las últimas noticias tecnológicas, desde gaming hasta ciberseguridad, así como mis proyectos personales.
          Suscríbete para recibir mis artículos directamente en tu bandeja de entrada.
        </>
      ),
    },

    home: {
      label: "Inicio",
      title: `${person.name} - Portafolio`,
      description: `Portafolio de ${person.name} como ${person.role.es}.`,
      headline: <>Estudiante de Ingeniería Informática</>,
      subline: (
        <>
          Soy Ethan, estudiante de ingeniería informática en M1 en Sup Galilée, apasionado por resolver problemas complejos y transformarlos en soluciones técnicas y de diseño elegantes.
        </>
      ),
    },

    about: {
      label: "Acerca de",
      title: "Acerca de",
      description: `Conoce a ${person.name}, ${person.role.es} basado en ${person.location}`,
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
        title: "Programar una cita",
      },
      cv: {
        title: "Descargar mi CV",
      },
      intro: {
        display: true,
        title: "Introducción",
        description: (
          <>
            Soy Ethan, estudiante de ingeniería informática en M1 en Sup Galilée, apasionado por resolver problemas complejos y transformarlos en soluciones técnicas y de diseño elegantes.
          </>
        ),
      },
      work: {
        display: true,
        title: "Experiencia Profesional",
        experiences: [
          {
            company: "Abeille Assuances",
            timeframe: "Septiembre 2024 – Presente",
            role: "Aprendiz - Analista Programador",
            achievements: [
              <>Implementación de una herramienta de gestión de identidad y acceso (SailPoint ISC).</>,
              <>Desarrollo de scripts en una aplicación Django/Angular para automatizar tareas.</>,
              <>Dominio rápido de las herramientas de la empresa.</>,
            ],
            images: [],
          },
          {
            company: "ASE – Le Bourget",
            timeframe: "Agosto 2023",
            role: "Temporal - Asistente Administrativo",
            achievements: [
              <>Refuerzo del personal y mantenimiento de la calidad del servicio público.</>,
              <>Modificación y actualización del sistema interno de archivos.</>,
              <>Dominio rápido de software empresarial.</>,
            ],
            images: [],
          },
          {
            company: "RATP – Val de Fontenay",
            timeframe: "Junio 2019",
            role: "Interno",
            achievements: [
              <>Observación del funcionamiento del proyecto bajo la responsabilidad de un ingeniero.</>,
              <>Profundización de conocimientos técnicos e informáticos en aplicaciones seguras.</>,
              <>Diseño de modelos 3D en FreeCAD.</>,
            ],
            images: [],
          },
        ],
      },
      studies: {
        display: true,
        title: "Educación",
        institutions: [
          {
            name: "Sup Galilée – Villetaneuse",
            description: <>Título de Ingeniería Informática (2023 – Presente)</>,
          },
          {
            name: "Institut Galilée – Villetaneuse",
            description: <>Curso preparatorio integrado (2021 – 2023)</>,
          },
          {
            name: "Lycée Saint-Germain – Drancy",
            description: <>Bachillerato con Máximos Honores (especialidades Matemáticas y Física, 2021)</>,
          },
        ],
      },
      technical: {
        display: true,
        title: "Habilidades Técnicas",
        skills: [
          { title: "Lenguajes", description: <>C, Python, SQL, Java, HTML, CSS, UML, MIPS, OCL, MatLab</>, images: [] },
          { title: "Software", description: <>Paquete Office, Photoshop, FreeCAD</>, images: [] },
          { title: "IDE", description: <>Visual Studio, Xcode, CLion, IntelliJ</>, images: [] },
          { title: "SO", description: <>MacOS, Linux, Windows</>, images: [] },
        ],
      },
    },

    blog: {
      label: "Blog",
      title: "Mis artículos",
      description: `Mis artículos sobre las últimas noticias tecnológicas, desde gaming hasta ciberseguridad, así como mis proyectos personales.`,
    },

    work: {
      label: "Proyectos",
      title: "Mis proyectos",
      description: `Mis proyectos personales y profesionales`,
    },

    gallery: {
      label: "Galería",
      title: "Mi galería de fotos",
      description: `Una colección de fotos por ${person.name}`,
      images: [],
    },
  },

  ja: {
    newsletter: {
      display: false,
      title: <>ニュースレターに登録</>,
      description: (
        <>
          ゲームからサイバーセキュリティまでの最新技術ニュースや個人プロジェクトについて時々記事を投稿しています。
          記事を直接受信トレイで受け取るために登録してください。
        </>
      ),
    },

    home: {
      label: "ホーム",
      title: `${person.name} - ポートフォリオ`,
      description: `${person.role.ja}としての${person.name}のポートフォリオ。`,
      headline: <>コンピュータ工学学生</>,
      subline: (
        <>
          私はEthanです。Sup Galiléeのコンピュータ工学M1学生で、複雑な問題を解決し、それらをエレガントな技術的およびデザインソリューションに変換することに情熱を注いでいます。
        </>
      ),
    },

    about: {
      label: "私について",
      title: "私について",
      description: `${person.location}を拠点とする${person.role.ja}の${person.name}をご紹介します`,
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
        title: "ミーティングを予約",
      },
      cv: {
        title: "CVをダウンロード",
      },
      intro: {
        display: true,
        title: "紹介",
        description: (
          <>
            私はEthanです。Sup Galiléeのコンピュータ工学M1学生で、複雑な問題を解決し、それらをエレガントな技術的およびデザインソリューションに変換することに情熱を注いでいます。
          </>
        ),
      },
      work: {
        display: true,
        title: "職歴",
        experiences: [
          {
            company: "Abeille Assuances",
            timeframe: "2024年9月 – 現在",
            role: "見習い - プログラマーアナリスト",
            achievements: [
              <>アイデンティティ・アクセス管理ツール（SailPoint ISC）の実装。</>,
              <>タスクを自動化するためのDjango/Angularアプリケーションでのスクリプト開発。</>,
              <>企業ツールの迅速な習得。</>,
            ],
            images: [],
          },
          {
            company: "ASE – Le Bourget",
            timeframe: "2023年8月",
            role: "季節労働者 - 管理アシスタント",
            achievements: [
              <>スタッフの補強と公共サービスの質の維持。</>,
              <>内部ファイルシステムの修正と更新。</>,
              <>ビジネスソフトウェアの迅速な習得。</>,
            ],
            images: [],
          },
          {
            company: "RATP – Val de Fontenay",
            timeframe: "2019年6月",
            role: "インターン",
            achievements: [
              <>エンジニアの責任下でのプロジェクト運営の観察。</>,
              <>セキュアアプリケーションに関する技術的およびコンピュータ知識の深化。</>,
              <>FreeCADでの3Dモデル設計。</>,
            ],
            images: [],
          },
        ],
      },
      studies: {
        display: true,
        title: "教育",
        institutions: [
          {
            name: "Sup Galilée – Villetaneuse",
            description: <>コンピュータ工学学位（2023年 – 現在）</>,
          },
          {
            name: "Institut Galilée – Villetaneuse",
            description: <>統合準備コース（2021年 – 2023年）</>,
          },
          {
            name: "Lycée Saint-Germain – Drancy",
            description: <>最優秀成績バカロレア（数学・物理専攻、2021年）</>,
          },
        ],
      },
      technical: {
        display: true,
        title: "技術スキル",
        skills: [
          { title: "言語", description: <>C, Python, SQL, Java, HTML, CSS, UML, MIPS, OCL, MatLab</>, images: [] },
          { title: "ソフトウェア", description: <>Officeスイート, Photoshop, FreeCAD</>, images: [] },
          { title: "IDE", description: <>Visual Studio, Xcode, CLion, IntelliJ</>, images: [] },
          { title: "OS", description: <>MacOS, Linux, Windows</>, images: [] },
        ],
      },
    },

    blog: {
      label: "ブログ",
      title: "私の記事",
      description: `ゲームからサイバーセキュリティまでの最新技術ニュースや個人プロジェクトについての私の記事。`,
    },

    work: {
      label: "プロジェクト",
      title: "私のプロジェクト",
      description: `私の個人的および職業的プロジェクト`,
    },

    gallery: {
      label: "ギャラリー",
      title: "私の写真ギャラリー",
      description: `${person.name}による写真コレクション`,
      images: [],
    },
  }
};

// Hook pour utiliser le contenu selon la langue
export function useLocalizedContent(locale: 'fr' | 'en' | 'es' | 'ja' = 'fr') {
  return {
    person,
    social,
    newsletter: content[locale].newsletter,
    home: content[locale].home,
    about: content[locale].about,
    blog: content[locale].blog,
    work: content[locale].work,
    gallery: content[locale].gallery,
  };
}

// Export par défaut (français) pour la compatibilité
export { person, social };
export const { newsletter, home, about, blog, work, gallery } = content.fr;
