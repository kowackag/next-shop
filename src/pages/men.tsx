import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Product } from "src/components/Product";

const Men = () => {
  const products = [
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
    {
      id: "31",
      colors: ["red", "blue", "black"],
      title: "New bracket",
      price: "139 EUR",
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
    {
      id: "4",
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
    {
      id: "5",
      colors: ["red", "blue", "black"],
      title: "New bracket",
      price: "139 EUR",
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

  return (
    <div>
      <Header />
      <div className="flex flex-wrap px-8 py-8 mx-2 justify-center">
        {products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            discount={item.discount}
            newPrice={item.newPrice}
            image={item.image}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Men;
