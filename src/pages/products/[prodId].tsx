import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductDetails } from "src/components/ProductDetails";

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

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

const ProductId = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>upsss</div>;
  }
  return (
    <ProductDetails
      colors={["red"]}
      title={data.title}
      description={data.description}
      price={data.price.toString()}
      sizes={["xs", "40"]}
      discount="-15%"
      newPrice="99 EUR"
      images={[{ src: data.image, alt: data.title }]}
    />
  );
};

export default ProductId;

export const getStaticPaths = async () => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/`);
  const data: ApiDataType[] = await res.json();
  return {
    paths: data.map((item) => {
      return {
        params: {
          prodId: item.id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.prodId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${params.prodId}`
  );
  const data: ApiDataType = await res.json();
  return {
    props: {
      data,
    },
  };
};
