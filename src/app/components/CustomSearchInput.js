"use client"
import { Input } from "@/components/ui/input";
import useCandidateStore from "@/store/store";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const CustomSearchInput = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const { filterUsingSerch } = useCandidateStore();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      filterUsingSerch(searchTerm);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, filterUsingSerch]);


  return (
    <div className="relative w-full md:max-w-sm">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="w-5 h-5 text-gray-400" />
      </span>
      <Input
        type="text"
        placeholder="Search..."
        className="md:w-[300px] h-10 pl-10 rounded-xl bg-white shadow-[0px_1px_4px_0px_#00000026_inset]"
        onChange={(e) => setSerchTerm(e.target.value)}
      />
    </div>
  );
};

export default CustomSearchInput;
