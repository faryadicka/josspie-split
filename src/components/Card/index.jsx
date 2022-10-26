import React from "react";
import Button from "../Button";
import Slices from "../../assets/img/slices-sm.png";

const Card = ({
  image,
  type,
  place,
  totalSliced,
  totalEarn,
  limit,
  myEarnings,
  mySlices,
}) => {
  return (
    <div className="border relative rounded-2xl mb-[12px] sm:w-[30%]">
      <img src={image} alt="img-banner" />
      <div className="p-[20px]">
        {type === "stake" ? (
          <div className="flex justify-center flex-col text-center">
            <div className="flex justify-center gap-[10px]">
              <img src={Slices} alt="slices-sm" />
              <p>You have {mySlices} Slices </p>
            </div>
            <p className="text-[#666666] text-[12px]">
              ({mySlices} MONO to Stake)
            </p>
          </div>
        ) : (
          <div>
            <p>{place}</p>
            <div className="flex justify-between items-center">
              <p className="text-[12px]">Total Slices Staked</p>
              <p>{totalSliced} MONO</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[12px]">Total Earnings since Staked</p>
              <p>{totalEarn} USDT</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[12px]">Staked For</p>
              <p>{limit} days</p>
            </div>
            <div className="mt-[27px] p-[15px] bg-slate-200 rounded-[8px] text-center text-black">
              <p className="text-gray-500">My Earnings</p>
              <p className="font-medium">{myEarnings} USDT</p>
            </div>
          </div>
        )}
        <div className="flex justify-center mt-[80px]">
          <Button
            title="Claim"
            background={`${
              type === "stake"
                ? "bg-[#EB1673]"
                : type === "unStake"
                ? "bg-white"
                : "bg-black"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
