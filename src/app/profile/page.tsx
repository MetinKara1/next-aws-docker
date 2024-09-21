import Menu from "@/components/Profile/Menu/Menu";
import React from "react";
import DetailRental from "@/components/Profile/DetailRental/DetailRental";
import Top5CarRentals from "@/components/Profile/Top5CarRental/Top5CarRental";
import RecentTransactions from "@/components/Profile/RecentTransaction/RecentTransaction";

const Page = () => {
  return (
    <div className="h-full">
      <div className="mobile:flex mobile:flex-col laptop:flex laptop:flex-row w-full">
        <div className="mobile:hidden laptop:block max-w-[286px] w-full">
          <Menu />
        </div>
        <div className="mobile:flex mobile:flex-col desktop:flex desktop:flex-row w-full desktop:gap-8">
          <div className="mobile:m-6 laptop:mx-8 desktop:mr-0 bg-white border-0 rounded-xl">
            <DetailRental />
          </div>
          <div>
            <div className="mobile:m-6 laptop:mx-8 desktop:ml-0 bg-white border-0 rounded-xl h-fit">
              <Top5CarRentals />
            </div>
            <div className="mobile:m-6 laptop:mx-8 desktop:ml-0 bg-white border-0 rounded-xl h-fit">
              <RecentTransactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
