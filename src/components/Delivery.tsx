import React from "react";

interface Props {
  iconColor: string;
  title: string;
}

const Delivery = ({ iconColor, title }: Props) => {
  return (
    <div className="w-full flex justify-around">
      <div className=" bg-white w-full py-6">
        <div className="flex items-center mb-4">
          <div
            className="relative border-0 rounded-full w-2 h-2 flex justify-center items-center"
            style={{
              backgroundColor: iconColor,
            }}
          >
            <div className="absolute border-0 rounded-full w-4 h-4 bg-[#3563E9] opacity-30"></div>
          </div>
          <p className="ml-2">{title}</p>
        </div>
        <div className="flex-col justify-center items-around w-full">
          <div className="flex justify-between">
            <div className="">
              <p className="mb-2 font-bold">Locations</p>
              <div className="text-xs text-[#90A3BF]">
                <select>
                  <option>Select city</option>
                  <option>İstanbul</option>
                </select>
              </div>
            </div>
            <div className="border-r"></div>
            <div className="">
              <p className="mb-2 font-bold">Date</p>
              <div className="text-xs text-[#90A3BF]">
                <select>
                  <option>Select date</option>
                  <option>28 August 2024</option>
                </select>
              </div>
            </div>
            <div className="border-r"></div>
            <div className="">
              <p className="mb-2 font-bold">Time</p>
              <div className="text-xs text-[#90A3BF]">
                <select>
                  <option>Select city</option>
                  <option>19.03</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
