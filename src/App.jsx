import React, { useState } from "react";
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import "./App.css";
import Layout from "./components/Layout";
import Card from "./components/Card";
import { dummy, filterMenu, sortMenu } from "./data";

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
  const [open, setOpen] = useState(true);

  return (
    <Layout
      isConnect={isConnect}
      setIsConnect={setIsConnect}
      open={open}
      setOpen={setOpen}
      title={title}
    >
      <div className="text-center mb-[40px] text-[#222121]">
        <p className="font-bold text-[32px]">
          My Slices{" "}
          <span className="text-[14px] text-[#666666]">({dummy.length})</span>
        </p>
      </div>
      <div className="flex w-full justify-between sm:justify-start gap-[13px] sm:items-start items-end sm:mx-[25px]">
        <div className="w-60">
          <p className="text-[#666666] text-[12px] sm:block mb-2">Sort by</p>
          <div className="border border-black rounded-xl p-2 ">
            {!clickedSort && (
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
            )}
            {clickedSort &&
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
              ))}
          </div>
        </div>
        <div className="sm:w-60 sm:block hidden">
          <p className="text-[#666666] text-[12px] mb-2">Filter by</p>
          <div className="border border-black rounded-xl p-2">
            {!clickedFilter && (
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
            )}
            {clickedFilter &&
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
              ))}
          </div>
        </div>
        <div className="w-24">
          <div></div>
          <div className="border border-black rounded-xl p-2 flex items-center justify-evenly sm:hidden">
            <AdjustmentsHorizontalIcon width={15} />
            <p>Filters</p>
          </div>
        </div>
      </div>
      <div className="mt-[20px] sm:flex sm:flex-wrap sm:justify-evenly">
        {dummy.slice(totalCard).map((item) => (
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
      {viewMore && (
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
