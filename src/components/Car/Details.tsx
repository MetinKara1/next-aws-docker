import { BREAKPOINTS } from "@/utils/helpers";
import React from "react";
import useBreakpoint from "use-breakpoint";
import Button from "../Button/index";
import { useIcons } from "../icons/use-icon";

interface DetailProps {
  name: string;
  detail: string;
  type: string;
  steering: string;
  imageUrl: string;
  images: [];
  capacity: string;
  gas: string;
  price: string;
}

const Details = (props: { detail: DetailProps }) => {
  const { detail } = props;
  const { HeartIcon, StarIcon, StarOutlineIcon } = useIcons();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <div className="bg-white px-6 mobile:pt-4 tablet:pt-6 w-full h-fit rounded-2xl">
      <div className="flex justify-between w-full">
        <h2 className="mobile:text-xl tablet:text-[40px] font-bold">
          {detail.name}
        </h2>
        <HeartIcon fill="#ED3F3F" />
      </div>
      <div className="flex items-center gap-2 mt-1">
        <div className="flex">
          <StarIcon
            width={breakpoint === "mobile" ? 12 : 20}
            height={breakpoint === "mobile" ? 12 : 20}
          />
          <StarIcon
            width={breakpoint === "mobile" ? 12 : 20}
            height={breakpoint === "mobile" ? 12 : 20}
          />
          <StarIcon
            width={breakpoint === "mobile" ? 12 : 20}
            height={breakpoint === "mobile" ? 12 : 20}
          />
          <StarIcon
            width={breakpoint === "mobile" ? 12 : 20}
            height={breakpoint === "mobile" ? 12 : 20}
          />
          <StarOutlineIcon
            width={breakpoint === "mobile" ? 12 : 20}
            height={breakpoint === "mobile" ? 12 : 20}
          />
        </div>
        <div className="text-[#596780] mobile:text-xs tablet:text-lg">
          440+ Reviewer
        </div>
      </div>
      <div className="mobile:mt-4 tablet:mt-8">
        <p
          className="text-[#596780] mobile:text-xs tablet:text-xl"
          style={{
            lineHeight: breakpoint !== "mobile" ? 2 : "normal",
          }}
        >
          {detail.detail}
        </p>
        <div className="mobile:mt-4 tablet:mt-8 mobile:text-xs tablet:text-xl">
          <div className="flex w-full gap-11">
            <div className="w-full flex justify-between mb-4">
              <p className="text-[#90A3BF]">Type Car</p>
              <p>{detail.type}</p>
            </div>
            <div className="w-full flex justify-between">
              <p className="text-[#90A3BF]">Steering</p>
              <p>{detail.steering}</p>
            </div>
          </div>
          <div className="flex w-full gap-11">
            <div className="w-full flex justify-between mb-4">
              <p className="text-[#90A3BF]">Capacity</p>
              <p>{detail.capacity} Person</p>
            </div>
            <div className="w-full flex justify-between">
              <p className="text-[#90A3BF]">Gasoline</p>
              <p>{detail.gas}</p>
            </div>
          </div>
        </div>
        <div className="flex mobile:mt-8 tablet:mt-[68px] justify-between">
          <div>
            <div className="flex items-end">
              <p className="mobile:text-xl tablet:text-[32px] font-bold pr-1">
                {detail.price}/
              </p>
              <p className="mobile:text-xs tablet:text-md text-[#90A3BF]">
                days
              </p>
            </div>
            <p className="text-[#90A3BF] mobile:text-xs tablet:text-md">
              $100.00
            </p>
          </div>
          <div className="mobile:pb-4 tablet:pb-8">
            <Button
              text="Rent Now"
              type="primary"
              variant="large"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
