import React from "react";

interface ButtonInfo {
  text: string;
}

const SecondaryButton = ({ text }: ButtonInfo) => {
  return (
    <button className="rounded-[8px] text-purple w-full py-[11px] bg-transparent px-[27px] border border-purple hover:bg-lightPurple ease-in-out duration-300 disabled:opacity-25">
      {text}
    </button>
  );
};

export default SecondaryButton;
