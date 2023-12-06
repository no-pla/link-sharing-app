"use client";

import React from "react";
import Input from "@/app/components/input";
import EmailURL from "@/public/images/icon-email.svg";
import PasswordURL from "@/public/images/icon-password.svg";
import Button from "@/app/components/button";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

interface LogInInfo {
  email: string;
  password: string;
}

const LoginForm = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onLogin = ({ email, password }: LogInInfo) => {
    console.log(email, password);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          onLogin(data);
        })}
        className="flex flex-col gap-[24px]"
      >
        <Input
          label="Email address"
          iconURL={EmailURL}
          placeholder="e.g alex@email.com"
          inputType="email"
        />
        <Input
          label="Password"
          iconURL={PasswordURL}
          placeholder="Enter your password"
          inputType="password"
        />
        <Button text="Login" />
        <div className="flex gap-1 justify-center">
          <p>Don&apos;t have an account?</p>
          <Link href="/register" className="text-purple">
            Create account
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
