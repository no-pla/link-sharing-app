import React from "react";
import Logo from "@/public/images/logo-devlinks-large.svg";
import Image from "next/image";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-lightGrey flex flex-col items-center justify-center">
      <Image src={Logo} alt="devlinks logo" className="mb-[51px]" />
      {children}
    </div>
  );
};

export default template;
