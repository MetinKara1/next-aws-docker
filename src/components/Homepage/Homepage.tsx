"use client";
import { BREAKPOINTS } from "@/utils/helpers";
import React from "react";
import useBreakpoint from "../../../node_modules/use-breakpoint/dist/esm/useBreakpoint";
import Button from "../Button/index";
import { useIcons } from "../icons/use-icon";
import Card from "./Card";
import Delivery from "./Delivery";

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
        {(breakpoint === "laptop" || breakpoint == "desktop") && (
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
      <div className="mobile:px-6 tablet:px-[64px] mt-8 laptop:flex laptop:flex-row mobile:flex mobile:flex-col w-full items-center laptop:gap-8 desktop:gap-11">
        <Delivery title="Pick-Up" iconColor="#3563E9" />
        <div className="mobile:-my-2 laptop:my-0 z-10">
          <Button
            type="primary"
            variant="large"
            onClick={() => {}}
            iconOnly={<SwapIcon fill="white" />}
          />
        </div>
        <Delivery title="Drop-Off" iconColor="#54A6FF" />
      </div>
    </div>
  );
};

export default Homepage;
