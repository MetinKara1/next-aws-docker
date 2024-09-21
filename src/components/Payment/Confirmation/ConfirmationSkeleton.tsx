"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./index";
import Checkbox from "@/components/Checkbox/index";
import Button from "@/components/Button/index";
import { useIcons } from "@/components/icons/use-icon";
import Skeleton from "@/components/Skeleton/index";

const ConfirmationSkeleton = () => {
  const { SecuritySafetyIcon } = useIcons();

  return (
    <Card className="mobile:p-4 laptop:p-6 bg-white border-0 rounded-xl w-full laptop:max-w-[852px] w-full h-fit">
      <CardHeader className="mb-4">
        <Skeleton
          baseColor="#85A8F8"
          highlightColor="#EFF3FD"
          borderRadius={30}
          count={1}
          wrapClassName="w-1/6"
        />
        <div className="flex justify-between">
          <Skeleton
            baseColor="#EFF3FD"
            highlightColor="#FFF"
            borderRadius={30}
            count={1}
            wrapClassName="w-1/6"
          />
          <p className="mobile:text-xs laptop:text-sm text-[#90A3BF]">
            Step 4 of 4
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="px-8 py-4 border-0 bg-[#F6F7F9] rounded-xl mb-6 flex">
          <Checkbox label="" value={false} className="gap-5" />
          <Skeleton
            baseColor="#85A8F8"
            highlightColor="#EFF3FD"
            borderRadius={30}
            count={1}
            wrapClassName="w-1/6"
          />
        </div>

        <div className="px-8 py-4 border-0 bg-[#F6F7F9] rounded-xl mb-8 flex">
          <Checkbox label="" value={false} className="gap-5" />
          <Skeleton
            baseColor="#85A8F8"
            highlightColor="#EFF3FD"
            borderRadius={30}
            count={1}
            wrapClassName="w-1/6"
          />
        </div>
        <div className="mb-8">
          <Skeleton
            baseColor="#3563E9"
            highlightColor="#EFF3FD"
            borderRadius={30}
            count={1}
            wrapClassName="w-1/6"
            className="h-10"
          />
        </div>
        <div className="mb-4">
          <Skeleton
            baseColor="#85A8F8"
            highlightColor="#EFF3FD"
            borderRadius={30}
            count={1}
            wrapClassName="w-1/6"
          />
        </div>
        <div className="mb-2">
          <Skeleton
            baseColor="#EFF3FD"
            highlightColor="#FFF"
            borderRadius={30}
            count={1}
            wrapClassName="w-1/6"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfirmationSkeleton;
