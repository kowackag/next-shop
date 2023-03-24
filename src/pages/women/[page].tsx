import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Pagination } from "src/components/Pagination";
import { Product } from "src/components/Product";

export interface ApiDataType {
  id: number;
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

const getProducts = async (num: number, ofset = 0) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${num}&offset=${ofset}`
  );
  const data: ApiDataType[] = await res.json();

  return data;
};

const Women = () => {
  const [productsNum, setProductsNum] = useState("5");

  const router = useRouter();
  console.log(router);

  const { data, isLoading, isError } = useQuery("products", () =>
    getProducts(productsNum, 0)
  );

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError || !data) {
    return <div>Error</div>;
  }
  const product = [
    {
      id: "1",
      colors: ["red", "blue", "black"],
      title: "New bracket",
      price: "139 EUR",
      image: [
        {
          src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          alt: "bracket",
        },
      ],
    },
    {
      id: "2",
      colors: ["red", "blue", "black"],
      title: "Limited Edition Sports Trainer",
      price: "139 EUR",
      newPrice: "119 EUR",
      discount: "-19%",
      image: [
        {
          src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          alt: "bracket",
        },
        {
          src: "https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
          alt: "bracket",
        },
      ],
    },
  ];

  const loadPage = (e) => {
    e.preventDefault();
    console.log(e.target);
    getProducts(15, 0);
    setProductsNum(10);
  };

  return (
    <div>
      <Header />
      <div className="px-8 py-8 mx-2">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {product.map((item) => (
            <li key={item.id}>
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                discount={item.discount}
                newPrice={item.newPrice}
                image={item.image}
              />
            </li>
          ))}

          {data &&
            data.map((item) => (
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
        <Pagination />
      </div>

      <Footer />
    </div>
  );
};

export default Women;
