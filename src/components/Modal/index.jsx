import React from "react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import ImageModal from "../../assets/img/modal-img.png";
import Slices from "../../assets/img/slices-sm.png";
import Button from "../Button";

const Modal = ({ setOpen, open, title }) => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      {open && (
        <>
          <div className="z-9 bg-black w-full h-full fixed opacity-80 top-0"></div>
          <div className="z-11 fixed top-0 w-full h-full flex justify-center items-end sm:items-center">
            <div className="bg-white w-full sm:h-[633px] sm:w-[375px] h-[93vh] sm:rounded-[20px] rounded-t-[20px] p-[20px]">
              <div className="flex flex-row-reverse">
                <XMarkIcon
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="text-black w-8 font-bold cursor-pointer"
                />
              </div>
              <p className="text-[24px] text-center font-bold">{title}</p>
              <div className="flex justify-center gap-[20px] items-center w-[80%] mx-auto mt-[30px]">
                <img src={ImageModal} alt="img-modal" />
                <div>
                  <p>Uluwatu, Bali</p>
                  <p className="text-[18px] font-[600]">Villa Monopoly</p>
                </div>
              </div>
              {title === "Claim" || title === "Unstake" ? (
                <div className="flex justify-center flex-col items-center mb-[40px]">
                  <p className="text-[#666666] text-center mt-[35px]">
                    Staked Slices
                  </p>
                  <div className="border w-[70%] bg-gray-100 mt-[10px] text-center p-[10px] rounded-[10px]">
                    <p className="font-[500] text-[18px]">4 MONO</p>
                  </div>
                  {title !== "Unstake" && (
                    <>
                      <p className="text-[#666666] text-center mt-[35px]">
                        Claim your earnings
                      </p>
                      <div className="border w-[70%] bg-gray-100 mt-[10px] text-center p-[10px] rounded-[10px]">
                        <p className="font-[500] text-[18px]">9,999.99 USDT</p>
                      </div>
                    </>
                  )}
                  {title === "Unstake" && (
                    <div className="w-[50%] mt-[40px]">
                      <p className="text-center text-[500]">
                        You have not completed a full month stake, are you sure
                        you want to unstake now?
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mb-[40px]">
                  <p className="font-bold text-center mt-[35px]">
                    Amount of Slices
                  </p>
                  <div className="flex items-center gap-[23px] w-[100%] justify-center mx-auto mt-[20px]">
                    <div className="p-[3px] border border-black rounded-full">
                      <MinusIcon
                        onClick={() => {
                          if (count > 0) {
                            setCount(count - 1);
                          }
                        }}
                        className="text-black w-5 font-bold cursor-pointer"
                      />
                    </div>
                    <div className="p-[4px] border w-[140px] h-[98px] rounded-[10px] flex flex-col gap-0 justify-center items-center">
                      <p className="text-[45px] font-bold">{count}</p>
                      <p className="text-[14px]">MONO</p>
                    </div>
                    <div className="p-[3px] border border-black rounded-full">
                      <PlusIcon
                        onClick={() => {
                          if (count < 4) {
                            setCount(count + 1);
                          }
                        }}
                        className="text-black w-5 font-bold cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center flex-col text-center mt-[35px]">
                    <div className="flex justify-center gap-[10px] items-center">
                      <img src={Slices} alt="slices-sm" />
                      <p>You have {4} Slices </p>
                      <p className="text-[#666666] text-[12px]">({4} MONO)</p>
                    </div>
                    <div className="mt-[10px]">
                      <Button
                        title="Use Max"
                        background="bg-transparent"
                        text="text-black"
                        isPosition={false}
                        border="border border-black"
                        width="100px"
                        padding="5px"
                      />
                    </div>
                  </div>
                </div>
              )}
              {title === "Claim" && (
                <div className="w-full mb-[10px] flex justify-center mx-auto">
                  <Button
                    title="Unstake & Claim"
                    isPosition={false}
                    background="bg-white"
                    text="text-black"
                    border="border border-black"
                  />
                </div>
              )}
              <div className="w-full mb-[10px] flex justify-center mx-auto">
                <Button
                  title={`${
                    title === "Claim"
                      ? "Claim Now"
                      : title === "Stake"
                      ? "Stake Now"
                      : "Unstake"
                  }`}
                  isPosition={false}
                  background="bg-[#EB1673]"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Modal;
