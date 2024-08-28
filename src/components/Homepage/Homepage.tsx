"use client";
import { BREAKPOINTS } from "@/utils/helpers";
import React from "react";
import useBreakpoint from "../../../node_modules/use-breakpoint/dist/esm/useBreakpoint";
import Button from "../Button/index";
import { useIcons } from "../icons/use-icon";
import Card from "./Card";

const Homepage = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { HeartIcon, WebChatIcon, TriangleIcon, SwapIcon } = useIcons();
  return (
    <div className="">
      <div className="flex gap-8 w-full mobile:px-6 tablet:px-[64px]">
        <Card
          title="The Best Platform for Rental Car"
          description="Ease of doing a car rental safely and reliably. Of course at a low price."
          buttonText="Rental Car"
          imageUrl="/koenigsegg.png"
          key="first"
          bgColor="#54A6FF"
          buttonBgColor="#3563E9"
        />
        {breakpoint !== "mobile" && (
          <Card
            title="Easy way to rent a car at a low price"
            description="Providing cheap car rental services and safe and comfortable facilities."
            buttonText="Rental Car"
            imageUrl="/nissan-gt-r.png"
            key="second"
            bgColor="#3563E9"
            buttonBgColor="#54A6FF"
          />
        )}
      </div>
    </div>
  );
};

export default Homepage;
