import React from "react";
import { useIcons } from "./icons/use-icon";

const Searchbox = () => {
  const { SearchIcon, FilterIcon } = useIcons();
  return (
    <div className="flex border rounded-3xl w-[40%]">
      <div className="px-5 py-2.5">
        <SearchIcon />
      </div>
      <input
        id="searchbox"
        name="searchbox"
        placeholder="Search something here"
        className="focus:outline-none w-full"
      />
      <div className="px-5 py-2.5 ">
        <FilterIcon />
      </div>
    </div>
  );
};

export default Searchbox;
