import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { NewHeader } from "src/components/NewHeader";
import { Product } from "src/components/Product";

const Men = () => {
  const productInfo = {
    colors: ["red", "blue", "black"],
    title: "New bracket",
    price: "139 EUR",
    newPrice: "119 EUR",
    discount: "-19%",
  };

  return (
    <div>
      <Header />
      <NewHeader />
      <div className="flex flex-wrap px-8 py-8 mx-2 justify-center">
        <Product
        // colors={productDetails.colors}
        // sizes={productDetails.sizes}
        // description={productDetails.description}
        // title={productDetails.title}
        // price={productDetails.price}
        // discount={productDetails.discount}
        // newPrice={productDetails.newPrice}
        />
        <Product
        // colors={productDetails.colors}
        // sizes={productDetails.sizes}
        // description={productDetails.description}
        // title={productDetails.title}
        // price={productDetails.price}
        // discount={productDetails.discount}
        // newPrice={productDetails.newPrice}
        />
        <Product
        // colors={productDetails.colors}
        // sizes={productDetails.sizes}
        // description={productDetails.description}
        // title={productDetails.title}
        // price={productDetails.price}
        // discount={productDetails.discount}
        // newPrice={productDetails.newPrice}
        />
        <Product
        // colors={productDetails.colors}
        // sizes={productDetails.sizes}
        // description={productDetails.description}
        // title={productDetails.title}
        // price={productDetails.price}
        // discount={productDetails.discount}
        // newPrice={productDetails.newPrice}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Men;
