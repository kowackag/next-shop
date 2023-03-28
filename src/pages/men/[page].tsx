import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import React from "react";
import { Pagination } from "src/components/Pagination";
import { Product } from "src/components/Product";

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

const prodByPage = 12;

const Men = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Some error</div>;
  }

  return (
    <div className="px-8 py-8 mx-2 flex">
      <div className="hidden lg:block w-1/4 text-4xl">Asside</div>
      <div className="grow">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center grow">
          {data.map((item) => (
            <li key={item.id}>
              <Product
                id={item.id.toString()}
                title={item.title}
                price={item.price.toString()}
                image={[{ src: item.image, alt: item.title }]}
              />
            </li>
          ))}
        </ul>
        <Pagination path="men" startPage={1} length={12} />
      </div>
    </div>
  );
};

export default Men;

export const getStaticPaths = async () => {
  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return {
    paths: pages.map((item) => {
      return {
        params: {
          page: item.toString(),
        },
      };
    }),
    fallback: true,
    // fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.page) {
    return {
      props: {},
      notFound: true,
    };
  }

  const offset = (Number(params.page) - 1) * prodByPage;
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${prodByPage}&offset=${offset}`
  );
  const data: ApiDataType[] = await res.json();

  return {
    props: {
      page: params.page,
      data,
    },
    //revalidate: 60,
  };
};
