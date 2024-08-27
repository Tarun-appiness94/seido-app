import { Badge } from "@/components/ui/badge";
import useCandidateStore from "@/store/store";
import Image from "next/image";

const CustomBadge = ({ label, filterType }) => {
  const {removeItem, applyFilters} = useCandidateStore();

  const handleRemove = () =>{
    removeItem(filterType);
    applyFilters();
  }
  return (
    <div className="inline-flex items-center justify-center bg-[#E6EDF1] text-sm font-medium px-3 py-1 rounded-full">
      <Badge className="bg-[#E6EDF1] shadow-none border-0 p-0 text-[#08445C]">
        {label}
      </Badge>
      <button
        onClick={handleRemove}
        className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <Image
          className="flex"
          src="/X-icon.webp"
          width={10}
          height={10}
          alt="icon image"
        />
      </button>
    </div>
  );
};

export default CustomBadge;
