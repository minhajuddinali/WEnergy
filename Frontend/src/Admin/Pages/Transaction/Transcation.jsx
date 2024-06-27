
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
// import { Link } from "react-router-dom"; // add this line
import {
  Grid2X2Icon,
  User2Icon,
  VerifiedIcon,
  UserCog,
  BadgeIndianRupee,
} from "lucide-react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function SideNav() {
  return (
    <nav className="mt-0 flex flex-col top-0 bg-[#1a1a2e] text-white w-64 h-screen  p-4 overflow-auto">
      <div className="text-2xl font-bold mb-12 mt-3">Admin</div>
      <ul className="mt-6 pt-6 space-y-12">
        <li>
          <a
            href="/transcation"
            className="flex items-center hover:text-gray-400"
          >
            <Grid2X2Icon className="mr-2" /> Transactions
          </a>
        </li>
        <li>
          <a
            href="/walletverify"
            className="flex items-center hover:text-gray-400"
          >
            <VerifiedIcon className="mr-2" /> Dashboard
          </a>
        </li>
        <li>
          <a href="/userlist" className="flex items-center hover:text-gray-400">
            <User2Icon className="mr-2" /> Users
          </a>
        </li>
        <li>
          <a href="/emplist" className="flex items-center hover:text-gray-400">
            <UserCog className="mr-2" /> Employee List
          </a>
        </li>
        <li>
          <a
            href="/adminbill"
            className="flex items-center hover:text-gray-400"
          >
            <BadgeIndianRupee className="mr-2" /> Billing
          </a>
        </li>
        <li className="py-4">
          <a
            href="/adminlogin"
            className="hover:text-gray-700 p-4 border-2 border-white rounded-lg bg-slate-300 text-black font-bold"
          >
            Sign Out
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Tp() {
  const [billings, setBillings] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem('adminemail'); // Replace this with the user's actual email
  //  console.log("User email:", userEmail);

    const fetchBillings = async () => {
      try {
        const response = await axios.get(`http://localhost:5150/api/Billings/${userEmail}`);
        setBillings(response.data);
       console.log("Fetched billings:", billings[0].VNo);
      } catch (error) {
        console.error('Error fetching billings:', error);
      }
    };

    fetchBillings();
  }, []); 
  return (
    <>
      <div className="flex-1 overflow-hidden w-full bg-white h-full px-1 top-0">
        <header className="bg-gray-900 text-white w-full h-16 mt-1 py-1 px-6 flex items-center justify-between rounded-t-3xl">
          <h1 className="text-2xl font-bold">Transactions</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                className="bg-gray-800 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search transactions..."
                type="text"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size="icon" variant="outline">
                  <FilterIcon className="h-5 w-5 text-black" />
                  <span className="sr-only">Filters</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-4 space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="all" id="status">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="date-range">Date Range</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="date-range-start" type="date" />
                    <Input id="date-range-end" type="date" />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="amount">Amount</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="amount-min" placeholder="Min" type="number" />
                    <Input id="amount-max" placeholder="Max" type="number" />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="outline">
                    Clear
                  </Button>
                  <Button size="sm">Apply</Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6 bg-slate-400 font-semibold w-full h-full rounded-b-3xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-gray-600">ID</TableHead>
                <TableHead className="font-bold text-gray-600">
                  Fule Type
                </TableHead>
                <TableHead className="font-bold text-gray-600">
                  Amount
                </TableHead>
                <TableHead className="font-bold text-gray-600">Date</TableHead>
                <TableHead className="font-bold text-gray-600">
                  Status
                </TableHead>
                <TableHead className="font-bold text-gray-600">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            {Array.from({ length: 5 }, (_, index) => {
            const billing = billings[index];
            console.log(billing);
            return (
              <TableRow key={index}>
                <TableCell>{billing ? billing.VNo : 'N/A'}</TableCell>
                <TableCell>{billing ? billing.Fuel_type : 'N/A'}</TableCell> {/* Replace with actual field name */}
                <TableCell>{billing ? `₹${billing.Amount}` : '$'}</TableCell> {/* Replace with actual field name */}
                <TableCell>{billing ? billing.Date : 'N/A'}</TableCell>
                <TableCell>
                  <Badge variant="completed" className="bg-cyan-300 p-2">
                    {billing ? billing.status : 'N/A'}
                  </Badge>
                  {/* <Badge variant="pending" className="bg-yellow-300 p-2">
                    Pending
                  </Badge> */}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Complete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
            {/* <TableBody>
              <TableRow>
                <TableCell>INV-001</TableCell>
                <TableCell>$</TableCell>
                <TableCell>$</TableCell>
                <TableCell>2023-05-01</TableCell>
                <TableCell>
                  <Badge variant="pending" className="bg-yellow-300 p-2">
                    Pending
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Complete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>INV-002</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>$</TableCell>
                <TableCell>2023-04-15</TableCell>
                <TableCell>
                  <Badge variant="completed" className="bg-green-700 p-2">
                    Completed
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Complete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>INV-003</TableCell>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>$</TableCell>
                <TableCell>2023-03-30</TableCell>
                <TableCell>
                  <Badge variant="cancelled" className={"bg-red-600 p-2"}>
                    Cancelled
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Complete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>INV-004</TableCell>
                <TableCell>Sarah Lee</TableCell>
                <TableCell>$</TableCell>
                <TableCell>2023-02-20</TableCell>
                <TableCell>
                  <Badge variant="completed" className={"bg-green-700 p-2"}>
                    Completed
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Complete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>INV-005</TableCell>
                <TableCell>Michael Brown</TableCell>
              <TableCell>$500</TableCell>
                <TableCell>2023-01-10</TableCell>
                <TableCell className="ml-4 pl-4">
                  <Badge variant="pending" className={"bg-yellow-400 p-2"}>
                    Pending
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <DeleteIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Complete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody> */}
          </Table>
        </main>
      </div>
    </>
  );
}

export default function Component() {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1 w-full items-center justify-center h-screen bg-red-400">
        <Tp />
      </main>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function DeleteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

// icons and other components remain the same
