
export interface Product {
  id: number;
  name: string;
  material: string;
  image: string;
  // optionale Farbvarianten pro Produkt
  colors?: ('Gelbgold' | 'Weißgold')[];
  imagesByColor?: {
    Gelbgold?: string;
    Weißgold?: string;
  };
}

export interface LeadFormData {
  firstName: string;
  email: string;
  goldPreference: 'Gelbgold' | 'Weißgold';
}
