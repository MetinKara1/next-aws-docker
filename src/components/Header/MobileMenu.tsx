"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useIcons } from "../icons/use-icon";

const MobileMenu = () => {
  const {
    HeartIcon,
    HeartOutlineIcon,
    SettingsIcon,
    SettingsOutlineIcon,
    NotificationIcon,
    NotificationOutlineIcon,
    UserIcon,
    UserOutlineIcon,
  } = useIcons();
  const [activeMenu, setActiveMenu] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/favorites":
        setActiveMenu("favorites");
        break;

      case "/notifications":
        setActiveMenu("notifications");
        break;

      case "/settings":
        setActiveMenu("settings");
        break;

      case "/profile":
        setActiveMenu("profile");
        break;

      default:
        setActiveMenu("");
    }
  }, [pathname]);

  return (
    <div className="fixed bottom-0 border-t left-0 h-16 border-[#E0E9F4] bg-white w-full">
      <div className="w-full h-full flex justify-around items-center">
        <div className="flex flex-col items-center">
          {activeMenu === "favorites" ? <HeartIcon /> : <HeartOutlineIcon />}
          <p className="text-xs text-[#90A3BF] mt-1">Favorites</p>
        </div>
        <div className="flex flex-col items-center">
          {activeMenu === "notifications" ? (
            <NotificationIcon />
          ) : (
            <NotificationOutlineIcon />
          )}
          <p className="text-xs text-[#90A3BF] mt-1">Notifications</p>
        </div>
        <div className="flex flex-col items-center">
          {activeMenu === "settings" ? (
            <SettingsIcon />
          ) : (
            <SettingsOutlineIcon />
          )}
          <p className="text-xs text-[#90A3BF] mt-1">Settings</p>
        </div>
        <div className="flex flex-col items-center">
          {activeMenu === "profile" ? <UserIcon /> : <UserOutlineIcon />}
          <p className="text-xs text-[#90A3BF] mt-1">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
