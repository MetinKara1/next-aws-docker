"use client";
import React, { FormEvent, useState } from "react";
import { useIcons } from "./icons/use-icon";
import { useRouter } from "next/navigation";

const Searchbox = () => {
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

  const onSearchClick = () => {
    router.push("/search");
  };

  const onFilterClick = () => {
    router.push("/search");
  };

  return (
    <div className="flex border rounded-3xl w-fit">
      <div
        className="px-5 py-2.5 cursor-pointer"
        onClick={() => onSearchClick()}
      >
        <SearchIcon />
      </div>
      <input
        id="searchbox"
        name="searchbox"
        placeholder="Search something here"
        className="focus:outline-none w-full"
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
      <div
        className="px-5 py-2.5 cursor-pointer"
        onClick={() => onFilterClick()}
      >
        <FilterIcon />
      </div>
    </div>
  );
};

export default Searchbox;
