import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import Image from "../common/Image";
import { offCartModal } from "../../slices/modalSlice";
import { slideLeft } from "@/utils/framer";
import { Link } from "react-router-dom";
import Curtain from "@/animations/Curatin";

export default function CartSidebar() {
  const { cartmodal } = useSelector((store) => store.modal);
  const { cart, totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  // console.log(cart);
  return (
    <motion.div
      initial="initial"
      animate={cartmodal ? "enter" : "exit"}
      exit={"exit"}
      variants={slideLeft}
      className="w-full fixed top-0 z-[20000] right-0 h-[100vh]"
    >
      <div
        onClick={() => dispatch(offCartModal())}
        className="absolute w-full h-full z-10 bg-[rgba(0,0,0,.1)]"
      ></div>
      <div className="w-[90%] md:w-[400px] z-20 relative shadow-sm flex h-full bg-white flex-col gap-4">
        <div className="py-6 px-4 border-b flex relative items-center justify-between w-full">
          <span className="text-2xl family2 font-bold">Your Cart</span>
          <span
            onClick={() => dispatch(offCartModal())}
            className="w-12 h-12 text-xl cursor-pointer hover:bg-[#eee] rounded-full flex items-center justify-center"
          >
            <RxCross1 />
          </span>
        </div>
        {cart?.length !== 0 ? (
          <div className="w-full h-full flex justify-between flex-col gap-4">
            <div className="w-full flex flex-col gap-4">
              {cart?.map((cartitems, index) => {
                return (
                  <div className="w-full flex px-4 items-center gap-4">
                    <div className="w-16">
                      <Image src={cartitems?.images[0]} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h5 className="text-lg font-bold">{cartitems?.title}</h5>
                      <h6 className="text-sm font-bold">
                        <span className="text-grey family1 font-normal">Quantity: </span>
                        {cartitems?.quantity}
                      </h6>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full py-3 pt-4 px-4  border-t  flex flex-col gap-4">
              <div className="w-full flex items-center justify-between">
                <span className="text-lg family1 font-normal">Sub Total</span>
                <span className="font-bold family1">$ {totalPrice} USD</span>
              </div>
              <Link
                to={`/checkout`}
                style={{
                  transition: "all 1.5s var(--transition)",
                }}
                className="h-16 w-[100%] mx-auto text-white bg-[#000] rounded-full uppercase family2 text-lg md:text-xl font-black"
              >
                <Curtain bgColor={"var(--primary)"}>
                  Proceed to Checkout
                </Curtain>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex w-full h-full items-center justify-center flex-col gap-8">
            <div className="w-40">
              <Image
                src={
                  "https://cdn.prod.website-files.com/5d820ccf1097dd2dccadc680/5d85ef3882aa6e5dc3a85e6f_empty-cart.svg"
                }
              />
            </div>
            <h4 className="text-4xl family2 font-bold max-w-[300px] mx-auto text-center">
              Your cart is empty Shop now
            </h4>
          </div>
        )}
      </div>
    </motion.div>
  );
}
