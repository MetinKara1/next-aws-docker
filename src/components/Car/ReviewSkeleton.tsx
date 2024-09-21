"use client";
import Image from "next/image";
import React from "react";
import Skeleton from "../Skeleton/index";

const ReviewSkeleton = () => {
  return (
    <div className="mobile:p-4 laptop:p-6 bg-white border-0 rounded-xl w-full">
      <div className="flex pb-8 gap-6">
        <Skeleton
          baseColor="#85A8F8"
          highlightColor="#EFF3FD"
          borderRadius={30}
          count={1}
          wrapClassName="w-1/6"
        />
        <Skeleton
          baseColor="#85A8F8"
          highlightColor="#EFF3FD"
          borderRadius={50}
          count={1}
          wrapClassName="w-4"
        />
      </div>
      {[0, 1].map((item: any, i: number) => (
        <div className="flex flex-col mb-6" key={i}>
          <div className="border-0 rounded-full mobile:pr-2 latop:pr-4 flex">
            <Image
              src="/thumbnail.png"
              alt="avatar"
              width={60}
              height={60}
              priority
            />
            <div className="w-full flex justify-between ml-4">
              <div className="w-full flex flex-col justify-between">
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
              <div className="w-full flex flex-col justify-between items-end">
                <Skeleton
                  baseColor="#EFF3FD"
                  highlightColor="#FFF"
                  borderRadius={30}
                  count={1}
                  wrapClassName="w-1/3"
                />
                <Skeleton
                  baseColor="#85A8F8"
                  highlightColor="#EFF3FD"
                  borderRadius={30}
                  count={1}
                  wrapClassName="w-1/3"
                />
              </div>
            </div>
          </div>

          <Skeleton
            baseColor="#EFF3FD"
            highlightColor="#FFF"
            borderRadius={30}
            count={1}
            wrapClassName="w-full mt-4"
            className="h-20"
          />
        </div>
      ))}
      <div className="w-full flex justify-center">
        <Skeleton
          baseColor="#3563E9"
          highlightColor="#f9f9f9"
          borderRadius={30}
          count={1}
          className="w-1/3 h-10"
        />
      </div>
    </div>
  );
};

export default ReviewSkeleton;
