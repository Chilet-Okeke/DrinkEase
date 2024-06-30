import React from "react";
import { styled } from "styled-components";
const product = [
  {
    background: "hsla(206.81564245810057, 89.95%, 60.98%, 1.00)",
    subimage1:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2861c21b5059478eca7d83_blaubeere-1.png",
    subimage2:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2861bf19edde6d808fc650_blaubeere-2.png",
    image:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f7fd2e06746e4a50f05_blueberry.png",
  },
  {
    background: "hsla(14.361702127659573, 100.00%, 63.14%, 1.00)",
    subimage2:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2861bf19edde6d808fc650_blaubeere-2.png",
    subimage1:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5d88d8d6249f213cee30a048_fruits-1.png",
    image:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2e658c2b172ab3b7acbd_peach.png",
  },
  {
    background: "hsla(87.96116504854368, 50.24%, 59.80%, 1.00)",
    subimage1:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5d88e2c7a39a4857976f2c3b_lime.svg",
    subimage2:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5d88e2c4a711b1675fb5129e_limete.png",
    image:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f94d2e067c112a50fab_lime.png",
  },
];

const ProductList = () => {
  return (
    <PorductListStyles data-scroll-section>
      {/* Header */}
      <div className="flex hero_wrapper column  auto justify-center item-center">
        {product.map((x, index) => {
          return (
            <ProductCard
              style={{ background: `${x.background}}` }}
              className="flex item-center justify-center"
              key={index}
            >
              <div className="product_card_wrapper auto flex column gap-2">
                <div className="image_wrappers auto">
                  <img src={x.image} alt="" className="image auto" />
                  <img src={x.subimage1} alt="" className="images image_2" />
                  <img src={x.subimage2} alt="" className="images image_3" />
                  <div className="flex card_btn_wrapper w-100 justify-center item-center">
                    <ProductCardBtn
                      style={{ background: `${x.background}}` }}
                      className="fs-20 flex justify-center item-center family1 text-white text-light"
                    >
                      <div className="text">View Product</div>
                    </ProductCardBtn>
                  </div>
                </div>
              </div>
            </ProductCard>
          );
        })}
      </div>
    </PorductListStyles>
  );
};

const ProductCard = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 5rem 0;
  background-color: ${(props) => props.backgroundColor || "white"};
  /* Add more styles for the card here */
  .product_card_wrapper {
    z-index: 30;
    width: 60%;
    .image_wrappers {
      width: 40%;
      position: relative;
      .images {
        position: absolute;
        width: 13rem;
        height: 13rem;
        z-index: 5;
        &.image_2 {
          right: -100%;
          top: -20%;
          width: 17rem;
          height: 17rem;
        }
        &.image_3 {
          left: -100%;
          bottom: 0%;
          width: 15rem;
          height: 15rem;
        }
      }
      img {
        width: 100%;
      }
      .card_btn_wrapper {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        .card_btn {
          /* padding:1.6rem 3rem; */
          width: 12rem;
          height: 5rem;
          border-radius: 40px;
          background: #000;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: all 0.7s ease;

          &:is(:hover, :focus-visible) {
            transform: scale(1.1);
          }
          .text {
            z-index: 10;
          }
          &:is(:hover, :focus-visible)::before {
            bottom: -10%;
            transform: translateX(-50%) scale(1.4);
          }
          &::before {
            content: "";
            position: absolute;
            bottom: -200%;
            left: 50%;
            transform: translateX(-50%);
            width: 40%;
            height: 50%;
            border-radius: 100%;
            background-color: ${(props) => props.backgroundColor || "white"};
            /* Add more styles for the card here */
            transition: all 1s ease;
            z-index: 1;
            padding: 2rem;
          }
        }
      }
    }
  }
`;

const ProductCardBtn = styled.div`
  /* padding:1.6rem 3rem; */
  width: 12rem;
  height: 5rem;
  border-radius: 40px;
  background: #000;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 0.7s ease;

  &:is(:hover, :focus-visible) {
    transform: scale(1.1);
  }
  .text {
    z-index: 10;
  }
  &:is(:hover, :focus-visible)::before {
    bottom: -10%;
    transform: translateX(-50%) scale(1.4);
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -200%;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 50%;
    border-radius: 100%;
    background-color: ${(props) => props.backgroundColor || "white"};
    /* Add more styles for the card here */
    transition: all 1s ease;
    z-index: 1;
    padding: 2rem;
  }
`;

const PorductListStyles = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  .hero_wrapper {
    position: relative;
  }
`;

export default ProductList;
