export const siteConfig = {
  businessName: "Ô Gourmandiz d'Aurore",
  tagline: "Pâtisseries artisanales sur commande · Laboratoire privé",
  description: "Pâtisseries artisanales de saison sur commande à La Motte (22). Laboratoire privé — pas de vente en boutique.",

  contact: {
    phone: "06 09 84 60 70",
    whatsapp: "33609846070",
    email: "ogourmandizdaurore@gmail.com",
    address: {
      street: "1 impasse de la Cigogne",
      city: "La Motte",
      postalCode: "22600",
      region: "Bretagne",
      country: "France"
    },
    labNote: "Laboratoire privé — pas de vente en boutique. Toutes les commandes se passent par SMS, téléphone ou WhatsApp."
  },

  social: {
    facebook: "https://www.facebook.com/o.gourmandiz.d.aurore/",
    instagram: "https://www.instagram.com/o.gourmandiz.d.aurore/",
    tiktok: "https://www.tiktok.com/tag/ogourmandizdaurore"
  },

  hours: {
    callHours: [
      { day: "Lundi – Vendredi", hours: "8h–12h / 13h30–19h" },
      { day: "Samedi & Dimanche", hours: "9h–12h" }
    ],
    pickup: "Retrait sur rendez-vous"
  },

  hero: {
    title: "Du beau, du bon, avec des produits d'ici",
    subtitle: "Je crée vos pâtisseries artisanales de saison, entièrement sur commande depuis mon laboratoire à La Motte (Côtes-d'Armor).",
    cta: {
      primary: "Passer une commande",
      secondary: "Voir les créations"
    }
  },

  about: {
    title: "Qui suis-je ?",
    subtitle: "Pâtissière à La Motte, Côtes-d'Armor",
    content: [
      "Rien ne me prédestinait à devenir pâtissière. J'ai d'abord été assistante vétérinaire, avant qu'on me mette le pied à l'étrier en 2022 et que je passe mon CAP en candidat libre en 2023.",
      "En octobre 2025, j'ai ouvert Ô Gourmandiz d'Aurore — pour créer quelque chose à mon image, et de nouveau sur le secteur : des tartes travaillées façon Chiara Serpaggi, des pyramides de macarons, des pièces montées de fraisier, des biscuits personnalisés, des number cakes personnalisés."
    ],
    values: [
      {
        title: "Des ingrédients bien choisis",
        description: "Œufs de Plémet, farine de Saint-Gérand, beurre, crème et lait français. Des produits sélectionnés avec soin pour une qualité constante."
      },
      {
        title: "Les fruits qui ont du goût",
        description: "Je m'approvisionne en fruits de saison chez mon grossiste et auprès de producteurs locaux selon les disponibilités. Pas de fraises à Noël : ce qui est bon, c'est ce qui est mûr."
      },
      {
        title: "Peu sucré, beau à voir",
        description: "J'aime le pochage précis, les visuels originaux et une douceur légère. Une pâtisserie doit autant plaire à l'œil qu'en bouche."
      },
      {
        title: "Je m'adapte à votre occasion",
        description: "Les parfums suivent la carte de saison. Pour la personnalisation — couleurs, thème, décors — on en parle ensemble."
      }
    ],
    stats: [
      { number: "CAP", label: "pâtissier 2023" },
      { number: "100%", label: "sur commande" },
      { number: "oct. 2025", label: "ouverture" }
    ]
  },

  modalites: {
    title: "Comment ça marche ?",
    subtitle: "Simple, rapide, sur mesure",
    steps: [
      {
        number: "01",
        title: "Vous me contactez",
        description: "Par SMS, téléphone ou WhatsApp. On discute de votre occasion, vos envies et les saveurs disponibles selon la carte de saison.",
        icon: "MessageCircle"
      },
      {
        number: "02",
        title: "Je crée pour vous",
        description: "Votre commande est réalisée sur mesure — 72h pour une commande simple, 3 semaines minimum pour un grand événement.",
        icon: "Cake"
      },
      {
        number: "03",
        title: "Vous venez récupérer",
        description: "Le retrait se fait au laboratoire sur rendez-vous. Livraison possible sur demande pour les grands événements.",
        icon: "MapPin"
      }
    ]
  },

  incontournables: {
    title: "Les incontournables",
    subtitle: "Mes créations phares — disponibles à la commande toute l'année dans la gamme de saison",
    list: [
      {
        name: "Mes tartes signature",
        description: "Des tartes travaillées façon Chiara Serpaggi — précises, peu sucrées, visuellement originales. Citron noisette meringué, snickers revisité, fruits de saison sur un biscuit croustillant.",
        features: ["Citron noisette meringué", "Snickers revisité", "Fraises de saison", "Pommes & spéculoos"],
        icon: "Cake",
        photo: "/tarte.jpeg"
      },
      {
        name: "Biscuits personnalisés",
        description: "Je grave votre prénom, votre date, votre motif sur chaque sablé. Ce petit détail qui fait que vos invités repartent avec un souvenir dans la main.",
        features: ["Sablés décorés", "Prénom & date", "Motifs sur mesure", "Toutes occasions"],
        icon: "Cookie",
        photo: "/sables-personnalises.jpeg"
      },
      {
        name: "Gâteaux d'anniversaire",
        description: "Du premier anniversaire au demi-siècle, je crée des gâteaux qui vous ressemblent — number cakes, thème, couleurs. Dites-moi ce que vous imaginez.",
        features: ["Number cakes personnalisés", "Thème & couleurs sur mesure", "1 an, 10 ans, 40 ans…", "Baby shower & baptême"],
        icon: "Gift",
        photo: "/gateau-40-ans.jpeg"
      },
      {
        name: "Macarons",
        description: "Des macarons dans les saveurs de la carte de saison, présentés en boîte ou en pyramide pour vos événements.",
        features: ["Parfums de saison", "Boîte ou pyramide", "Couleurs personnalisables", "Toutes quantités"],
        icon: "Star",
        photo: "/macaron-1.jpeg"
      }
    ]
  },

  saisonSection: {
    title: "Les Gourmandiz de saison",
    subtitle: "Ma carte change au fil des mois — parce que les meilleures saveurs sont celles du moment",
    description: "Je travaille avec les fruits et les saveurs du moment. Chaque saison apporte de nouvelles créations : fraisier au printemps, tarte aux mirabelles en été, tarte pomme-caramel en automne, douceurs festives en hiver. Contactez-moi pour connaître la carte du moment.",
    seasons: [
      { name: "Printemps", emoji: "🌸", items: ["Fraisier", "Tarte citron-framboise", "Pavlova aux fruits rouges"] },
      { name: "Été", emoji: "☀️", items: ["Tarte multi-fruits", "Tarte abricot-framboise", "Tarte fraise-rhubarbe"] },
      { name: "Automne", emoji: "🍂", items: ["Tarte pomme-spéculoos", "Tarte poire-caramel", "Tarte aux figues"] },
      { name: "Hiver", emoji: "❄️", items: ["Bûche festive", "Tarte chocolat-orange", "Tarte pralinée"] }
    ],
    cta: "Me contacter pour la carte actuelle"
  },

  evenementsSection: {
    title: "Événements & grandes occasions",
    subtitle: "Pour les grands moments, je crée des pièces qui restent dans les mémoires",
    note: "Pour les grandes commandes, contactez-moi au minimum 3 semaines à l'avance.",
    list: [
      {
        name: "Pièce montée à la française",
        description: "Une alternative élégante au croquembouche classique. Fraisiers montés en cercles, décorés de fleurs comestibles ou d'éléments personnalisés. À partir de 5€ la part — selon les options (fleurs, topper…).",
        features: ["Fraisiers, tartes, pavlovas", "Fleurs comestibles", "Topper personnalisé", "À partir de 5€/part"],
        icon: "Star",
        photo: "/gateau-mariage.jpeg"
      },
      {
        name: "Pyramide de macarons",
        description: "Des dizaines de macarons assemblés en pyramide, à vos couleurs et dans les saveurs de la carte de saison. Un centre de table gourmand qui impressionne — et qui se déguste.",
        features: ["Macarons à vos couleurs", "Parfums de saison", "Mariage, baptême, entreprise", "Disponible toute l'année"],
        icon: "Sparkles",
        photo: "/macarons-fille-garcon.jpeg"
      },
      {
        name: "Biscuits personnalisés",
        description: "Sablés décorés avec prénoms, dates, motifs spéciaux. Un souvenir gourmand pour chacun de vos invités — idéal comme cadeau de mariage ou faire-part comestible.",
        features: ["Prénom, date, motif", "Emballage individuel possible", "Mariage, baptême, naissance", "Grandes quantités"],
        icon: "Cookie",
        photo: "/sables-personnalises.jpeg"
      }
    ]
  },

  whyChooseUs: {
    title: "Ce que je vous promets",
    subtitle: "Je ne fais pas de la pâtisserie en série. Chaque commande mérite mon entière attention.",
    reasons: [
      {
        title: "Fraîcheur garantie",
        description: "Votre commande est réalisée spécialement pour vous dans les 48h avant votre événement. Pas de stock, pas de « déjà fait ».",
        icon: "Clock"
      },
      {
        title: "Des produits bien choisis",
        description: "Œufs de Plémet, farine de Saint-Gérand, beurre, crème et lait français. Fruits de saison approvisionnés chez mon grossiste à Loudéac.",
        icon: "Leaf"
      },
      {
        title: "On crée ensemble",
        description: "Couleurs, thème, décors, quantité… Je vous écoute, je vous conseille. Les parfums suivent la carte de saison — la personnalisation est toujours possible.",
        icon: "Sparkles"
      },
      {
        title: "Une formation sérieuse",
        description: "CAP pâtissier en candidat libre, stages, formations… Je me suis préparée avant de me lancer. Cette rigueur, elle est dans chaque pièce.",
        icon: "Award"
      },
      {
        title: "Une carte de saison",
        description: "Fraises au printemps, pommes en automne, agrumes en hiver. Ma carte évolue parce que c'est là que les saveurs sont au meilleur.",
        icon: "Cake"
      },
      {
        title: "Je suis joignable",
        description: "Par SMS, téléphone ou WhatsApp. Lundi–vendredi 8h–19h (pause déj.), samedi–dimanche 9h–12h. Je vous réponds rapidement.",
        icon: "MessageCircle"
      }
    ]
  },

  serviceArea: {
    title: "Basée à La Motte (22)",
    description: "Mon laboratoire est à La Motte — ce n'est pas une boutique ouverte. Les retraits se font sur rendez-vous. Je peux livrer sur demande pour les gros événements.",
    cities: [
      "La Motte", "Loudéac", "Pontivy", "Rostrenen",
      "Mûr-de-Bretagne", "La Chèze", "Plémet",
      "Merdrignac", "Plœuc-sur-Lié", "Et environs"
    ],
    radius: "Centre Bretagne — retrait sur RDV à La Motte ou livraison sur demande (grands événements)"
  },

  faq: {
    title: "Vous avez des questions ?",
    subtitle: "Je réponds aux plus fréquentes — et je suis toujours joignable si vous en avez d'autres",
    questions: [
      {
        question: "Comment est-ce que je passe une commande ?",
        answer: "Par SMS, téléphone ou WhatsApp — c'est la façon la plus rapide. Dites-moi l'occasion, le nombre de personnes, et vos envies de saveurs en fonction de la carte ou de la saison. Je vous reviens avec une proposition."
      },
      {
        question: "Quel délai me faut-il prévoir ?",
        answer: "Pour une commande simple, 72h suffisent. Pour un gros événement (mariage, pièce montée, grande quantité), contactez-moi au minimum 3 semaines à l'avance — voire plus tôt pour être certain·e de votre date."
      },
      {
        question: "Est-ce que je peux tout personnaliser ?",
        answer: "La personnalisation, oui — couleurs, thème, décors. Pour les parfums, ils suivent la carte de saison : pas de goût carambar dans les macarons, par exemple — je travaille dans ma gamme pour garantir la qualité. On discute ensemble de ce qui est possible."
      },
      {
        question: "Pour quelles occasions puis-je commander ?",
        answer: "Anniversaires de 1 à 100 ans, mariages, fiançailles, baby shower, baptêmes, fêtes de fin d'année, Saint-Valentin, repas de famille, événements d'entreprise… Si vous avez une occasion à fêter, j'ai une création à vous proposer."
      },
      {
        question: "Pour combien de personnes je peux créer ?",
        answer: "Je peux répondre à des événements rassemblant plus de 100 personnes, selon ce que vous souhaitez. On en parle ensemble lors de la prise de commande."
      },
      {
        question: "Comment se passe la tarification ?",
        answer: "Il y a des prix de base, puis en fonction des options ou de la personnalisation le prix évolue. Exemple : une pièce montée de fraisier à 6€ la part, à laquelle s'ajoutent les fleurs, un topper, etc. Contactez-moi pour un devis précis — c'est sans engagement."
      },
      {
        question: "D'où viennent vos ingrédients ?",
        answer: "Œufs de Plémet, farine de Saint-Gérand, beurre, crème et lait français. Fruits de saison approvisionnés chez mon grossiste et auprès de producteurs locaux selon les saisons. Pas de fraises à Noël : je travaille avec ce qui est bon, au bon moment."
      },
      {
        question: "Comment se passe la remise de commande ?",
        answer: "Le retrait se fait au laboratoire sur rendez-vous — ce n'est pas une boutique ouverte. Je peux aussi livrer sur demande, uniquement pour les gros événements. On s'organise ensemble au moment de la commande."
      }
    ]
  },

  allergens: {
    title: "Allergènes",
    intro: "Mes pâtisseries contiennent ou peuvent contenir les allergènes suivants. La liste détaillée par création est disponible sur demande — n'hésitez pas à me le signaler lors de votre commande.",
    list: [
      { name: "Gluten", note: "Présent dans la quasi-totalité des créations (la Pavlova est sans gluten)" },
      { name: "Œufs", note: "Présents dans toutes les préparations" },
      { name: "Lait", note: "Beurre, crème, lait dans la quasi-totalité des recettes" },
      { name: "Fruits à coque", note: "Amandes, noisettes, pistaches selon les recettes" },
      { name: "Traces possibles", note: "Arachides et soja — atelier non spécialisé" }
    ]
  },

  reviews: {
    title: "Ce que disent mes clients",
    subtitle: "Des créations appréciées — des avis sincères",
    list: [
      {
        name: "Marie L.",
        text: "Aurore a créé un fraisier magnifique pour l'anniversaire de ma fille. Visuellement sublime et délicieux. Je recommande chaudement !",
        stars: 5,
        occasion: "Anniversaire"
      },
      {
        name: "Julie & Florian",
        text: "Les sablés personnalisés pour notre mariage étaient parfaits. Un souvenir unique pour nos invités, et vraiment délicieux.",
        stars: 5,
        occasion: "Mariage"
      },
      {
        name: "Sophie B.",
        text: "Une pyramide de macarons à nos couleurs pour un baptême — précis, beau, et vraiment savoureux. Merci Aurore !",
        stars: 5,
        occasion: "Baptême"
      }
    ],
    googleCta: "Laissez votre avis sur Google"
  },

  finalCTA: {
    title: "Une envie de gourmandise ?",
    subtitle: "Contactez-moi — on imagine ensemble votre création sur mesure",
    buttonText: "Me contacter"
  },

  seo: {
    title: "Ô Gourmandiz d'Aurore – Pâtisserie artisanale sur commande à La Motte (22)",
    description: "Pâtisseries artisanales de saison sur commande à La Motte (Côtes-d'Armor). Gâteaux personnalisés, macarons, pièces montées, biscuits. Laboratoire privé. ☎ 06 09 84 60 70",
    keywords: [
      "pâtisserie La Motte",
      "pâtisserie sur commande Loudéac",
      "gâteau personnalisé 22",
      "biscuiterie artisanale Bretagne",
      "gâteau anniversaire Côtes-d'Armor",
      "macaron sur commande Centre Bretagne",
      "pièce montée mariage 22",
      "Aurore pâtissière La Motte",
      "pâtisserie artisanale Bretagne",
      "sablés personnalisés Loudéac"
    ]
  },

  schema: {
    type: "LocalBusiness",
    additionalType: "Bakery",
    priceRange: "€€",
    areaServed: "Centre Bretagne"
  }
};
