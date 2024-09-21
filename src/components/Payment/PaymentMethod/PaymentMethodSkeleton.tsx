"use client";
import React from "react";
import { useIcons } from "../../icons/use-icon";
import { Card, CardContent, CardHeader } from "./index";
import Input from "@/components/Form/Input";
import Skeleton from "@/components/Skeleton/index";

const PaymentMethodSkeleton = () => {
  const { VisaIcon } = useIcons();

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
            Step 3 of 4
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="laptop:p-6 mobile:p-4 border-0 bg-[#F6F7F9] rounded-xl">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="relative border-0 rounded-full w-2 h-2 flex justify-center items-center">
                <div className="absolute border-0 rounded-full w-4 h-4 bg-[#3563E9] opacity-30"></div>
              </div>
            </div>
            <div className="w-full ml-4">
              <Skeleton
                baseColor="#85A8F8"
                highlightColor="#EFF3FD"
                borderRadius={30}
                count={1}
                wrapClassName="w-1/4"
              />
            </div>
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={30}
              count={1}
              wrapClassName="w-1/4"
            />
          </div>
          <div className="mobile:grid mobile:grid-cols-1 desktop:grid desktop:grid-cols-2 gap-8 w-full">
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={10}
              count={1}
              className="h-10"
            />
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={10}
              count={1}
              className="h-10"
            />
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={10}
              count={1}
              className="h-10"
            />
            <Skeleton
              baseColor="#EFF3FD"
              highlightColor="#FFF"
              borderRadius={10}
              count={1}
              className="h-10"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodSkeleton;
