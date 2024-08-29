import React from "react";
import { useIcons } from "../icons/use-icon";

interface Props {
  label: string;
  count: number;
  value: boolean;
}

const Checkbox = ({ label, count, value }: Props) => {
  const { CheckboxIcon } = useIcons();
  return (
    <div className="flex items-center">
      <div className="mr-2 cursor-pointer">
        {value ? (
          <CheckboxIcon />
        ) : (
          <div className="w-5 h-5 border border-[#90A3BF] rounded-md"></div>
        )}
      </div>
      <label className="text-lg text-[#596780]">{label}</label>
      <label className="text-[#90A3BF]">({count})</label>
    </div>
  );
};

export default Checkbox;
