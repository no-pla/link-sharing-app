"use client";

import React from "react";
import Input from "@/app/components/input";
import EmailURL from "@/public/images/icon-email.svg";
import PasswordURL from "@/public/images/icon-password.svg";
import PrimaryButton from "@/app/components/primaryButton";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { emailRegex, passwordRegex } from "@/utils/utils";

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
    mode: "onSubmit",
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
          id="email"
          iconURL={EmailURL}
          placeholder="e.g alex@email.com"
          inputType="email"
          validation={{
            pattern: {
              value: emailRegex,
              message: "Please check again",
            },
            required: {
              value: true,
              message: "Can't be empty",
            },
          }}
        />
        <Input
          label="Password"
          id="password"
          iconURL={PasswordURL}
          placeholder="Enter your password"
          inputType="password"
          validation={{
            pattern: {
              value: passwordRegex,
              message: "Please check again",
            },
            required: {
              value: true,
              message: "Can't be empty",
            },
          }}
        />
        <PrimaryButton text="Login" />
        <div className="flex gap-1 justify-center">
          <p className="text-grey">Don&apos;t have an account?</p>
          <Link href="/register" className="text-purple">
            Create account
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
