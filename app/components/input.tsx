import Image from "next/image";
import React from "react";
import { useFormContext } from "react-hook-form";

interface InputInfo {
  label: string;
  iconURL: string;
  placeholder: string;
  inputType: string;
  validation?: any;
  id: string;
}

const Input = ({
  label,
  iconURL,
  placeholder,
  inputType,
  validation,
  id,
}: InputInfo) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<any>();
  const error = errors[id];

  console.log(errors);

  return (
    <div className="flex flex-col relative">
      <label
        htmlFor={id}
        className={`mb-[4px] ${error ? "text-red" : "text-darkGrey"} text-xs`}
      >
        {label}
      </label>
      <Image
        src={iconURL}
        width={16}
        height={16}
        alt="icon"
        className="absolute top-[38px] left-[16px]"
      />
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        className={`rounded-[8px] border focus:border-purple focus:shadow-inputShadow ${
          error ? "border-red" : "border-border"
        }  pl-[44px] pr-[16px] py-[12px]`}
        {...register(id, validation)}
      />
      <p className="absolute top-[36px] right-[16px] text-[12px] text-red">
        {error && error?.message?.toString()}
      </p>
    </div>
  );
};

export default Input;
