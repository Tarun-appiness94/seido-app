import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function OtpInput() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup className="rounded-none">
        <InputOTPSlot index={0} className="border-[#B1B1B1] bg-white rounded-[8px] mr-4" />
        <InputOTPSlot index={1} className="border-[#B1B1B1] bg-white rounded-[8px] mr-4" />
        <InputOTPSlot index={2} className="border-[#B1B1B1] bg-white rounded-[8px] mr-4" />
        <InputOTPSlot index={3} className="border-[#B1B1B1] bg-white rounded-[8px] mr-4" />
        <InputOTPSlot index={4} className="border-[#B1B1B1] bg-white rounded-[8px] mr-4" />
        <InputOTPSlot index={5} className="border-[#B1B1B1] bg-white rounded-[8px] mr-4" />
      </InputOTPGroup>
    </InputOTP>
  )
}
