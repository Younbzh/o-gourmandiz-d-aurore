import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { useLocation, Link, NavLink, Outlet, useNavigate, useSearchParams, useParams, Routes, Route, StaticRouter } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { X, Menu, Phone, MessageCircle, ArrowRight, Star, ArrowLeft, ChevronLeft, ChevronRight, Clock, Check, ChevronDown } from "lucide-react";
const siteConfig = {
  businessName: "Ô Gourmandiz d'Aurore",
  contact: {
    phone: "06 09 84 60 70",
    whatsapp: "33609846070",
    email: "ogourmandizdaurore@gmail.com",
    address: {
      street: "1 impasse de la Cigogne",
      city: "La Motte",
      postalCode: "22600"
    },
    labNote: "Laboratoire privé — pas de vente en boutique. Toutes les commandes se passent par SMS, téléphone ou WhatsApp."
  },
  social: {
    facebook: "https://www.facebook.com/o.gourmandiz.d.aurore/",
    instagram: "https://www.instagram.com/o.gourmandiz.d.aurore/",
    tiktok: "https://www.tiktok.com/@o.gourmandiz.d.aurore"
  },
  hours: {
    callHours: [
      { day: "Lundi – Vendredi", hours: "8h–12h / 13h30–19h" },
      { day: "Samedi & Dimanche", hours: "9h–12h" }
    ],
    pickup: "Retrait sur rendez-vous"
  },
  payment: {
    title: "Paiement & réservation",
    methods: ["Virement", "Espèces", "Carte bancaire"],
    deposit: "Un acompte de 30 % est demandé pour valider toute commande."
  },
  about: {
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
    ]
  },
  evenementsSection: {
    note: "Les grandes occasions se préparent : pour un événement, pensez à me contacter idéalement 3 semaines à l'avance.",
    list: [
      {
        name: "Pièce montée à la française",
        description: "Vos créations préférées de la carte — fraisiers, tartes, pavlovas… — montées en pièce d'exception, décorées de fleurs (comestibles ou non), de rubans ou d'éléments personnalisés. À partir de 5€ la part, selon les options.",
        features: ["Créations à la carte", "Fleurs comestibles ou non", "Rubans & topper personnalisé"],
        icon: "Star",
        photos: ["/7739.jpg", "/IMG-20260711-WA0000.jpg", "/6431.jpg", "/gateau-mariage.jpeg"]
      },
      {
        name: "Pyramide de macarons",
        description: "Des dizaines de macarons assemblés en pyramide, à vos couleurs et dans les saveurs de la carte de saison. Un centre de table gourmand qui impressionne — et qui se déguste.",
        features: ["Macarons à vos couleurs", "Parfums de saison", "Fleurs & topper"],
        icon: "Sparkles",
        photos: ["/6448.jpg", "/IMG-20260711-WA0001.jpg", "/6386.jpg", "/6389.jpg"]
      },
      {
        name: "Biscuits personnalisés",
        description: "Sablés décorés et personnalisés — prénom, date, motif, illustration sur feuille de sucre. Toujours emballés individuellement. Un souvenir gourmand pour chacun de vos invités.",
        features: ["Prénom, date, motif", "Toujours emballés individuellement", "Min. 20 pièces par parfum"],
        icon: "Cookie",
        photos: ["/sables-personnalises.jpeg", "/IMG-20260711-WA0018.jpg", "/IMG-20260711-WA0022.jpg", "/IMG-20260711-WA0025.jpg"]
      },
      {
        name: "Meringues personnalisées",
        description: "Meringues croustillantes aux couleurs et parfums de votre événement, toujours emballées individuellement. Parfait en buffet ou en cadeau pour vos invités. Sans gluten et sans fruits à coque.",
        features: ["Couleurs personnalisées", "Emballage individuel", "Sans gluten"],
        icon: "Sparkles",
        photos: ["/7738.jpg"]
      }
    ]
  },
  faq: {
    title: "Vous avez des questions ?",
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
        answer: "Oui, pour tout ce qui est visuel : couleurs, thème, décors, message personnalisé. Côté parfums, je travaille dans ma gamme de saison pour garantir la qualité — on en discute ensemble pour trouver ce qui vous fera plaisir."
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
    intro: "Mes pâtisseries contiennent ou peuvent contenir les allergènes suivants. La liste détaillée par création est disponible sur demande — n'hésitez pas à me le signaler lors de votre commande.",
    list: [
      { name: "Gluten", note: "Présent dans la plupart des créations (la Pavlova et les macarons sont sans gluten)" },
      { name: "Œufs", note: "Présents dans toutes les préparations" },
      { name: "Lait", note: "Beurre, crème, lait dans la quasi-totalité des recettes" },
      { name: "Fruits à coque", note: "Amandes, noisettes, pistaches selon les recettes" },
      { name: "Traces possibles", note: "Arachides et soja — atelier non spécialisé" }
    ]
  },
  reviews: {
    list: [
      {
        name: "Jean-marc Gallais",
        text: "La tarte double chocolat et la tarte fraise crumble sont délicieuses. Les pâtes à tarte sont croustillantes. Les tartes ne sont pas trop sucrées. Tout est bien équilibré. Elles sont joliment décorées. Sans hésitation, nous recommanderons.",
        stars: 5,
        occasion: "Tartes"
      },
      {
        name: "Le Hellay Philippe",
        text: "Que du bonheur, gâteaux de mariage super bon, sucrés juste comme il fallait. Aurore, personne fiable et professionnelle, rien à redire.",
        stars: 5,
        occasion: "Mariage"
      },
      {
        name: "Kamille Nedejag",
        text: "Fraisier incroyable, des saveurs très équilibrées. Léger et gourmand. Merci beaucoup pour cette explosion de saveurs 😄🥰",
        stars: 5,
        occasion: "Fraisier"
      },
      {
        name: "Aurélie Moisan",
        text: "Aurore s'adapte à vos goûts, à vos demandes ! Ces gâteaux sont magnifiques et si bons ! Merci encore 🤩",
        stars: 5,
        occasion: "Anniversaire"
      },
      {
        name: "VIRGINIE LE HO",
        text: "Je recommande les créations d'Aurore ! Cela fait plusieurs anniversaires que je commande des tartes et number cakes qui sont généreux et délicieux. Sans oublier des produits de qualité. Vous pouvez y aller en toute confiance.",
        stars: 5,
        occasion: "Fidèle cliente"
      },
      {
        name: "A Ozgul",
        text: "Excellente tarte vanille praliné, aussi belle que délicieuse. On voit tout de suite que c'est un travail soigné et maîtrisé : la présentation est élégante, très équilibrée.",
        stars: 5,
        occasion: "Tarte"
      }
    ]
  }
};
const communes = [
  {
    slug: "loudeac",
    nom: "Loudéac",
    departement: "Côtes-d’Armor",
    situation: "la ville voisine du laboratoire",
    ancrage: "Tout est fait à la commande : la taille du gâteau se cale sur le nombre exact de convives, d’un Number Cake pour cinq personnes à un format XL pour vingt-quatre. Les parfums se choisissent ensemble, vanille et fruits de saison, chocolat noir croustillant ou caramel beurre salé, sur une base de pâte sucrée ou de meringue.",
    specialites: ["Number Cake", "Macarons", "Tarte Citron Noisette Meringuée", "Biscuits personnalisés"]
  },
  {
    slug: "plemet",
    nom: "Plémet",
    departement: "Côtes-d’Armor",
    situation: "à l’est de La Motte, sur la même route",
    ancrage: "La carte suit les fruits : fraisier et tarte fraise-rhubarbe au printemps, abricot-framboise l’été, fruits de saison le reste de l’année. Rien n’est préparé à l’avance ni gardé en vitrine, ce qui explique qu’une commande se passe quelques jours avant la date.",
    specialites: ["Fraisier", "Tarte Fraise Rhubarbe", "Tarte Multi-Fruits", "Pavlova"]
  },
  {
    slug: "la-cheze",
    nom: "La Chèze",
    departement: "Côtes-d’Armor",
    situation: "au sud-est de La Motte",
    ancrage: "Pour une tablée familiale, le format compte autant que le parfum : un gâteau calibré pour le nombre de convives évite d’en jeter la moitié. Les mignardises et les macarons se commandent aussi à l’unité, pour compléter un dessert sans repartir sur une grande pièce.",
    specialites: ["Mignardises", "Macarons", "Tarte Double Chocolat", "Number Cake"]
  },
  {
    slug: "treve",
    nom: "Trévé",
    departement: "Côtes-d’Armor",
    situation: "entre le laboratoire et Loudéac",
    ancrage: "Les biscuits et les meringues se personnalisent : forme, couleur, message, décor aux couleurs d’un événement. C’est ce qui se prête le mieux à une remise en nombre, chaque pièce étant décorée à la main plutôt qu’imprimée.",
    specialites: ["Biscuits personnalisés", "Meringues personnalisées", "Macarons", "Mignardises"]
  },
  {
    slug: "uzel",
    nom: "Uzel",
    departement: "Côtes-d’Armor",
    situation: "au nord de La Motte",
    ancrage: "Les tartes sont montées sur une pâte sucrée faite maison : double chocolat, citron noisette meringuée, ou multi-fruits selon la saison. Le décor peut être personnalisé, avec des fleurs comestibles et des macarons assortis posés au moment du montage.",
    specialites: ["Tarte Citron Noisette Meringuée", "Tarte Double Chocolat", "Tarte Multi-Fruits", "Macarons"]
  },
  {
    slug: "pontivy",
    nom: "Pontivy",
    departement: "Morbihan",
    situation: "au sud-ouest, dans le Morbihan",
    ancrage: "Pour une réception, la pièce montée et la pyramide de macarons se conçoivent sur mesure : hauteur, parfums, couleurs, nombre de parts. Une dégustation se cale en amont, pour arrêter les saveurs avant de valider la commande.",
    specialites: ["Pièces montées", "Pyramides de macarons", "Mignardises", "Pavlova"]
  },
  {
    slug: "merdrignac",
    nom: "Merdrignac",
    departement: "Côtes-d’Armor",
    situation: "à l’est du pays de Loudéac",
    ancrage: "Un gâteau qui voyage se conçoit différemment : les pièces les plus fragiles, pavlova et meringues, tiennent moins bien la route qu’une tarte ou un Number Cake sur pâte sucrée. Le choix se fait ensemble, en fonction de la distance et de la saison.",
    specialites: ["Number Cake", "Tarte Double Chocolat", "Biscuits personnalisés", "Macarons"]
  },
  {
    slug: "ploermel",
    nom: "Ploërmel",
    departement: "Morbihan",
    situation: "au sud-est, dans le Morbihan",
    ancrage: "Pour un mariage, le dessert se décide plusieurs semaines à l’avance : pièce montée, pyramide de macarons ou dessert de buffet, avec un rendez-vous de dégustation pour arrêter les parfums. Les fleurs comestibles et les décors sont accordés aux couleurs du jour.",
    specialites: ["Pièces montées", "Pyramides de macarons", "Mignardises", "Macarons"]
  }
];
const cheminCommune = (slug) => `/patisserie-${slug}`;
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  const navBg = scrolled || !isHome ? "bg-[#FDFAF6] border-b border-[#1A130C]/8 shadow-sm" : "bg-transparent";
  const linkColor = scrolled || !isHome ? "text-[#1A130C] hover:text-[#5BBFBF]" : "text-white hover:text-white/70";
  const activeColor = scrolled || !isHome ? "text-[#5BBFBF]" : "text-white/70";
  const burgerColor = scrolled || !isHome ? "text-[#1A130C]" : "text-white";
  const navLinks = [
    { label: "La carte", to: "/carte" },
    { label: "Événements", to: "/evenements" },
    { label: "À propos", to: "/about" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxs("nav", { className: `fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/logo.jpeg",
              alt: "Ô Gourmandiz d'Aurore",
              className: "h-12 w-auto object-contain rounded transition-all duration-300"
            }
          ) }),
          /* @__PURE__ */ jsx("span", { className: "hidden lg:block text-[10px] uppercase tracking-[0.25em] font-bold text-[#5BBFBF]", children: "Pâtisserie artisanale · La Motte (22) · Sur commande" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
          navLinks.map(({ label, to }) => /* @__PURE__ */ jsx(
            NavLink,
            {
              to,
              className: ({ isActive }) => `text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? activeColor : linkColor}`,
              children: label
            },
            to
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/commander",
              className: "bg-[#5BBFBF] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#4AAEAE] transition-colors",
              children: "Commander"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setMenuOpen((v) => !v), className: `md:hidden ${burgerColor}`, children: menuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" }) })
      ] }),
      menuOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden bg-[#FDFAF6] border-t border-[#1A130C]/10 px-5 py-6 flex flex-col gap-5", children: [
        navLinks.map(({ label, to }) => /* @__PURE__ */ jsx(Link, { to, className: "text-[#1A130C] font-medium text-lg", children: label }, to)),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/commander",
            className: "bg-[#5BBFBF] text-white font-semibold px-6 py-3 rounded-full text-center",
            children: "Commander"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "pb-20 md:pb-0", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxs("footer", { className: "bg-[#1A130C] text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-4 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: "/logo.jpeg", alt: "Ô Gourmandiz d'Aurore", className: "h-14 w-auto object-contain rounded-xl mb-4" }),
          /* @__PURE__ */ jsxs("p", { className: "text-white/50 text-sm leading-relaxed", children: [
            "Pâtisseries artisanales de saison sur commande.",
            /* @__PURE__ */ jsx("br", {}),
            "Laboratoire privé à La Motte (22)."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3 mt-5", children: [
            { label: "Instagram", url: siteConfig.social.instagram },
            { label: "Facebook", url: siteConfig.social.facebook },
            { label: "TikTok", url: siteConfig.social.tiktok }
          ].map(({ label, url }) => /* @__PURE__ */ jsx(
            "a",
            {
              href: url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-xs border border-white/20 hover:border-[#5BBFBF] hover:text-[#5BBFBF] px-3 py-1.5 rounded-full text-white/50 transition-colors",
              children: label
            },
            label
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "label mb-5", children: "Contact" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-white/60", children: [
            /* @__PURE__ */ jsx("a", { href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`, className: "block hover:text-white transition-colors", children: siteConfig.contact.phone }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `https://wa.me/${siteConfig.contact.whatsapp}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "block hover:text-white transition-colors",
                children: "WhatsApp"
              }
            ),
            /* @__PURE__ */ jsx("a", { href: `mailto:${siteConfig.contact.email}`, className: "block hover:text-white transition-colors text-xs", children: siteConfig.contact.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "label mb-5", children: "Horaires d'appels" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-white/60", children: [
            siteConfig.hours.callHours.map((item, i) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-white/40 block text-xs", children: item.day }),
              /* @__PURE__ */ jsx("span", { className: "text-[#5BBFBF] font-semibold", children: item.hours })
            ] }, i)),
            /* @__PURE__ */ jsx("p", { className: "text-white/30 text-xs pt-1", children: siteConfig.hours.pickup })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "label mb-5", children: "Laboratoire" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-white/60 leading-relaxed", children: [
            siteConfig.contact.address.street,
            /* @__PURE__ */ jsx("br", {}),
            siteConfig.contact.address.postalCode,
            " ",
            siteConfig.contact.address.city,
            /* @__PURE__ */ jsx("br", {}),
            "Côtes-d'Armor · Bretagne"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-white/30 mt-3", children: "Retrait sur rendez-vous uniquement" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 max-w-6xl mx-auto px-5 lg:px-8 py-8", children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-4", children: "Zone desservie" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-5 gap-y-2", children: communes.map((c) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: cheminCommune(c.slug),
            className: "text-sm text-white/45 hover:text-[#5BBFBF] transition-colors",
            children: [
              "Pâtisserie à ",
              c.nom
            ]
          },
          c.slug
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 py-5 text-center text-xs text-white/25 max-w-6xl mx-auto px-5", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        siteConfig.businessName
      ] })
    ] }),
    pathname !== "/commander" && /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-[#1A130C]/10 bg-[#FDFAF6]", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
          className: "flex-1 flex items-center justify-center gap-2 py-4 text-[#1A130C] font-semibold text-sm border-r border-[#1A130C]/10",
          children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
            " Appeler"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `https://wa.me/${siteConfig.contact.whatsapp}?text=Bonjour%20Aurore%20!%20Je%20souhaite%20passer%20une%20commande%20%F0%9F%8E%82`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex-1 flex items-center justify-center gap-2 py-4 bg-[#5BBFBF] text-white font-semibold text-sm",
          children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
            " WhatsApp"
          ]
        }
      )
    ] })
  ] });
}
function getSeason(date = /* @__PURE__ */ new Date()) {
  const md = (date.getMonth() + 1) * 100 + date.getDate();
  if (md >= 320 && md < 621) return "spring";
  if (md >= 621 && md < 922) return "summer";
  if (md >= 922 && md < 1221) return "autumn";
  return "winter";
}
const seasonName = {
  spring: "Printemps",
  summer: "Été",
  autumn: "Automne",
  winter: "Hiver"
};
const visualLinks = [
  {
    label: "La carte",
    sub: "Incontournables & créations de saison",
    photo: "/6392.jpg",
    to: "/carte"
  },
  {
    label: "Événements",
    sub: "Pièces montées · Pyramides · Biscuits",
    photo: "/6389.jpg",
    to: "/evenements"
  },
  {
    label: "Commander",
    sub: "Formulaire de commande sur mesure",
    photo: "/6417.jpg",
    to: "/commander"
  }
];
const seasonalCard = {
  summer: "/IMG-20260711-WA0004.jpg"
};
const seasonHero = {
  spring: {
    emoji: "🌸",
    label: "Printemps",
    titleLine: "du printemps",
    desc: "Premières fraises, rhubarbe, fleurs comestibles, agrumes… Des douceurs fraîches qui célèbrent le retour des beaux jours."
  },
  summer: {
    emoji: "☀️",
    label: "Été",
    titleLine: "de l'été",
    desc: "Fraisiers, tartes aux fruits rouges, pavlovas, abricot-framboise… Des créations légères, gorgées de fruits de saison et de fleurs comestibles."
  },
  autumn: {
    emoji: "🍂",
    label: "Automne",
    titleLine: "de l'automne",
    desc: "Poires, pommes, caramel, spéculoos, fruits secs… Des tartes gourmandes et réconfortantes aux parfums de l'arrière-saison."
  },
  winter: {
    emoji: "❄️",
    label: "Hiver",
    titleLine: "de l'hiver",
    desc: "Chocolat, agrumes, marrons, fruits exotiques… Des créations festives et enveloppantes pour la saison froide et les fêtes."
  }
};
function Home() {
  const navigate = useNavigate();
  const season = getSeason();
  const hero = seasonHero[season];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-screen flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/6386.jpg",
          alt: "Pyramide de macarons Ô'Gourmandiz d'Aurore",
          className: "absolute inset-0 w-full h-full object-cover object-top"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1A130C]/90 via-[#1A130C]/25 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-5 lg:px-8 pb-16 md:pb-28 w-full", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-[2.75rem] sm:text-6xl md:text-8xl lg:text-[7.5rem] font-bold text-white leading-[0.9] md:leading-[0.88] mb-8", children: [
          "Ô'Gourmandiz",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { children: "d'Aurore" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-white/55 text-base md:text-lg mb-10 max-w-sm leading-relaxed", children: [
          "Pâtisseries de saison,",
          /* @__PURE__ */ jsx("br", {}),
          "entièrement sur commande."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => navigate("/carte"),
              className: "bg-white text-[#1A130C] px-8 py-4 rounded-full font-semibold hover:bg-[#F3EBE1] transition-colors",
              children: "Je découvre la carte"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => navigate("/commander"),
              className: "border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors",
              children: "Je commande"
            }
          )
        ] })
      ] })
    ] }),
    seasonalCard[season] && /* @__PURE__ */ jsx("section", { className: "bg-[#1A130C] py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 flex-shrink-0 order-1 md:order-2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: seasonalCard[season],
          alt: `La carte ${hero.titleLine}`,
          className: "w-full aspect-square object-cover rounded-3xl shadow-2xl"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 order-2 md:order-1 text-center md:text-left", children: [
        /* @__PURE__ */ jsxs("p", { className: "label mb-4", children: [
          "La carte du moment · ",
          hero.label,
          " ",
          hero.emoji
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl font-bold text-white italic mb-5 leading-[0.95]", children: [
          "Les saveurs",
          /* @__PURE__ */ jsx("br", {}),
          hero.titleLine
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/50 leading-relaxed mb-8 max-w-md mx-auto md:mx-0", children: hero.desc }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => navigate("/carte"),
            className: "bg-[#5BBFBF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors",
            children: [
              "Découvrir la carte ",
              hero.titleLine
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "grid md:grid-cols-3", children: visualLinks.map(({ label, sub, photo, to }) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => navigate(to),
        className: "relative overflow-hidden group text-left",
        style: { aspectRatio: "4/5" },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: photo,
              alt: label,
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#1A130C]/45 group-hover:bg-[#1A130C]/60 transition-colors duration-300" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "label mb-2", children: sub }),
              /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-white italic", children: label })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-[#5BBFBF] group-hover:border-transparent transition-all duration-300 flex-shrink-0", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }) })
          ] })
        ]
      },
      to
    )) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#FDFAF6] py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-24 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/tartelette-fleur.jpeg",
            alt: "Création d'Aurore",
            className: "w-full aspect-[4/5] object-cover rounded-2xl"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-5 -right-5 bg-[#1A130C] text-white px-6 py-5 rounded-xl hidden md:block", children: [
          /* @__PURE__ */ jsx("p", { className: "label mb-1", children: "Diplômée" }),
          /* @__PURE__ */ jsx("p", { className: "font-display text-xl font-bold italic", children: "CAP 2023" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-6", children: "Qui suis-je ?" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold text-[#1A130C] leading-tight mb-8", children: [
          "Rien ne me",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { children: "prédestinait" }),
          /* @__PURE__ */ jsx("br", {}),
          "à ça."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 leading-relaxed mb-4", children: "J'ai d'abord été assistante vétérinaire, avant qu'on me mette le pied à l'étrier en 2022 et que je passe mon CAP en candidat libre en 2023." }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 leading-relaxed mb-10", children: "En octobre 2025, j'ai ouvert Ô Gourmandiz d'Aurore — pour créer quelque chose à mon image, et de nouveau sur le secteur." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => navigate("/about"),
            className: "inline-flex items-center gap-2 text-[#1A130C] font-semibold border-b-2 border-[#1A130C] pb-0.5 hover:text-[#5BBFBF] hover:border-[#5BBFBF] transition-colors",
            children: [
              "En savoir plus ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#1A130C] py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-4", children: "Témoignages" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-white italic mb-5", children: "Ce que disent mes clients" }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5", children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-[#E6D39A] text-[#E6D39A]" }, j)) }),
          /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-semibold", children: "5 / 5" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/30 text-sm", children: "·" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/60 text-sm", children: "55 avis Google" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: siteConfig.reviews.list.map((review, i) => /* @__PURE__ */ jsxs("div", { className: "border border-white/10 rounded-2xl p-7 flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4", children: Array.from({ length: review.stars }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-[#E6D39A] text-[#E6D39A]" }, j)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-white/60 leading-relaxed mb-5 italic text-sm flex-1", children: [
          '"',
          review.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-white/10", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-white text-sm", children: review.name }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-white/25 uppercase tracking-wider", children: review.occasion })
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.google.com/search?q=Ô+Gourmandiz+d%27Aurore",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-7 py-3 rounded-full text-sm font-semibold transition-colors",
          children: [
            /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-[#E6D39A] text-[#E6D39A]" }),
            "Voir les 55 avis sur Google"
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#FDFAF6] py-24 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto px-5", children: [
      /* @__PURE__ */ jsx("p", { className: "label mb-5", children: "Laboratoire privé · Sur commande" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-[#1A130C] italic mb-6", children: "Une envie de gourmandise ?" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-10 leading-relaxed", children: "Remplissez le formulaire — je vous réponds rapidement pour confirmer votre création." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => navigate("/commander"),
          className: "bg-[#5BBFBF] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors",
          children: "Je passe commande"
        }
      )
    ] }) })
  ] });
}
const incontournables = [
  {
    id: "number-cake",
    name: "Number Cake",
    photos: [
      "/IMG-20260801-WA0000.jpg",
      "/IMG-20260801-WA0002.jpg",
      "/IMG-20260801-WA0001.jpg",
      "/IMG-20260801-WA0003.jpg",
      "/6437.jpg",
      "/6404.jpg",
      "/7737.jpg",
      "/IMG-20260711-WA0021.jpg",
      "/IMG-20260711-WA0029.jpg"
    ],
    compositionLabel: "Parfums & base",
    composition: [
      "Vanille & fruits de saison — base pâte sucrée",
      "Vanille & fraises façon pavlova — base meringue",
      "Vanille & caramel beurre salé — base pâte sucrée",
      "Chocolat noir croustillant — base pâte sucrée & biscuit madeleine",
      "Chocolat au lait & décor Kinder — base pâte sucrée",
      "Macarons assortis, meringues & fleurs comestibles de saison inclus"
    ],
    prix: [
      { format: "1 chiffre · 5-6 personnes", prix: "34,50 €" },
      { format: "1 chiffre XL · 10-12 personnes", prix: "66 €" },
      { format: "2 chiffres · 10-12 personnes", prix: "68 €" },
      { format: "2 chiffres XL · 20-24 personnes", prix: "128 €" }
    ],
    allergenes: ["Gluten", "Œufs", "Lait", "Fruits à coque (amande, noisette)"],
    note: "Supplément de 5 € pour deux saveurs différentes. Décor personnalisé à partir de 15 €. Option sans fruits à coque sur demande."
  },
  {
    id: "double-chocolat",
    name: "Tarte Double Chocolat",
    photos: ["/6467.jpg", "/7747.jpg"],
    composition: [
      "Pâte sucrée amande",
      "Croustillant",
      "Ganache chocolat noir",
      "Ganache montée chocolat au lait"
    ],
    prix: [
      { format: "4 personnes", prix: "20 €" },
      { format: "6 personnes", prix: "29 €" },
      { format: "8 personnes", prix: "38 €" },
      { format: "10 personnes", prix: "46 €" }
    ],
    allergenes: ["Gluten", "Œufs", "Lait", "Fruits à coque (amande, noisette)"],
    note: "Option sans fruits à coque sur demande (sans amande dans la pâte)."
  },
  {
    id: "multi-fruits",
    name: "Tarte Multi-Fruits",
    photos: [
      "/IMG-20260801-WA0005.jpg",
      "/IMG-20260711-WA0033.jpg",
      "/7533.jpg",
      "/6392.jpg",
      "/IMG-20260711-WA0015.jpg"
    ],
    composition: [
      "Pâte sucrée amande",
      "Crème pâtissière",
      "Fruits frais de saison",
      "Fleurs comestibles de saison"
    ],
    prix: [
      { format: "4 personnes", prix: "20 €" },
      { format: "6 personnes", prix: "29 €" },
      { format: "8 personnes", prix: "38 €" },
      { format: "10 personnes", prix: "46 €" }
    ],
    allergenes: ["Gluten", "Œufs", "Lait", "Fruits à coque (amande)"],
    note: "Producteurs locaux selon disponibilités. Option sans fruits à coque sur demande."
  },
  {
    id: "citron-noisette",
    name: "Tarte Citron Noisette Meringuée",
    photos: ["/6395.jpg", "/7723.jpg"],
    composition: [
      "Pâte sucrée",
      "Crème d'amande",
      "Crémeux citron",
      "Gel citron",
      "Praliné noisette",
      "Meringue suisse"
    ],
    prix: [
      { format: "4 personnes", prix: "25 €" },
      { format: "6 personnes", prix: "34,50 €" },
      { format: "8 personnes", prix: "44,50 €" },
      { format: "10 personnes", prix: "54,50 €" }
    ],
    allergenes: ["Gluten", "Œufs", "Lait", "Fruits à coque (amande, noisette)"],
    note: "La noisette est essentielle à cette création — pas d'option sans fruits à coque (ou version citron seul sur demande)."
  },
  {
    id: "macarons",
    name: "Macarons",
    photos: [
      "/7730.jpg",
      "/6480.jpg",
      "/6475.jpg",
      "/6492.jpg",
      "/IMG-20260711-WA0005.jpg"
    ],
    compositionLabel: "Saveurs",
    composition: [
      "Vanille",
      "Chocolat noir",
      "Caramel beurre salé",
      "Citron",
      "Fraise",
      "Framboise",
      "Rhubarbe"
    ],
    prix: [
      { format: "Boîte de 8", prix: "12 €" },
      { format: "Boîte de 16", prix: "24 €" }
    ],
    allergenes: ["Œufs", "Lait", "Fruits à coque (amande)"],
    sansGluten: true,
    note: "Personnalisables en couleurs selon votre occasion. Naturellement sans gluten."
  },
  {
    id: "pavlova",
    name: "Pavlova",
    photos: ["/IMG-20260711-WA0031.jpg", "/6433.jpg"],
    composition: [
      "Meringue",
      "Ganache montée vanille",
      "Fruits frais de saison",
      "Fleurs comestibles de saison"
    ],
    prix: [
      { format: "4 personnes", prix: "20 €" },
      { format: "6 personnes", prix: "29 €" },
      { format: "8 personnes", prix: "38 €" },
      { format: "10 personnes", prix: "46 €" }
    ],
    allergenes: ["Œufs", "Lait"],
    sansGluten: true,
    note: "Producteurs locaux selon disponibilités."
  },
  {
    id: "mignardises",
    name: "Mignardises",
    photos: [
      "/IMG-20260801-WA0006.jpg",
      "/7757.jpg",
      "/7756.jpg",
      "/IMG-20260711-WA0024.jpg",
      "/IMG-20260711-WA0002.jpg"
    ],
    compositionLabel: "Parfums",
    composition: [
      "Vanille & praliné",
      "Double chocolat",
      "Caramel beurre salé",
      "Citron meringué",
      "Fruits de saison"
    ],
    details: [
      "Assortiment de mini tartelettes & macarons",
      "Format bouchée — idéal buffet & réceptions",
      "Personnalisables (feuille de sucre)"
    ],
    prix: [
      { format: "À partir de 50 pièces", prix: "1,20 €/pièce" }
    ],
    allergenes: ["Gluten", "Œufs", "Lait", "Fruits à coque (amande, noisette)"],
    note: "Possibilité d'assortir les mignardises avec des macarons. Option sans fruits à coque sur demande."
  },
  {
    id: "biscuits",
    name: "Biscuits personnalisés",
    photos: [
      "/IMG-20260801-WA0004.jpg",
      "/6464.jpg",
      "/IMG-20260711-WA0018.jpg",
      "/IMG-20260711-WA0022.jpg",
      "/IMG-20260711-WA0025.jpg"
    ],
    composition: [
      "Sablés Vanille, Cacao, Citron, Noisette ou Amande",
      "Personnalisés : prénom, âge, message, illustration sur feuille de sucre",
      "Toujours emballés individuellement",
      "Commande minimum de 20 pièces par parfum"
    ],
    prix: [
      { format: "À partir de 20 pièces", prix: "à partir de 1,20 €/biscuit" }
    ],
    allergenes: ["Gluten", "Œufs", "Lait", "Fruits à coque (amande, noisette)"],
    note: "Personnalisables : prénom, date, motif. Fruits à coque uniquement pour les parfums noisette et amande."
  },
  {
    id: "meringues",
    name: "Meringues personnalisées",
    photos: ["/IMG-20260618-WA0066.jpg", "/7738.jpg"],
    composition: [
      "Meringues croustillantes",
      "Couleurs personnalisables",
      "Toujours emballées individuellement",
      "Idéal buffet & cadeau invités"
    ],
    prix: [
      { format: "À la pièce", prix: "à partir de 2,50 €" }
    ],
    allergenes: ["Œufs"],
    sansGluten: true,
    note: "Sans gluten, sans fruits à coque."
  }
];
const saisonProduits = {
  summer: [
    {
      id: "fraisier",
      name: "Fraisier",
      photos: [
        "/IMG-20260711-WA0004.jpg",
        "/IMG-20260711-WA0010.jpg",
        "/6426.jpg",
        "/6472.jpg",
        "/IMG-20260711-WA0003.jpg",
        "/IMG-20260711-WA0006.jpg",
        "/IMG-20260711-WA0011.jpg"
      ],
      composition: [
        "Génoise",
        "Crème légère vanille",
        "Ganache montée vanille",
        "Fraises fraîches",
        "Fleurs comestibles de saison"
      ],
      prix: [
        { format: "4 personnes", prix: "25 €" },
        { format: "6 personnes", prix: "34,50 €" },
        { format: "8 personnes", prix: "44,50 €" },
        { format: "10 personnes", prix: "54,50 €" }
      ],
      allergenes: ["Gluten", "Œufs", "Lait"]
    },
    {
      id: "tarte-fraise-rhubarbe",
      name: "Tarte Fraise Rhubarbe",
      photos: ["/6410.jpg"],
      composition: [
        "Sablé breton",
        "Compotée fraise / rhubarbe",
        "Ganache montée vanille",
        "Fraises fraîches",
        "Rhubarbe pochée"
      ],
      prix: [
        { format: "4 personnes", prix: "20 €" },
        { format: "6 personnes", prix: "29 €" },
        { format: "8 personnes", prix: "38 €" },
        { format: "10 personnes", prix: "46 €" }
      ],
      allergenes: ["Gluten", "Œufs", "Lait"]
    },
    {
      id: "tarte-fraise-crumble",
      name: "Tarte Fraise Crumble",
      photos: ["/6453.jpg", "/6451.jpg"],
      composition: [
        "Pâte sucrée amande",
        "Crème pâtissière",
        "Crumble",
        "Fraises fraîches",
        "Fleurs comestibles de saison"
      ],
      prix: [
        { format: "4 personnes", prix: "22 €" },
        { format: "6 personnes", prix: "32 €" },
        { format: "8 personnes", prix: "42 €" },
        { format: "10 personnes", prix: "52 €" }
      ],
      allergenes: ["Gluten", "Œufs", "Lait", "Fruits à coque (amande)"],
      note: "Option sans fruits à coque sur demande."
    },
    {
      id: "tarte-abricot-framboise",
      name: "Tarte Abricot Framboise",
      photos: ["/6417.jpg"],
      composition: [
        "Sablé breton",
        "Abricots rôtis",
        "Gel framboise",
        "Ganache montée vanille",
        "Abricots & framboises fraîches",
        "Macarons vanille"
      ],
      prix: [
        { format: "4 personnes", prix: "25 €" },
        { format: "6 personnes", prix: "34,50 €" },
        { format: "8 personnes", prix: "44,50 €" },
        { format: "10 personnes", prix: "54,50 €" }
      ],
      allergenes: ["Gluten", "Œufs", "Lait", "Fruits à coque (amande)"],
      note: "Contient des macarons (amande). Option sans fruits à coque sur demande (sans macarons)."
    }
  ]
};
function getAllProducts() {
  const seasonal = Object.values(saisonProduits).flat().filter(Boolean);
  return [...incontournables, ...seasonal];
}
function getProductById(id) {
  return getAllProducts().find((p) => p.id === id);
}
function ProductCard({ product, tab }) {
  const rawPrix = product.prix[0]?.prix ?? "";
  const prixMin = rawPrix.replace(/^à partir de\s*/i, "");
  const prixLabel = /devis|demande/i.test(prixMin) ? prixMin : `dès ${prixMin}`;
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: `/carte/${product.id}?from=${tab}`,
      className: "group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#F3EBE1] block",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-[#F3EBE1]", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: product.photos[0],
              alt: product.name,
              loading: "lazy",
              className: "w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ),
          product.sansGluten && /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 bg-[#5BBFBF] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full", children: "Sans gluten" }),
          product.photos.length > 1 && /* @__PURE__ */ jsxs("span", { className: "absolute bottom-3 right-3 bg-black/45 text-white text-[10px] font-semibold px-2 py-1 rounded-full backdrop-blur-sm", children: [
            product.photos.length,
            " photos"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-4 flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display font-bold italic text-[#1A130C] text-lg leading-tight", children: product.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-[#5BBFBF] font-semibold mt-1", children: prixLabel })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "w-9 h-9 rounded-full border border-[#F3EBE1] flex items-center justify-center text-[#5BBFBF] group-hover:bg-[#5BBFBF] group-hover:text-white group-hover:border-transparent transition-all flex-shrink-0", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }) })
        ] })
      ]
    }
  );
}
function Carte() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("cat") === "saison" ? "saison" : "incontournables";
  const [tab, setTab] = useState(initialTab);
  const season = getSeason();
  const produitsSaison = saisonProduits[season] ?? [];
  const changeTab = (t) => {
    setTab(t);
    setSearchParams(t === "saison" ? { cat: "saison" } : {}, { replace: true });
  };
  const products = tab === "incontournables" ? incontournables : produitsSaison;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "pt-36 pb-10 bg-[#FDFAF6] text-center px-5", children: [
      /* @__PURE__ */ jsx("p", { className: "label mb-4", children: "La carte" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-7xl font-bold text-[#1A130C] italic mb-3", children: "Nos créations" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 max-w-md mx-auto text-sm", children: "Cliquez sur une création pour découvrir ses photos en grand, sa composition, ses tarifs et ses allergènes." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-20 z-30 bg-[#FDFAF6] border-b border-[#F3EBE1]", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto px-5 flex", children: ["incontournables", "saison"].map((t) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => changeTab(t),
        className: `py-4 px-5 text-sm font-semibold border-b-2 transition-colors ${tab === t ? "border-[#5BBFBF] text-[#1A130C]" : "border-transparent text-gray-400 hover:text-[#1A130C]"}`,
        children: t === "incontournables" ? "Incontournables" : `Carte de saison · ${seasonName[season]}`
      },
      t
    )) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#FDFAF6] py-12 min-h-[50vh]", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto px-5 lg:px-8", children: products.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-24", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-gray-400 mb-2", children: [
        "La carte de ",
        seasonName[season].toLowerCase(),
        " arrive bientôt."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mb-8", children: "Contactez-moi pour connaître les créations du moment." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => navigate("/commander"),
          className: "bg-[#5BBFBF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors",
          children: "Me contacter"
        }
      )
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6", children: products.map((product) => /* @__PURE__ */ jsx(ProductCard, { product, tab }, product.id)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => navigate("/commander"),
          className: "bg-[#5BBFBF] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors",
          children: "Je passe commande"
        }
      ) })
    ] }) }) })
  ] });
}
function BigCarousel({ photos, alt, badge }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);
  const n = photos.length;
  const go = (dir) => setIndex((prev) => (prev + dir + n) % n);
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative overflow-hidden bg-[#F3EBE1] rounded-3xl shadow-xl",
        onTouchStart,
        onTouchEnd,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex transition-transform duration-500 ease-out",
              style: { transform: `translateX(-${index * 100}%)` },
              children: photos.map((p, i) => /* @__PURE__ */ jsx(
                "img",
                {
                  src: p,
                  alt: `${alt} ${i + 1}`,
                  loading: i === 0 ? "eager" : "lazy",
                  className: "w-full h-[70vh] object-contain flex-shrink-0"
                },
                i
              ))
            }
          ),
          badge && /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 bg-[#5BBFBF] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10", children: "Sans gluten" }),
          n > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                "aria-label": "Photo précédente",
                onClick: () => go(-1),
                className: "absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center text-[#1A130C] hover:bg-white transition-colors z-10",
                children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                "aria-label": "Photo suivante",
                onClick: () => go(1),
                className: "absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center text-[#1A130C] hover:bg-white transition-colors z-10",
                children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
              }
            )
          ] })
        ]
      }
    ),
    n > 1 && /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-3 overflow-x-auto pb-1", children: photos.map((p, i) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setIndex(i),
        "aria-label": `Voir la photo ${i + 1}`,
        className: `flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors ${i === index ? "border-[#5BBFBF]" : "border-transparent opacity-70 hover:opacity-100"}`,
        children: /* @__PURE__ */ jsx("img", { src: p, alt: "", className: "w-full h-full object-cover" })
      },
      i
    )) })
  ] });
}
function Produit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from") === "saison" ? "saison" : "incontournables";
  const backTo = from === "saison" ? "/carte?cat=saison" : "/carte";
  const product = id ? getProductById(id) : void 0;
  if (!product) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FDFAF6] flex flex-col items-center justify-center px-5 text-center pt-20", children: [
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-6", children: "Cette création n'existe pas ou n'est plus à la carte." }),
      /* @__PURE__ */ jsx(Link, { to: "/carte", className: "bg-[#5BBFBF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors", children: "Retour à la carte" })
    ] });
  }
  const commandeUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    `Bonjour Aurore ! Je souhaite commander : ${product.name}. `
  )}`;
  return /* @__PURE__ */ jsx("div", { className: "bg-[#FDFAF6] min-h-screen pt-28 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => navigate(backTo),
        className: "inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1A130C] transition-colors mb-6",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          " Retour à la carte"
        ]
      }
    ),
    /* @__PURE__ */ jsx(BigCarousel, { photos: product.photos, alt: product.name, badge: product.sansGluten }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-[#1A130C] italic mb-8", children: product.name }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "label mb-3", children: product.compositionLabel ?? "Composition" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: product.composition.map((c, i) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-gray-600 flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-[#5BBFBF] rounded-full mt-1.5 flex-shrink-0" }),
            c
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "label mb-3", children: "Tarifs" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: product.prix.map((p, i) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm border-b border-[#F3EBE1] pb-1.5 last:border-0", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: p.format }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#1A130C]", children: p.prix })
          ] }, i)) }),
          /* @__PURE__ */ jsx("p", { className: "label mb-3 mt-8", children: "Allergènes" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: product.allergenes.map((a, i) => /* @__PURE__ */ jsx("span", { className: "text-xs bg-white border border-[#F3EBE1] text-[#1A130C] px-2.5 py-1 rounded-full", children: a }, i)) })
        ] })
      ] }),
      product.details && product.details.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-3", children: "Détails" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: product.details.map((d, i) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-gray-600 flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-[#5BBFBF] rounded-full mt-1.5 flex-shrink-0" }),
          d
        ] }, i)) })
      ] }),
      product.note && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 italic leading-relaxed mt-8", children: product.note }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: commandeUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center gap-2 w-full sm:w-auto sm:inline-flex bg-[#5BBFBF] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4AAEAE] transition-colors mt-10",
          children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
            "Je commande sur WhatsApp"
          ]
        }
      )
    ] })
  ] }) });
}
function SectionCarousel({ photos, alt }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);
  const n = photos.length;
  const go = (dir) => setIndex((prev) => (prev + dir + n) % n);
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX.current = null;
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative overflow-hidden bg-[#F3EBE1] rounded-2xl mx-auto h-[58vh] w-[43.5vh] max-w-full md:h-[76vh] md:w-[57vh]",
      onTouchStart,
      onTouchEnd,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex h-full transition-transform duration-500 ease-out",
            style: { transform: `translateX(-${index * 100}%)` },
            children: photos.map((p, i) => /* @__PURE__ */ jsx(
              "img",
              {
                src: p,
                alt: `${alt} ${i + 1}`,
                loading: i === 0 ? "eager" : "lazy",
                className: "w-full h-full object-cover flex-shrink-0"
              },
              i
            ))
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#1A130C]/10 pointer-events-none" }),
        n > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": "Photo précédente",
              onClick: () => go(-1),
              className: "absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center text-[#1A130C] hover:bg-white transition-colors z-10",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": "Photo suivante",
              onClick: () => go(1),
              className: "absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center text-[#1A130C] hover:bg-white transition-colors z-10",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10", children: photos.map((_, i) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": `Voir la photo ${i + 1}`,
              onClick: () => setIndex(i),
              className: `h-2 rounded-full transition-all ${i === index ? "w-5 bg-white" : "w-2 bg-white/60"}`
            },
            i
          )) })
        ] })
      ]
    }
  );
}
const gallery = [
  { src: "/IMG-20260711-WA0031.jpg", alt: "Pavlova aux fruits et fleurs" },
  { src: "/6437.jpg", alt: "Number cake fruits rouges" },
  { src: "/IMG-20260711-WA0002.jpg", alt: "Mignardises 50 ans" },
  { src: "/6401.jpg", alt: "Number cake 50 ans" },
  { src: "/IMG-20260711-WA0026.jpg", alt: "Mignardises fleur vanille" },
  { src: "/IMG-20260711-WA0008.jpg", alt: "Number cake anniversaire fraises" },
  { src: "/6442.jpg", alt: "Number cake chocolat" },
  { src: "/IMG-20260711-WA0020.jpg", alt: "Number cake fruits exotiques" },
  { src: "/IMG-20260711-WA0027.jpg", alt: "Number cake 1 an aux fruits" },
  { src: "/IMG-20260711-WA0033.jpg", alt: "Tarte aux fruits rouges" },
  { src: "/IMG-20260711-WA0013.jpg", alt: "Number cake citron" },
  { src: "/6389.jpg", alt: "Pyramide de macarons rose" }
];
function Evenements() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "pt-36 pb-16 bg-[#FDFAF6] text-center px-5", children: [
      /* @__PURE__ */ jsx("p", { className: "label mb-4", children: "Grands moments" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold text-[#1A130C] italic mb-6", children: [
        "Événements &",
        /* @__PURE__ */ jsx("br", {}),
        "grandes occasions"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 border border-[#1A130C]/15 bg-white rounded-full px-5 py-2.5 text-sm text-gray-500", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-[#5BBFBF]" }),
        siteConfig.evenementsSection.note
      ] })
    ] }),
    siteConfig.evenementsSection.list.map((item, i) => {
      const isEven = i % 2 === 0;
      return /* @__PURE__ */ jsxs(
        "section",
        {
          className: `grid md:grid-cols-2 md:items-center ${i === siteConfig.evenementsSection.list.length - 1 ? "" : "border-b border-[#F3EBE1]"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `relative flex items-center justify-center p-5 md:p-8 ${isEven ? "md:order-1" : "md:order-2"}`, children: /* @__PURE__ */ jsx(SectionCarousel, { photos: item.photos, alt: item.name }) }),
            /* @__PURE__ */ jsxs("div", { className: `bg-[#FDFAF6] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 ${isEven ? "md:order-2" : "md:order-1"}`, children: [
              /* @__PURE__ */ jsx("p", { className: "label mb-5", children: `0${i + 1}` }),
              /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-[#1A130C] italic mb-5 leading-tight", children: item.name }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 leading-relaxed mb-8 max-w-sm", children: item.description }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-10", children: item.features.map((feature, j) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-gray-600", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-[#5BBFBF] rounded-full flex-shrink-0" }),
                feature
              ] }, j)) }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => navigate("/commander"),
                  className: "self-start bg-[#1A130C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5BBFBF] transition-colors",
                  children: "Je demande un devis"
                }
              )
            ] })
          ]
        },
        i
      );
    }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#F3EBE1] py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-3", children: "En images" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-[#1A130C] italic", children: "Quelques créations" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "columns-2 md:columns-3 lg:columns-4 gap-3", children: gallery.map(({ src, alt }) => /* @__PURE__ */ jsx("img", { src, alt, loading: "lazy", className: "w-full rounded-xl mb-3 break-inside-avoid" }, src)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#1A130C] py-24 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto px-5", children: [
      /* @__PURE__ */ jsx("p", { className: "label mb-5", children: "Minimum 3 semaines à l'avance" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold text-white italic mb-6", children: "Un grand événement en préparation ?" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/40 mb-10 text-sm leading-relaxed", children: "Remplissez le formulaire de commande — je reviens vers vous rapidement pour étudier votre projet." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => navigate("/commander"),
          className: "bg-[#5BBFBF] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors",
          children: "Je prends contact"
        }
      )
    ] }) })
  ] });
}
const occasions = [
  "Anniversaire",
  "Mariage / Fiançailles",
  "Baptême / Naissance",
  "Événement professionnel",
  "Autre"
];
const creations = [
  { label: "Number cake", photo: "/gateau-40-ans.jpeg" },
  { label: "Tarte de saison", photo: "/tarte.jpeg" },
  { label: "Macarons", photo: "/macaron-1.jpeg" },
  { label: "Mignardises", photo: "/IMG-20260711-WA0002.jpg" },
  { label: "Biscuits personnalisés", photo: "/sables-personnalises.jpeg" },
  { label: "Pièce montée à la française", photo: "/gateau-mariage.jpeg" },
  { label: "Pyramide de macarons", photo: "/macarons-fille-garcon.jpeg" },
  { label: "Je ne sais pas encore", photo: "/gateau-fraises.jpeg" }
];
function Commander() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    occasion: "",
    date: "",
    guests: "",
    creation: "",
    wishes: "",
    name: "",
    phone: ""
  });
  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const canNext = () => {
    if (step === 1) return form.occasion !== "";
    if (step === 2) return form.date !== "" && form.guests !== "" && form.creation !== "";
    if (step === 3) return true;
    if (step === 4) return form.name !== "" && form.phone !== "";
    return false;
  };
  const handleSubmit = () => {
    const msg = [
      `Bonjour Aurore ! Je souhaite passer une commande. 🎂`,
      ``,
      `📌 Occasion : ${form.occasion}`,
      `📅 Date souhaitée : ${form.date}`,
      `👥 Nombre de personnes : ${form.guests}`,
      `✨ Type de création : ${form.creation}`,
      form.wishes ? `💬 Mes souhaits : ${form.wishes}` : "",
      ``,
      `📋 Mon prénom : ${form.name}`,
      `📱 Mon téléphone : ${form.phone}`
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };
  const steps = ["L'occasion", "Les détails", "Vos souhaits", "Vos coordonnées"];
  if (submitted) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[#FDFAF6] flex items-center justify-center px-5 pt-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-[#5BBFBF] rounded-full flex items-center justify-center mx-auto mb-8", children: /* @__PURE__ */ jsx(Check, { className: "w-10 h-10 text-white" }) }),
      /* @__PURE__ */ jsx("p", { className: "label mb-4", children: "Demande envoyée" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl font-bold text-[#1A130C] italic mb-6", children: [
        "Merci ",
        form.name,
        " !"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 leading-relaxed mb-10", children: "Votre demande a été envoyée sur WhatsApp. Aurore vous répond rapidement pour confirmer votre commande." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
            className: "flex items-center justify-center gap-3 w-full border border-[#1A130C]/15 bg-white text-[#1A130C] py-4 rounded-full font-semibold hover:bg-[#F3EBE1] transition-colors",
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" }),
              siteConfig.contact.phone
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `https://wa.me/${siteConfig.contact.whatsapp}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-full font-semibold hover:bg-[#1DAE54] transition-colors",
            children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5" }),
              "Ouvrir WhatsApp"
            ]
          }
        )
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[#FDFAF6] pt-28 pb-16 px-5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "label mb-4", children: "Formulaire de commande" }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-[#1A130C] italic", children: "Je passe commande" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-3", children: steps.map((label, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 flex-1", children: [
        /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i + 1 < step ? "bg-[#5BBFBF] text-white" : i + 1 === step ? "bg-[#1A130C] text-white" : "bg-[#F3EBE1] text-gray-400"}`, children: i + 1 < step ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }) : i + 1 }),
        /* @__PURE__ */ jsx("span", { className: `text-[10px] uppercase tracking-wide hidden sm:block ${i + 1 === step ? "text-[#1A130C] font-semibold" : "text-gray-400"}`, children: label })
      ] }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "h-1 bg-[#F3EBE1] rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full bg-[#5BBFBF] rounded-full transition-all duration-500",
          style: { width: `${(step - 1) / (steps.length - 1) * 100}%` }
        }
      ) })
    ] }),
    step === 1 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-[#1A130C] italic mb-8", children: "Quelle est l'occasion ?" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: occasions.map((o) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => set("occasion", o),
          className: `text-left px-6 py-5 rounded-2xl border-2 font-medium transition-all ${form.occasion === o ? "border-[#5BBFBF] bg-[#5BBFBF]/5 text-[#1A130C]" : "border-[#F3EBE1] bg-white text-gray-600 hover:border-[#5BBFBF]/50"}`,
          children: o
        },
        o
      )) })
    ] }),
    step === 2 && /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-[#1A130C] italic", children: "Quelques détails" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-widest text-gray-400 mb-2", children: "Date souhaitée" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "date",
              value: form.date,
              onChange: (e) => set("date", e.target.value),
              className: "w-full border-2 border-[#F3EBE1] rounded-xl px-4 py-3 text-[#1A130C] focus:border-[#5BBFBF] outline-none transition-colors bg-white"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-widest text-gray-400 mb-2", children: "Nombre de personnes" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              min: "1",
              placeholder: "ex. 20, 50, 100+",
              value: form.guests,
              onChange: (e) => set("guests", e.target.value),
              className: "w-full border-2 border-[#F3EBE1] rounded-xl px-4 py-3 text-[#1A130C] focus:border-[#5BBFBF] outline-none transition-colors bg-white"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-widest text-gray-400 mb-4", children: "Type de création" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: creations.map(({ label, photo }) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => set("creation", label),
            className: `relative overflow-hidden rounded-2xl border-2 transition-all ${form.creation === label ? "border-[#5BBFBF] ring-2 ring-[#5BBFBF]/30" : "border-transparent hover:border-[#5BBFBF]/40"}`,
            children: [
              /* @__PURE__ */ jsx("img", { src: photo, alt: label, className: "w-full aspect-square object-cover" }),
              /* @__PURE__ */ jsx("div", { className: `absolute inset-0 flex items-end p-3 ${form.creation === label ? "bg-[#5BBFBF]/30" : "bg-[#1A130C]/40"}`, children: /* @__PURE__ */ jsx("span", { className: "text-white text-xs font-semibold leading-tight text-left", children: label }) }),
              form.creation === label && /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2 w-6 h-6 bg-[#5BBFBF] rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Check, { className: "w-3 h-3 text-white" }) })
            ]
          },
          label
        )) })
      ] })
    ] }),
    step === 3 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-[#1A130C] italic mb-3", children: "Vos souhaits" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mb-8 leading-relaxed", children: "Couleurs, thème, contraintes particulières… tout ce qui peut m'aider à créer exactement ce que vous imaginez." }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          rows: 6,
          placeholder: "Ex. : thème arc-en-ciel, couleurs pastels, prénom Léa…",
          value: form.wishes,
          onChange: (e) => set("wishes", e.target.value),
          className: "w-full border-2 border-[#F3EBE1] rounded-2xl px-5 py-4 text-[#1A130C] focus:border-[#5BBFBF] outline-none transition-colors resize-none bg-white text-sm leading-relaxed"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-6 bg-[#F3EBE1] rounded-2xl p-5", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 leading-relaxed", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#1A130C]", children: "À savoir :" }),
        " les parfums suivent la carte de saison. La personnalisation des couleurs, du thème et des décors est toujours possible."
      ] }) })
    ] }),
    step === 4 && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-[#1A130C] italic", children: "Pour vous recontacter" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-widest text-gray-400 mb-2", children: "Votre prénom *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Marie",
            value: form.name,
            onChange: (e) => set("name", e.target.value),
            className: "w-full border-2 border-[#F3EBE1] rounded-xl px-4 py-3 text-[#1A130C] focus:border-[#5BBFBF] outline-none transition-colors bg-white"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-widest text-gray-400 mb-2", children: "Votre téléphone (WhatsApp si possible) *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            placeholder: "06 XX XX XX XX",
            value: form.phone,
            onChange: (e) => set("phone", e.target.value),
            className: "w-full border-2 border-[#F3EBE1] rounded-xl px-4 py-3 text-[#1A130C] focus:border-[#5BBFBF] outline-none transition-colors bg-white"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#F3EBE1] rounded-2xl p-6 mt-4", children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-4", children: "Récapitulatif" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-gray-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Occasion" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-[#1A130C]", children: form.occasion })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Date" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-[#1A130C]", children: form.date })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Personnes" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-[#1A130C]", children: form.guests })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Création" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-[#1A130C] text-right max-w-[60%]", children: form.creation })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#F3EBE1] rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-3", children: siteConfig.payment.title }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: siteConfig.payment.methods.map((m) => /* @__PURE__ */ jsx("span", { className: "text-xs bg-white text-[#1A130C] font-medium px-3 py-1 rounded-full", children: m }, m)) }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 leading-relaxed", children: siteConfig.payment.deposit })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-10 gap-4", children: [
      step > 1 ? /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setStep((s) => s - 1),
          className: "border-2 border-[#F3EBE1] text-gray-500 px-8 py-4 rounded-full font-semibold hover:border-gray-300 transition-colors",
          children: "Retour"
        }
      ) : /* @__PURE__ */ jsx("div", {}),
      step < 4 ? /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setStep((s) => s + 1),
          disabled: !canNext(),
          className: "bg-[#1A130C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5BBFBF] transition-colors disabled:opacity-30 disabled:cursor-not-allowed",
          children: "Continuer"
        }
      ) : /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleSubmit,
          disabled: !canNext(),
          className: "flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1DAE54] transition-colors disabled:opacity-30 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5" }),
            "Envoyer sur WhatsApp"
          ]
        }
      )
    ] })
  ] }) });
}
function About() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[60vh] flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/tarte-floral-multi-fruits.jpeg",
          alt: "Création d'Aurore",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1A130C]/90 via-[#1A130C]/30 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-5 lg:px-8 pb-16 w-full", children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-4", children: "Qui suis-je ?" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-7xl font-bold text-white italic leading-tight", children: "Aurore Delmas" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#FDFAF6] py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/7752.jpg",
            alt: "Aurore, pâtissière — Ô'Gourmandiz d'Aurore",
            className: "w-full max-w-sm aspect-[4/5] object-cover rounded-2xl mb-8"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "label mb-6", children: "Mon histoire" }),
        siteConfig.about.content.map((paragraph, i) => /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed text-lg mb-6", children: paragraph }, i))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#1A130C] rounded-2xl p-8 md:p-10", children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-6", children: "Ma philosophie" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: siteConfig.about.values.map((value, i) => /* @__PURE__ */ jsxs("div", { className: i < siteConfig.about.values.length - 1 ? "pb-6 border-b border-white/10" : "", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold text-white italic mb-2", children: value.title }),
          /* @__PURE__ */ jsx("p", { className: "text-white/50 text-sm leading-relaxed", children: value.description })
        ] }, i)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#F3EBE1] py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8", children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-6", children: "Horaires d'appels" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          siteConfig.hours.callHours.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center border-b border-[#F3EBE1] pb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-[#1A130C]", children: item.day }),
            /* @__PURE__ */ jsx("span", { className: "text-[#5BBFBF] font-semibold", children: item.hours })
          ] }, i)),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: siteConfig.hours.pickup }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8", children: [
        /* @__PURE__ */ jsx("p", { className: "label mb-6", children: "Laboratoire" }),
        /* @__PURE__ */ jsx("p", { className: "font-medium text-[#1A130C] mb-1", children: siteConfig.contact.address.street }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-1", children: [
          siteConfig.contact.address.postalCode,
          " ",
          siteConfig.contact.address.city
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mb-6", children: "Côtes-d'Armor, Bretagne" }),
        /* @__PURE__ */ jsx("div", { className: "bg-[#F3EBE1] rounded-xl p-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 leading-relaxed", children: siteConfig.contact.labNote }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#FDFAF6] py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-5 lg:px-8", children: [
      /* @__PURE__ */ jsx("p", { className: "label mb-6", children: "Information" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-bold text-[#1A130C] italic mb-4", children: "Allergènes" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-8 leading-relaxed text-sm", children: siteConfig.allergens.intro }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: siteConfig.allergens.list.map((a, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#F3EBE1] rounded-xl p-4 flex gap-3 items-start", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-[#5BBFBF] rounded-full mt-1.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#1A130C] text-sm", children: a.name }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-xs block", children: a.note })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-5 lg:px-8", children: [
      /* @__PURE__ */ jsx("p", { className: "label mb-6 text-center", children: "FAQ" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold text-[#1A130C] italic mb-12 text-center", children: siteConfig.faq.title }),
      /* @__PURE__ */ jsx("div", { className: "divide-y divide-[#F3EBE1]", children: siteConfig.faq.questions.map((item, i) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpenFaq(openFaq === i ? null : i),
            className: "w-full py-6 flex items-center justify-between text-left gap-4",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-display font-bold italic text-[#1A130C] text-lg", children: item.question }),
              /* @__PURE__ */ jsx(ChevronDown, { className: `w-5 h-5 text-[#5BBFBF] flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}` })
            ]
          }
        ),
        openFaq === i && /* @__PURE__ */ jsx("p", { className: "pb-6 text-gray-500 text-sm leading-relaxed", children: item.answer })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#1A130C] py-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto px-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl font-bold text-white italic mb-6", children: "Prêt à commander ?" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => navigate("/commander"),
          className: "bg-[#5BBFBF] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors",
          children: "Je passe commande"
        }
      )
    ] }) })
  ] });
}
function PageCommune({ commune }) {
  const tel = siteConfig.contact.phone.replace(/\s/g, "");
  return /* @__PURE__ */ jsx("article", { className: "bg-[#FDFAF6]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-5 lg:px-8 pt-32 pb-20", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-[10px] uppercase tracking-[0.25em] font-bold text-[#5BBFBF] mb-5", children: [
      "Pâtisserie sur commande · ",
      commune.nom,
      " (",
      commune.departement,
      ")"
    ] }),
    /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl md:text-6xl font-bold text-[#1A130C] leading-[0.95] mb-6", children: [
      "Pâtisserie artisanale",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("em", { children: [
        "à ",
        commune.nom
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-lg text-[#1A130C]/70 leading-relaxed mb-4", children: [
      "Ô Gourmandiz d’Aurore est un laboratoire de pâtisserie artisanale installé à La Motte.",
      " ",
      commune.nom,
      " est ",
      commune.situation,
      ". Tout est fait sur commande, à la demande, sans vitrine ni stock."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-[#1A130C]/70 leading-relaxed mb-10", children: commune.ancrage }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-[#1A130C]/10 pt-8 mb-10", children: [
      /* @__PURE__ */ jsxs("p", { className: "label mb-4", children: [
        "Ce qui se commande depuis ",
        commune.nom
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "grid sm:grid-cols-2 gap-3", children: commune.specialites.map((o) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-[#1A130C]/80", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#5BBFBF] flex-shrink-0" }),
        o
      ] }, o)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-sm mb-10", children: [
      /* @__PURE__ */ jsxs("p", { className: "label mb-4", children: [
        "Commander depuis ",
        commune.nom
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[#1A130C]/70 leading-relaxed mb-6", children: siteConfig.contact.labNote }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `tel:${tel}`,
            className: "inline-flex items-center gap-2 bg-[#1A130C] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#2A1F14] transition-colors",
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
              " ",
              siteConfig.contact.phone
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `https://wa.me/${siteConfig.contact.whatsapp}?text=Bonjour%20Aurore%20!%20Je%20vous%20contacte%20depuis%20${encodeURIComponent(commune.nom)}%20pour%20une%20commande%20%F0%9F%8E%82`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 bg-[#5BBFBF] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#4AAEAE] transition-colors",
            children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
              " WhatsApp"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-x-8 gap-y-3", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/carte", className: "inline-flex items-center gap-2 text-[#1A130C] font-semibold hover:text-[#5BBFBF] transition-colors", children: [
        "Voir la carte de saison ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/evenements", className: "inline-flex items-center gap-2 text-[#1A130C] font-semibold hover:text-[#5BBFBF] transition-colors", children: [
        "Mariages et événements ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/commander", className: "inline-flex items-center gap-2 text-[#1A130C] font-semibold hover:text-[#5BBFBF] transition-colors", children: [
        "Passer commande ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] })
  ] }) });
}
function NonTrouvee() {
  return /* @__PURE__ */ jsx("div", { className: "bg-[#FDFAF6] min-h-[70vh] flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-5 lg:px-8 py-24", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.25em] font-bold text-[#5BBFBF] mb-5", children: "Page introuvable" }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-6xl font-bold text-[#1A130C] leading-[0.95] mb-6", children: "Cette page n’existe pas" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-[#1A130C]/70 leading-relaxed mb-10", children: "Elle a peut-être été déplacée, ou l’adresse comporte une erreur." }),
    /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-block bg-[#1A130C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2A1F14] transition-colors",
        children: "Retour à l’accueil"
      }
    )
  ] }) });
}
function App() {
  return /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { path: "/", element: /* @__PURE__ */ jsx(Layout, {}), children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "carte", element: /* @__PURE__ */ jsx(Carte, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "carte/:id", element: /* @__PURE__ */ jsx(Produit, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "evenements", element: /* @__PURE__ */ jsx(Evenements, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "commander", element: /* @__PURE__ */ jsx(Commander, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "about", element: /* @__PURE__ */ jsx(About, {}) }),
    communes.map((c) => /* @__PURE__ */ jsx(Route, { path: cheminCommune(c.slug).slice(1), element: /* @__PURE__ */ jsx(PageCommune, { commune: c }) }, c.slug)),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NonTrouvee, {}) })
  ] }) });
}
const VILLE = siteConfig.contact.address.city;
function rendre(url) {
  return renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) })
  );
}
const PAGES = [
  {
    chemin: "carte",
    url: "/carte",
    titre: `La carte de saison — Ô Gourmandiz d'Aurore, ${VILLE} (22)`,
    description: `Gâteaux, tartes, macarons et biscuits de saison, préparés sur commande à ${VILLE} (Côtes-d'Armor). La carte change avec les fruits disponibles.`
  },
  {
    chemin: "evenements",
    url: "/evenements",
    titre: `Mariages et événements — Ô Gourmandiz d'Aurore, ${VILLE} (22)`,
    description: `Pièces montées, pyramides de macarons et desserts de réception sur commande, en Centre Bretagne. Rendez-vous de dégustation avant la date.`
  },
  {
    chemin: "commander",
    url: "/commander",
    titre: `Passer commande — Ô Gourmandiz d'Aurore, ${VILLE} (22)`,
    description: `Commande par téléphone, SMS ou WhatsApp. Laboratoire privé à ${VILLE}, retrait sur rendez-vous, pas de vente en boutique.`
  },
  {
    chemin: "about",
    url: "/about",
    titre: `Aurore, pâtissière à ${VILLE} — Ô Gourmandiz d'Aurore`,
    description: `Le parcours d'Aurore et sa façon de travailler : tout sur commande, rien en stock, des produits de saison.`
  }
];
function rendrePages() {
  const pages = [];
  pages.push({ chemin: "", html: rendre("/"), titre: "", description: "" });
  for (const p of PAGES) {
    pages.push({ chemin: p.chemin, html: rendre(p.url), titre: p.titre, description: p.description });
  }
  for (const c of communes) {
    const url = cheminCommune(c.slug);
    pages.push({
      chemin: url.slice(1),
      html: rendre(url),
      titre: `Pâtisserie sur commande à ${c.nom} (${c.departement}) — Ô Gourmandiz d'Aurore`,
      description: `Gâteaux d'anniversaire, pièces montées et biscuits personnalisés sur commande pour ${c.nom}. Laboratoire artisanal à ${VILLE}, à proximité de ${c.nom}. Retrait sur rendez-vous.`
    });
  }
  return pages;
}
function adresses() {
  return ["", ...PAGES.map((p) => p.chemin), ...communes.map((c) => cheminCommune(c.slug).slice(1))];
}
export {
  adresses,
  rendrePages
};
