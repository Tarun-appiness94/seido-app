import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const CustomTable = ({candidates}) => {
    return (
      <Table className="overflow-auto">
        <TableHeader>
          <TableRow className="h-10 border-b-4">
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Sl. No.</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">First Name</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Last Name</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Full Name</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Email ID</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Mobile Number</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Pin Code</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">City</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">State</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Country</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Salary</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Company</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Position</TableHead>
            <TableHead className="whitespace-nowrap bg-white text-[#08445C] px-2 border-b-4">Tag</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow key={candidate.id} className="h-12">
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.id}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.firstName}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.lastName}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.fullName}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.email}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.mobile}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.pincode}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.city}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.state}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.country}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.salary}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.company}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.position}</TableCell>
              <TableCell className="whitespace-nowrap bg-white text-xs text-[#464646]">{candidate.tag}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
  export default CustomTable;