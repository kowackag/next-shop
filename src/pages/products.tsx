import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import React from "react";
import { Pagination } from "src/components/Pagination/Pagination";
import { Product } from "src/components/Product";
import { apolloClient } from "src/graphql/apolloClient";
import { gql } from "@apollo/client";

interface Product {
  id: string;
  name: string;
  price: number;
  slug: string;
  images: {
    url: string;
  }[];
}

interface GetProductListResponse {
  products: Product[];
}

const Products = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return (
      <div className="flex-grow px-8 py-8 text-2xl text-zinc-700">
        <p>Loading....</p>
      </div>
    );
  }
  return (
    <div className="px-8 py-8 mx-2 flex">
      <div className="hidden lg:block w-1/4 text-4xl">Filters</div>
      <div className="grow">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center grow">
          {data &&
            data.products.map((item) => (
              <li key={item.id} className="flex" id={item.id}>
                <Product
                  id={item.id}
                  title={item.name}
                  price={item.price}
                  newPrice={item.price}
                  image={[{ src: item.images[0].url, alt: item.name }]}
                  // colors={item.colors || ["red"]}
                  // sizes={item.sizes || ["s"]}
                />
              </li>
            ))}
        </ul>
        <Pagination path="men" length={10} />
      </div>
    </div>
  );
};

export default Products;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductListResponse>({
    query: gql`
      query getProduts {
        products {
          id
          name
          price
          slug
          images {
            url
            width
            height
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
};