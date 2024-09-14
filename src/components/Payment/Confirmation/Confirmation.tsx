"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Card, CardContent, CardHeader } from "./index";
import Input from "@/components/Form/Input";
import Delivery from "@/components/Homepage/Delivery";
import Select from "@/components/Form/Select";
import Checkbox from "@/components/Checkbox/index";
import Button from "@/components/Button/index";
import { useIcons } from "@/components/icons/use-icon";

interface IFormValues {
  Name: string;
  PhoneNumber: string;
  Address: string;
  City: string;
}

const Confirmation = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const { SecuritySafetyIcon } = useIcons();

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    console.log("dataaa: ", data);
  };

  return (
    <Card className="mobile:p-4 laptop:p-6 bg-white border-0 rounded-xl w-full laptop:max-w-[852px] w-full h-fit">
      <CardHeader>
        <h1 className="pb-1 mobile:text-md laptop:text-xl font-bold">
          Confirmation
        </h1>
        <div className="flex justify-between">
          <p className="text-[#90A3BF] mobile:pb-6 laptop:pb-8 mobile:text-xs laptop:text-sm">
            We are getting to the end. Just few clicks and your rental is ready!
          </p>
          <p className="mobile:text-xs laptop:text-sm text-[#90A3BF]">
            Step 4 of 4
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-8 py-4 border-0 bg-[#F6F7F9] rounded-xl mb-6">
            <Checkbox
              label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
              value={register}
              className="gap-5"
            />
          </div>

          <div className="px-8 py-4 border-0 bg-[#F6F7F9] rounded-xl mb-8">
            <Checkbox
              label="I agree with our terms and conditions and privacy policy."
              value={register}
              className="gap-5"
            />
          </div>
          <div className="mb-8">
            <Button
              type="primary"
              text="Rent Now"
              variant="large"
              onClick={() => {}}
            />
          </div>
          <div className="mb-4">
            <SecuritySafetyIcon />
          </div>
          <div className="mb-2">
            <p className="text-md font-bold">All your data are safe</p>
          </div>
          <div>
            <p className="text-sm text-[#90A3BF]">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Confirmation;
