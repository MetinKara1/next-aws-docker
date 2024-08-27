import React from "react";
import { useIcons } from "../icons/use-icon";

const Footer = () => {
  const { Logo } = useIcons();
  return (
    <div className="bg-white pt-20 px-[60px]">
      <div className="flex">
        <div className="w-full">
          <div className="mb-4">
            <Logo />
          </div>
          <p className="text-md opacity-60">
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>
        <div className="w-full">
          <div className="flex gap-[60px]">
            <div>
              <h4 className="text-xl mb-4">About</h4>
              <p className="text-[#131313] opacity-60 mb-4">How it works</p>
              <p className="text-[#131313] opacity-60 mb-4">Featured</p>
              <p className="text-[#131313] opacity-60 mb-4">Partnership</p>
              <p className="text-[#131313] opacity-60 mb-4">
                Bussiness Relation
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-4">Community</h4>
              <p className="text-[#131313] opacity-60 mb-4">Event</p>
              <p className="text-[#131313] opacity-60 mb-4">Blog</p>
              <p className="text-[#131313] opacity-60 mb-4">Podcast</p>
              <p className="text-[#131313] opacity-60 mb-4">Invite a friend</p>
            </div>
            <div>
              <h4 className="text-xl mb-4">Social</h4>
              <p className="text-[#131313] opacity-60 mb-4">Discord</p>
              <p className="text-[#131313] opacity-60 mb-4">Instagram</p>
              <p className="text-[#131313] opacity-60 mb-4">X</p>
              <p className="text-[#131313] opacity-60 mb-4">Facebook</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="flex space-between w-full pt-9 pb-[60px]">
        <div className="w-full">@2024 MORENT. All right reserved</div>
        <div className="flex justify-end gap-16 w-full">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
