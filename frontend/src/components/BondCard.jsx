import { React, useState } from "react";

const BondCard = ({ indivisualevent }) => {
  const [event_image, setEvent_image] = useState("");
  const [event_name, setEvent_name] = useState("");
  const [event_description, setEvent_description] = useState("");
  const [event_date, setEvent_date] = useState("");
  const [event_location, setEvent_location] = useState("");
  const [event_mode, setEvent_mode] = useState("");
  const [event_isVerified, setEvent_isVerified] = useState(true);

  return (
    <div>
      {event_isVerified && (
        <div
          className="sm:w-[288px] w-full rounded-[15px] glassmorphism cursor-pointer m-2"
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
                NHAI
              </p>
            </div>

            <div className="block">
              <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">
                Bond Type :
              </h3>
              <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">
                Credit Rating:
              </h3>
              <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">
                Maturity Rate:
              </h3>
              <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">
                Coupon Rate:
              </h3>
            </div>

            <div className="flex items-center mt-[10px] gap-[12px]">
              <div className="w-[10px] h-[10px] rounded-full flex justify-center items-center bg-[#dddde3]"></div>
              <p className="font-epilogue font-normal text-[12px] text-[#808191]">
                <span className="text-black font-semibold">Face Value :</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BondCard;
