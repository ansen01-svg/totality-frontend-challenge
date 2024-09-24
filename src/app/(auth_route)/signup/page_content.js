"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/header/header";
import AuthForm from "@/app/components/auth_form/auth_form";
import LinkHolder from "../components/link_holder/link_holder";

export default function Content() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const router = useRouter();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setDisableBtn(true);

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill up all the fields.");
      setDisableBtn(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords does not match.");
      setDisableBtn(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        }
      );

      if (response.status !== 201) {
        const data = await response.json();

        // if (data.error.includes("user validation")) {
        //   const errMsg = data.error.split("username: ")[1];
        //   setError(errMsg);
        // } else {
        //   setError(data.error);
        // }
        setError(data.error);
        setDisableBtn(false);
        return;
      }

      router.push("/signin");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      setError("An error occured. Try again after sometime.");
    } finally {
      setDisableBtn(false);
    }
  };

  return (
    <div className="w-[352px] max-w-[352px] h-full flex flex-col items-center justify-center gap-4">
      <Header title={"Create an account"} />
      <AuthForm
        username={username}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        handleUsernameChange={handleUsernameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
        disableBtn={disableBtn}
        btnTitle="Sign up"
      />
      <LinkHolder
        linkText={"Already have an account?"}
        linkTo={"/signin"}
        linkTitle={"Sign in"}
      />
    </div>
  );
}
