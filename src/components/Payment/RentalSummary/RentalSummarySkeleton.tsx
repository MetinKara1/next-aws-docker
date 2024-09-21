"use client";
import React from "react";
import Image from "next/image";
import { BREAKPOINTS } from "@/utils/helpers";
import useBreakpoint from "use-breakpoint";
import { useIcons } from "../../icons/use-icon";
import { Card, CardContent, CardFooter, CardHeader } from "./index";
import Skeleton from "@/components/Skeleton/index";

const RentalSummarySkeleton = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { StarIcon, StarOutlineIcon } = useIcons();
  return (
    <Card className="mobile:p-4 laptop:p-6 bg-white border-0 rounded-xl w-full h-fit laptop:max-w-[492px] laptop:sticky laptop:top-[156px]">
      <CardHeader>
        <Skeleton
          baseColor="#85A8F8"
          highlightColor="#EFF3FD"
          borderRadius={30}
          count={1}
          wrapClassName="w-1/6"
        />
        <Skeleton
          baseColor="#EFF3FD"
          highlightColor="#FFF"
          borderRadius={30}
          count={1}
          wrapClassName="w-1/6"
        />
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <div className="border-0 rounded-xl w-fit px-2 py-9 mr-4">
            <Image
              src="/thumbnail.png"
              alt="avatar"
              width={60}
              height={60}
              priority
            />
          </div>
          <div className="w-full">
            <Skeleton
              baseColor="#85A8F8"
              highlightColor="#EFF3FD"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/3"
            />
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/3"
            />
          </div>
        </div>
        <div className="border-t border-[#C3D4E9] my-8"></div>
        <div>
          <div className="flex justify-between mb-6">
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/6"
            />
            <Skeleton
              baseColor="#85A8F8"
              highlightColor="#EFF3FD"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/6"
            />
          </div>
          <div className="flex justify-between mb-6">
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/6"
            />
            <Skeleton
              baseColor="#85A8F8"
              highlightColor="#EFF3FD"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/6"
            />
          </div>
        </div>
        <div className="w-full mb-8">
          <Skeleton
            baseColor="#EFF3FD"
            highlightColor="#FFF"
            borderRadius={12}
            count={1}
            wrapClassName="w-full"
            className="h-10"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center">
          <div className="w-full">
            <Skeleton
              baseColor="#85A8F8"
              highlightColor="#EFF3FD"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/4"
            />
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/4"
            />
          </div>
          <div className="w-full">
            <Skeleton
              baseColor="#85A8F8"
              highlightColor="#EFF3FD"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/2"
              className="h-10"
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RentalSummarySkeleton;
