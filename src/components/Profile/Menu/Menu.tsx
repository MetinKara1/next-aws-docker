"use client";
import { useIcons } from "@/components/icons/use-icon";
import { cn } from "@/utils/tailwind-merge";
import React, { useState } from "react";

const Menu = () => {
  const {
    DashboardHomeIcon,
    CarRentIcon,
    CartIcon,
    EmptyWalletChangeIcon,
    MessageIcon,
    CalendarIcon,
    SettingsMenuIcon,
    InfoCircleIcon,
    BriefCaseIcon,
    LogoutIcon,
  } = useIcons();
  const [menuList, setMenuList] = useState([
    {
      id: 1,
      title: "MAIN MENU",
      list: [
        {
          id: 1,
          name: "Dashboard",
          icon: <DashboardHomeIcon />,
          selected: true,
        },
        {
          id: 2,
          name: "Car Rent",
          icon: <CarRentIcon />,
          selected: false,
        },
        {
          id: 3,
          name: "Insight",
          icon: <CartIcon />,
          selected: false,
        },
        {
          id: 4,
          name: "Reimburse",
          icon: <EmptyWalletChangeIcon />,
          selected: true,
        },
        {
          id: 5,
          name: "Inbox",
          icon: <MessageIcon />,
          selected: true,
        },
        {
          id: 6,
          name: "Calendar",
          icon: <CalendarIcon />,
          selected: true,
        },
      ],
    },
    {
      id: 2,
      title: "PREFERENCES",
      list: [
        {
          id: 7,
          name: "Settings",
          icon: <SettingsMenuIcon />,
          selected: true,
        },
        {
          id: 8,
          name: "Help & Center",
          icon: <InfoCircleIcon />,
          selected: false,
        },
        {
          id: 9,
          name: "Dark Mode",
          icon: <BriefCaseIcon />,
          selected: true,
        },
      ],
    },
  ]);

  const [selectedMenu, setSelectedMenu] = useState(1);

  const onMenuClick = (id: number) => {
    setSelectedMenu(id);
  };

  return (
    <div className="border-0 h-full bg-white w-full">
      <div className="px-4 pt-8">
        {menuList.map((item, i) => {
          return (
            <div key={i} className="pb-8">
              <p className="text-xs text-[#90A3BF] mb-7">{item.title}</p>
              {item.list.map((menuItem) => {
                return (
                  <div
                    className={cn(
                      "flex py-[14px] px-4 cursor-pointer",
                      selectedMenu === menuItem.id &&
                        "border-0 rounded-xl bg-[#3563E9]"
                    )}
                    key={menuItem.id}
                    onClick={() => onMenuClick(menuItem.id)}
                  >
                    <div className="mr-3">{menuItem?.icon}</div>
                    <div
                      className={cn(
                        "text-[#90A3BF]",
                        selectedMenu === menuItem.id && "text-white"
                      )}
                    >
                      {menuItem.name}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="flex px-4 pb-4">
          <div className="mr-3">
            <LogoutIcon />
          </div>
          <p className="text-[#90A3BF]">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
