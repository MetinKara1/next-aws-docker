"use client";
import React from "react";
import Image from "next/image";
import { useIcons } from "../icons/use-icon";
import MobileSearchbox from "../MobileSearchbox";
import MobileMenu from "./MobileMenu";

const MobileHeader = () => {
  const { Logo, HamburgerMenuIcon } = useIcons();

  return (
    <div className="relative bg-white h-fit px-6 pt-8">
      <div className="flex justify-between items-center pb-6 animation">
        <div>
          <HamburgerMenuIcon />
        </div>
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
        <Logo />
      </div>
      <div className="pb-8">
        <MobileSearchbox />
      </div>
      <MobileMenu />
    </div>
  );
};

export default MobileHeader;
