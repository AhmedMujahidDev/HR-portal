import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Divider from "@/components/ui/dividerCustom"
import { Facebook, Twitter, Github} from "lucide-react"
import logo from "../../asset/hr-logo.png"
import Background from "../../asset/background.webp"

const Login = () => {
  const navigate = useNavigate()
  const [remember, setRemember] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Load saved data
  useEffect(() => {
    const saveData = localStorage.getItem("loginData")

    if (saveData) {
      const parsed = JSON.parse(saveData)
      setEmail(parsed.email)
      setPassword(parsed.password)
      setRemember(true)
    }
  }, [])

  const handleChange = (checked) => {
    const value = checked === true
    setRemember(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (remember) {
      localStorage.setItem(
        "loginData",
        JSON.stringify({ email, password })
      )
    } else {
      localStorage.removeItem("loginData")
    }

    navigate("/admin/dashboard")
  }

  return (
    <div className="relative min-h-screen flex items-center justify-end px-40 bg-cover bg-center"
      style={{backgroundImage: `url(${Background})`}}>

    <div className="absolute inset-0 bg-black/5"></div>

    <div className="relative w-full max-w-md rounded-xl bg-card p-10 shadow-sm z-10">

        <img className="mx-auto w-24 mb-4" src={logo} alt="logo" />

        <h1 className="text-center text-lg mb-2 font-sans">
          Welcome to HR Portal
        </h1>

        <p className="text-center text-sm text-text-color mb-6 font-sans">
          Sign in to access your secure dashboard
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
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-color mb-1 font-sans">
              Password
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

          <div className="flex justify-between items-center mt-2 text-sm font-sans font-medium">
            <label className="flex items-center gap-2 cursor-pointer text-text-color">
              <Checkbox
                checked={remember}
                onCheckedChange={handleChange}
              />
              <span>Remember me</span>
            </label>

            <p className="text-text-color-secondary cursor-pointer">
            <Link to="/forgot-password" className="font-medium text-primary hover:underline">
              Forgot Password
              </Link>
            </p>
          </div>

          <Button type="submit" className="w-full cursor-pointer" size="lg">
            Login
          </Button>

        </form>

        <p className="mt-4 text-center text-sm text-text-color">
          Don&apos;t have an account?{" "}
          <Link to="/" className="font-medium text-primary hover:underline">
            Sign up here
          </Link>
        </p>

        <Divider text="Or Continue With"
        className="text-text-color"
        />

        <div className="flex justify-center items-center gap-4 cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue-500 transition-all duration-300">
          <Facebook size={22} color="black"/>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-gray-500 transition-all duration-300">
          <Twitter size={22} color="black"/>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-black/70 transition-all duration-300">
          <Github size={22} color="black"/>
          </div>
        </div>


      </div>
    </div>  
  )
}

export default Login