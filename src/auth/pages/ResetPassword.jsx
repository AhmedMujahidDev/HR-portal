import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import logo from "../../asset/hr-logo.png";
import Background from "../../asset/background.webp";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call signup API
    console.log({ password });

    setTimeout(() => {
      setMessage("If email exists, you will recevie a reset link.");
    }, 1000);
  };

  const handleRememberChange = (checked) => {
    setRemember(checked === true);
  };
  return (
    <div
      className="relative min-h-screen flex items-center justify-end px-40 bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black/5"></div>

      <div
        className="signup-card-scroll relative w-full max-w-md max-h-[90vh] overflow-y-auto scroll-smooth-inner p-10 z-10
          rounded-2xl bg-card/95 backdrop-blur-xl shadow-xl shadow-primary/5"
      >
        <img className="mx-auto w-24 mb-4" src={logo} alt="logo" />

        <h1 className="text-center text-lg mb-2 font-sans">
          Welcome to HR Portal
        </h1>

        <p className="text-center text-sm text-text-color mb-6 font-sans">
          Enter your email to reset your password.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-text-color mb-1 font-sans">
              New Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-color mb-1 font-sans">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex justify-between items-center mt-2 text-sm font-sans font-medium">
            <label className="flex items-center gap-2 cursor-pointer text-text-color">
              <Checkbox
                checked={remember}
                onCheckedChange={handleRememberChange}
              />
              <p className="font-sans text-sm">
                I agree to{" "}
                <span className="font-sans text-sm text-text-color-secondary">
                  the terms and conditions
                </span>
              </p>
            </label>
          </div>

          <Button type="submit" className="w-full cursor-pointer" size="lg">
            <Link to="/login">Submit</Link>
          </Button>
          {message && <p className="text-green-600">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
