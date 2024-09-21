"use client";
import React from "react";
import Image from "next/image";
import { BREAKPOINTS } from "@/utils/helpers";
import useBreakpoint from "use-breakpoint";

interface Props {
  bgImageUrl?: string;
  carImageUrl?: string;
  bgColor?: string;
}

const BannerCard = ({ bgImageUrl, carImageUrl, bgColor }: Props) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  return (
    <div
      className="border-0 rounded-xl mobile:px-2 mobile:py-4 tablet:px-2 tablet:py-[18px] w-fit"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: bgColor,
      }}
    >
      <div className="w-full flex justify-center">
        <Image
          src={carImageUrl}
          alt="nissan"
          width={breakpoint === "mobile" ? 102 : 116}
          height={breakpoint === "mobile" ? 32 : 36}
          priority
        />
      </div>
    </div>
  );
};

export default BannerCard;
