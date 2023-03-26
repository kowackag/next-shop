import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
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

const getProducts = async (page: number, num = 10) => {
  const offset = (page - 1) * num;
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${num}&offset=${offset}`
  );
  const data: ApiDataType[] = await res.json();
  return data;
};

const Women = () => {
  const { query } = useRouter();
  const [pageNum, setPageNum] = useState<number>(Number(query.page));

  useEffect(() => setPageNum(Number(query.page)), [query.page]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", pageNum],
    queryFn: () => getProducts(pageNum),
  });

  const renderProducts = () => {
    if (isLoading) {
      return <div className="w-max">Loading</div>;
    }
    if (isError || !data) {
      return <div>Error</div>;
    } else {
      return data.map((item) => (
        <li key={item.id}>
          <Product
            id={item.id}
            title={item.title}
            price={item.price.toString()}
            image={[{ src: item.image, alt: item.title }]}
          />
        </li>
      ));
    }
  };

  return (
    <div className="px-8 py-8 mx-2 flex">
      <div className="hidden lg:block w-1/4 text-4xl">Asside</div>
      <div className="grow">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center grow">
          {renderProducts()}
        </ul>
        <Pagination path="women" startPage={1} length={10} />
      </div>
    </div>
  );
};

export default Women;