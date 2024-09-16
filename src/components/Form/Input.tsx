import React from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { cn } from "@/utils/tailwind-merge";

type InputProps = {
  label: Path<any>;
  register: UseFormRegister<any>;
  required: boolean;
  className?: string;
  placeholder?: string;
  inputRef?: any;
};

// interface IFormValues {
//   "First Name": string;
//   Age: number;
// }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, register, required, className, placeholder },
    inputRef,
    ...rest
  ) => {
    return register ? (
      <div className="w-full">
        {label && <label>{label}</label>}
        <input
          {...register(label, { required })}
          ref={inputRef}
          className={cn(
            "border-0 rounded-lg py-4 px-8 bg-[#F6F7F9] w-full mt-4",
            className && className
          )}
          placeholder={placeholder}
        />
      </div>
    ) : (
      <div className="w-full">
        {label && <label>{label}</label>}
        <input
          className={cn(
            "border-0 rounded-lg py-4 px-8 bg-[#F6F7F9] w-full mt-4",
            className && className
          )}
          ref={inputRef}
          placeholder={placeholder}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
