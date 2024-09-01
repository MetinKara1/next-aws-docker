"use client";
import React from "react";
import Image from "next/image";
import Button from "../Button/index";
import { BREAKPOINTS } from "@/utils/helpers";
import useBreakpoint from "use-breakpoint";

interface Props {
  title: string;
  description: string;
  buttonText?: string;
  bgImageUrl?: string;
  carImageUrl: string;
  bgColor: string;
  buttonBgColor?: string;
}

const BannerCard = ({
  title,
  description,
  buttonText,
  bgImageUrl,
  carImageUrl,
  bgColor,
  buttonBgColor,
}: Props) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const onButtonClick = () => {
    console.log("button clicked");
  };

  return (
    <div
      className="mt-6 border-0 rounded-xl mobile:p-4 tablet:p-6 w-full"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: bgColor,
      }}
    >
      <h1
        className="line-clamp-2 pb-4 font-semibold text-white tablet:text-3xl desktop:text-[32px] w-full"
        style={{
          lineHeight: 1.5,
        }}
      >
        {title}
      </h1>
      <p
        className="line-clamp-2 pb-8 font-normal text-white mobile:text-xs tablet:text-[20px] leading-[1.3]"
        style={{
          lineHeight: 1.2,
        }}
      >
        {description}
      </p>
      {buttonText && (
        <div className="w-fit border py-2.5 rounded border-0">
          <Button
            text={buttonText}
            type="primary"
            variant="large"
            bgColor={buttonBgColor}
            onClick={onButtonClick}
          />
        </div>
      )}
      <div className="w-full flex justify-center">
        <Image
          src={carImageUrl}
          alt="nissan"
          width={breakpoint === "mobile" ? 160 : 380}
          height={breakpoint === "mobile" ? 64 : 120}
          priority
        />
      </div>
    </div>
  );
};

export default BannerCard;
