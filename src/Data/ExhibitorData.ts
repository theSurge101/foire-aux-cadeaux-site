// data/exhibitorsData.ts
export interface Exhibitor {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  products: string[];
  logo: string;
  photo: string;
  standNumber: string;
  coordinates: {
    x: number;
    y: number;
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    whatsapp?: string;
    youtube?: string;
  };
  location: string;
  featured?: boolean;
  new?: boolean;
  hasDemo?: boolean;
}

export const exhibitorsData: Exhibitor[] = [
  {
    id: 1,
    slug: "anais-concept",
    name: "ANAÏS Concept",
    category: "Luxury Gifting & Expériences",
    description:
      "ANAÏS Concept est une maison spécialisée dans la création d’expériences haut de gamme. Elle conçoit des cadeaux d’exception, des expériences immersives et des concepts personnalisés pour les entreprises désireuses d’offrir une signature mémorable. Reconnue pour son savoir-faire togolais et son sens du détail, elle accompagne marques et institutions dans la création d’émotions uniques.",
    products: [
      "Cadeaux corporate premium",
      "Luxury gifting sur mesure",
      "Expériences immersives",
      "Concepts événementiels haut de gamme",
      "Kits VIP & coffrets personnalisés"
    ],
    logo: "https://anaisconcept.biz/wp-content/uploads/2022/08/cropped-Logo_box_white-1.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2024/01/DSC_6190-scaled.jpg",
    standNumber: "A12",
    coordinates: {
      x: 40,
      y: 25
    },
    contact: {
      phone: "+228 90 12 31 48",
      email: "infos@anaisconcept.biz",
      website: "https://www.anaisconcept.biz",
      instagram: "anaisconcept",
      facebook: "anaisconceptbiz",
      tiktok: undefined,
      whatsapp: "+22890123148",
      youtube: undefined
    },
    location: "Hall Principal – Zone Premium",
    featured: true,
    new: false,
    hasDemo: true
  },
  {
    id: 2,
    slug: "babys-planet",
    name: "BABY'S PLANET",
    category: "fashion",
    description: "BABY'S PLANET est l'univers où la tendresse, le confort et le cocooning familial prennent vie. Ici, chaque pyjama, chaque tenue homewear, chaque ensemble layette est pensé pour envelopper chaque famille de douceur, du nouveau-né aux adultes.",
    products: ["Pyjamas", "Tenues homewear", "Ensembles layette", "Vêtements famille"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Baby_s_Planet.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "A02",
    coordinates: { x: 20, y: 25 },
    contact: {
      phone: "+228 99445000",
      email: "babysplanettg@gmail.com",
      whatsapp: "+22899445000"
    },
    location: "Lomé, Togo",
    featured: false,
    new: true,
    hasDemo: true
  },
  {
    id: 3,
    slug: "pearlrare",
    name: "PearlRare",
    category: "fashion",
    description: "Nous sommes spécialisés dans la création des vêtements et Accessoires (sacs, chaussures, boucles) en tissus africains (pagne wax, pagne tissé, Bogolan etc..) avec de belles finitions.",
    products: ["Vêtements en tissus africains", "Sacs", "Chaussures", "Boucles d'oreilles", "Pagne wax", "Bogolan"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "A03",
    coordinates: { x: 25, y: 30 },
    contact: {
      phone: "+22898080715",
      email: "oyekunlepeace3107@gmail.com",
      tiktok: "@pearl__rare"
    },
    location: "Lomé, Togo",
    featured: true,
    new: false,
    hasDemo: true
  },
  {
    id: 4,
    slug: "kessinonu-designs",
    name: "Késsinonu Designs",
    category: "jewelry",
    description: "A Késsinonu Designs nous créons des accessoires à partir de perles en verres recyclés produits au Togo.",
    products: ["Bijoux en perles recyclées", "Accessoires", "Perles en verre"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/KESSINONOU-DESIGN.jpg",
    photo: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop",
    standNumber: "A04",
    coordinates: { x: 30, y: 35 },
    contact: {
      phone: "+228 91 54 99 80",
      email: "josiane.toga@gmail.com",
      tiktok: "@kessinonu"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: true
  },
  {
    id: 5,
    slug: "ospices-groupe",
    name: "O'spices Groupe",
    category: "food",
    description: "Vente d'épices en poudre pour faciliter la cuisine sainement et avec du goût.",
    products: ["Épices en poudre", "Condiments", "Mélanges d'épices"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/OSPICES-COPYRIGTH.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "B01",
    coordinates: { x: 35, y: 40 },
    contact: {
      phone: "+228 91504059",
      email: "Ospicesgeoupe@gmail.com"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 6,
    slug: "magnifiq-beauty-cabane",
    name: "MAGNIFIQ BEAUTY CABANE",
    category: "fashion",
    description: "Nous aidons les gens à afficher leur bien-être au quotidien à travers élégantes tenues en bazin.",
    products: ["Tenues en bazin", "Mode africaine", "Vêtements élégants"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/MAGNIFIQ.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "B02",
    coordinates: { x: 40, y: 45 },
    contact: {
      phone: "+228 90026052",
      email: "ninaassiongbon@gmail.com",
      facebook: "MagnifiqBeautyCabane"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: true
  },
  {
    id: 7,
    slug: "bison",
    name: "BISOn",
    category: "services",
    description: "BISOn (Business Initiative Studio One) est un espace de coworking dynamique, combinant bureaux partagés, salles de réunion, zones de détente, incubateurs d'entreprises et solutions de stockage innovantes.",
    products: ["Coworking", "Bureaux partagés", "Salles de réunion", "Incubation"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "B03",
    coordinates: { x: 45, y: 50 },
    contact: {
      phone: "+228 71707144",
      email: "bisontgl@gmail.com",
      tiktok: "@bison.coworking.s"
    },
    location: "Lomé, Togo",
    featured: true,
    new: true,
    hasDemo: true
  },
  {
    id: 8,
    slug: "moricanhos-grill",
    name: "Moricanho's Grill",
    category: "food",
    description: "Prestations de services événementiel en barbecue et grill. Viandes: boeuf, agneau, porc, des saucisses locales (merguez, saucisses de boeuf, Toulouse, Francfort, boudin blanc...etc) et poissons (selon le désir du client).",
    products: ["Barbecue", "Grill", "Viandes", "Poissons", "Saucisses", "Traiteur événementiel"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Moricanho_s_Grill.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "B04",
    coordinates: { x: 50, y: 55 },
    contact: {
      phone: "+228 92901685",
      email: "moricanho1@gmail.com",
      whatsapp: "+22892901685"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: true
  },
  {
    id: 9,
    slug: "divine-optique",
    name: "DIVINE OPTIQUE",
    category: "health",
    description: "DIVINE OPTIQUE est un cabinet d'optique spécialisé dans la vente, la réparation, l'entretien des lunettes médicales, Solaires et accessoires. Située au rond-point Tokoin-Cassablanca en face de la Station CAP avec 04 agences annexes dans les quartiers TOTSI, AGOE, NOVISSI, BAGUIDA.",
    products: ["Lunettes médicales", "Lunettes solaires", "Réparation lunettes", "Accessoires optique"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/DIVINE-OPTIQUE.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "C01",
    coordinates: { x: 55, y: 60 },
    contact: {
      phone: "+228 91 92 55 68",
      email: "divineoptique@gmail.com",
      facebook: "Divine Optique Officiel"
    },
    location: "Lomé, Togo (Tokoin-Cassablanca)",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 10,
    slug: "lyddane-events-design",
    name: "LYDDANE EVENTS & DESIGN",
    category: "home",
    description: "Nous sommes spécialisés dans la décoration d'intérieur et l'aménagement sur mesure. Que ce soit pour des résidences privées, des espaces commerciaux ou des bureaux. Nous vendons des articles de décoration et d'ameublement.",
    products: ["Décoration intérieure", "Aménagement sur mesure", "Articles de décoration", "Ameublement"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/LYDDANE.jpg",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "C02",
    coordinates: { x: 60, y: 65 },
    contact: {
      phone: "+228 90068380",
      email: "Lyddane.events.design@gmail.com",
      instagram: "@lyddane_events_design"
    },
    location: "Lomé, Togo",
    featured: true,
    new: false,
    hasDemo: true
  },
  {
    id: 11,
    slug: "salaah",
    name: "Sãlaah",
    category: "entertainment",
    description: "Entreprise spécialisée dans la location de jeux de société pour tous types d'événements.",
    products: ["Location jeux de société", "Jeux événementiels", "Animation"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/SALAAH.jpg",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "C03",
    coordinates: { x: 65, y: 70 },
    contact: {
      phone: "+228 92478383",
      email: "salaah.jeux@gmail.com"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 12,
    slug: "edemgarden",
    name: "Edemgarden",
    category: "home",
    description: "Vente des plantes décoratives et d'intérieur.",
    products: ["Plantes", "Plantes décoratives", "Jardinage"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Edem_Garden.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "C04",
    coordinates: { x: 70, y: 75 },
    contact: {
      phone: "+228 91513219",
      email: "edemgardeng@gmail.com",
      instagram: "@edemgarden"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 13,
    slug: "brille",
    name: "Brille",
    category: "services",
    description: "Brille est une marque engagée au service du bien-être familial, par l'accompagnement psycho-social et professionnel des mamans.",
    products: ["Accompagnement psycho-social", "Services pour mamans", "Bien-être familial"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "D01",
    coordinates: { x: 15, y: 80 },
    contact: {
      phone: "+228 90563529",
      email: "contact@brillebywige.com",
      website: "https://brillebywige.com"
    },
    location: "Lomé, Togo",
    featured: false,
    new: true,
    hasDemo: true
  },
  {
    id: 14,
    slug: "ekaa-bewaxclothing",
    name: "EKAA - Bewaxclothing",
    category: "fashion",
    description: "Bewaxclothing est une marque de mode contemporaine qui célèbre le patrimoine textile du continent africain. Elle crée des vêtements haut de gamme confectionnés à partir de tissus traditionnels kente, batik, tye dye, bogolan, ou raphia en les réinterprétant avec des coupes modernes et un design épuré.",
    products: ["Mode contemporaine", "Tissus africains", "Kente", "Batik", "Bogolan", "Raphia"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/EKAA.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "D02",
    coordinates: { x: 20, y: 85 },
    contact: {
      phone: "+228 90864396",
      email: "ornuelvia05@gmail.com",
      instagram: "@bewaxclothing"
    },
    location: "Lomé, Togo",
    featured: true,
    new: false,
    hasDemo: false
  },
  {
    id: 15,
    slug: "ets-el-essa",
    name: "ETS EL-ESSA",
    category: "fashion",
    description: "Ventes des tissus de très bonnes qualités supérieur.",
    products: ["Tissus de qualité", "Textiles premium"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "D03",
    coordinates: { x: 25, y: 90 },
    contact: {
      phone: "+228 90092315",
      email: "kabinejules47@gmail.com",
      website: "https://www.el-essa.com"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: true
  },
  {
    id: 16,
    slug: "efias-garden",
    name: "Efia's GARDEN",
    category: "beauty",
    description: "Notre salon de soins et de beauté (Efia's GARDEN) offre un espace chaleureux dédié à votre bien-être. Soins du visage et du corps, massages, manucure, épilation, massage, maquillage etc.: nos professionnels mettent leur expertise au service de votre beauté pour une expérience de détente complète.",
    products: ["Soins du visage", "Soins du corps", "Massages", "Manucure", "Épilation", "Maquillage"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/EFIA_S-GARDEN.jpg",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "E01",
    coordinates: { x: 30, y: 20 },
    contact: {
      phone: "+228 90200599",
      email: "efiasgarden@gmail.com",
      whatsapp: "+22890200599"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: true
  },
  {
    id: 17,
    slug: "escale-africaine",
    name: "Escale Africaine",
    category: "food",
    description: "L'escale Africaine est un concept créé en 2023 par un couple franco-togolais (Nicole & Olivier) avec la transformation de produits locaux (Chips et jus), une épicerie fine, un restaurant à Nukafu au sein du complexe hôtelier Africo Palace, un service de livraison de repas pour les particuliers ou les entreprises avec notre propre équipe de livreurs ou via l'application GOZEM (meilleure note avec 4,5), une activité de traiteur d'évènements pour les particuliers et pour les entreprises, la restauration collective pour les écoles et les entreprises (300 repas par jour).",
    products: ["Restaurant", "Traiteur", "Chips", "Jus", "Épicerie fine", "Livraison repas", "Restauration collective"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/L_ESCALE-AFRICAINE.jpg",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "E02",
    coordinates: { x: 35, y: 25 },
    contact: {
      phone: "+228 71 84 61 61",
      email: "escaleafricaine@gmail.com",
      instagram: "@lescaleafricaine"
    },
    location: "Lomé, Togo (Nukafu)",
    featured: true,
    new: false,
    hasDemo: false
  },
  {
    id: 18,
    slug: "ayor-batik",
    name: "Ayor batik",
    category: "fashion",
    description: "Nous somme à Doulassamè derrière le camp gendamerie nationale en face de la petite lagune. Nous somme dans le domaine du batik (pagne, t-shirt et autre).",
    products: ["Batik", "Pagne batik", "T-shirts batik", "Vêtements batik"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "E03",
    coordinates: { x: 40, y: 30 },
    contact: {
      phone: "+228 93 44 9617",
      email: "Ayorbatik@gmail.com"
    },
    location: "Doulassamè, Togo",
    featured: false,
    new: false,
    hasDemo: true
  },
  {
    id: 19,
    slug: "ezo-strategies",
    name: "EZO STRATÉGIES INTERNATIONAL",
    category: "services",
    description: "Ingénierie de la formation, Communication interpersonnelle et de crise, Stratégies commerciales.",
    products: ["Formation", "Communication", "Stratégie commerciale", "Conseil"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "E04",
    coordinates: { x: 45, y: 35 },
    contact: {
      phone: "+228 90142828",
      email: "ekue28@yahoo.fr"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 20,
    slug: "ile-ileke",
    name: "ILÉ ILÈKÊ",
    category: "jewelry",
    description: "Création de bijoux en perles et pierres fines.",
    products: ["Bijoux en perles", "Pierres fines", "Accessoires"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "F01",
    coordinates: { x: 50, y: 40 },
    contact: {
      phone: "+228 92883185",
      email: "islamyagbadamassi6@gmail.com",
      instagram: "@ile_ileke_"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 21,
    slug: "njinga-palace",
    name: "NJINGA PALACE",
    category: "food",
    description: "Commercialisation de crèmes glacées, de biscuits et de bonbons.",
    products: ["Crèmes glacées", "Biscuits", "Bonbons", "Confiseries"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/NJINGA-PALACE.jpg",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "F02",
    coordinates: { x: 55, y: 45 },
    contact: {
      phone: "+228 90963763",
      email: "Julietabossing@gmail.com",
      tiktok: "@twinsdance77"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 22,
    slug: "tandem-markcom",
    name: "TANDEM Mark&Com",
    category: "services",
    description: "Agence-Cabinet de Marketing Communication et Relations publiques mais aussi de Développement et de valorisation des Ressources Humaines.",
    products: ["Marketing", "Communication", "Relations publiques", "Ressources humaines"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/TANDEM-MARK-COM.jpg",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "F03",
    coordinates: { x: 60, y: 50 },
    contact: {
      phone: "+228 90 63 22 12",
      email: "m.badjene@gmail.com"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 23,
    slug: "ye-bessevi",
    name: "Yé-Béssévi",
    category: "food",
    description: "Transformation du piment sous diverses formes pour la consommation et vente de friandises faites à base de bananes plantains.",
    products: ["Piment transformé", "Friandises bananes plantains", "Condiments"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "F04",
    coordinates: { x: 65, y: 55 },
    contact: {
      phone: "+228 90 51 90 10",
      email: "akpedes47@gmail.com"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 24,
    slug: "ata-beracca",
    name: "ATA-BERACCA",
    category: "fashion",
    description: "Elle est spécialisée dans la vente des pagnes woodin, GTP, UNIWAX, des Bijoux & Accessoires.",
    products: ["Pagnes Woodin", "GTP", "UNIWAX", "Bijoux", "Accessoires"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/ATA-BERRACA.jpg",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "G01",
    coordinates: { x: 70, y: 60 },
    contact: {
      phone: "+228 90 17 87 07",
      email: "daphneamegah@gmail.com"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 25,
    slug: "elgagarden",
    name: "ElgaGarden",
    category: "food",
    description: "Elga Garden est une entreprise spécialisée dans la production de glaces artisanales locales à base d'ingrédients naturels, la conception de systèmes de pisciculture urbaine innovants et l'accompagnement à la création de potagers écologiques.",
    products: ["Glaces artisanales", "Pisciculture urbaine", "Potagers écologiques", "Aquaponie"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Elga_Garden.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "G02",
    coordinates: { x: 75, y: 65 },
    contact: {
      phone: "+228 92409555",
      email: "odelicelga@gmail.com"
    },
    location: "Lomé, Togo",
    featured: true,
    new: true,
    hasDemo: true
  },
  {
    id: 26,
    slug: "akarick-hospitality",
    name: "AKARICK-HOSPITALITY",
    category: "services",
    description: "Cabinet de prestation de services qui fait du 360° autour de l'ensemble des métiers de l'hôtellerie et de la restauration. Nos prestations vont des audits métiers aux formations et remises à niveaux du personnel peu importe le niveau hiérarchique, aux conseils et suivi... à la création de l'identité culinaire d'un restaurant tant en projet ou déjà existant jusqu'à l'équipement des établissements hôtelier et de restauration. La gestion hôtelière et le management de transition sont des atouts dont nous avons de l'expertise certaine!",
    products: ["Conseil hôtellerie", "Formation restauration", "Audit", "Gestion hôtelière", "Équipement"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "G03",
    coordinates: { x: 80, y: 70 },
    contact: {
      phone: "+228 91600999",
      email: "dg@akarick-hospitality.com",
      website: "https://www.akarick-hospitality.com"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
{
  id: 27,
  slug: "mr-shine-galerie",
  name: "Mr Shine Galerie and décor",
  category: "home",
  description: "Décoration et design d'intérieur/vente de plantes décoratives.",
  products: ["Décoration intérieure", "Design d'intérieur", "Plantes décoratives"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/MR-SHINE.jpg",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
  standNumber: "G04",
  coordinates: { x: 15, y: 75 },
  contact: {
    phone: "+228 91 72 38 38",
    email: "mrshinegalerieanddecor@gmail.com"
  },
  location: "Lomé, Togo",
  featured: false,
  new: false,
  hasDemo: false
},
  {
    id: 28,
    slug: "samba-design",
    name: "SAMBA Design",
    category: "accessories",
    description: "SAMBA Design, est une structure spécialisée dans les idées cadeaux personnalisés pour particuliers et entreprises. Chez nous, chaque occasion mérite un cadeau ou un souvenir unique, raffiné et inoubliable. Nous apportons une touche spéciale et originale à toutes vos célébrations. Chez SAMBA Design, votre satisfaction, notre unique priorité 🤗",
    products: ["Cadeaux personnalisés", "Souvenirs", "Articles personnalisés", "Cadeaux d'entreprise"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "G05",
    coordinates: { x: 20, y: 80 },
    contact: {
      phone: "+228 91974123",
      email: "sambadesigntg@gmail.com",
      whatsapp: "+22891974123"
    },
    location: "Lomé, Togo",
    featured: false,
    new: false,
    hasDemo: false
  },
  {
    id: 29,
    slug: "belham-beauty",
    name: "Belham Beauty",
    category: "beauty",
    description: "Belham Beauty crée des soins capillaires naturels et innovants, alliant ingrédients africains et actifs modernes, pour sublimer les cheveux texturés, redonner confiance aux femmes, tout en ayant un impact social.",
    products: ["Soins capillaires naturels", "Produits pour cheveux texturés", "Cosmétiques africains"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Logo_Placeholder.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "A01",
    coordinates: { x: 15, y: 20 },
    contact: {
      phone: "+228 96 86 54 00",
      email: "belhambeauty@gmail.com",
      website: "https://belhambeauty.shop",
      instagram: "@belhambeauty",
      facebook: "Belhamempreinte",
      tiktok: "@belhambeauty",
      youtube: "@belhambeauty",
      whatsapp: "+22896865400"
    },
    location: "Lomé, Togo",
    featured: true,
    new: false,
    hasDemo: true
  },
  {
    id: 30,
    slug: "dels",
    name: "Dels",
    category: "accessories",
    description: "Pour ceux qui osent explorer les merveilles du corps.",
    products: ["Objets de plaisir de luxe"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/DELS-BON.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "A01",
    coordinates: { x: 15, y: 20 },
    contact: {
      phone: "+228 xxxxxxxx",
      email: "",
      website: "",
      instagram: "dels6969",
      facebook: "",
      tiktok: "",
      youtube: "",
      whatsapp: "+228xxxxxxxx"
    },
    location: "Lomé, Togo",
    featured: true,
    new: false,
    hasDemo: true
  },
  {
    id: 30,
    slug: "nos-confiseries",
    name: "Nos Confiseries",
    category: "food",
    description: "Des coffrets de douceurs artisanales pour toutes les occasions.",
    products: ["Coffrets de Confiseries Locales"],
    logo: "https://anaisconcept.biz/wp-content/uploads/2025/11/anais-confiseries.png",
    photo: "https://anaisconcept.biz/wp-content/uploads/2025/11/Exhibitor_Cover_Placeholder.png",
    standNumber: "A01",
    coordinates: { x: 15, y: 20 },
    contact: {
      phone: "+228 90 12 31 48",
      email: "infos@anaisconcept.biz",
      website: "https://www.anaisconcept.biz",
      instagram: "anaisconcept",
      facebook: "anaisconceptbiz",
      tiktok: undefined,
      whatsapp: "+22890123148",
      youtube: undefined
    },
    location: "Hall Principal – Zone Premium",
    featured: true,
    new: false,
    hasDemo: true
  },
];