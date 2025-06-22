import { useState } from "react"
import { Loader2, LockKeyhole } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("")
  const isLoading = false
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
          <form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="font-bold text-2xl mb-2">Reset Password</h1>
          <p className="text-sm text-gray-600">Enter your new password to reset old one</p>
        </div>  
        <div className="relative w-full">
          <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter your new password" className="pl-10"/>
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none"/>
        </div>
        {isLoading ? (
          <Button className="w-full" disabled>
            Loading, Please Wait..{ " " }<Loader2 className="mr-2 h-4 w-4 animate-spin"/>
          </Button>
        ) : (
            <Button className="button">Reset Password</Button>
        )}
        <span>
          Back to {" "} <Link className="text-blue-400" to="/login">Login</Link>
        </span>
        </form>
    </div>
  )
}

export default ResetPassword