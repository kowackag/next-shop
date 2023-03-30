import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductDetails } from "src/components/ProductDetails";
import { ApiDataType, InferGetStaticPathsType } from "src/constans/types";

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
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/?take=250&offset=0`
  );
  const data: ApiDataType[] = await res.json();
  return {
    paths: data.map((item) => {
      console.log();
      return {
        params: {
          prodId: item.id,
        },
      };
    }),
    fallback: true,
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
      page: params.prodId,
      data,
    },
    //revalidate: 10,
  };
};
