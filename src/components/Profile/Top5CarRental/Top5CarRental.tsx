"use client";
import Image from "next/image";
import React from "react";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@/utils/helpers";
import {
  Top5CarRental,
  Top5CarRentalContent,
  Top5CarRentalHeader,
} from "./index";
import BannerCard from "./BannerCard";
import Delivery from "@/components/Delivery";

const Top5CarRentals = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <Top5CarRental className="p-6 w-full h-fit">
      <Top5CarRentalHeader>
        <h1 className="font-bold text-xl mb-6">Top 5 Car Rental</h1>
      </Top5CarRentalHeader>
      <Top5CarRentalContent>
        <Image
          src="/maps.png"
          alt="maps"
          width={breakpoint === "mobile" ? 295 : 486}
          height={breakpoint === "mobile" ? 272 : 272}
          priority
        />
      </Top5CarRentalContent>
    </Top5CarRental>
  );
};

export default Top5CarRentals;
