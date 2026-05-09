export const siteConfig = {
  businessName: "Ô Gourmandiz d'Aurore",
  tagline: "Pâtisseries & Biscuiteries artisanales sur commande",
  description: "Pâtisseries et biscuiteries artisanales, créatives & de saison sur commande. Aurore Delmas, pâtissière indépendante à La Motte (22), Centre Bretagne.",

  contact: {
    phone: "06 09 84 60 70",
    whatsapp: "33609846070",
    email: "ogourmandizdaurore@gmail.com",
    address: {
      street: "",
      city: "La Motte",
      postalCode: "22600",
      region: "Bretagne",
      country: "France"
    }
  },

  social: {
    facebook: "https://www.facebook.com/o.gourmandiz.d.aurore/",
    instagram: "https://www.instagram.com/o.gourmandiz.d.aurore/",
    tiktok: "https://www.tiktok.com/tag/ogourmandizdaurore"
  },

  hours: {
    message: "Commandes à passer par téléphone, WhatsApp ou email",
    details: [
      { day: "Lundi – Samedi", hours: "Sur commande" },
      { day: "Événements", hours: "Toute la semaine" },
      { day: "Délai recommandé", hours: "48h minimum" }
    ]
  },

  hero: {
    title: "Du beau, du bon, avec des produits d'ici",
    subtitle: "Je crée vos pâtisseries et biscuiteries artisanales, créatives & de saison, entièrement sur commande depuis mon laboratoire à La Motte (Côtes-d'Armor).",
    cta: {
      primary: "Me contacter pour commander",
      secondary: "Voir mes créations"
    },
    features: [
      "Tout sur commande",
      "Produits locaux",
      "Personnalisé pour vous"
    ]
  },

  about: {
    title: "Bonjour, je suis Aurore",
    subtitle: "Pâtissière à La Motte, je transforme vos occasions en souvenirs gourmands",
    content: [
      "Installée à La Motte depuis cinq ans, j'ai découvert la pâtisserie sur le tard, en cuisinant pour mes amis. Très vite, c'est devenu une évidence — et une passion que je n'ai plus lâchée.",
      "Après un parcours atypique — assistante vétérinaire en Mayenne puis en Bretagne — j'ai tout repris à zéro. CAP pâtissier en candidat libre, stages, formations : je voulais être vraiment prête le jour où je me lancerais.",
      "Depuis octobre 2025, je crée depuis mon laboratoire de 10 m² à La Motte. Tout est pensé pour travailler proprement, avec précision et plaisir. Et surtout : pour que vous soyez fiers de ce que vous poserez sur la table."
    ],
    values: [
      {
        title: "Je privilégie le local",
        description: "Œufs de Guilliers, farine de Saint-Gérand, miel de Plœuc-sur-Lié, fruits de la Maison Le Bris à Loudéac — des producteurs que je connais et que je soutiens"
      },
      {
        title: "Je fais tout moi-même",
        description: "Crèmes pâtissières, compotes, garnitures : je réalise toutes mes bases à la main, sans raccourci. C'est ce qui fait la différence en goût et en texture"
      },
      {
        title: "Je m'adapte à vous",
        description: "Prénom, date, thème, palette de couleurs, parfums… partagez vos idées, je les transpose en pâtisserie"
      },
      {
        title: "J'aime quand ça raconte quelque chose",
        description: "Chaque commande est une histoire à raconter. Je mets autant de soin dans l'esthétique que dans le goût — parce que l'un ne va pas sans l'autre"
      }
    ],
    stats: [
      { number: "CAP", label: "pâtissier diplômé" },
      { number: "100 %", label: "fait maison" },
      { number: "+7", label: "mois de créations" }
    ]
  },

  services: {
    title: "Ce que je crée pour vous",
    subtitle: "Chaque commande est unique — dites-moi ce que vous souhaitez, je m'occupe du reste",
    list: [
      {
        name: "Mes tartes signature",
        description: "Snickers revisité, citron noisette meringué, fraises du jardin en saison, pommes et spéculoos… je joue les saveurs pour vous surprendre, sur un biscuit net et croustillant que je réalise entièrement moi-même.",
        features: [
          "Citron noisette meringué",
          "Snickers revisité",
          "Fraises de saison",
          "Pommes & spéculoos"
        ],
        icon: "Cake",
        photo: "/tarte.jpeg"
      },
      {
        name: "Biscuits personnalisés",
        description: "Je grave votre prénom, votre date, votre motif sur chaque sablé. Ce petit détail qui fait que vos invités repartent avec un souvenir dans la main — et un sourire.",
        features: [
          "Sablés décorés",
          "Prénom & date",
          "Motifs sur mesure",
          "Toutes occasions"
        ],
        icon: "Cookie",
        photo: "/sables-personnalises.jpeg"
      },
      {
        name: "Pièces montées & entremets",
        description: "Pour les grands moments, je crée des pièces qui marquent les esprits : pyramide de macarons à vos couleurs, fraisier monté en cercle, entremets de prestige. J'aime quand ça fait « oh » à l'entrée dans la salle.",
        features: [
          "Pyramide de macarons",
          "Fraisier entremets",
          "Couleurs sur mesure",
          "Jusqu'à ~100 personnes"
        ],
        icon: "Star",
        photo: "/gateau-mariage.jpeg"
      },
      {
        name: "Gâteaux d'anniversaire",
        description: "Du premier anniversaire au demi-siècle, je crée des gâteaux qui vous ressemblent. Dites-moi le thème, les couleurs, l'âge — je m'occupe du reste pour que ce soit exactement ce que vous imaginez.",
        features: [
          "Thème personnalisé",
          "1 an, 10 ans, 40 ans…",
          "Baby shower & baptême",
          "Toutes générations"
        ],
        icon: "Gift",
        photo: "/gateau-40-ans.jpeg"
      }
    ]
  },

  whyChooseUs: {
    title: "Ce que je vous promets",
    subtitle: "Je ne fais pas de la pâtisserie en série. Chaque commande mérite mon entière attention.",
    reasons: [
      {
        title: "Je prépare tout pour vous",
        description: "Votre commande est réalisée spécialement pour vous, dans les 48h qui précèdent votre événement. Pas de stock, pas de « déjà fait » : fraîcheur garantie.",
        icon: "Clock"
      },
      {
        title: "Je travaille avec le terroir breton",
        description: "Œufs de Guilliers, farine de Saint-Gérand, miel de Plœuc-sur-Lié, fruits de la Maison Le Bris à Loudéac. Je connais mes fournisseurs et je les choisis avec soin.",
        icon: "MapPin"
      },
      {
        title: "On crée ensemble",
        description: "Couleurs, thème, prénom, parfums, quantité… Je vous écoute, je vous conseille, puis je concrétise exactement ce que vous avez en tête — souvent en mieux.",
        icon: "Sparkles"
      },
      {
        title: "Je fais tout à la main",
        description: "Crèmes pâtissières, compotes, garnitures : je réalise toutes mes bases moi-même. C'est ce qui fait la différence en goût et en texture — et vous le sentirez à la dégustation.",
        icon: "CheckCircle"
      },
      {
        title: "Je me suis formée avec sérieux",
        description: "CAP pâtissier en candidat libre, stages, formations en micro-entreprise… Je me suis préparée avant de me lancer. Cette rigueur, elle est dans chaque pièce que je vous livre.",
        icon: "Award"
      },
      {
        title: "Je suis les saisons",
        description: "Fraises au printemps, pommes en automne, agrumes en hiver… Je m'adapte aux saisons parce que c'est là que les saveurs sont au meilleur.",
        icon: "Leaf"
      }
    ]
  },

  serviceArea: {
    title: "Je suis basée à La Motte",
    description: "Je vous remets vos commandes en main propre à La Motte, ou je m'organise pour vous dans le secteur de Loudéac et alentours",
    cities: [
      "La Motte",
      "Loudéac",
      "Pontivy",
      "Rostrenen",
      "Mûr-de-Bretagne",
      "La Chèze",
      "Plémet",
      "Merdrignac",
      "Plœuc-sur-Lié",
      "Et environs"
    ],
    radius: "Centre Bretagne – je vous retrouve en main propre ou on s'organise ensemble pour la livraison"
  },

  faq: {
    title: "Vous avez des questions ?",
    subtitle: "Je réponds aux plus fréquentes — et je suis toujours joignable si vous en avez d'autres",
    questions: [
      {
        question: "Comment est-ce que je passe une commande ?",
        answer: "Appelez-moi, écrivez-moi sur WhatsApp ou par email. Dites-moi l'occasion, le nombre de personnes, vos envies de saveurs ou de déco — et je vous reviens avec une proposition personnalisée."
      },
      {
        question: "Quel délai me faut-il prévoir ?",
        answer: "Pour une commande simple, 48h suffisent. Pour une pièce montée, un mariage ou un grand événement, je vous conseille de me contacter 2 à 3 semaines à l'avance pour qu'on sécurise votre date ensemble."
      },
      {
        question: "Est-ce que je peux tout personnaliser ?",
        answer: "Oui, et c'est exactement pour ça que je travaille sur commande ! Couleurs, thème, prénom, date, parfums, motifs… Dites-moi ce que vous avez en tête, je m'adapte. Si vous n'avez pas d'idée précise, je vous conseille volontiers."
      },
      {
        question: "Pour quelles occasions puis-je commander ?",
        answer: "Anniversaires de 1 à 100 ans, mariages, fiançailles, baby shower, baptêmes, fêtes de fin d'année, Saint-Valentin, repas de famille, événements d'entreprise… Si vous avez une occasion à fêter, j'ai une création à vous proposer."
      },
      {
        question: "Pour combien de personnes je peux créer ?",
        answer: "Je peux répondre à des événements rassemblant jusqu'à une centaine de personnes, selon ce que vous souhaitez. On en parle ensemble lors de la prise de commande."
      },
      {
        question: "Comment se passe la tarification ?",
        answer: "Le prix dépend de la complexité, des quantités et des décors. Contactez-moi pour qu'on en discute ensemble — c'est gratuit, sans engagement, et je vous réponds rapidement."
      },
      {
        question: "D'où viennent vos ingrédients ?",
        answer: "Tout vient de chez nous : œufs de Guilliers (Morbihan), farine de Saint-Gérand (Morbihan), miel de Plœuc-sur-Lié, fruits de la Maison Le Bris à Loudéac. C'est un choix réfléchi, pas un argument marketing."
      },
      {
        question: "Comment se passe la remise de commande ?",
        answer: "Je vous remets votre commande en main propre à La Motte. Si vous êtes dans le secteur, on peut s'organiser autrement — on en parle au moment de la commande."
      }
    ]
  },

  finalCTA: {
    title: "Une envie de gourmandise ?",
    subtitle: "Contactez-moi — on imagine ensemble votre création sur mesure",
    buttonText: "Me contacter"
  },

  seo: {
    title: "Ô Gourmandiz d'Aurore – Pâtisserie artisanale sur commande à La Motte (22)",
    description: "Pâtisseries et biscuiteries artisanales, créatives & de saison sur commande à La Motte (Côtes-d'Armor). Gâteaux personnalisés, macarons, tartes signature, sablés décorés. ☎ 06 09 84 60 70",
    keywords: [
      "pâtisserie La Motte",
      "pâtisserie sur commande Loudéac",
      "gâteau personnalisé 22",
      "biscuiterie artisanale Bretagne",
      "gâteau anniversaire Côtes-d'Armor",
      "macaron sur commande Centre Bretagne",
      "pièce montée mariage 22",
      "Aurore Delmas pâtissière",
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
