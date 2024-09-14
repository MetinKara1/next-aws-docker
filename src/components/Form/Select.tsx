import React from "react";
import { Path, UseFormRegister } from "react-hook-form";

type SelectProps = {
  label: Path<any>;
  register: UseFormRegister<any>;
  required: boolean;
  placeholder?: string;
  data: any[];
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, register, required, placeholder, data }, ref) => {
    return register ? (
      <div className="w-full">
        {label && <label>{label}</label>}
        <select
          {...register(label, { required })}
          className="border-0 rounded-lg py-4 px-8 bg-[#F6F7F9] w-full mt-4"
          ref={ref}
        >
          {data?.map((item, i) => {
            return <option key={i}>{item.value}</option>;
          })}
        </select>
      </div>
    ) : (
      <div className="w-full">
        {label && <label>{label}</label>}
        <select
          className="border-0 rounded-lg py-4 px-8 bg-[#F6F7F9] w-full mt-4"
          ref={ref}
        />
      </div>
    );
  }
);
Select.displayName = "Input";

export default Select;
