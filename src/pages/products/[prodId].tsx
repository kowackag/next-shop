import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductDetails } from "src/components/ProductDetails";
import { InferGetStaticPathsType } from "src/constans/types";
import Head from "next/head";
import { apolloClient } from "src/graphql/apolloClient";
import { gql } from "@apollo/client";

interface ProductResponse {
  product: Product;
}

interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  images: {
    url: string;
  }[];
}
interface GetProductListResponse {
  products: Product[];
}
const ProductId = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>upsss</div>;
  }
  if (data) {
    return (
      <>
        <Head>
          <title>{data.name}</title>
        </Head>
        <ProductDetails
          id={data.id}
          colors={["red"]}
          title={data.name}
          description={data.description}
          price={data.price.toString()}
          sizes={["xs", "40"]}
          discount="-15%"
          newPrice={99}
          images={[{ src: data.images[0].url, alt: data.name }]}
          longDescription={data.longDescription}
        />
      </>
    );
  }
};

export default ProductId;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductListResponse>({
    query: gql`
      query getProduts {
        products {
          id
        }
      }
    `,
  });
  return {
    paths: data.products.map((item) => {
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
  const { data } = await apolloClient.query<ProductResponse, { id: string }>({
    variables: { id: params.prodId },
    query: gql`
      query getProdut($id: ID) {
        product(where: { id: $id }) {
          id
          name
          description
          price
          images {
            url
          }
        }
      }
    `,
  });

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: data.product,
    },
  };
};
