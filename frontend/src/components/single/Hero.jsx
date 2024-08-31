import React from 'react';
import { styled } from 'styled-components';

const ProductHero = () => {
  return (
    <ProductHeroStyles className="flex fixed top-0 h-screen w-screen justify-center items-center">
      <div className="hero_wrapper flex h-100 w-100 justify-center item-center column">
        <h1 className="w-85 auto family2 uppercase text text-center text-white">COCONUT</h1>
        <div className="hero_info auto flex column gap-2">
          <div className="image_wrappers flex auto column gap-2 justify-center item-center">
            <img src="https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2fa3b0943f1845ba818e_coconut.png" className='Image_1' alt="" />

          </div>
          <img src="https://assets.website-files.com/5d85edd208e53eed3ae194a2/5d88e2d6a39a48c1ef6f2e93_fruit-5.png" alt="" className="image image_2" />
          <img src="https://assets.website-files.com/5d85edd208e53eed3ae194a2/5d88e2d911bed5c49169466e_fruit-6.png" alt="" className="image image_3" />
          <h3 style={{ fontWeight: "300" }} className="fs-30 text-light text-center w-85 auto w-100">
            Creamy, nutty, wild, warm-weather flavor from a far-away beach—real coconut blended with cool Greek Yogurt.
          </h3>
        </div>
      </div>
    </ProductHeroStyles>
  )
}

const ProductHeroStyles = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  background-color: inherit;
  padding: 12rem 0;
  .image {
    position: absolute;
    width:13rem;
    height:13rem;
    z-index: 1;
    &.image_2 {
        right: 10%;
        bottom: 20%;
        width:24rem;
        height:24rem;
        @media (max-width:780px) {
          width:12rem;
        height:12rem;
        bottom:40%;
        right:0%;
        }
    }
    &.image_3 {
        left: 25%;
        top: 10%;
        width:10rem;
    height:10rem;
    @media (max-width:780px) {
      left: 10%;
       width:7rem;
    height:7rem;
    }
    }
  }
  h3 {
    width: 75%;
    @media (max-width:780px) {
    width: 95%;
    font-size: 24px;

    }
  }
  .hero_wrapper {
    position: relative;
    position: fixed;
  top: 0%;
  left: 50%;
  font-weight: 800;
  transform:translate(-50%,-0%);
  }
  .hero_info {
    z-index: 10;
    width: 70%;
    padding: 1rem 0;
  }
  .image_wrappers {
    width: 40%;
    @media (max-width:780px) {
    width: 90%;

    }
    .Image_1 {
    width: 65%;
    object-fit:cover;
  }
  }
 

  h1 {
    width: 70%;
    font-size: 8rem;
    line-height: .9;
    z-index: 3;
  font-weight: 800;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  top: 10%;

  @media (max-width:980px) {
    font-size:5rem;
    width:80%;
  }

  }
`


export default ProductHero