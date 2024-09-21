"use client";
import BillingInfo from "@/components/Payment/BillingInfo";
import RentalInfo from "@/components/Payment/RentalInfo/RentalInfo";
import RentalSummary from "@/components/Payment/RentalSummary/RentalSummary";
import PaymentMethod from "@/components/Payment/PaymentMethod/PaymentMethod";
import React, { useState } from "react";
import Confirmation from "@/components/Payment/Confirmation/Confirmation";
import BillingInfoSkeleton from "@/components/Payment/BillingInfoSkeleton";
import RentalInfoSkeleton from "@/components/Payment/RentalInfo/RentalInfoSkeleton";
import PaymentMethodSkeleton from "@/components/Payment/PaymentMethod/PaymentMethodSkeleton";
import ConfirmationSkeleton from "@/components/Payment/Confirmation/ConfirmationSkeleton";
import RentalSummarySkeleton from "@/components/Payment/RentalSummary/RentalSummarySkeleton";

interface IFormValues {
  Name: string;
  PhoneNumber: string;
  Address: string;
  City: string;
}

const Payment = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="mobile:m-6 laptop:m-8">
      <div className="relative mobile:flex mobile:flex-col-reverse laptop:flex laptop:flex-row mobile:gap-6 laptop:gap-8">
        <div className="w-full">
          <div className="mb-8 w-full">
            {loading ? <BillingInfoSkeleton /> : <BillingInfo />}
          </div>
          <div className="mb-8">
            {loading ? <RentalInfoSkeleton /> : <RentalInfo />}
          </div>
          <div className="mb-8">
            {loading ? <PaymentMethodSkeleton /> : <PaymentMethod />}
          </div>

          {loading ? <ConfirmationSkeleton /> : <Confirmation />}
        </div>
        {loading ? <RentalSummarySkeleton /> : <RentalSummary />}
      </div>
    </div>
  );
};

export default Payment;
