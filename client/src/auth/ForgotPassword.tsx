import { useState } from "react"
import { Mail, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("")
  const isLoading = false
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
          <form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="font-bold text-2xl mb-2">Forgot Password</h1>
          <p className="text-sm text-gray-600">Enter your email address to reset your password</p>
        </div>  
        <div className="relative w-full">
          <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="pl-10"/>
          <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none"/>
        </div>
        {isLoading ? (
          <Button className="w-full" disabled>
            Loading, Please Wait..{ " " }<Loader2 className="mr-2 h-4 w-4 animate-spin"/>
          </Button>
        ) : (
            <Button className="button">Send Reset Link</Button>
        )}
        <span className="text-center">
          Back to {" "} <Link className="text-blue-400" to="/login">Login</Link>
        </span>
        </form>
    </div>
  )
}

export default ForgotPassword
