export interface ProductDetailsProps {
    colors: string[];
    sizes: string[];
    description: string;
    title: string;
    price: string;
    newPrice?: string;
    discount?: string;
    images: {
      src: string;
      alt: string;
    }[];
  }
  
export interface ApiDataType {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export type InferGetStaticPathsType<T> = T extends () => Promise<{
    paths: Array<{ params: infer R }>;
  }>
    ? R
    : never;