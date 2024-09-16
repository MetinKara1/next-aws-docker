"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { BREAKPOINTS } from "@/utils/helpers";
import useBreakpoint from "use-breakpoint";
import { useIcons } from "../../icons/use-icon";
import { Card, CardContent, CardHeader } from "./index";
import Input from "@/components/Form/Input";
import Delivery from "@/components/Homepage/Delivery";
import Select from "@/components/Form/Select";

interface IFormValues {
  Name: string;
  PhoneNumber: string;
  Address: string;
  City: string;
}

const PaymentMethod = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const { register, handleSubmit } = useForm<IFormValues>();
  const { VisaIcon } = useIcons();

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    console.log("dataaa: ", data);
  };

  return (
    <Card className="mobile:p-4 laptop:p-6 bg-white border-0 rounded-xl w-full laptop:max-w-[852px] w-full h-fit">
      <CardHeader>
        <h1 className="pb-1 mobile:text-md laptop:text-xl font-bold">
          Payment Method
        </h1>
        <div className="flex justify-between">
          <p className="text-[#90A3BF] mobile:pb-6 laptop:pb-8 mobile:text-xs laptop:text-sm">
            Please select your payment method
          </p>
          <p className="mobile:text-xs laptop:text-sm text-[#90A3BF]">
            Step 3 of 4
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="laptop:p-6 mobile:p-4 border-0 bg-[#F6F7F9] rounded-xl">
            <div className="flex justify-between">
              <div className="flex items-center mb-4">
                <div
                  className="relative border-0 rounded-full w-2 h-2 flex justify-center items-center"
                  style={{
                    backgroundColor: "#3563E9",
                  }}
                >
                  <div className="absolute border-0 rounded-full w-4 h-4 bg-[#3563E9] opacity-30"></div>
                </div>
                <p className="ml-2">Credit Card</p>
              </div>
              <VisaIcon />
            </div>
            <div className="mobile:grid mobile:grid-cols-1 desktop:grid desktop:grid-cols-2 gap-8 w-full">
              <Input
                label="Card Number"
                required={false}
                register={register}
                className="bg-white"
                placeholder="Card number"
              />
              <Input
                label="Expration Date"
                required={false}
                register={register}
                className="bg-white"
                placeholder="DD / MM / YY"
              />
              <Input
                label="Card Holder"
                required={false}
                register={register}
                className="bg-white"
                placeholder="Card holder"
              />
              <Input
                label="CVC"
                required={false}
                register={register}
                className="bg-white"
                placeholder="CVC"
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentMethod;
