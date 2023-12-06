import Image from "next/image";
import React from "react";

interface InputInfo {
  label: string;
  iconURL: string;
  placeholder: string;
  inputType: string;
}

const Input = ({ label, iconURL, placeholder, inputType }: InputInfo) => {
  return (
    <div className="flex flex-col relative">
      <label className="mb-[4px] text-darkGrey text-xs">{label}</label>
      <Image
        src={iconURL}
        width={16}
        height={16}
        alt=""
        className="absolute top-[38px] left-[16px]"
      />
      <input
        type={inputType}
        placeholder={placeholder}
        className="rounded-[8px] border border-border pl-[44px] pr-[16px] py-[12px] focus:border-purple focus:shadow-inputShadow"
      />
    </div>
  );
};

export default Input;
