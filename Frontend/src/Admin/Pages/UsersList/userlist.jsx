// import PropTypes from "prop-types";
// import { Button } from "@/components/ui/button";
// import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
// import {
//   DialogTrigger,
//   DialogTitle,
//   DialogDescription,
//   DialogHeader,
//   // DialogFooter,
//   DialogContent,
//   Dialog,
// } from "@/components/ui/dialog";
// import { Card } from "@/components/ui/card";
// import i1 from "../../Assets/corolla 2011.jpg";
// import SideBar from "../../compt/sidebar/sidebar";

// export default function Component() {
//   return (
//     <>
//       <div className="Bod">
//         <div className="cont">
//           <SideBar />
//           <div className="mainContent">
//             <div className="mx-auto h-full rounded-3xl px-4 py-8 md:px-6 md:py-12 from-[#1a1a2e] to-[#5c2a8a] text-white bg-gradient-to-br">
//               <div className="flex items-center justify-between mb-6">
//                 <h1 className="text-2xl font-bold">Customer List</h1>
//                 <Button variant="outline" className="bg-black">
//                   <PlusIcon className="w-4 h-4 mr-2" />
//                   Add Customer
//                 </Button>
//               </div>
//               <div className="grid gap-6">
//                 <CustomerCard
//                   name="John Doe"
//                   VehicleNumber="AB29SR2031"
//                   vehicle="2022 Toyota Camry"
//                   VehicleType="car"
//                   number="+91 55512 34567"
//                   email="john.doe@example.com"
//                 />
//                 <CustomerCard
//                   name="Jane Smith"
//                   vehicle="2021 Honda Civic"
//                   number="+91 55598 76543"
//                   email="jane.smith@example.com"
//                   VehicleNumber="AB29SR2031"
//                   VehicleType="car"
//                 />
//                 <CustomerCard
//                   name="Michael Johnson"
//                   vehicle="2020 Ford Mustang"
//                   number="+91 55545 67890"
//                   email="michael.johnson@example.com"
//                   VehicleNumber="AB29SR2031"
//                   VehicleType="car"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function PlusIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       color="Black"
//     >
//       <path d="M5 12h14" />
//       <path d="M12 5v14" />
//     </svg>
//   );
// }

// function CustomerCard({
//   name,
//   vehicle,
//   number,
//   email,
//   VehicleNumber,
//   VehicleType,
// }) {
//   return (
//     <Card className="h-full p-4 flex items-center bg-[#1a1a2e] text-white">
//       <Avatar className="mr-4">
//         <AvatarImage alt={name} src="/placeholder-user.jpg" />
//         <AvatarFallback>
//           {name
//             .split(" ")
//             .map((n) => n[0])
//             .join("")}
//         </AvatarFallback>
//       </Avatar>
//       <div className="flex-1">
//         <div className="font-medium">{name}</div>
//         <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
//           {vehicle}
//         </div>
//         <div className="text-sm text-gray-500 dark:text-gray-400 flex space-x-2">
//           <span>{VehicleType}</span>
//           <span>{number}</span>
//         </div>
//       </div>
//       <div className="flex items-center gap-2">
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button size="icon" variant="outline">
//               <PlusIcon className="w-4 h-4" />
//               <span className="sr-only">More</span>
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[600px]">
//             <DialogHeader>
//               <DialogTitle>Customer Details</DialogTitle>
//               <DialogDescription>
//                 View the details of the customer and their vehicle purchase.
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <img
//                   alt="Vehicle Image"
//                   className="rounded-lg object-cover w-full"
//                   height={200}
//                   src={i1}
//                   style={{
//                     aspectRatio: "300/200",
//                     objectFit: "cover",
//                   }}
//                   width={300}
//                 />
//               </div>
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-lg font-medium">{name}</h3>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">
//                     {email}
//                   </div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">
//                     {number}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="text-base font-medium">Vehicle Details</h4>
//                   <div className="text-sm text-gray-800 dark:text-gray-800">
//                     <span className="font-semibold">Vehicle Number:</span>
//                     <span className="font-bold"> {VehicleNumber}</span>
//                   </div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">
//                     <span className="font-bold text-gray-700">{vehicle}</span>
//                   </div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">
//                     <span className="text-gray-700 font-semibold">
//                       Vehicle Type:{VehicleType}
//                     </span>
//                   </div>
//                 </div>
//                 {/* <div>
//                   <h4 className="text-base font-medium">Purchase Details</h4>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">
//                     Purchase Date: {purchaseDate}
//                   </div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">
//                     Purchase Price: {price}
//                   </div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">
//                     Financing: {loan}
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//             {/* <DialogFooter>
//               <div>
//                 <Button variant="outline">Close</Button>
//               </div>
//             </DialogFooter> */}
//           </DialogContent>
//         </Dialog>
//         <Button size="sm" variant="link" className="text-white">
//           View Details
//         </Button>
//       </div>
//     </Card>
//   );
// }

// CustomerCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   vehicle: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   VehicleNumber: PropTypes.string.isRequired,
//   VehicleType: PropTypes.string.isRequired,
// };

import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
// import SideBar from "../../compt/sidebar/sidebar";
import i1 from "../../Assets/corolla 2011.jpg";
import {
  Grid2X2Icon,
  User2Icon,
  VerifiedIcon,
  UserCog,
  BadgeIndianRupee,
} from "lucide-react";

function PlusIcon(props) {
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
      color="Black"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function CustomerCard({
  name,
  vehicle,
  number,
  email,
  VehicleNumber,
  VehicleType,
}) {
  return (
    <Card className="h-full px-4 py-3 flex items-center bg-[#1a1a2e] text-white">
      <Avatar className="mr-4">
        <AvatarImage alt={name} src="/placeholder-user.jpg" />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {vehicle}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex space-x-2">
          <span>{VehicleType}</span>
          <span>{number}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon" variant="outline">
              <PlusIcon className="w-4 h-4" />
              <span className="sr-only">More</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Customer Details</DialogTitle>
              <DialogDescription>
                View the details of the customer and their vehicle purchase.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <img
                  alt="Vehicle Image"
                  className="rounded-lg object-cover w-full"
                  height={200}
                  src={i1}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">{name}</h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {email}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {number}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-medium">Vehicle Details</h4>
                  <div className="text-sm text-gray-800 dark:text-gray-800">
                    <span className="font-semibold">Vehicle Number:</span>
                    <span className="font-bold"> {VehicleNumber}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-gray-700">{vehicle}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="text-gray-700 font-semibold">
                      Vehicle Type: {VehicleType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Button size="sm" variant="link" className="text-white">
          View Details
        </Button>
      </div>
    </Card>
  );
}

CustomerCard.propTypes = {
  name: PropTypes.string.isRequired,
  vehicle: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  VehicleNumber: PropTypes.string.isRequired,
  VehicleType: PropTypes.string.isRequired,
};

function SideNav() {
  return (
    <nav className="h-screen mt-0 flex flex-col bg-[#1a1a2e] text-white w-64 h-screen  p-4 overflow-auto">
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

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1">
        <CustomerList />
      </main>
    </div>
  );
}

function CustomerList() {
  return (
    <>
      <div className="h-screen p-4 mt-0 md:px-6 md:py-12 from-[#1a1a2e] to-[#5c2a8a] text-white bg-gradient-to-br">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Customer List</h1>
          <Button variant="outline" className="bg-black">
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Customer
          </Button>
        </div>
        <div className="grid gap-6">
          <CustomerCard
            name="Minhaj Ali"
            VehicleNumber="AP13J2303"
            vehicle="Audi"
            VehicleType="car"
            number="+91 55512 34567"
            email="minhaj@example.com"
          />
          <CustomerCard
            name="Sartaj"
            vehicle="2021 Honda Civic"
            number="+91 55598 76543"
            email="sartaj@example.com"
            VehicleNumber="AB29SR2031"
            VehicleType="car"
          />
          <CustomerCard
            name="Mohd umar"
            vehicle="2020 Ford Mustang"
            number="+91 55545 67890"
            email="umar.mohd@example.com"
            VehicleNumber="AB29SR2031"
            VehicleType="car"
          />
          <CustomerCard
            name="Ravi Raju"
            vehicle="Bnez"
            number="+91 55545 67890"
            email="Ravi@example.com"
            VehicleNumber="AB29SR2031"
            VehicleType="car"
          />
          <CustomerCard
            name="Jayanth"
            vehicle="Esteem"
            number="+91 55545 67890"
            email="Jayanth@example.com"
            VehicleNumber="AB29SR2031"
            VehicleType="car"
          />
        </div>
      </div>
    </>
  );
}
