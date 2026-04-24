// Services/programService.ts
import { Star, Music, Palette, Sparkles, Trophy, Baby } from 'lucide-react';

// Types
export interface Activity {
  time: string;
  title: string;
  description: string;
  location: string;
  category: 'show' | 'workshop' | 'demo' | 'contest' | 'networking' | 'kids' | 'food' | 'vip';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  isFeatured?: boolean;
}

export interface DaySchedule {
  date: string;
  day: string;
  fullDate: string;
  activities: Activity[];
}

// Interface for highlights (simpler version for VisitorInfo page)
export interface ScheduleHighlight {
  date: string;
  day: string;
  hours: string;
  highlights: string[];
}

// Your full program data
export const fullProgramData: DaySchedule[] = [
  {
    date: '18 Décembre',
    day: 'Vendredi',
    fullDate: 'Vendredi 18 Décembre 2026',
    activities: [
      {
        time: '09:00',
        title: 'Cérémonie d\'ouverture officielle',
        description: 'Discours des autorités, ruban inaugural et ouverture au grand public.',
        location: 'Scène Principale',
        category: 'vip',
        icon: Star,
        isFeatured: true
      },
      {
        time: '10:00',
        title: 'Ventes et activités grand public',
        description: 'Ouverture de tous les stands et début des ventes.',
        location: 'Tout le salon',
        category: 'demo',
        icon: Sparkles,
        isFeatured: true
      },
      {
        time: '14:00',
        title: 'Ambiance spéciale exposant/visiteurs',
        description: 'Animations surprises dans les allées.',
        location: 'Tout le salon',
        category: 'demo',
        icon: Sparkles,
        isFeatured: true
      },
      {
        time: '16:00',
        title: 'Questions surprises/interviews',
        description: 'Micro-trottoir et interviews spontanées.',
        location: 'Allées principales',
        category: 'contest',
        icon: Trophy
      },
      {
        time: '19:00',
        title: 'Anniversaires du jour',
        description: 'Célébration des anniversaires des visiteurs.',
        location: 'Scène Principale',
        category: 'show',
        icon: Music,
        isFeatured: true
      },
      {
        time: '20:00',
        title: 'Cocktail VIP & Networking',
        description: 'Rencontre avec exposants, influenceurs et entrepreneurs.',
        location: 'Scène Principale',
        category: 'vip',
        icon: Star,
        isFeatured: true
      }
    ]
  },
  {
    date: '19 Décembre',
    day: 'Samedi',
    fullDate: 'Samedi 19 Décembre 2026',
    activities: [
      {
        time: '09:00',
        title: 'Ouverture des ventes',
        description: 'Deuxième jour de shopping avec promotions exclusives.',
        location: 'Tout le salon',
        category: 'demo',
        icon: Sparkles
      },
      {
        time: '11:00',
        title: 'Ambiance spéciale exposant/visiteurs',
        description: 'Nouvelle série d\'animations et rencontres exclusives.',
        location: 'Tout le salon',
        category: 'demo',
        icon: Sparkles,
        isFeatured: true
      },
      {
        time: '16:00',
        title: 'Questions surprises/interviews',
        description: 'Deuxième session d\'interactions spontanées.',
        location: 'Allées principales',
        category: 'contest',
        icon: Trophy
      },
      {
        time: '19:00',
        title: 'Anniversaires du jour',
        description: 'Fête des visiteurs nés un 19 décembre.',
        location: 'Scène Principale',
        category: 'show',
        icon: Music
      },
      {
        time: '20:00',
        title: 'Karaoke & Chilling',
        description: 'Session karaoké géante pour clôturer la journée.',
        location: 'Scène Principale',
        category: 'show',
        icon: Music,
        isFeatured: true
      }
    ]
  },
  {
    date: '20 Décembre',
    day: 'Dimanche',
    fullDate: 'Dimanche 20 Décembre 2026',
    activities: [
      {
        time: '09:00',
        title: 'Ouverture des ventes',
        description: 'Dernier jour pour profiter des opportunités.',
        location: 'Tout le salon',
        category: 'demo',
        icon: Sparkles
      },
      {
        time: '11:00',
        title: 'Ambiance spéciale exposant/visiteurs',
        description: 'Dernières animations et rencontres privilégiées.',
        location: 'Tout le salon',
        category: 'demo',
        icon: Sparkles,
        isFeatured: true
      },
      {
        time: '14:00',
        title: 'Noël de rêve',
        description: 'Ambiance festive de Noël pour enfants.',
        location: 'Scène Principale',
        category: 'kids',
        icon: Baby,
        isFeatured: true
      },
      {
        time: '15:00',
        title: 'Panel : "Les cadeaux dans nos traditions"',
        description: 'Table ronde avec des experts sur les cadeaux dans les cultures africaines.',
        location: 'Scène Principale',
        category: 'workshop',
        icon: Palette,
        isFeatured: true
      },
      {
        time: '19:00',
        title: 'Anniversaires du jour',
        description: 'Dernière célébration des anniversaires.',
        location: 'Scène Principale',
        category: 'show',
        icon: Music
      },
      {
        time: '20:00',
        title: 'Ending Party & Remerciements',
        description: 'Cérémonie de clôture officielle.',
        location: 'Scène Principale',
        category: 'show',
        icon: Music,
        isFeatured: true
      }
    ]
  }
];

// Feature flags
export const PROGRAM_STATUS = {
  isReady: false, // Set to true when program is ready for public
  lastUpdated: null as string | null,
  version: '1.0.0'
};

// Helper functions
export const isProgramReady = (): boolean => {
  return PROGRAM_STATUS.isReady;
};

export const getProgramData = (): DaySchedule[] => {
  return fullProgramData;
};

// NEW: Get highlights for VisitorInfo page
export const getProgramHighlights = (): ScheduleHighlight[] => {
  return fullProgramData.map(day => ({
    date: day.date,
    day: day.day,
    hours: '09h00 - 21h00',
    highlights: day.activities
      .filter(activity => activity.isFeatured) // Only show featured activities
      .slice(0, 6) // Limit to 6 highlights per day
      .map(activity => `${activity.time} - ${activity.title}`) // Format as "09:00 - Title"
  }));
};

// Optional: Get highlights for a specific day
export const getDayHighlights = (dayIndex: number): ScheduleHighlight | null => {
  if (dayIndex >= 0 && dayIndex < fullProgramData.length) {
    const day = fullProgramData[dayIndex];
    return {
      date: day.date,
      day: day.day,
      hours: '09h00 - 21h00',
      highlights: day.activities
        .filter(activity => activity.isFeatured)
        .slice(0, 6)
        .map(activity => `${activity.time} - ${activity.title}`)
    };
  }
  return null;
};