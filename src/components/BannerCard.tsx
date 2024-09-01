"use client";
import React from "react";
import Button from "./Button/index";

interface Props {
  title: string;
  description: string;
  buttonText?: string;
  imageUrl: string;
  bgColor: string;
  buttonBgColor?: string;
}

const BannerCard = ({
  title,
  description,
  buttonText,
  imageUrl,
  bgColor,
  buttonBgColor,
}: Props) => {
  const onButtonClick = () => {
    console.log("button clicked");
  };

  return (
    <div
      className="mt-6 border-0 rounded-xl mobile:pl-4 mobile:pt-4 tablet:pl-6 tablet:pt-6 w-full"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: bgColor,
      }}
    >
      <h1 className="line-clamp-2 mb-4 font-semibold text-white tablet:text-3xl w-full tablet:w-[60%]">
        {title}
      </h1>
      <p className="line-clamp-2 mb-5 font-medium text-white mobile:text-xs tablet:text-md tablet:w-[60%]">
        {description}
      </p>
      {buttonText && (
        <div className="mb-[112px] w-fit border py-2.5 rounded border-0">
          <Button
            text={buttonText}
            type="primary"
            variant="large"
            bgColor={buttonBgColor}
            onClick={onButtonClick}
          />
        </div>
      )}
    </div>
  );
};

export default BannerCard;
