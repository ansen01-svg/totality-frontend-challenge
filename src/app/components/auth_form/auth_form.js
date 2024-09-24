import { useState } from "react";
import AuthErrorMsg from "./form_components/auth_error_msg/auth_error_msg";
import Field from "./form_components/text_field/text_field";
import Button from "./form_components/button/button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function AuthForm(props) {
  const {
    username,
    email,
    password,
    confirmPassword,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
    error,
    setError,
    disableBtn,
    btnTitle,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleErrorBtnClick = () => {
    setError("");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-center gap-4"
      method="post"
      onSubmit={handleSubmit}
    >
      {error && (
        <AuthErrorMsg error={error} handleClick={handleErrorBtnClick} />
      )}
      <FieldsHolder
        username={username}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        handleUsernameChange={handleUsernameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        showPassword={showPassword}
        showConfirmPassword={showConfirmPassword}
        handleShowPassword={handleShowPassword}
        handleShowConfirmPassword={handleShowConfirmPassword}
      />
      <Button disableBtn={disableBtn} title={btnTitle} />
    </form>
  );
}

function FieldsHolder(props) {
  const {
    username,
    email,
    password,
    confirmPassword,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    showPassword,
    showConfirmPassword,
    handleShowPassword,
    handleShowConfirmPassword,
  } = props;

  // sign in fields
  if (username == undefined) {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <Field
          label="Email"
          type="email"
          name="email"
          value={email}
          handleChange={handleEmailChange}
        />
        <Field
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          handleChange={handlePasswordChange}
          handleClick={handleShowPassword}
          icon={
            showPassword ? (
              <VisibilityIcon fontSize="small" />
            ) : (
              <VisibilityOffIcon fontSize="small" />
            )
          }
        />
      </div>
    );
  }

  // sign up fields
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <Field
        label="Username"
        type="text"
        name="username"
        value={username}
        handleChange={handleUsernameChange}
      />
      <Field
        label="Email"
        type="email"
        name="email"
        value={email}
        handleChange={handleEmailChange}
      />
      <Field
        label="Password"
        type={showPassword ? "text" : "password"}
        name="password"
        value={password}
        handleChange={handlePasswordChange}
        handleClick={handleShowPassword}
        icon={
          showPassword ? (
            <VisibilityIcon fontSize="small" />
          ) : (
            <VisibilityOffIcon fontSize="small" />
          )
        }
      />
      <Field
        label="Confirm Password"
        type={showConfirmPassword ? "text" : "password"}
        name="confirmPassword"
        value={confirmPassword}
        handleChange={handleConfirmPasswordChange}
        handleClick={handleShowConfirmPassword}
        icon={
          showConfirmPassword ? (
            <VisibilityIcon fontSize="small" />
          ) : (
            <VisibilityOffIcon fontSize="small" />
          )
        }
      />
    </div>
  );
}
