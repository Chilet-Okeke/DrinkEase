"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiCheck, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import FlutterPaymentButton from "./FlutterPaymentButton";
import { NavLink } from "react-router-dom";
export default function ProductInfo() {
  return (
    <div className="w-full py-12 min-h-[700px] items-center justify-center flex">
      <div className="w-[90%] flex flex-col gap-4 max-w-custom mx-auto">
        <div className="flex text-lg text-grey items-center gap-4">
          <NavLink to={"/"} className={"text-lg family1 text-grey"}>
            Home
          </NavLink>
          <BiChevronRight />
          <NavLink to={"/"} className={"text-lg family1 text-grey"}>
            Checkout
          </NavLink>
          <BiChevronRight />
          <NavLink to={"/checkout"} className={"text-lg family1 text-dark"}>
            Payment
          </NavLink>
        </div>
        <div className="w-[100%] grid grid-cols-custom gap-12">
          <div className="w-full flex py-12 px-4 md:px-8 flex-col gap-12 border rounded-2xl">
            <h4 className="text-3xl font-black family2">
              Billing Address / Shipping Address
            </h4>
            <div className="w-full flex flex-col gap-8">
              <label htmlFor="" className="flex flex-col gap-4 family1 text-lg">
                <span className="font-bold">Phone Number</span>
                <input type="text" className="input" />
              </label>
            </div>
          </div>
          <div className="w-[400px] flex py-8 px-4 border rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}
