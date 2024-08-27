import HeroBanner from "../components/HeroBanner";

export const metadata = {
  title: "Seido login page",
  description: "Login to candidate dashboard using mobile and",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-[#E6EDF1] w-screen">
          <div className="bg-[#E6EDF1] grid grid-cols-2 h-screen	max-w-[1280px] m-auto">
            {children}
            <HeroBanner />
          </div>
        </div>
      </body>
    </html>
  );
}
