import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { userLoginSchema, type loginInputState } from "@/schema/userSchema"
import { Mail, LockKeyhole, Loader2 } from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [input, setInput] = useState<loginInputState>({
    email: "",
    password: ""
  })
  const [errors, setErrors ] = useState<Partial<loginInputState>>({})
  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({...input, [name]: value})
  }
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
    const result = userLoginSchema.safeParse(input)
    if (!result.success) {
      const errorField = result.error.formErrors.fieldErrors
      setErrors(errorField as Partial<loginInputState>)
      return
    }
    console.log(input)
  }
  const isLoading = false
  return (
    <div className="flex items-center justify-center h-full w-full">
          <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4">
              <div className="mb-4">
                  <h1 className="font-bold text-2xl">LogoHere</h1>
              </div>
              <div className="relative mb-3">
                  <Input name="email" type="email" placeholder="Enter Your Email" className="pl-10 focus-visible:ring-1" value={input.email } onChange={changeEventHandler} />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {errors && <span className="text-xs text-red-400">{ errors.email }</span>}
              </div>
              <div className="relative mb-4 ">
                  <Input name="password" type="password" placeholder="Password" className="pl-10 focus-visible:ring-1" value={input.password} onChange={changeEventHandler} />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {errors && <span className="text-xs text-red-400">{ errors.password }</span>}
              </div>
              <div className="mb-6">
                  {isLoading ? (
                <Button disabled className="button w-full">
                      Loging In <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                  </Button>
                  ) : (
                    <Button type="submit" className="button w-full">
                      Login
                  </Button>
                  )}  
              </div>
              <Separator />
              <p className="mt-2">Dont have an Account?{" "}
                 <Link to="/signup" className="text-blue-400">
                    Sign Up
                 </Link>
              </p>
      </form>
    </div>
  )
}

export default Login
