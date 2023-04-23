export interface ProductDetailsProps {
  id: string;
  colors: string[];
  sizes: string[];
  description: string;
  longDescription: string;
  title: string;
  price: string;
  newPrice?: number;
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
  newPrice?: number;
  description: string;
  longDescription: string;
  category: string;
  colors: string[];
  sizes: string[];
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
