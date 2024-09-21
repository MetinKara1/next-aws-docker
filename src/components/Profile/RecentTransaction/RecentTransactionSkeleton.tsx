"use client";
import Image from "next/image";
import React from "react";
import {
  RecentTransaction,
  RecentTransactionContent,
  RecentTransactionHeader,
} from "./index";
import BannerCard from "./BannerCard";
import Skeleton from "@/components/Skeleton/index";

const RecentTransactionSkeleton = () => {
  return (
    <RecentTransaction className="p-6 w-full">
      <RecentTransactionHeader>
        <Skeleton
          baseColor="#85A8F8"
          highlightColor="#EFF3FD"
          borderRadius={50}
          count={1}
          wrapClassName="w-1/4"
        />
      </RecentTransactionHeader>
      <RecentTransactionContent>
        <div className="flex mt-6 w-full justify-between mb-4">
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
                wrapClassName="w-1/2"
              />
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/2"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full justify-end">
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/4"
              />
            </div>
          </div>
        </div>
        <div className="border-t"></div>
        <div className="flex mt-6 w-full justify-between mb-4">
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
                wrapClassName="w-1/2"
              />
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/2"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full justify-end">
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/4"
              />
            </div>
          </div>
        </div>
        <div className="border-t"></div>
        <div className="flex mt-6 w-full justify-between mb-4">
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
                wrapClassName="w-1/2"
              />
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/2"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full justify-end">
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/4"
              />
            </div>
          </div>
        </div>
        <div className="border-t"></div>
        <div className="flex mt-6 w-full justify-between mb-4">
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
                wrapClassName="w-1/2"
              />
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/2"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full justify-end">
              <Skeleton
                baseColor="#EFF3FD"
                highlightColor="#FFF"
                borderRadius={50}
                count={1}
                wrapClassName="w-1/4"
              />
            </div>
          </div>
        </div>
      </RecentTransactionContent>
    </RecentTransaction>
  );
};

export default RecentTransactionSkeleton;
