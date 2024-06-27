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
import { Badge } from "@/components/ui/badge";
import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client';
import {
  Grid2X2Icon,
  User2Icon,
  VerifiedIcon,
  UserCog,
  BadgeIndianRupee,
} from "lucide-react";

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

function V() {
  return (
    <div className="min-h-screen w-full bg-slate-400 ">
      <header className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white rounded-t-2xl">
        <div className="text-2xl font-bold">Dashboard</div>
        <div className="flex items-center gap-4">


          <Button size="sm" variant="secondary">
            Refresh
          </Button>
        </div>
      </header>
      <iframe title="WEnergy" width="100%" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiZGRmNTQwOWQtMDAwNy00YzdhLWJkM2MtZTg2OTgxY2U4MWQwIiwidCI6IjJjOTRiZWQ2LWQ2NzUtNGQzZC1hNTNiLTdiNDYxZmQ2YWNjMiIsImMiOjN9" frameborder="0" allowFullScreen="true"></iframe>
     
    </div>
  );
}
export default function Component() {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1 w-full items-center justify-center h-screen">
        <V />
      </main>
    </div>
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
