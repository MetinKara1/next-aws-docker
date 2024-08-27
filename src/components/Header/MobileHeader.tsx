"use client";
import React from "react";
import Image from "next/image";
import { useIcons } from "../icons/use-icon";
import MobileSearchbox from "../MobileSearchbox";

const MobileHeader = () => {
  const { Logo } = useIcons();
  return (
    <div className="bg-white h-[288px] px-6 pt-8">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="border rounded-full w-11 h-11 cursor-pointer">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={44}
            height={44}
            priority
          />
        </div>
      </div>
      <div>
        <MobileSearchbox />
      </div>
    </div>
  );
};

export default MobileHeader;
