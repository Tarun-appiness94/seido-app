import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: ["400", "700"] });

const CustomDialogBtn = () => {
  const [fileName, setFileName] = useState("Export 105 List_5th July 24.xlxs");
  const [email, setEmail] = useState("rahul.choudhury@gmail.com");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleExport = () => {
    console.log(`Exporting file ${fileName} to ${email}`);
    setShowConfirmation(true);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-10 rounded-xl">
            <Image
              className="inline-block mr-3 flex-shrink-0"
              src="/download-icon.webp"
              width={16}
              height={16}
              alt="icon image"
            />
            Export List
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-0 gap-0">
          <DialogHeader className="px-6 py-4  border-b-4 border-[#E6EDF1]">
            <DialogTitle className="text-[#08445C] font-semibold text-xl">
              Export List as Excel
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 px-9 py-9">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="font-thin text-xs text-[#515151]">
                Email ID ( Enter the Email ID in which you want to recieve the
                list )
              </Label>
              <Input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="font-thin text-xs text-[#515151]">
                Name Export List
              </Label>
              <Input
                type="text"
                placeholder="File Name"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter className="grid grid-cols-1 px-6 pt-0 pb-10">
            <Button
              type="submit"
              onClick={handleExport}
              className={kanit.className}
            >
              Send Excel as Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="py-10 px-3 sm:max-w-[322px]">
          <div className="flex flex-col gap-6 items-center justify-center">
          <DialogHeader>
            <DialogTitle >
            </DialogTitle>
          </DialogHeader>
            <Image
              src="/confirmation-img.webp"  
              alt="Confirmation image"
              width={80}
              height={80}
            />
            <p className="text-[#00496E] text-base font-bold text-center">
              {`Excel File name "${fileName}" succesfully
              sent to "${email}"`}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomDialogBtn;
