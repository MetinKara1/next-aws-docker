import React from "react";
import { useIcons } from "./icons/use-icon";

const MobileSearchbox = () => {
  const { SearchIcon, FilterIcon } = useIcons();
  return (
    <div className="flex mt-8 h-[48px] items-center">
      <div className="flex border rounded-xl mr-4 w-full h-full items-center">
        <div className="pl-6 pr-2 h-full flex items-center">
          <SearchIcon />
        </div>
        <input
          id="searchbox"
          name="searchbox"
          placeholder="Search something here"
          className="focus:outline-none w-full h-full border-right rounded-xl"
        />
      </div>
      <div className="px-3 border rounded-xl h-full flex items-center">
        <FilterIcon />
      </div>
    </div>
  );
};

export default MobileSearchbox;
