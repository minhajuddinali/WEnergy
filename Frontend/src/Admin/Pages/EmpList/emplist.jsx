import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Grid2X2Icon,
  User2Icon,
  VerifiedIcon,
  UserCog,
  BadgeIndianRupee,
} from "lucide-react";

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
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

function SideNav() {
  return (
    <nav className="h-screen flex flex-col rounded-r-sm bg-[#1a1a2e] text-white w-64 h-full p-4">
      <div className="text-2xl font-bold mb-8">ADMIN</div>
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

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1">
        <EmployeeList />
      </main>
    </div>
  );
}

function EmployeeList() {
  return (
    <div
      className="min-h-screen w-full rounded-md
      bg-gradient-to-br from-[#1a1a2e] to-[#5c2a8a] text-white"
    >
      <header className="flex items-center justify-between px-8 py-4">
        <div className="text-2xl font-bold">Employee List</div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              className="rounded-md bg-[#2c2c4c] px-8 py-2 text-sm focus:outline-none"
              placeholder="Search employees..."
              type="text"
            />
          </div>
          <Button size="sm" variant="secondary">
            Refresh
          </Button>
        </div>
      </header>
      <div className="mx-8 mt-8 overflow-x-auto rounded-lg border border-[#3c3c5c] bg-[#2c2c4c]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Work Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      alt="Employee Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>John Doe</div>
                </div>
              </TableCell>
              <TableCell>New York, NY</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button size="sm" variant="success">
                      On-Duty
                      <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-4">
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Last Log Off:
                        </span>
                        <span className="text-sm text-gray-400">
                          May 24, 2023 - 6:30 PM
                        </span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Status:</span>
                        <Badge variant="success">On-Duty</Badge>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Last Login:</span>
                        <span className="text-sm text-gray-400">
                          May 25, 2023 - 9:15 AM
                        </span>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      alt="Employee Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>Jane Doe</div>
                </div>
              </TableCell>
              <TableCell>San Francisco, CA</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button size="sm" variant="warning">
                      Off-Duty
                      <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-4">
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Last Log Off:
                        </span>
                        <span className="text-sm text-gray-400">
                          May 23, 2023 - 8:45 PM
                        </span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Status:</span>
                        <Badge variant="warning">Off-Duty</Badge>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage
                      alt="Employee Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>Bob Smith</div>
                </div>
              </TableCell>
              <TableCell>Chicago, IL</TableCell>
              <TableCell>
                <Badge variant="danger">Terminated</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
