import React, { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";
import { Pagination } from "src/components/Pagination/Pagination";
import { Product } from "src/components/Product";
import { apolloClient } from "src/graphql/apolloClient";

import { GetProductsDocument, GetProductsQuery } from "generated/graphql";

const Products = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [pages, setPages] = useState(1);

  useEffect(() => {
    if (data) {
      setPages(Math.ceil(data.products.length / 3));
    }
  }, [data]);

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
              <li key={item.id} className="flex" id={item.slug}>
                <Product
                  id={item.slug}
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
        {/* <Pagination path="products" length={pages} /> */}
      </div>
    </div>
  );
};

export default Products;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsQuery>({
    query: GetProductsDocument,
  });
  return {
    props: {
      data,
    },
  };
};
