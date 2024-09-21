"use client";
import React from "react";
import Skeleton from "../Skeleton/index";

const BillingInfoSkeleton = () => {
  return (
    <div className="mobile:p-4 tablet:p-6 bg-white border-0 rounded-xl laptop:max-w-[852px] w-full h-fit ">
      <Skeleton
        baseColor="#85A8F8"
        highlightColor="#EFF3FD"
        borderRadius={30}
        count={1}
        wrapClassName="w-1/6"
      />
      <div className="flex justify-between mobile:mb-6 laptop:mb-8">
        <Skeleton
          baseColor="#EFF3FD"
          highlightColor="#FFF"
          borderRadius={30}
          count={1}
          wrapClassName="w-1/6"
        />
        <p className="mobile:text-xs laptop:text-sm text-[#90A3BF]">
          Step 1 of 4
        </p>
      </div>
      <div className="flex w-full gap-8">
        <div className="mobile:flex mobile:flex-col gap-4 w-full mb-6">
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
            borderRadius={10}
            count={1}
            className="h-10"
          />
        </div>
        <div className="mobile:flex mobile:flex-col gap-4 w-full mb-6">
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
            borderRadius={10}
            count={1}
            className="h-10"
          />
        </div>
      </div>
      <div className="flex w-full gap-8">
        <div className="mobile:flex mobile:flex-col gap-4 w-full mb-6">
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
            borderRadius={10}
            count={1}
            className="h-10"
          />
        </div>
        <div className="mobile:flex mobile:flex-col gap-4 w-full mb-6">
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
            borderRadius={10}
            count={1}
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingInfoSkeleton;
