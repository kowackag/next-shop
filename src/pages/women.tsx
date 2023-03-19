import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { NewHeader } from "src/components/NewHeader";
import { ProductDetails } from "src/components/ProductDetails";

const Women = () => {
  const productDetails = {
    colors: ["red", "blue", "black"],
    sizes: ["xs", "s", "m", "l", "xl"],
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
      <NewHeader />
      <ProductDetails
        colors={productDetails.colors}
        sizes={productDetails.sizes}
        description={productDetails.description}
        title={productDetails.title}
        price={productDetails.price}
        discount={productDetails.discount}
        newPrice={productDetails.newPrice}
      />
      <Footer />
    </div>
  );
};

export default Women;
