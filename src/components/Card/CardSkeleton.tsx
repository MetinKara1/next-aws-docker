"use client";
import React from "react";
import { useIcons } from "../icons/use-icon";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  const { HeartIcon } = useIcons();
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-between border-0 rounded-xl bg-white mobile:p-4 tablet:p-6 w-full h-full">
        <div>
          <div className="flex justify-between">
            <div className="w-1/2">
              <SkeletonTheme baseColor="#85A8F8" highlightColor="#EFF3FD">
                <p>
                  <Skeleton borderRadius={30} count={1} />
                </p>
              </SkeletonTheme>
              <SkeletonTheme baseColor="#EFF3FD" highlightColor="#f9f9f9">
                <p>
                  <Skeleton borderRadius={30} count={1} />
                </p>
              </SkeletonTheme>
            </div>
            <HeartIcon fill="#ED3F3F" />
          </div>
        </div>
        <div>
          <div className="mobile:flex mobile:flex-row tablet:flex tablet:flex-col mt-[50px] justify-center items-center">
            <Image
              src="/thumbnail.png"
              alt="thumbnail"
              width={60}
              height={60}
              priority
            />
            <div className="mobile:flex mobile:flex-col tablet:flex tablet:flex-row justify-between tablet:mt-9 mobile:ml-[50px] tablet:ml-0 text-[#90A3BF] text-sm">
              <div className="w-1/3">
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <p>
                    <Skeleton borderRadius={30} count={1} />
                  </p>
                </SkeletonTheme>
              </div>
              <div className="w-1/3">
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <p>
                    <Skeleton borderRadius={30} count={1} />
                  </p>
                </SkeletonTheme>
              </div>
              <div className="w-1/3">
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <p>
                    <Skeleton borderRadius={30} count={1} />
                  </p>
                </SkeletonTheme>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[6px] mobile:mb-6 laptop:mb-9">
          <div className="w-1/3">
            <SkeletonTheme baseColor="#EFF3FD" highlightColor="#FFF">
              <p>
                <Skeleton borderRadius={30} count={1} />
              </p>
            </SkeletonTheme>
          </div>
          <div className="w-1/3">
            <SkeletonTheme baseColor="#EFF3FD" highlightColor="#FFF">
              <p>
                <Skeleton borderRadius={30} count={1} />
              </p>
            </SkeletonTheme>
          </div>
          <div className="w-1/3">
            <SkeletonTheme baseColor="#EFF3FD" highlightColor="#FFF">
              <p>
                <Skeleton borderRadius={30} count={1} />
              </p>
            </SkeletonTheme>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-1/2">
            <SkeletonTheme baseColor="#85A8F8" highlightColor="#EFF3FD">
              <p>
                <Skeleton borderRadius={30} count={1} />
              </p>
            </SkeletonTheme>
            <SkeletonTheme baseColor="#EFF3FD" highlightColor="#f9f9f9">
              <p>
                <Skeleton borderRadius={30} count={1} />
              </p>
            </SkeletonTheme>
          </div>
          <div className="w-1/2">
            <SkeletonTheme baseColor="#3563E9" highlightColor="#f9f9f9">
              <p>
                <Skeleton borderRadius={12} className="h-10" count={1} />
              </p>
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
