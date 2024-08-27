"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import useCandidateStore from "@/store/store";

const FilterDropdown = ({ name, placeholder, options, selectedOptions, onChange }) => {
  const handleCheckboxChange = (value, checked) => {
    if (checked) {
      onChange([...selectedOptions, value]);
    } else {
      onChange(selectedOptions.filter((option) => option !== value));
    }
  };
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-1">
      <AccordionItem
        value={name}
        className="border-[#E6EDF1] border-2 rounded-lg"
      >
        <AccordionTrigger className="bg-[#E6EDF1] rounded-sm p-2 h-9 normal-case text-[#08445C] text-sm flex justify-between w-full data-[state=open]:bg-white data-[state=open]:border-b-2 rounded-b-none">
          {name}
        </AccordionTrigger>
        <AccordionContent className="p-2 pt-3">
          <Command>
            <CommandInput placeholder={placeholder}/>
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
              <CommandGroup>
                {options.map((option, index) => (
                  <CommandItem key={index}>
                    <Checkbox
                      id={`checkbox-${option}`}
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onCheckedChange={(checked) => handleCheckboxChange(option, checked)}
                    />
                    <label htmlFor={option} className="ml-2">
                      {option}
                    </label>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterDropdown;
