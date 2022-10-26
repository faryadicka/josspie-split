import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/img/logo.png";
import WhiteLogo from "../../assets/img/white-logo.png";
import Twit from "../../assets/img/Twit.png";
import Insta from "../../assets/img/Insta.png";
import Tele from "../../assets/img/Tele.png";
import Wallet from "../../assets/img/wallet.png";

function Layout({ children, isConnect, setIsConnect }) {
  // const [isConnect, setIsConnect] = useState(false);

  return (
    <React.Fragment>
      <nav className="font-inter p-5 md:p-10 border-b-4 drop-shadow-[5px]">
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <ul className="flex items-center gap-2 sm:gap-4 text-xs sm:text-md">
            <li>Explore Properties</li>
            {!isConnect ? (
              <>
                <li
                  onClick={() => {
                    setIsConnect(!isConnect);
                  }}
                  className="border border-black p-2 rounded-full cursor-pointer"
                >
                  <div className="flex items-center gap-[5px]">
                    <img src={Wallet} alt="WALLET" />
                    <p>Connect</p>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>My Slices</li>
                <li className="border border-black p-2 rounded-full ">
                  <UserCircleIcon width={20} />
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <main className="p-[25px]">{children}</main>
      <footer className="bg-black w-full">
        <div className="text-white p-5 md:p-10">
          <div className="flex justify-center sm:justify-between items-center gap-5 flex-col sm:flex-row">
            <div className="sm:w-[300px]">
              <img src={WhiteLogo} alt="logo" />
              <p className="text-[12px] hidden sm:block sm:mt-[30px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, numy
                eirmod tempor invidunt ut labore et dolquyam.{" "}
              </p>
            </div>
            <div className="flex gap-[60px]">
              <img src={Twit} alt="logo" />
              <img src={Insta} alt="logo" />
              <img src={Tele} alt="logo" />
            </div>
            <p className="font-normal sm:hidden">
              All Rights Reserved. Josspie 2022.
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;
