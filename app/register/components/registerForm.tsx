"use client";

import Input from "@/app/components/input";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import EmailURL from "@/public/images/icon-email.svg";
import PasswordURL from "@/public/images/icon-password.svg";
import { emailRegex, passwordRegex } from "@/utils/utils";
import PrimaryButton from "@/app/components/primaryButton";
import Link from "next/link";

interface RegisterInfo {
  email: string;
  password: string;
  confirm_password: string;
}

const RegisterForm = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    mode: "onSubmit",
  });

  const onRegister = ({ email, password, confirm_password }: RegisterInfo) => {
    console.log(email, password, confirm_password);
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          onRegister(data);
        })}
        className="flex flex-col gap-[24px]"
      >
        <Input
          label="Email address"
          iconURL={EmailURL}
          placeholder="e.g alex@email.com"
          inputType="email"
          id="email"
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
          iconURL={PasswordURL}
          placeholder="At least 8 characters"
          inputType="password"
          id="password"
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
        <Input
          label="Confirm password"
          iconURL={PasswordURL}
          placeholder="At least 8 characters"
          inputType="password"
          id="confirm_password"
          validation={{
            required: {
              value: true,
              message: "Can't be empty",
            },
            validate: (val: string) => {
              if (methods.watch("password") != val) {
                return "Please check again";
              }
            },
          }}
        />
        <PrimaryButton text="Create new account" />
        <div className="flex gap-1 justify-center">
          <p className="text-grey">Already have an account?</p>
          <Link href="/login" className="text-purple">
            Login
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
