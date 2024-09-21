"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BREAKPOINTS } from "@/utils/helpers";
import useBreakpoint from "use-breakpoint";
import { useIcons } from "../../icons/use-icon";
import { Card, CardContent, CardHeader } from "./index";
import Select from "@/components/Form/Select";

interface IFormValues {
  Name: string;
  PhoneNumber: string;
  Address: string;
  City: string;
}

const RentalInfo = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { register, handleSubmit } = useForm<IFormValues>();
  const { StarIcon, StarOutlineIcon } = useIcons();

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    console.log("dataaa: ", data);
  };

  return (
    <Card className="mobile:p-4 laptop:p-6 bg-white border-0 rounded-xl w-full laptop:max-w-[852px] w-full h-fit">
      <CardHeader>
        <h1 className="pb-1 mobile:text-md laptop:text-xl font-bold">
          Rental Info
        </h1>
        <div className="flex justify-between">
          <p className="text-[#90A3BF] mobile:pb-6 laptop:pb-8 mobile:text-xs laptop:text-sm">
            Please select your rental date
          </p>
          <p className="mobile:text-xs laptop:text-sm text-[#90A3BF]">
            Step 2 of 4
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-4">
            <div
              className="relative border-0 rounded-full w-2 h-2 flex justify-center items-center"
              style={{
                backgroundColor: "#3563E9",
              }}
            >
              <div className="absolute border-0 rounded-full w-4 h-4 bg-[#3563E9] opacity-30"></div>
            </div>
            <p className="ml-2">Pick - Up</p>
          </div>
          <div className="mobile:grid mobile:grid-cols-1 desktop:grid desktop:grid-cols-2 gap-8 w-full mb-6">
            <Select
              label="Locations"
              required={false}
              register={register}
              placeholder="Select"
              data={[{ id: 1, value: "Select your location" }]}
            />
            <Select
              label="Date"
              required={false}
              register={register}
              placeholder="Select"
              data={[{ id: 1, value: "Select your date" }]}
            />
            <Select
              label="Time"
              required={false}
              register={register}
              placeholder="Select"
              data={[{ id: 1, value: "Select your time" }]}
            />
          </div>
          <div className="flex items-center mb-4">
            <div
              className="relative border-0 rounded-full w-2 h-2 flex justify-center items-center"
              style={{
                backgroundColor: "#54A6FF",
              }}
            >
              <div className="absolute border-0 rounded-full w-4 h-4 bg-[#3563E9] opacity-30"></div>
            </div>
            <p className="ml-2">Drop - Off</p>
          </div>
          <div className="mobile:grid mobile:grid-cols-1 desktop:grid desktop:grid-cols-2 gap-8 w-full mb-6">
            <Select
              label="Locations"
              required={false}
              register={register}
              placeholder="Select"
              data={[{ id: 1, value: "Select your location" }]}
            />
            <Select
              label="Date"
              required={false}
              register={register}
              placeholder="Select"
              data={[{ id: 1, value: "Select your date" }]}
            />
            <Select
              label="Time"
              required={false}
              register={register}
              placeholder="Select"
              data={[{ id: 1, value: "Select your time" }]}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RentalInfo;
