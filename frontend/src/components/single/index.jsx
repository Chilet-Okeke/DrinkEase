"use client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../common/navbar/index";
import ProductInformation from './ProductInformation'
import Hero from "./Hero";
export default function BookingItem() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (id) {
  //     dispatch(getSingleRooms(id));
  //     dispatch(getAllRooms());
  //   }
  // }, [id]);
  // const { rooms, getsingleRoomisLoading } = useSelector((store) => store.room);
  // if (getsingleRoomisLoading) {
  //   return <Loader />;
  // }
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #f5f7fa, #fed6e3)",
      }}
    >
      <Navbar />
      <Hero/>
      <ProductInformation/>
    </div>
  );
}
