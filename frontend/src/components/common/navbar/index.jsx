// "use client";
import React from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AnimateText from "@/animations/AnimateText";
import Button from "../Button";
import Sidebar from "./Sidebar";
const linkData = [
  {
    title: "About",
    path: "",
  },
  {
    title: "Listings",
    path: "search",
  },
  {
    title: "Culture",
    path: "savedhomes",
  },
  {
    title: "Contact Us",
    path: "trips",
  },
];

export default function index() {
  const { currentUser } = useSelector((store) => store.auth);
  return (
    <>
      <div className="pt-12 pb-4 sticky top-0 left-0 bg-[rgba(255,255,255,.5)]">
        <div className="w-[90%] flex items-center gap-2 justify-between max-w-custom mx-auto">
          <Link to={"/"} className=" flex items-center gap-1 justify-start">
            <h4 className="flex flex-col text-xl md:text-3xl family2 font-bold text-dark">
              Productos
            </h4>
          </Link>

          <div
            style={{
              backdropFilter: "blur(14px)",
            }}
            className="items-center py-4 px-8 bg-[rgba(255,255,255,.5)] justify-center hidden lg:flex gap-12"
          >
            {linkData?.map((list, index) => {
              return (
                <Link
                  to={`/${list.path}`}
                  key={index}
                  className={`text-base md:text-lg hover:text-grey font-booking_font4 flex items-center gap-2 p-3 px-3 rounded-[40px]`}
                >
                  {/* <img src={list?.icon} className="w-4" alt="" /> */}
                  <AnimateText children={list?.title} />
                </Link>
              );
            })}
          </div>
          <div className="flex justify-end items-center">
            <div className="h-14 w-36 relative text-base">
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
}
