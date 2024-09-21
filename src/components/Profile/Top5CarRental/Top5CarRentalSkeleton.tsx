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
import Skeleton from "@/components/Skeleton/index";

const Top5CarRentalSkeleton = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <Top5CarRental className="p-6 w-full h-fit">
      <Top5CarRentalHeader className="mb-4">
        <Skeleton
          baseColor="#85A8F8"
          highlightColor="#EFF3FD"
          borderRadius={50}
          count={1}
          wrapClassName="w-1/4"
        />
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

export default Top5CarRentalSkeleton;
