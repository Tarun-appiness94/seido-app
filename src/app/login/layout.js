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
          <div className="bg-[#E6EDF1] flex flex-col gap-6 p-4 md:grid md:grid-cols-2 h-screen m-auto">
            {children}
            <HeroBanner />
          </div>
        </div>
      </body>
    </html>
  );
}
