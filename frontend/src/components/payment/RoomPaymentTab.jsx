"use client";
import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function RoomPaymentTab() {
  // get the reservation Id from the search parameter
  const { id } = useParams();
  return (
   <div className="w-full">

   </div>
  );
}

