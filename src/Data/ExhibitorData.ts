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
  };
  location: string;
  featured?: boolean;
  new?: boolean;
}

export const exhibitorsData: Exhibitor[] = [
  // Your existing exhibitors data here
      {
        id: 1,
        slug: "bijoux-koffi",
        name: "Bijoux Koffi",
        category: "jewelry",
        description: "Créations artisanales de bijoux en or, argent et pierres précieuses. Designs modernes inspirés de la tradition togolaise.",
        products: ["Colliers", "Bracelets", "Boucles d'oreilles", "Bagues"],
        logo: "https://via.placeholder.com/150/FFD700/333333?text=BK",
        photo: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        standNumber: "A12",
        coordinates: { x: 20, y: 25 },
        contact: {
          phone: "+228 90 11 22 33",
          email: "contact@bijouxkoffi.tg",
          instagram: "@bijouxkoffi",
          website: "https://bijouxkoffi.tg"
        },
        location: "Lomé, Togo",
        featured: true,
        new: false
      },
      {
        id: 2,
        slug: "les-savons-damina",
        name: "Les Savons d'Amina",
        category: "beauty",
        description: "Savons naturels et cosmétiques bio fabriqués à la main avec des ingrédients locaux. Respectueux de l'environnement.",
        products: ["Savons naturels", "Huiles essentielles", "Beurre de karité", "Crèmes"],
        logo: "https://via.placeholder.com/150/98D8C8/333333?text=SA",
        photo: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
        standNumber: "B08",
        coordinates: { x: 35, y: 30 },
        contact: {
          phone: "+228 91 22 33 44",
          email: "amina@savonsnaturels.tg",
          facebook: "LesSavonsDAmina"
        },
        location: "Kara, Togo",
        featured: false,
        new: true
      },
      {
        id: 3,
        slug: "akode-deco",
        name: "Akodé Déco",
        category: "home",
        description: "Décoration intérieure africaine contemporaine. Meubles, textiles et objets d'art pour sublimer votre maison.",
        products: ["Meubles", "Coussins", "Tableaux", "Lampes"],
        logo: "https://via.placeholder.com/150/F6AD55/333333?text=AD",
        photo: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop",
        standNumber: "C15",
        coordinates: { x: 60, y: 35 },
        contact: {
          phone: "+228 92 33 44 55",
          email: "info@akodedeco.tg",
          website: "https://akodedeco.tg",
          instagram: "@akodedeco"
        },
        location: "Lomé, Togo",
        featured: true,
        new: false
      },
      {
        id: 4,
        slug: "mode-afi",
        name: "Mode Afi",
        category: "fashion",
        description: "Prêt-à-porter féminin afro-chic. Collections exclusives mêlant tradition et modernité pour la femme élégante.",
        products: ["Robes", "Ensembles", "Vestes", "Pantalons"],
        logo: "https://via.placeholder.com/150/ED64A6/333333?text=MA",
        photo: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
        standNumber: "A05",
        coordinates: { x: 25, y: 55 },
        contact: {
          phone: "+228 93 44 55 66",
          email: "contact@modeafi.tg",
          instagram: "@modeafi",
          facebook: "ModeAfi"
        },
        location: "Lomé, Togo",
        featured: false,
        new: true
      },
      {
        id: 5,
        slug: "epices-du-sahel",
        name: "Épices du Sahel",
        category: "food",
        description: "Épices, condiments et produits du terroir togolais. 100% naturels et sans conservateurs.",
        products: ["Épices", "Piments", "Sauces", "Thés"],
        logo: "https://via.placeholder.com/150/F97316/FFFFFF?text=ES",
        photo: "https://images.unsplash.com/photo-1596040033229-a0b55ee30e5d?w=400&h=300&fit=crop",
        standNumber: "D20",
        coordinates: { x: 80, y: 60 },
        contact: {
          phone: "+228 94 55 66 77",
          email: "epices@sahel.tg"
        },
        location: "Dapaong, Togo",
        featured: false,
        new: false
      },
      {
        id: 6,
        slug: "art-traditions",
        name: "Art & Traditions",
        category: "art",
        description: "Sculptures, peintures et artisanat traditionnel togolais revisité. Pièces uniques réalisées par des artisans locaux.",
        products: ["Sculptures", "Peintures", "Masques", "Poteries"],
        logo: "https://via.placeholder.com/150/8B5CF6/FFFFFF?text=AT",
        photo: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop",
        standNumber: "E10",
        coordinates: { x: 45, y: 70 },
        contact: {
          phone: "+228 95 66 77 88",
          email: "contact@arttraditions.tg",
          website: "https://arttraditions.tg"
        },
        location: "Sokodé, Togo",
        featured: true,
        new: false
      },
      {
        id: 7,
        slug: "maroquinerie-prestige",
        name: "Maroquinerie Prestige",
        category: "accessories",
        description: "Sacs, ceintures et accessoires en cuir véritable. Fabrication artisanale et designs exclusifs.",
        products: ["Sacs à main", "Portefeuilles", "Ceintures", "Bagages"],
        logo: "https://via.placeholder.com/150/7C3AED/FFFFFF?text=MP",
        photo: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=300&fit=crop",
        standNumber: "B18",
        coordinates: { x: 70, y: 40 },
        contact: {
          phone: "+228 96 77 88 99",
          email: "prestige@maroquinerie.tg",
          instagram: "@maroquinerieprestige"
        },
        location: "Lomé, Togo",
        featured: false,
        new: false
      },
      {
        id: 8,
        slug: "chocolat-togolais",
        name: "Chocolat Togolais",
        category: "food",
        description: "Chocolats artisanaux à base de cacao togolais. Pralinés, tablettes et confiseries premium.",
        products: ["Tablettes", "Pralinés", "Truffes", "Pâtes à tartiner"],
        logo: "https://via.placeholder.com/150/78350F/FFFFFF?text=CT",
        photo: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop",
        standNumber: "D12",
        coordinates: { x: 55, y: 65 },
        contact: {
          phone: "+228 97 88 99 00",
          email: "info@chocolattogo.tg",
          website: "https://chocolattogo.tg",
          facebook: "ChocolatTogolais"
        },
        location: "Kpalimé, Togo",
        featured: true,
        new: true
      }
    ];