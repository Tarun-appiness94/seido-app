"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CustomPhoneInput = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1"); // Default country code
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeSelect = (code) => {
    setSelectedCountryCode(code);
  };

  //   const handleGenerateOtp = () => {
  //       console.log(`Country Code: ${selectedCountryCode}, Mobile Number: ${phoneNumber}`);
  //   };

  return (
    <div className="items-center overflow-hidden flex bg-white border-[#B1B1B1] w-full h-12 mb-8 text-base">
      {/* Country Code Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="px-3 py-2 rounded-none border-r-0"
          >
            {selectedCountryCode}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleCountryCodeSelect("+1")}>
            +1 (US)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleCountryCodeSelect("+91")}>
            +91 (IN)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleCountryCodeSelect("+44")}>
            +44 (UK)
          </DropdownMenuItem>
          {/* Add more country codes here */}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Phone Number Input */}
      <Input
        type="tel"
        className="bg-white text-base outline-none"
        placeholder="Mobile Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  );
};

export default CustomPhoneInput;
