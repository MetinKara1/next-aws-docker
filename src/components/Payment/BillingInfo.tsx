"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/Form/Input";

interface IFormValues {
  Name: string;
  PhoneNumber: string;
  Address: string;
  City: string;
}

const BillingInfo = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    console.log("dataaa: ", data);
  };
  return (
    <div className="mobile:p-4 tablet:p-6 bg-white border-0 rounded-xl laptop:max-w-[852px] w-full h-fit ">
      <h1 className="mobile:text-md laptop:text-xl font-bold pb-1">
        Billing Info
      </h1>
      <div className="flex justify-between mobile:mb-6 laptop:mb-8">
        <h3 className="mobile:text-xs laptop:text-sm text-[#90A3BF]">
          Please enter your billing info
        </h3>
        <p className="mobile:text-xs laptop:text-sm text-[#90A3BF]">
          Step 1 of 4
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mobile:flex mobile:flex-col desktop:flex desktop:flex-row gap-8 w-full mb-6">
          <Input label="Name" required={false} register={register} />
          <Input label="Phone Number" required={false} register={register} />
        </div>
        <div className="mobile:flex mobile:flex-col desktop:flex desktop:flex-row gap-8 w-full mb-6">
          <Input label="Address" required={false} register={register} />
          <Input label="Town / City" required={false} register={register} />
        </div>
      </form>
    </div>
  );
};

export default BillingInfo;
