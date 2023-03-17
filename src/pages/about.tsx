import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Product } from "src/components/Product";

const AboutPage = () => {
  const productInfo = {
    colors: ["red", "blue", "black"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa  veniam dicta beatae eos ex error culpa delectus rem tenetur,architecto quam nesciunt, dolor veritatis nisi minus  inventore, rerum at recusandae?",
    title: "New bracket",
    price: "139 EUR",
    newPrice: "119 EUR",
    discount: "-19%",
  };

  return (
    <div>
      <Header />
      <h2>Cześć</h2>
      <p>Mam na imię Gosia</p>
      <Product
        colors={productInfo.colors}
        description={productInfo.description}
        title={productInfo.title}
        price={productInfo.price}
        discount={productInfo.discount}
        newPrice={productInfo.newPrice}
      />
      <Footer />
    </div>
  );
};

export default AboutPage;
