"use client";
import Image from "next/image";
import React from "react";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@/utils/helpers";
import {
  RecentTransaction,
  RecentTransactionContent,
  RecentTransactionHeader,
} from "./index";
import BannerCard from "./BannerCard";
import Delivery from "@/components/Delivery";

const RecentTransactions = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <RecentTransaction className="p-6 w-full">
      <RecentTransactionHeader>
        <h1 className="font-bold text-xl mb-6">Recent Transaction</h1>
      </RecentTransactionHeader>
      <RecentTransactionContent>
        <div className="flex mt-6 w-full justify-between">
          <div className="w-fit flex">
            <BannerCard carImageUrl="/nissan-gt-r.png" />
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
        <div className="border-t"></div>
        <div className="flex mt-6 w-full justify-between">
          <div className="w-fit flex">
            <BannerCard carImageUrl="/nissan-gt-r.png" />
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
        <div className="border-t"></div>
        <div className="flex mt-6 w-full justify-between">
          <div className="w-fit flex">
            <BannerCard carImageUrl="/nissan-gt-r.png" />
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
        <div className="border-t"></div>
        <div className="flex mt-6 w-full justify-between">
          <div className="w-fit flex">
            <BannerCard carImageUrl="/nissan-gt-r.png" />
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
      </RecentTransactionContent>
    </RecentTransaction>
  );
};

export default RecentTransactions;
