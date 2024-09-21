"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useIcons } from "./icons/use-icon";

const MobileSearchbox = () => {
  const { SearchIcon, FilterIcon } = useIcons();
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("run again: ", inputValue);
      e.preventDefault();
      router.push(`search?search=${inputValue}`);
      setInputValue("");
    }
  };

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
          value={inputValue}
          onChange={(e) => {
            console.log("change func: ", e.target.value);
            setInputValue(e.target.value.trimStart());
          }}
          onSubmit={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(e)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(e)
          }
          autoComplete="off"
        />
      </div>
      <div className="px-3 border rounded-xl h-full flex items-center">
        <FilterIcon />
      </div>
    </div>
  );
};

export default MobileSearchbox;
