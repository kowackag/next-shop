import React from "react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductDetails } from "src/components/ProductDetails";
import { InferGetStaticPathsType } from "src/constans/types";
import Head from "next/head";
import Link from "next/link";
import { apolloClient } from "src/graphql/apolloClient";

import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "generated/graphql";

const ProductId = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>upsss</div>;
  }
  if (data) {
    return (
      <>
        <Link
          href={`/products`}
          className="border bg-slate-100 py-2 px-6 my-2 inline-block uppercase font-bold"
        >
          back
        </Link>
        <Head>
          <title>{data.name}</title>
        </Head>
        <ProductDetails
          id={data.slug}
          colors={["red"]}
          title={data.name}
          description={data.description}
          price={data.price}
          sizes={["xs", "s", "m", "l"]}
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
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });
  return {
    paths: data.products.map((item) => {
      return {
        params: {
          prodId: item.slug,
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
  const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
  >({
    variables: { slug: params.prodId },
    query: GetProductDetailsBySlugDocument,
  });

  if (!data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await data.product.description,
      },
    },
  };
};
