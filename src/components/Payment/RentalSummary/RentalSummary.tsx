"use client";
import React from "react";
import Image from "next/image";
import { BREAKPOINTS } from "@/utils/helpers";
import useBreakpoint from "use-breakpoint";
import { useIcons } from "../../icons/use-icon";
import { Card, CardContent, CardFooter, CardHeader } from "./index";

const RentalSummary = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { StarIcon, StarOutlineIcon } = useIcons();
  return (
    <Card className="mobile:p-4 laptop:p-6 bg-white border-0 rounded-xl w-full h-fit laptop:max-w-[492px] laptop:sticky laptop:top-[156px]">
      <CardHeader>
        <h1 className="pb-1 mobile:text-md laptop:text-xl font-bold">
          Rental Summary
        </h1>
        <p className="text-[#90A3BF] mobile:pb-6 laptop:pb-8 mobile:text-xs laptop:text-sm">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <div
            className="border-0 rounded-xl w-fit px-2 py-9 mr-4"
            style={{
              backgroundImage: "url(/bg-2.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#3563E9",
            }}
          >
            <Image
              src="/nissan-gt-r.png"
              alt="avatar"
              width={breakpoint === "mobile" ? 116 : 132}
              height={breakpoint === "mobile" ? 80 : 108}
              priority
            />
          </div>
          <div>
            <h1 className="mobile:text-xl laptop:text-[32px] font-bold mb-2">
              Nissan GT-R
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex">
                <StarIcon
                  width={breakpoint === "mobile" ? 12 : 20}
                  height={breakpoint === "mobile" ? 12 : 20}
                />
                <StarIcon
                  width={breakpoint === "mobile" ? 12 : 20}
                  height={breakpoint === "mobile" ? 12 : 20}
                />
                <StarIcon
                  width={breakpoint === "mobile" ? 12 : 20}
                  height={breakpoint === "mobile" ? 12 : 20}
                />
                <StarIcon
                  width={breakpoint === "mobile" ? 12 : 20}
                  height={breakpoint === "mobile" ? 12 : 20}
                />
                <StarOutlineIcon
                  width={breakpoint === "mobile" ? 12 : 20}
                  height={breakpoint === "mobile" ? 12 : 20}
                />
              </div>
              <div className="text-[#596780] mobile:text-xs tablet:text-lg">
                440+ Reviewer
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#C3D4E9] my-8"></div>
        <div>
          <div className="flex justify-between mb-6">
            <p className="text-[#90A3BF] mobile:text-xs laptop:text-md">
              Subtotal
            </p>
            <p className="font-semibold text-md">$80.00</p>
          </div>
          <div className="flex justify-between mb-6">
            <p className="text-[#90A3BF] mobile:text-xs laptop:text-md">Tax</p>
            <p className="font-semibold text-md">$0</p>
          </div>
        </div>
        <div className="mb-8">
          <input type="text" placeholder="Apply promo code" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center">
          <div>
            <p className="mobile:text-md laptop:text-xl font-bold">
              Total Rental Price
            </p>
            <p className="mobile:text-xs laptop:text-sm text-[#90A3BF]">
              Overall price and includes rental discount
            </p>
          </div>
          <div>
            <p className="mobile:text-xl laptop:text-[32px] font-bold">
              $80.00
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RentalSummary;
