import { symbol } from "prop-types";
import { React, useState, useEffect } from "react";

const BondCard = ({
  symbol,
  bondtype,
  creditRating,
  maturityDate,
  couponrate,
  facevalue,
}) => {
  return (
    <div>
      <div
        className="sm:w-[288px] w-full rounded-[15px] glassmorphism cursor-pointer m-2 mt-10"
        onClick={() => {}}
      >
        <img
          src="https://cdn-scripbox-wordpress.scripbox.com/wp-content/uploads/2020/10/bonds-vector.png"
          alt="fund"
          className="w-full h-[158px] object-cover rounded-[15px] p-1"
        />

        <div className="flex flex-col p-4">
          <div className="flex flex-row items-center mb-[18px]">
            <img
              src="https://compile.blog/wp-content/uploads/2021/11/Web3-Icon-3.png"
              alt="tag"
              className="w-[17px] h-[17px] object-contain"
            />
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-black">
              {symbol}
            </p>
          </div>

          <div className="block">
            <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">
              Bond Type : {bondtype}
            </h3>
            <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">
              Credit Rating: {creditRating}
            </h3>
            <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">
              Maturity Date: {maturityDate}
            </h3>
            <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">
              Coupon Rate: {couponrate}
            </h3>
          </div>

          <div className="flex items-center mt-[10px] gap-[12px]">
            <div className="w-[10px] h-[10px] rounded-full flex justify-center items-center bg-[#dddde3]"></div>
            <p className="font-epilogue font-normal text-[12px] text-[#808191]">
              <span className="text-black font-semibold">
                Face Value : {facevalue}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondCard;
