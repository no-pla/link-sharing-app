import React from "react";
import RegisterForm from "./components/registerForm";

const page = () => {
  return (
    <main className="bg-white p-[40px] rounded-[12px] w-[476px] max-w-[100%]">
      <div className="mb-[40px]">
        <h2 className="text-[32px] font-bold">Create account</h2>
        <p className="text-grey">
          Let&apos;s get you started sharing your links !
        </p>
      </div>
      <RegisterForm />
    </main>
  );
};

export default page;
