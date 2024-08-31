// "use client";
import React from "react";
import { NavLink } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AnimateText from "@/animations/AnimateText";
import Button from "../Button";
import Sidebar from "./Sidebar";
import Curtain from "../../../animations/Curatin";
const linkData = [
  {
    title: "About",
    path: "",
  },
  {
    title: "Products",
    path: "products",
  },
  {
    title: "Contact Us",
    path: "contact",
  },
  {
    title: "News",
    path: "news",
  },
];

export default function index() {
  const { currentUser } = useSelector((store) => store.auth);
  return (
    <>
      <div className="pt-12 pb-4 sticky bg-transparent z-40 top-0 left-0 w-full">
        <div className="w-[100%] flex items-center gap-2 justify-between max-w-custom mx-auto">
          <NavLink to={"/"} className=" flex items-center gap-1 justify-start">
            <h4 className="flex flex-col text-xl md:text-3xl family2 font-bold text-dark">
              Productos
            </h4>
          </NavLink>

          <div
            style={{
              backdropFilter: "blur(54px)",
            }}
            className="items-center py-1 rounded-full px-8 bg-[rgba(255,255,255,.8)] justify-center hidden lg:flex gap-12"
          >
            {linkData?.map((list, index) => {
              return (
                <NavLink
                  end
                  to={`/${list.path}`}
                  key={index}
                  className={`text-base md:text-lg hover:text-grey family2 font-black flex items-center gap-2 p-3 px-3 rounded-[40px]`}
                >
                  {/* <img src={list?.icon} className="w-4" alt="" /> */}
                  <AnimateText children={list?.title} />
                </NavLink>
              );
            })}
          </div>
          <div className="flex justify-end items-center">
            <div
              style={{
                backdropFilter: "blur(54px)",
                transition: "all .7s",
              }}
              // style={{ transition: "all .7s" }}
              className="h-14 bg-[#eee] rounded-full hover:text-white w-32 family2 font-black relative text-xl"
            >
              {/* <Button></Button> */}
              <Curtain bgColor={"#000"}> Sign Up</Curtain>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
}
