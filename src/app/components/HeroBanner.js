import Image from "next/image";

const HeroBanner = () => {
  return (
    <Image
      className="h-screen w-full object-cover"
      src="/banner-img.webp"
      width={624}
      height={832}
      alt="main banner image"
    />
  );
};

export default HeroBanner;
