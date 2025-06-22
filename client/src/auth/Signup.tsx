import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { userSignupSchema, type signupInputState } from "@/schema/userSchema"
import { Mail, LockKeyhole, Loader2, User2, Phone } from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { Link } from "react-router-dom"

const Signup = () => {
  const [input, setInput] = useState<signupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: ""
  })
  const [errors, setErrors ] = useState<Partial<signupInputState>>({})
  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({...input, [name]: value})
  }
  const signupSubmitHandler = async (e: FormEvent) => {
    e.preventDefault()
    // Form Validation initiates
    const result = userSignupSchema.safeParse(input)
    if (!result.success) {
      const errorField = await result.error.formErrors.fieldErrors
      setErrors(errorField as Partial<signupInputState>) 
      return
    }

    // Login API implimentation
    console.log(input)
  }
  const isLoading = false
  return (
    <div className="flex items-center justify-center h-full w-full">
          <form onSubmit={signupSubmitHandler} className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4">
              <div className="mb-4">
                  <h1 className="font-bold text-2xl">LogoHere</h1>
              </div>
              <div className="relative mb-3">
                  <Input name="fullname" type="text" placeholder="Full Name" className="pl-10 focus-visible:ring-1" value={input.fullname } onChange={changeEventHandler} />
          <User2 className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {errors && <span className="text-sm text-red-500">{ errors.fullname }</span>}
              </div>
               <div className="relative mb-3">
                  <Input name="email" type="email" placeholder="Enter Your Email" className="pl-10 focus-visible:ring-1" value={input.email } onChange={changeEventHandler} />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    {errors && <span className="text-sm text-red-500">{ errors.email }</span>}

              </div>
              <div className="relative mb-4 ">
                  <Input name="password" type="password" placeholder="Password" className="pl-10 focus-visible:ring-1" value={input.password} onChange={changeEventHandler} />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    {errors && <span className="text-sm text-red-500">{ errors.password }</span>}

              </div>
              <div className="relative mb-4 ">
                  <Input name="contact" type="text" placeholder="contact" className="pl-10 focus-visible:ring-1" value={input.contact} onChange={changeEventHandler} />
          <Phone className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    {errors && <span className="text-sm text-red-500">{ errors.contact }</span>}

              </div>
              <div className="mb-6">
                  {isLoading ? (
                <Button disabled className="button w-full">
                      Loging In <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                  </Button>
                  ) : (
                    <Button type="submit" className="button w-full">
                      Signup
                  </Button>
                  )}  
              </div>
              <Separator />
              <p className="mt-2">Already have an Account?{" "}
                 <Link to="/login" className="text-blue-400">
                    Login
                 </Link>
              </p>
      </form>
    </div>
  )
}

export default Signup
