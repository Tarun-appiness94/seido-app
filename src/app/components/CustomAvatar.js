import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Import ShadCN Avatar components

const CustomAvatar = ({ src, alt, fallback }) => {
  return (
    <div className="relative inline-block">
      <Avatar className="w-10 h-10">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <span className="absolute right-0 top-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-500"></span>
    </div>
  );
};

export default CustomAvatar;
