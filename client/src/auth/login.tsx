import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@radix-ui/react-separator"
import { Mail, LockKeyhole, Loader2 } from "lucide-react"
import { Link } from "react-router-dom"

const Login = () => {
    const isLoading = false
  return (
    <div className="flex items-center justify-center h-full w-full">
          <form action="" className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4">
              <div className="mb-4">
                  <h1 className="font-bold text-2xl">LogoHere</h1>
              </div>
              <div className="relative mb-3">
                  <Input type="email" placeholder="Enter Your Email" className="pl-10 focus-visible:ring-1" />
                  <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
              </div>
              <div className="relative mb-4 ">
                  <Input type="password" placeholder="Password" className="pl-10 focus-visible:ring-1" />
                  <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
              </div>
              <div>
                  {isLoading ? (
                <Button className="button w-full">
                      Loging In <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                  </Button>
                  ) : (
                    <Button className="button w-full">
                      Login
                  </Button>
                  )}  
              </div>
              <Separator />
              <p>Dont have an Account?{" "}
                 <Link to="/signup" className="text-primary">
                    Sign Up
                 </Link>
              </p>
      </form>
    </div>
  )
}

export default Login
