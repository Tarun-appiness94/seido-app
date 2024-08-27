"use client";
import { Kanit, Inter, Lato } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { OtpInput } from "../components/OtpInput";

const kanit = Kanit({ subsets: ["latin"], weight: ["300", "400", "700"] });

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const router = useRouter();
  const handleOtp = () => {
    setOtpSent(true);
  };

  const optVerifyHandler = () => {
    if (true) {
      router.push("/candidates");
    }
  };

  return (
    <div className="flex items-center justify-center">
      {!otpSent ? (
        <div className="w-[396px] flex flex-col items-start justify-start gap-0">
          <div className="mb-[64px]">
            <h1 className={`${kanit.className} text-4xl h-14 font-semibold`}>Login</h1>
            <p className={`${kanit.className} text-2xl font-light text-[#303C3F]`}>Welcome Back !</p>
          </div>
          <Input
            type="tel"
            className="bg-white border-[#B1B1B1] w-full h-12 mb-8 text-base"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <Button
            variant="default"
            className={`${kanit.className} w-full h-12 text-base`}
            onClick={handleOtp}
          >
            Generate OTP
          </Button>
        </div>
      ) : (
        <div className="w-[396px] flex flex-col items-start justify-start gap-0">
          <div className="mb-[64px]">
            <h1 className="text-4xl font-semibold text-[#303C3F]">Login</h1>
            <p className="text-2xl font-light	 text-[#303C3F]">Welcome Back !</p>
          </div>
          <div className="mb-2">
            <p className="inline mr-6">Enter the OTP sent to + 91 9876543210</p>
            <Image
              className="inline-block"
              src="/write-icon.webp"
              width={16}
              height={16}
              alt="icon image"
            />
          </div>
          <OtpInput />
          <p className="mt-2 mb-8">
            Didn&apos;t receive OTP?
            <span
              className="text-red-500 ml-1 underline cursor-pointer"
              onClick={() => setOtpSent(false)}
            >
              RESEND OTP
            </span>
          </p>
          <Button
            variant="default"
            className="w-full h-12 text-base"
            onClick={optVerifyHandler}
          >
            Verify & Continue
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
