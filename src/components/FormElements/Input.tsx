import React from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

type InputProps = {
  label?: Path<any>;
  register?: UseFormRegister<any>;
  required?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, register, required }, ref) => {
    return register ? (
      <div className="w-full">
        {label && <label>{label}</label>}
        <input
          ref={ref}
          {...register(label, { required })}
          className="border-0 rounded-lg py-4 bg-[#F6F7F9] w-full mt-4"
        />
      </div>
    ) : (
      <div className="w-full">
        {label && <label>{label}</label>}
        <input
          ref={ref}
          className="border-0 rounded-lg py-4 bg-[#F6F7F9] w-full mt-4"
        />
      </div>
    );
  }
);
Input.displayName = "Input";
