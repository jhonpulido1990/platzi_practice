export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
  category?: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}
