"use client";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {signIn} from "next-auth/react";

import {Button} from "../ui/button";
import {DEFAULT_LOGIN_REDIRECT} from "@/routes";
import {useSearchParams} from "next/navigation";

function Social() {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || DEFAULT_LOGIN_REDIRECT;
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        className="w-full"
        size={"lg"}
        variant={"outline"}
        onClick={() => onClick("google")}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        className="w-full"
        size={"lg"}
        variant={"outline"}
        onClick={() => onClick("github")}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
}

export default Social;
