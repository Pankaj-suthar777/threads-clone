import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import MobileNavBar from "./MobileNav";
import Image from "next/image";
import AddThread from "../threads/AddThreads";

const BaseComponent = () => {
  return (
    <div className="md:container p-5">
      <div className="flex">
        <LeftSidebar />
        <div className="h-screen w-full lg:w-2/4 md:w-3/4 md:px-8 lg:py-4 xl:px-12 md:p-6">
          <MobileNavBar />
          <div className="flex justify-center items-center">
            <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
          </div>
          <AddThread />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default BaseComponent;
