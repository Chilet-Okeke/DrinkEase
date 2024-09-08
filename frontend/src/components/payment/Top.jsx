"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RoomPaymentTab from "./RoomPaymentTab";
import { BiCheck, BiChevronLeft } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { slideup } from "@/utils/framer";
import FlutterPaymentButton from "./FlutterPaymentButton";
export default function RoomInfo() {


  const ctaText_1 = useRef(null);
  const ctaText_2 = useRef(null);

  const inView = useInView(ctaText_1, {
    margin: "0px 100px -50px 0px",
  });
  const inView2 = useInView(ctaText_2, {
    margin: "0px 100px -50px 0px",
  });
  const ctaText1 = "You are almost there!";
  const ctaText2 = "Book your Home with confidence";
  return (
    <>
   
    </>
  );
}
