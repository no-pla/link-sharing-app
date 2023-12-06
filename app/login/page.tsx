import React from "react";
import LoginForm from "./components/loginForm";

const page = () => {
  return (
    <main className="bg-white p-[40px] rounded-[12px] w-[476px] max-w-[100%]">
      <div className="mb-[40px]">
        <h2 className="text-[32px] font-bold">Login</h2>
        <p className="text-grey">
          Add your details below to get back into the app
        </p>
      </div>
      <LoginForm />
    </main>
  );
};

export default page;
