import Image from "next/image";
import React from "react";
import { useFormContext } from "react-hook-form";

interface InputInfo {
  label: string;
  iconURL: string;
  placeholder: string;
  inputType: string;
  validation?: any;
}

const Input = ({
  label,
  iconURL,
  placeholder,
  inputType,
  validation,
}: InputInfo) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<any>();
  const error = errors[inputType];

  return (
    <div className="flex flex-col relative">
      <label
        htmlFor={inputType}
        className={`mb-[4px] ${error ? "text-red" : "text-darkGrey"} text-xs`}
      >
        {label}
      </label>
      <Image
        src={iconURL}
        width={16}
        height={16}
        alt=""
        className="absolute top-[38px] left-[16px]"
      />
      <input
        id={inputType}
        type={inputType}
        placeholder={placeholder}
        className={`rounded-[8px] border focus:border-purple focus:shadow-inputShadow ${
          error ? "border-red" : "border-border"
        }  pl-[44px] pr-[16px] py-[12px]`}
        {...register(inputType, validation)}
      />
      <p className="absolute top-[36px] right-[16px] text-[12px] text-red">
        {error && error?.message?.toString()}
      </p>
    </div>
  );
};

export default Input;
