"use client";
import Image from "next/image";
import React from "react";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@/utils/helpers";
import { DetailRental, DetailRentalContent, DetailRentalHeader } from "./index";
import BannerCard from "./BannerCard";
import Delivery from "@/components/Delivery";

const DetailRentals = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <DetailRental className="p-6 w-full">
      <DetailRentalHeader>
        <h1 className="font-bold text-xl mb-6">Details Rental</h1>
      </DetailRentalHeader>
      <DetailRentalContent>
        <Image
          src="/maps.png"
          alt="maps"
          width={breakpoint === "mobile" ? 295 : 486}
          height={breakpoint === "mobile" ? 272 : 272}
          priority
        />
        <div className="flex mt-6 w-full justify-between">
          <div className="w-fit flex">
            <BannerCard
              bgImageUrl="/bg-2.png"
              carImageUrl="/nissan-gt-r.png"
              bgColor="#3563E9"
            />
            <div className="mobile:ml-3 laptop:ml-4">
              <p className="font-bold mobile:text-xl laptop:text-2xl mb-2">
                Nissan GT - R
              </p>
              <p className="mobile:text-xs laptop:text-sm">Sport Car</p>
            </div>
          </div>
          <div className="">
            <div className="flex w-full">
              <p className="text-[#90A3BF]">#1903</p>
            </div>
          </div>
        </div>
        <div>
          <Delivery title="Pick-Up" iconColor="#3563E9" />
          <Delivery title="Drop-Off" iconColor="#54A6FF" />
        </div>
        <div className="border-t"></div>
        <div className="flex justify-between items-center mt-9">
          <div className="">
            <p className="font-bold mobile:text-md laptop:text-xl">
              Total Rental Price
            </p>
            <p className="mobile:text-xs laptop:text-sm text-[#90A3BF]">
              Overall price and includes rental discount
            </p>
          </div>
          <div>
            <p className="font-bold mobile:text-xl laptop:text-[32px]">
              $80.00
            </p>
          </div>
        </div>
      </DetailRentalContent>
    </DetailRental>
  );
};

export default DetailRentals;
