import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import React, { useRef, useState } from "react"

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""])
  const inputRef = useRef<(HTMLInputElement | null)[]>([])
  const isLoading = false

  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
    }
    // Move to next input field if a digit is entered
    if (value !== "" && index < 5) {
      inputRef.current[index + 1]?.focus()
    }
  }
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && e.currentTarget.value === "" && index > 0) {
      inputRef.current[index - 1]?.focus()
    }
  }
  return (
    <div className="flex items-center justify-center h-screen w-ful">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200 ">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Verify your email</h1>
          <p className="text-sm text-gray-600">Enter the 6 digit code sent to your given email Id</p>
        </div>
        <form action="">
          <div className="flex gap-4 justify-center">
            {
              otp.map((letter: string, index: number) => (
                <Input
                  maxLength={1}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                  ref={(element) => (inputRef.current[index] = element)}
                  type="text"
                  key={index}
                  value={letter}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                  className="md:w-12 md:h-12 w-10 h-10 text-center text-sm md:text-2xl font-normal md:font-bold rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
              ))
            }
          </div>
          {isLoading ? (
            <Button className="button mt-6 w-full" disabled>Loading Please Wait.. {" "}
              <Loader2 className="animate-spin mr-2 w-4 h-4" />
            </Button>
          ) : (
            <Button className="button mt-6 w-full" >
              Verify
            </Button>
          )}
        </form>
      </div>
    </div>
  )
}

export default VerifyEmail
