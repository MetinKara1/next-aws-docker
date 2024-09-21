"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useBreakpoint from "use-breakpoint";
import Button from "@/components/Button/index";
import Delivery from "@/components/Delivery";
import { useIcons } from "@/components/icons/use-icon";
import { BREAKPOINTS } from "@/utils/helpers";
import CardVechile from "../../components/Card/index";
import Filter from "@/components/Search/Filter";
import DeliverySkeleton from "@/components/DeliverySkeleton";
import CardSkeleton from "@/components/Card/CardSkeleton";
import FilterSkeleton from "@/components/Search/FilterSkeleton";

const Search = (props: any) => {
  const [cars, setCars] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const searchTerms = params.get("search");

  useEffect(() => {
    setLoading(true);
    fetch(`/api/search?search=${searchTerms}`).then(async (res) => {
      const response = await res.json();
      console.log("search response: ", response);
      setTimeout(() => {
        setLoading(false);
        setCars(response);
      }, 3000);
    });
  }, [searchTerms]);

  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { SwapIcon } = useIcons();
  return (
    <div className="flex h-full w-full justify-center">
      <div className="mobile:hidden laptop:block">
        {loading ? <FilterSkeleton /> : <Filter />}
      </div>
      <div className="mobile:px-6 laptop:px-8 flex-col items-center w-full">
        <div className="mt-8 laptop:flex desktop:flex-row mobile:flex mobile:flex-col w-full items-center laptop:gap-8 desktop:gap-8">
          <div className="border-0 rounded-2xl mobile:px-4 laptop:px-7 desktop:px-12 bg-white w-full">
            {loading ? (
              <DeliverySkeleton />
            ) : (
              <Delivery title="Pick-Up" iconColor="#3563E9" />
            )}
          </div>
          <div className="mobile:-my-2 desktop:my-0 z-10">
            <Button
              type="primary"
              variant="large"
              onClick={() => {}}
              iconOnly={<SwapIcon fill="white" />}
            />
          </div>
          <div className="border-0 rounded-2xl mobile:px-4 laptop:px-7 desktop:px-12 bg-white w-full">
            {loading ? (
              <DeliverySkeleton />
            ) : (
              <Delivery title="Drop-Off" iconColor="#54A6FF" />
            )}
          </div>
        </div>
        <div className="grid tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-8 mt-5 w-full">
          {loading
            ? [0, 1, 2].map((item) => <CardSkeleton key={item} />)
            : cars?.map((item: any, i: number) => {
                return <CardVechile key={i} item={item} />;
              })}
        </div>
        <div className="w-full flex justify-center mobile:my-12 tablet:my-16">
          <div className="relative flex justify-between items-center">
            <Button
              text="Show more car"
              type="primary"
              variant={breakpoint === "mobile" ? "medium" : "large"}
              onClick={() => {}}
            />
          </div>
          <div className="flex items-center">
            <p className="absolute mobile:right-6 tablet:right-8 laptop:right-12 desktop:right-16 text-md text-[#90A3BF]">
              120 Car
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
