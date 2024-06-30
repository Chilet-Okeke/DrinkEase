import React from "react";
import { styled } from "styled-components";

const Hero = () => {
  return (
    <HeroStyles
      data-scroll-section
      className="flex h-100 w-100 justify-center item-center"
    >
      {/* Header */}
      <div className="flex hero_wrapper h-100 w-90 auto justify-center item-center">
        <h1 className="w-85 auto family2 uppercase text text-center text-white">
          Non-Diary Blend Ice Cream
        </h1>
        {/* <img src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d823ee3251dccb171eea802_fruit-7.png" alt="" className="image image_1" /> */}
        <img
          src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d824200708f0f8c1ba3cd96_fruits-3.png"
          alt=""
          className="image image_2"
        />
        <img
          src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d8240fdd06ccc780fa240d0_fruits-1.png"
          alt=""
          className="image image_3"
        />

        <img
          src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d823ee3251dccb171eea802_fruit-7.png"
          alt=""
          className="image image_1"
        />
        {/*  */}
      </div>
    </HeroStyles>
  );
};

const HeroStyles = styled.div`
  width: 100%;
  position: relative;
  background-color: #9ccc65;
  min-height: 100vh;
  .hero_wrapper {
    position: relative;

    h1 {
      width: 70%;
      font-size: 8.3rem;
      line-height: 1;
      z-index: 3;
      position: fixed;
      top: 50%;
      left: 50%;
      font-weight: 900;
      transform: translate(-50%, -50%);
      @media (max-width: 980px) {
        font-size: 5rem;
        width: 80%;
      }
    }
    .image {
      position: absolute;
      width: 13rem;
      height: 13rem;
      z-index: 1;
      &.image_1 {
        left: 40%;
        top: 80%;
      }
      &.image_2 {
        left: 4%;
        bottom: 100%;
        width: 17rem;
        height: 17rem;
      }
      &.image_3 {
        right: 4%;
        bottom: -50%;
        width: 10rem;
        height: 10rem;
      }
    }
  }
`;

export default Hero;
