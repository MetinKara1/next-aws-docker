import React from "react";
import { useIcons } from "../icons/use-icon";

const MobileFooter = () => {
  const { Logo } = useIcons();
  return (
    <div className="px-6">
      <div className="pb-4">
        <Logo />
      </div>
      <p className="text-xs pb-12 text-[#90A3BF]">
        Our vision is to provide convenience and help increase your sales
        business.
      </p>
      <div className="flex gap-[65px] mb-12">
        <div>
          <h3 className="pb-4">About</h3>
          <p className="pb-3 text-[#90A3BF]">How it works</p>
          <p className="pb-3 text-[#90A3BF]">Featured</p>
          <p className="pb-3 text-[#90A3BF]">Partnership</p>
          <p className="pb-3 text-[#90A3BF]">Bussiness Relation</p>
        </div>
        <div>
          <h3 className="pb-4">Socials</h3>
          <p className="pb-3 text-[#90A3BF]">Discord</p>
          <p className="pb-3 text-[#90A3BF]">Instagram</p>
          <p className="pb-3 text-[#90A3BF]">X</p>
          <p className="pb-3 text-[#90A3BF]">Facebook</p>
        </div>
      </div>
      <div>
        <h3 className="pb-4">Community</h3>
        <p className="pb-3 text-[#90A3BF]">Events</p>
        <p className="pb-3 text-[#90A3BF]">Blog</p>
        <p className="pb-3 text-[#90A3BF]">Podcast</p>
        <p className="pb-3 text-[#90A3BF]">Invite a friend</p>
      </div>
      <div className="flex justify-between mb-8 mt-12">
        <p className="text-sm">Privacy & Policy</p>
        <p className="text-sm">Terms & Condition</p>
      </div>
      <div className="pb-6">©2022 MORENT. All rights reserved</div>
    </div>
  );
};

export default MobileFooter;
