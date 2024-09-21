"use client";
import React from "react";
import Skeleton from "./Skeleton/index";

const DeliverySkeleton = () => {
  return (
    <div className="w-full flex justify-around">
      <div className=" bg-white w-full py-6">
        <div className="flex items-center mb-4">
          <Skeleton
            baseColor="#85A8F8"
            highlightColor="#EFF3FD"
            borderRadius={30}
            count={1}
            wrapClassName="w-1/6"
          />
        </div>
        <div className="flex-col justify-center items-around w-full">
          <div className="flex justify-between">
            <div className="flex flex-col w-full">
              <Skeleton
                baseColor="#85A8F8"
                highlightColor="#EFF3FD"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/2"
              />
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/2"
              />
            </div>
            <div className="flex flex-col w-full">
              <Skeleton
                baseColor="#85A8F8"
                highlightColor="#EFF3FD"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/2"
              />
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/2"
              />
            </div>
            <div className="flex flex-col w-full">
              <Skeleton
                baseColor="#85A8F8"
                highlightColor="#EFF3FD"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/2"
              />
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySkeleton;
