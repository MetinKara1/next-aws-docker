"use client";
import React from "react";
import useBreakpoint from "use-breakpoint";
import Button from "@/components/Button/index";
import Delivery from "@/components/Homepage/Delivery";
import { useIcons } from "@/components/icons/use-icon";
import { BREAKPOINTS } from "@/utils/helpers";
import CardVechile from "../../components/Card/index";
import Filter from "@/components/Search/Filter";

const Search = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { SwapIcon } = useIcons();
  return (
    <div className="flex h-full w-full justify-center">
      <div className="mobile:hidden laptop:block">
        <Filter />
      </div>
      <div className="mobile:px-6 laptop:px-8 flex-col items-center w-full">
        <div className="mt-8 laptop:flex desktop:flex-row mobile:flex mobile:flex-col w-full items-center laptop:gap-8 desktop:gap-8">
          <Delivery title="Pick-Up" iconColor="#3563E9" />
          <div className="mobile:-my-2 desktop:my-0 z-10">
            <Button
              type="primary"
              variant="large"
              onClick={() => {}}
              iconOnly={<SwapIcon fill="white" />}
            />
          </div>
          <Delivery title="Drop-Off" iconColor="#54A6FF" />
        </div>
        <div className="grid tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-8 mt-5 w-full">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item, i) => {
            return <CardVechile key={i} />;
          })}
        </div>
        <div className="w-full flex justify-center mobile:my-12 tablet:my-16">
          <div className="relative flex justify-between items-center">
            <Button
              text="Show more car"
              type="primary"
              variant={breakpoint === "mobile" ? "medium" : "large"}
              onClick={() => {}}
            />
          </div>
          <div className="flex items-center">
            <p className="absolute mobile:right-6 tablet:right-8 laptop:right-12 desktop:right-16 text-md text-[#90A3BF]">
              120 Car
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
