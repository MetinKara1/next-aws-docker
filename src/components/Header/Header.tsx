"use client";
import React from "react";
import Image from "next/image";
import { useIcons } from "../icons/use-icon";
import Searchbox from "../Searchbox";
import { useRouter } from "next/navigation";
import { useAtomValue } from "jotai";
import { isLoginAtom } from "@/service/home/atom";
import Button from "../Button/index";

const Header = () => {
  const { Logo, HeartIcon, NotificationIcon, SettingsIcon } = useIcons();
  const router = useRouter();
  const isLogin = useAtomValue(isLoginAtom);
  return (
    <div className="max-w-[1440px] pl-[60px] w-full flex items-center bg-white h-[124px]">
      <div className="flex w-full items-center">
        <div
          className="tablet:mr-12 laptop:mr-16 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Logo />
        </div>
        <Searchbox />
      </div>
      {isLogin ? (
        <div className="mr-8 gap-5 flex ml-2">
          <div className="border rounded-full w-11 h-11 flex justify-center items-center cursor-pointer">
            <HeartIcon />
          </div>
          <div className="border rounded-full w-11 h-11 flex justify-center items-center cursor-pointer">
            <NotificationIcon />
          </div>
          <div className="border rounded-full w-11 h-11 flex justify-center items-center cursor-pointer">
            <SettingsIcon />
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
      ) : (
        <div className="mr-8">
          <Button
            type="secondary"
            text="Login"
            variant="large"
            onClick={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
