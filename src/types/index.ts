// Minimal type definitions - Just the essentials for La Foire Aux Cadeaux

// Form Types - Critical for data validation
export interface NewsletterForm {
    email: string;
    whatsapp: boolean;
  }
  
  export interface ExhibitorForm {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    standSize: 'standard' | 'premium' | 'vip';
    productCategory: string;
  }
  
  export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  // Component Props - For reusable components
  export interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    className?: string;
  }
  
  // Data Types - For content that repeats
  export interface Testimonial {
    name: string;
    role: string;
    content: string;
    avatar: string;
  }
  
  export interface NavLink {
    path: string;
    label: string;
  }
  
  // That's it! Keep it simple and add more as needed.