import React, { useState } from "react";
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import "./App.css";
import Layout from "./components/Layout";
import Card from "./components/Card";
import ImgSlices from "../src/assets/img/slices-img.png";
import { dummy, filterMenu, sortMenu } from "./data";
import Button from "./components/Button";

function App() {
  const slices = 2;
  const [sortValue, setsortValue] = useState("Popular");
  const [filterValue, setfilterValue] = useState("All");
  const [title, setTitle] = useState("Stake");
  const [totalCard, setTotalCard] = useState(4);
  const [viewMore, setViewMore] = useState(true);
  const [clickedFilter, setclickedFilter] = useState(false);
  const [clickedSort, setclickedSort] = useState(false);
  const [isConnect, setIsConnect] = useState(false);
  const [open, setOpen] = useState(false);
  const [mySlices, setMySlices] = useState([]);

  const handleConnectWallet = () => {
    setIsConnect(!isConnect);
    setMySlices(dummy);
  };

  return (
    <Layout
      isConnect={isConnect}
      handleConnectWallet={handleConnectWallet}
      open={open}
      setOpen={setOpen}
      title={title}
    >
      <div className="text-center mb-[40px] text-[#222121]">
        <p className="font-bold text-[32px]">
          My Slices{" "}
          <span className="text-[14px] text-[#666666]">
            ({mySlices.length})
          </span>
        </p>
      </div>
      {mySlices.length > 0 ? (
        <div className="flex w-full justify-between sm:justify-start gap-[13px] sm:items-start items-end sm:mx-[25px]">
          <div className="w-60">
            <p className="text-[#666666] text-[12px] sm:block mb-2">Sort by</p>
            <div className="border border-black rounded-xl p-2 ">
              <div className="flex items-center justify-between">
                <p>{sortValue}</p>
                <div
                  onClick={() => {
                    setclickedSort(!clickedSort);
                  }}
                >
                  <ChevronDownIcon className="cursor-pointer" width={15} />
                </div>
              </div>
              {/* {!clickedSort && (
                <div className="flex items-center justify-between">
                  <p>{sortValue}</p>
                  <div
                    onClick={() => {
                      setclickedSort(!clickedSort);
                    }}
                  >
                    <ChevronDownIcon className="cursor-pointer" width={15} />
                  </div>
                </div>
              )} */}
              {/* {clickedSort &&
                sortMenu.map((item, idx) => (
                  <div
                    onClick={() => {
                      setsortValue(item.label);
                      setclickedSort(!clickedSort);
                    }}
                    key={idx}
                    className={`${
                      sortMenu.length - 1 === idx
                        ? ""
                        : "border-b border-[#666666]"
                    } py-[5px]`}
                  >
                    <p className="cursor-pointer text-[14px]">{item.label}</p>
                  </div>
                ))} */}
            </div>
            {!clickedSort && (
              <div className="border border-black p-[10px] mt-[10px] absolute z-10 bg-white w-60 rounded-lg">
                {sortMenu.map((item, idx) => (
                  <p
                    onClick={() => {
                      setsortValue(item.label);
                      setclickedSort(!clickedFilter);
                    }}
                    key={idx}
                    className={`${
                      filterMenu.length - 1 === idx
                        ? ""
                        : "border-b border-[#666666]"
                    } py-[5px] cursor-pointer`}
                  >
                    {item.label}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="sm:w-60 sm:block hidden">
            <p className="text-[#666666] text-[12px] mb-2">Filter by</p>
            <div className="border border-black rounded-xl p-2">
              <div className="flex items-center justify-between">
                <p>{filterValue}</p>
                <div
                  onClick={() => {
                    setclickedFilter(!clickedFilter);
                  }}
                >
                  <ChevronDownIcon className="cursor-pointer" width={15} />
                </div>
              </div>
              {/* {!clickedFilter && (
                <div className="flex items-center justify-between">
                  <p>{filterValue}</p>
                  <div
                    onClick={() => {
                      setclickedFilter(!clickedFilter);
                    }}
                  >
                    <ChevronDownIcon className="cursor-pointer" width={15} />
                  </div>
                </div>
              )} */}
              {/* {clickedFilter &&
                filterMenu.map((item, idx) => (
                  <div
                    onClick={() => {
                      setfilterValue(item.label);
                      setclickedFilter(!clickedFilter);
                    }}
                    key={idx}
                    className={`${
                      filterMenu.length - 1 === idx
                        ? ""
                        : "border-b border-[#666666]"
                    } py-[5px]`}
                  >
                    <p className="cursor-pointer">{item.label}</p>
                  </div>
                ))} */}
            </div>
            {!clickedFilter && (
              <div className="border border-black p-[10px] mt-[10px] absolute z-10 bg-white w-60 rounded-lg">
                {filterMenu.map((item, idx) => (
                  <p
                    onClick={() => {
                      setfilterValue(item.label);
                      setclickedFilter(!clickedFilter);
                    }}
                    key={idx}
                    className={`${
                      filterMenu.length - 1 === idx
                        ? ""
                        : "border-b border-[#666666]"
                    } py-[5px] cursor-pointer`}
                  >
                    {item.label}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="w-24">
            <div
              onClick={() => {
                setclickedFilter(!clickedFilter);
              }}
              className={`border border-black rounded-xl p-2 flex items-center justify-evenly sm:hidden`}
            >
              <AdjustmentsHorizontalIcon width={15} />
              <p>Filters</p>
              {/* {clickedFilter && (
                <>
                  <AdjustmentsHorizontalIcon width={15} />
                  <p>Filters</p>
                </>
              )} */}
              {/* {!clickedFilter &&
                filterMenu.map((item, idx) => (
                  <div
                    onClick={() => {
                      setfilterValue(item.label);
                      setclickedFilter(!clickedFilter);
                    }}
                    key={idx}
                    className={`${
                      filterMenu.length - 1 === idx
                        ? ""
                        : "border-b border-[#666666]"
                    } py-[5px]`}
                  >
                    <p className="cursor-pointer">{item.label}</p>
                  </div>
                ))} */}
            </div>
          </div>
          {!clickedFilter && (
            <div className="border border-black p-[10px] mt-[10px] absolute z-10 bg-white w-60 rounded-lg sm:hidden top-[260px] right-[21px]">
              {filterMenu.map((item, idx) => (
                <p
                  onClick={() => {
                    setfilterValue(item.label);
                    setclickedFilter(!clickedFilter);
                  }}
                  key={idx}
                  className={`${
                    filterMenu.length - 1 === idx
                      ? ""
                      : "border-b border-[#666666]"
                  } py-[5px] cursor-pointer`}
                >
                  {item.label}
                </p>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div class="flex justify-center items-center flex-col">
          <div className="">
            <img src={ImgSlices} alt="slices" />
          </div>
          <p class="text-[35px] font-bold">Buy Your First Slice</p>
          <div className="w-[80%] sm:w-[30%] text-[#666666]">
            <p className="text-center">
              Joss buys a property (Pie) and sales shares in the future profit
              the property will be generating (Slices)
            </p>
          </div>
          <div className="mt-[20px]">
            <Button
              text="text-white"
              background="bg-[#EB1673]"
              isPosition={false}
              title="Explore Pies"
            />
          </div>
        </div>
      )}
      <div className="mt-[20px] sm:flex sm:flex-wrap sm:justify-evenly">
        {mySlices.slice(totalCard).map((item) => (
          <Card
            open={open}
            setOpen={setOpen}
            key={item.id}
            image={item.image}
            type={item.type}
            totalEarn={item.totalEarnings}
            totalSliced={item.totalSlicedStaked}
            limit={item.limit}
            myEarnings={item.myEarnings}
            mySlices={item.mySlices}
            setTitle={setTitle}
            label={item.label}
            place={item.place}
          />
        ))}
      </div>
      {viewMore && mySlices.length > 0 && (
        <div className="flex justify-center">
          <button
            onClick={() => {
              setTotalCard(null);
              setViewMore(!viewMore);
              window.scrollTo(0, 0);
            }}
            className="text-black p-[12.5px] w-full sm:w-[300px] my-[80px] rounded-full border border-black font-medium"
          >
            VIEW MORE
          </button>
        </div>
      )}
    </Layout>
  );
}

export default App;
