"use client";

import React from "react";
import {useRouter} from "next/navigation";

import {Dialog, DialogContent, DialogTrigger} from "../ui/dialog";
import LoginForm from "./login-form";
type Props = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

function LoginButton({children, mode = "redirect", asChild}: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}

export default LoginButton;
