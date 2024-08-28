"use client";
import React, { ReactElement } from "react";

interface Props {
  text?: string;
  bgColor?: string;
  iconLeft?: ReactElement<any, any>;
  iconRight?: ReactElement<any, any>;
  variant: "small" | "medium" | "large";
  type: "primary" | "secondary" | "minimal";
  onClick: () => void;
  customClass?: string;
  iconOnly?: ReactElement<any, any>;
}

const Button = ({
  text,
  bgColor,
  iconLeft,
  iconRight,
  variant,
  type,
  onClick,
  customClass,
  iconOnly,
}: Props) => {
  const buttonClass =
    variant === "small"
      ? "gap-2 px-4 py-[5px] text-xs"
      : variant === "medium"
      ? "gap-2 px-4 py-[9px] text-xs"
      : "gap-2 px-5 py-[14px]";

  const buttonBgColor =
    type === "primary"
      ? "bg-[#3563E9] text-white border-0 rounded"
      : "text-[#596780] border rounded border-[#90A3BF]";

  const iconOnlyClass =
    variant === "small" ? "p-2" : variant === "medium" ? "p-3" : "p-4";

  const iconOnlyBgColor =
    type === "primary"
      ? "bg-[#3563E9] text-white border-0 rounded"
      : "text-[#596780] border rounded border-[#90A3BF]";

  return iconOnly ? (
    <div
      className={`flex justify-center w-fit items-center cursor-pointer ${
        iconOnlyClass + " " + iconOnlyBgColor
      }`}
      onClick={onClick}
    >
      {iconOnly}
    </div>
  ) : (
    <div
      className={`flex justify-center w-fit items-center cursor-pointer ${
        customClass ? customClass : buttonClass + " " + buttonBgColor
      }`}
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {iconLeft && <div className="">{iconLeft}</div>}
      {text && <button className="">{text}</button>}
      {iconRight && <div className="">{iconRight}</div>}
    </div>
  );
};

export default Button;
