import React from "react";
import { styled } from "styled-components";

const ProductInformation = () => {
  return (
    <ProductInformationStyles>
      <div className="product_info_top flex items-center justify-center flex-col gap-2">
        <h3 className="text-4xl family2 text-white">
          Milkfat 0% • Protein 11g • Calories 110 • Calcium 15% DV
        </h3>
        <form className="flex mx-auto items-center">
          <input type="number" className="family2" placeholder="1" />
          <div className="form_btn flex items-center justify-center text-white fs-16 uppercase family2">
            Add to Cart
          </div>
        </form>
      </div>
      <div className="product_info_center">
        <div className="w-[90%] mx-auto wrapper">
          <div className="flex flex-col gap-3">
            <h5 className="fs-20 family2 uppercase">Nutrition</h5>
            <h3 className="text-2xl family1 text-light">
              Made with milk from cows not treated with rBST* Excellent source
              of protein Includes live & active cultures, and three types of
              probiotics No modified cornstarch or high fructose corn syrup Less
              than 5% lactose—a perfect part of a very low lactose diet
              Naturally low in sodium Contains live and active cultures: S.
              Thermophilus, L. Bulgaricus, L. Acidophilus, Bifidus and L. Casei
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="fs-20 family2 uppercase">Nutrition</h5>
            <h3 className="text-2xl family1 text-light">
              Made with milk from cows not treated with rBST* Excellent source
              of protein Includes live & active cultures, and three types of
              probiotics No modified cornstarch or high fructose corn syrup Less
              than 5% lactose—a perfect part of a very low lactose diet
              Naturally low in sodium Contains live and active cultures: S.
              Thermophilus, L. Bulgaricus, L. Acidophilus, Bifidus and L. Casei
            </h3>
          </div>
        </div>
        <div className="w-100 flex items-center justify-space wrapper_bottom">
          <div className="w-100">
            <img
              src="https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e284d1e01aae121dc9106f4_clear-glass-wine-cup-close-up-photography-2549275-p-800.jpeg"
              alt=""
              className="w-100"
            />
          </div>
          <div className="w-100">
            <img
              className="w-100"
              src="https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e284dda1210d18422233a50_dose-juice-PuoE_Bp5B6k-unsplash-p-800.jpeg"
            />
          </div>
        </div>
      </div>
    </ProductInformationStyles>
  );
};

const ProductInformationStyles = styled.div`
  width: 100%;
  position: relative;
  .product_info_center {
    padding-top: 7rem;
    background-color: #fff;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    .wrapper_bottom {
      grid-template-columns: 1fr 1fr;
      grid-gap: 4rem;
      place-items: center;
      display: grid;
      @media (max-width: 980px) {
        grid-template-columns: repeat(mx-auto-fit, minmax(200px, 1fr));
      }
    }
    .wrapper {
      grid-template-columns: 1fr 0.5fr;
      grid-gap: 3rem;
      place-items: start;
      display: grid;
      width: 80%;
      @media (max-width: 980px) {
        grid-template-columns: repeat(mx-auto-fit, minmax(200px, 1fr));
      }
    }
  }
  .product_info_top {
    padding: 5rem 0;
    background-color: #8d6e63;
    form {
      height: 5.8rem;
      border-radius: 50px;
      background-color: #fff;
      width: 30%;
      .form_btn {
        padding: 0 2rem;
        height: 100%;
        background: #3898ec;
        border-radius: 50px;
        width: 70%;
      }
      input {
        background-color: #fff;
        border: none;
        outline: none;
        height: 100%;
        padding: 0 2rem;
        width: 30%;
        font-size: 18px;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }
    }
  }
`;

export default ProductInformation;
