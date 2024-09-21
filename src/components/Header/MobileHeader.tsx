"use client";
import React from "react";
import Image from "next/image";
import { useIcons } from "../icons/use-icon";
import MobileSearchbox from "../MobileSearchbox";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";

const MobileHeader = () => {
  const router = useRouter();
  const { Logo, HamburgerMenuIcon } = useIcons();

  return (
    <div className="relative bg-white h-fit px-6 pt-8">
      <div className="flex justify-between items-center pb-6 animation">
        <div>
          <HamburgerMenuIcon />
        </div>
        <div
          className="border rounded-full w-11 h-11 cursor-pointer"
          onClick={() => router.push("/profile")}
        >
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={44}
            height={44}
            priority
          />
        </div>
      </div>
      <div onClick={() => router.push("/")}>
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
