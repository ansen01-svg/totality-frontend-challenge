"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/header/header";
import AuthForm from "@/app/components/auth_form/auth_form";
import LinkHolder from "../components/link_holder/link_holder";

export default function Content() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [callbackUrl, setCallbackUrl] = useState("");

  const router = useRouter();

  // get callback url
  useEffect(() => {
    const currentUrl = window.location.href;

    if (currentUrl.includes("/bag")) {
      setCallbackUrl(currentUrl.split("callbackUrl=")[1]);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setDisableBtn(true);

    if (!email || !password) {
      setError("Please fill up all the fields.");
      setDisableBtn(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.status !== 200) {
        const data = await response.json();
        setError(data.error);
        setDisableBtn(false);
        return;
      }

      if (callbackUrl) {
        router.push(callbackUrl);
        router.refresh();
      } else {
        window.location.reload();
        router.push("/");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      setError("An error ocurred, try again after sometime.");
    } finally {
      setDisableBtn(false);
    }
  };

  return (
    <div className="w-[352px] max-w-[352px] h-full flex flex-col items-center justify-center gap-4">
      <Header title={"Sign in with email"} />
      <AuthForm
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
        disableBtn={disableBtn}
        btnTitle="Sign in"
      />
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <LinkHolder
          linkText={`Don't have an account?`}
          linkTo={"/signup"}
          linkTitle={"Sign up"}
        />
      </div>
    </div>
  );
}
