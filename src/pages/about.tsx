import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Product } from "src/components/Product";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h2>Cześć</h2>
      <p>Mam na imię Gosia</p>
      <Product />
      <Footer />
    </div>
  );
};

export default AboutPage;
