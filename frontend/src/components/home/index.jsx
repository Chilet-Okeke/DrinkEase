import React, { useEffect } from "react";
import Navbar from "../common/navbar/index";
import Footer from "../common/Footer";
import Newsletter from "../common/Newsletter";
import Hero from "./hero";
import ProductList from "./ProductList";
const HomeIndex = () => {
  return (
    <div className="bg-[var(--light-grey)] w-full flex flex-col">
      <Navbar />
      <div className="w-full flex flex-col relative">
        <Hero />
        <ProductList/>
      </div>
      {/* <Newsletter />
      <Footer /> */}
    </div>
  );
};

export default HomeIndex;
