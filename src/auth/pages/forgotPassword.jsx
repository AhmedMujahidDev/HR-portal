import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../../asset/hr-logo.png";
import Background from "../../asset/background.webp";

const forgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call signup API
    console.log({ email });

    setTimeout(() =>{
      setMessage("If email exists, you will recevie a reset link.")
    }, 1000)
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-end px-40 bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black/5"></div>

      <div
        className="signup-card-scroll relative w-full max-w-md max-h-[90vh] overflow-y-auto scroll-smooth-inner p-10 z-10
          rounded-2xl border border-l-4 bg-card/95 backdrop-blur-xl shadow-xl shadow-primary/5"
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
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-input px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <Button type="submit" className="w-full cursor-pointer" size="lg">
           Forgot Password
          </Button>
          {message && <p className="text-green-600">{message}</p>}

          <Button type="button" variant="outline" className="w-full" size="lg" asChild>
            <Link to="/login">Cancel</Link>
          </Button>
        </form>
      </div>
    </div>
  )
}

export default forgotPassword