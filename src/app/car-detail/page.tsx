"use client";
import BannerCard from "@/components/Car/BannerCard";
import Details from "@/components/Car/Details";
import Filter from "@/components/Search/Filter";
import React from "react";
import Image from "next/image";
import { BREAKPOINTS } from "@/utils/helpers";
import useBreakpoint from "use-breakpoint";
import CardVechile from "../../components/Card/index";
import {
  ReviewCard,
  ReviewContent,
  ReviewHeader,
  ReviewTitle,
} from "@/components/Car/Reviews";
import { useIcons } from "@/components/icons/use-icon";
import Button from "@/components/Button/index";

const CarDetail = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { ArrowDownIcon, StarIcon, StarOutlineIcon } = useIcons();

  return (
    <div>
      <div className="flex h-full w-full justify-center">
        <div className="mobile:hidden laptop:block">
          <Filter />
        </div>
        <div className="">
          <div className="w-full mobile:flex mobile:flex-col desktop:flex desktop:flex-row gap-8 mobile:px-6 laptop:px-8">
            <div className="flex-col items-center w-full">
              <BannerCard
                title="Sports car with the best design and acceleration"
                description="Safety and comfort while driving a futuristic and elegant sports car"
                imageUrl="/bg-2.png"
                key="first"
                bgColor="#3563E9"
              />
              <div className="mobile:flex justify-between mobile:gap-[20px] tablet:gap-6 mt-6 w-full h-fit">
                <div className="mobile:w-[96px] tablet:w-[148px] mobile:h-[80px] tablet:h-[124px] p-2 border rounded-xl flex justify-center items-center">
                  <img
                    src="/nissan-gt-r.png"
                    alt="nissan"
                    width={breakpoint === "mobile" ? 96 : 148}
                    height={breakpoint === "mobile" ? 80 : 124}
                  />
                </div>
                <div className="mobile:w-[96px] tablet:w-[148px] mobile:h-[80px] tablet:h-[124px] rounded-xl flex justify-center items-center">
                  <img
                    src="/car-detail-1.png"
                    alt="nissan"
                    width={breakpoint === "mobile" ? 96 : 148}
                    height={breakpoint === "mobile" ? 80 : 124}
                  />
                </div>
                <div className="mobile:w-[96px] tablet:w-[148px] mobile:h-[80px] tablet:h-[124px] rounded-xl flex justify-center items-center">
                  <img
                    src="/car-detail-2.png"
                    alt="nissan"
                    width={breakpoint === "mobile" ? 96 : 148}
                    height={breakpoint === "mobile" ? 80 : 124}
                  />
                </div>
              </div>
            </div>
            <div className="flex-col items-center w-full mt-6">
              <Details />
            </div>
          </div>
          <div className="w-full flex mobile:p-6 laptop:p-8">
            <div className="mobile:p-4 laptop:p-6 bg-white border-0 rounded-xl w-full">
              <div className="flex pb-8">
                <p className="text-xl font-semibold pr-3">Reviews</p>
                <div className="py-[6px] px-3 bg-[#3563E9] text-white border-0 rounded">
                  13
                </div>
              </div>
              <ReviewCard className="w-full mb-6">
                <ReviewHeader className="w-full">
                  <div className="flex">
                    <div className="border-0 rounded-full mobile:pr-2 latop:pr-4">
                      <Image
                        src="/avatar.png"
                        alt="avatar"
                        width={breakpoint === "mobile" ? 44 : 56}
                        height={breakpoint === "mobile" ? 44 : 56}
                        priority
                      />
                    </div>
                    <ReviewTitle className="w-full">
                      <div className="w-full flex justify-between">
                        <p className="mobile:text-md laptop:text-xl font-bold pb-2">
                          Alex Stanton
                        </p>
                        <p className="text-[#90A3BF] mobile:text-xs laptop:text-sm">
                          21 July 2024
                        </p>
                      </div>
                      <div className="w-full flex justify-between">
                        <p className="text-[#90A3BF] mobile:text-xs laptop:text-sm">
                          Ceo At Besiktas
                        </p>
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
                      </div>
                      <ReviewContent className="pt-3">
                        <div className="text-[#596780] mobile:text-xs laptop:text-sm">
                          We are very happy with the service from the MORENT
                          App. Morent has a low price and also a large variety
                          of cars with good and comfortable facilities. In
                          addition, the service provided by the officers is also
                          very friendly and very polite.
                        </div>
                      </ReviewContent>
                    </ReviewTitle>
                  </div>
                </ReviewHeader>
              </ReviewCard>
              <ReviewCard className="w-full mb-6">
                <ReviewHeader className="w-full">
                  <div className="flex">
                    <div className="border-0 rounded-full mobile:pr-2 latop:pr-4">
                      <Image
                        src="/avatar.png"
                        alt="avatar"
                        width={breakpoint === "mobile" ? 44 : 56}
                        height={breakpoint === "mobile" ? 44 : 56}
                        priority
                      />
                    </div>
                    <ReviewTitle className="w-full">
                      <div className="w-full flex justify-between">
                        <p className="mobile:text-md laptop:text-xl font-bold pb-2">
                          Alex Stanton
                        </p>
                        <p className="text-[#90A3BF] mobile:text-xs laptop:text-sm">
                          21 July 2024
                        </p>
                      </div>
                      <div className="w-full flex justify-between">
                        <p className="text-[#90A3BF] mobile:text-xs laptop:text-sm">
                          Ceo At Besiktas
                        </p>
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
                      </div>
                      <ReviewContent className="pt-3">
                        <div className="text-[#596780] mobile:text-xs laptop:text-sm">
                          We are very happy with the service from the MORENT
                          App. Morent has a low price and also a large variety
                          of cars with good and comfortable facilities. In
                          addition, the service provided by the officers is also
                          very friendly and very polite.
                        </div>
                      </ReviewContent>
                    </ReviewTitle>
                  </div>
                </ReviewHeader>
              </ReviewCard>
              <div className="w-full flex justify-center">
                <Button
                  type="primary"
                  text="Show All"
                  variant="large"
                  onClick={() => {}}
                  iconRight={<ArrowDownIcon />}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mobile:px-6 laptop:px-8">
            <div className="text-[#90A3BF] px-5 py-2.5">Recent Car</div>
            <div className="text-[#3563E9] px-5 py-2.5">View All</div>
          </div>
          <div className="grid tablet:grid-cols-2 llaptop:grid-cols-2 desktop:grid-cols-3 gap-8 mt-5 w-full mobile:px-6 laptop:px-8 pb-8">
            {[0, 1, 2].map((item, i) => {
              return <CardVechile key={i} />;
            })}
          </div>
          <div className="flex justify-between mobile:px-6 laptop:px-8">
            <div className="text-[#90A3BF] px-5 py-2.5">Recommendation Car</div>
            <div className="text-[#3563E9] px-5 py-2.5">View All</div>
          </div>
          <div className="grid tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 gap-8 mt-5 w-full mobile:px-6 laptop:px-8 pb-8">
            {[0, 1, 2].map((item, i) => {
              return <CardVechile key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
