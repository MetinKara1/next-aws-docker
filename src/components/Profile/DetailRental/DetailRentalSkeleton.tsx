"use client";
import Image from "next/image";
import React from "react";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@/utils/helpers";
import { DetailRental, DetailRentalContent, DetailRentalHeader } from "./index";
import BannerCard from "./BannerCard";
import Delivery from "@/components/Delivery";
import Skeleton from "@/components/Skeleton/index";
import DeliverySkeleton from "@/components/DeliverySkeleton";

const DetailRentalSkeleton = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <DetailRental className="p-6 w-full">
      <DetailRentalHeader className="mb-4">
        <Skeleton
          baseColor="#85A8F8"
          highlightColor="#EFF3FD"
          borderRadius={50}
          count={1}
          wrapClassName="w-1/4"
        />
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
          <div className="w-full flex">
            <Image
              src="/thumbnail.png"
              alt="thumbnail"
              width={60}
              height={60}
              priority
            />
            <div className="mobile:ml-3 laptop:ml-4 w-full">
              <Skeleton
                baseColor="#85A8F8"
                highlightColor="#EFF3FD"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/4"
              />
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/4"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full">
              <Skeleton
                baseColor="#85A8F8"
                highlightColor="#EFF3FD"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/4"
              />
            </div>
          </div>
        </div>
        <div>
          <DeliverySkeleton />
          <DeliverySkeleton />
        </div>
        <div className="border-t"></div>
        <div className="flex justify-between items-center mt-9">
          <div className="w-full">
            <Skeleton
              baseColor="#85A8F8"
              highlightColor="#EFF3FD"
              borderRadius={50}
              count={1}
              wrapClassName="w-1/4"
            />
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={50}
              count={1}
              wrapClassName="w-1/4"
            />
          </div>
          <Skeleton
            baseColor="#3563E9"
            highlightColor="#EFF3FD"
            borderRadius={12}
            count={1}
            wrapClassName="w-1/4"
            className="h-10"
          />
        </div>
      </DetailRentalContent>
    </DetailRental>
  );
};

export default DetailRentalSkeleton;
