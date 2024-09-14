import BillingInfo from "@/components/Payment/BillingInfo";
import RentalInfo from "@/components/Payment/RentalInfo/RentalInfo";
import RentalSummary from "@/components/Payment/RentalSummary/RentalSummary";
import PaymentMethod from "@/components/Payment/PaymentMethod/PaymentMethod";
import React from "react";
import Confirmation from "@/components/Payment/Confirmation/Confirmation";

interface IFormValues {
  Name: string;
  PhoneNumber: string;
  Address: string;
  City: string;
}

const Payment = () => {
  return (
    <div className="mobile:m-6 laptop:m-8">
      <div className="relative mobile:flex mobile:flex-col-reverse laptop:flex laptop:flex-row mobile:gap-6 laptop:gap-8">
        <div className="w-full">
          <div className="mb-8 w-full">
            <BillingInfo />
          </div>
          <div className="mb-8">
            <RentalInfo />
          </div>
          <div className="mb-8">
            <PaymentMethod />
          </div>

          <Confirmation />
        </div>
        <RentalSummary />
      </div>
    </div>
  );
};

export default Payment;
