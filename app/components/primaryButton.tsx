import React from "react";

interface ButtonInfo {
  text: string;
}

const PrimaryButton = ({ text }: ButtonInfo) => {
  return (
    <button className="rounded-[8px] text-white w-full py-[11px] bg-purple px-[27px] hover:bg-hover ease-in-out duration-300 disabled:bg-lightPurple">
      {text}
    </button>
  );
};

export default PrimaryButton;
