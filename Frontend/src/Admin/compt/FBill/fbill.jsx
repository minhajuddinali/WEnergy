// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import {
//   PopoverTrigger,
//   PopoverContent,
//   Popover,
// } from "@/components/ui/popover";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import {
//   Grid2X2Icon,
//   User2Icon,
//   VerifiedIcon,
//   UserCog,
//   BadgeIndianRupee,
// } from "lucide-react";

// function SideNav() {
//   return (
//     <nav className="h-screen mt-0 flex flex-col bg-[#1a1a2e] text-white w-64 h-screen  p-4 overflow-auto">
//       <div className="text-2xl font-bold mb-12 mt-3">Admin</div>
//       <ul className="mt-6 pt-6 space-y-12">
//         <li>
//           <a
//             href="/transcation"
//             className="flex items-center hover:text-gray-400"
//           >
//             <Grid2X2Icon className="mr-2" /> Dashboard
//           </a>
//         </li>
//         <li>
//           <a
//             href="/walletverify"
//             className="flex items-center hover:text-gray-400"
//           >
//             <VerifiedIcon className="mr-2" /> Verification
//           </a>
//         </li>
//         <li>
//           <a href="/userlist" className="flex items-center hover:text-gray-400">
//             <User2Icon className="mr-2" /> Users
//           </a>
//         </li>
//         <li>
//           <a href="/emplist" className="flex items-center hover:text-gray-400">
//             <UserCog className="mr-2" /> Employee List
//           </a>
//         </li>
//         <li>
//           <a
//             href="/adminbill"
//             className="flex items-center hover:text-gray-400"
//           >
//             <BadgeIndianRupee className="mr-2" /> Billing
//           </a>
//         </li>
//         <li className="py-4">
//           <a
//             href="/adminlogin"
//             className="hover:text-gray-700 p-4 border-2 border-white rounded-lg bg-slate-300 text-black font-bold"
//           >
//             Sign Out
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }
// function F() {
//   return (
//     <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
//       <div className="grid md:grid-cols-2">
//         <div className="bg-gray-100 dark:bg-gray-800 p-6 md:p-8">
//           <div className="flex items-center gap-4">
//             <img
//               alt="Car"
//               className="rounded-md"
//               height={120}
//               src="/placeholder.svg"
//               style={{
//                 aspectRatio: "160/120",
//                 objectFit: "cover",
//               }}
//               width={160}
//             />
//             <div>
//               <h2 className="text-lg font-semibold">John Doe</h2>
//               <p className="text-gray-500 dark:text-gray-400">
//                 2018 Toyota Camry
//               </p>
//             </div>
//           </div>
//           <Separator className="my-6" />
//           <div className="grid gap-4">
//             <div className="flex items-center justify-between">
//               <span className="text-gray-500 dark:text-gray-400">
//                 Location:
//               </span>
//               <span>123 Main St, Anytown USA</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-gray-500 dark:text-gray-400">Date:</span>
//               <span>May 26, 2024 at 3:45 PM</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-gray-500 dark:text-gray-400">
//                 Fuel Purchased:
//               </span>
//               <span>10.5 gallons</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-gray-500 dark:text-gray-400">
//                 Total Cost:
//               </span>
//               <span className="font-semibold">$42.00</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-gray-500 dark:text-gray-400">
//                 Discount:
//               </span>
//               <span className="text-green-500">-$2.00</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="text-gray-500 dark:text-gray-400">
//                 Additional Charges:
//               </span>
//               <span className="text-red-500">+$1.50</span>
//             </div>
//           </div>
//           <div className="flex items-center justify-between mt-6">
//             <Button size="sm" variant="outline">
//               <PrinterIcon className="w-4 h-4 mr-2" />
//               Print
//             </Button>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button size="sm" variant="outline">
//                   <PlusIcon className="w-4 h-4 mr-2" />
//                   Add to list
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent align="end" className="grid gap-2 w-48">
//                 <div className="flex gap-2 items-center">
//                   <Checkbox id="today" />
//                   <div className="grid gap-1.5 leading-none">
//                     <Label htmlFor="today">Today</Label>
//                   </div>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                   <Checkbox id="inbox" />
//                   <div className="grid gap-1.5 leading-none">
//                     <Label htmlFor="inbox">Inbox</Label>
//                   </div>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                   <Checkbox id="upcoming" />
//                   <div className="grid gap-1.5 leading-none">
//                     <Label htmlFor="upcoming">Upcoming</Label>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           </div>
//         </div>
//         <div className="p-6 md:p-8">
//           <h1 className="text-2xl font-bold mb-4">Gas Station Bill Summary</h1>
//           <div className="prose dark:prose-invert">
//             <p>
//               Thank you for choosing our gas station. This is a summary of your
//               recent fuel purchase. Please let us know if you have any questions
//               or concerns.
//             </p>
//           </div>
//           <img
//             alt="Car"
//             className="mt-6 rounded-md"
//             height={300}
//             src="/placeholder.svg"
//             style={{
//               aspectRatio: "400/300",
//               objectFit: "cover",
//             }}
//             width={400}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Fbill() {
//   <div className="flex min-h-screen">
//     <SideNav />
//     <main className="flex-1">
//       <F />
//     </main>
//   </div>;
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
//     >
//       <path d="M5 12h14" />
//       <path d="M12 5v14" />
//     </svg>
//   );
// }

// function PrinterIcon(props) {
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
//     >
//       <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
//       <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
//       <rect x="6" y="14" width="12" height="8" rx="1" />
//     </svg>
//   );
// }

// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import {
//   PopoverTrigger,
//   PopoverContent,
//   Popover,
// } from "@/components/ui/popover";
// import car from "../../Assets/car1.jpg";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
import {
  Grid2X2Icon,
  User2Icon,
  VerifiedIcon,
  UserCog,
  BadgeIndianRupee,
  FuelIcon,
} from "lucide-react";
// import { useEffect, useState } from "react";
// import axios from "axios";

import { Link } from "react-router-dom";
import car from "../../Assets/car1.jpg";
// import { BsFillEvStationFill } from "react-icons/bs";
// import { BiGasPump } from "react-icons/bi";
// const currentDate = new Date().toLocaleString();
function getCurrentTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours().toString().padStart(2, "0");
  let minutes = currentDate.getMinutes().toString().padStart(2, "0");
  let seconds = currentDate.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

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
            <Grid2X2Icon className="mr-2" /> Dashboard
          </a>
        </li>
        <li>
          <a
            href="/walletverify"
            className="flex items-center hover:text-gray-400"
          >
            <VerifiedIcon className="mr-2" /> Verification
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
const handlePrint = () => {
  const printContent = document.getElementById("print-section").innerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;
  window.location.reload(); // Refresh to restore event listeners
};

function FB() {
  // const [datae, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from the API
  //   axios
  //     .post("http://localhost:3001/last-row")
  //     .then((response) => {
  //       setData(response.data[0]);
  //       // console.log(datae);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the data!", error);
  //     });
  // }, []);
  // const fetchUser = (id) => {
  //   axios
  //     .post("http://localhost:3001/last-row", { id })
  //     .then((response) => {
  //       setData(response.data[0]);
  //       // console.log(datae);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the data!", error);
  //     });
  // };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const reqData = await fetch("http://localhost:3001/lastrow");
  //     const resData = await reqData.json();
  //     setData(resData);
  //     console.log(resData);
  //   };
  //   fetchUser();
  // }, []);
  return (
    // <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
    //   <div className="grid md:grid-row-3">
    //     <div className="bg-gray-100 dark:bg-gray-800 p-6 md:p-8">
    //       <div className="flex items-center justify-center gap-4">
    //         <FuelIcon />
    //         {/* <div>
    //           <h2 className="text-lg font-semibold">John Doe</h2>
    //           <p className="text-gray-500 dark:text-gray-400">
    //             2018 Toyota Camry
    //           </p>
    //         </div> */}
    //         <div className="p-6 md:p-8">
    //           <h1 className="text-2xl font-bold mb-4">
    //             Gas Station Bill Summary
    //           </h1>
    //           <div className="prose dark:prose-invert">
    //             <p>
    //               Thank you for choosing our gas station. This is a summary of
    //               your recent fuel purchase. Please let us know if you have any
    //               questions or concerns.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-4 w-5/6 h-56">
    //         {/* <img
    //           alt="Car"
    //           className="mt-6 rounded-md"
    //           height={100}
    //           src={car}
    //           style={{
    //             aspectRatio: "400/300",
    //             objectFit: "cover",
    //           }}
    //           width={1}
    //         /> */}
    //         <img
    //           className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
    //           height={100}
    //           // src={car}
    //           style={{
    //             aspectRatio: "400/300",
    //             objectFit: "cover",
    //           }}
    //           width={1}
    //         />
    //       </div>
    //       <Separator className="my-6 bg-black" />

    //       <div className="grid gap-4">
    //         <div className="flex items-center justify-between">
    //           <span className="text-gray-500 dark:text-gray-400">
    //             Location:
    //           </span>
    //           <span>123 Main St, Anytown USA</span>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <span className="text-gray-500 dark:text-gray-400">Date:</span>
    //           <span>May 26, 2024 at 3:45 PM</span>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <span className="text-gray-500 dark:text-gray-400">
    //             Fuel Purchased:
    //           </span>
    //           <span>10.5 gallons</span>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <span className="text-gray-500 dark:text-gray-400">
    //             Total Cost:
    //           </span>
    //           <span className="font-semibold">$42.00</span>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <span className="text-gray-500 dark:text-gray-400">
    //             Discount:
    //           </span>
    //           <span className="text-green-500">-$2.00</span>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <span className="text-gray-500 dark:text-gray-400">
    //             Additional Charges:
    //           </span>
    //           <span className="text-red-500">+$1.50</span>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-between mt-6">
    //         <Button size="sm" variant="outline">
    //           <PrinterIcon className="w-4 h-4 mr-2" />
    //           Print
    //         </Button>
    //         <Popover>
    //           <PopoverTrigger asChild>
    //             <Button size="sm" variant="outline">
    //               <PlusIcon className="w-4 h-4 mr-2" />
    //               Add to list
    //             </Button>
    //           </PopoverTrigger>
    //           <PopoverContent align="end" className="grid gap-2 w-48">
    //             <div className="flex gap-2 items-center">
    //               <Checkbox id="today" />
    //               <div className="grid gap-1.5 leading-none">
    //                 <Label htmlFor="today">Today</Label>
    //               </div>
    //             </div>
    //             <div className="flex gap-2 items-center">
    //               <Checkbox id="inbox" />
    //               <div className="grid gap-1.5 leading-none">
    //                 <Label htmlFor="inbox">Inbox</Label>
    //               </div>
    //             </div>
    //             <div className="flex gap-2 items-center">
    //               <Checkbox id="upcoming" />
    //               <div className="grid gap-1.5 leading-none">
    //                 <Label htmlFor="upcoming">Upcoming</Label>
    //               </div>
    //             </div>
    //           </PopoverContent>
    //         </Popover>
    //       </div>
    //     </div>
    //     {/* <div className="p-6 md:p-8">
    //       <img
    //         alt="Car"
    //         className="mt-6 rounded-md"
    //         height={300}
    //         src="/placeholder.svg"
    //         style={{
    //           aspectRatio: "400/300",
    //           objectFit: "cover",
    //         }}
    //         width={400}
    //       />
    //     </div> */}
    //   </div>
    // </div>
    <div className="h-screen bg-gray-200 dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
      <div className="text-center p-6 md:p-8">
        <div className="felx items-center">
          <FuelIcon className="mr-2" />
          <h1 className="text-2xl font-bold mb-4">Gas Station Bill Summary</h1>
        </div>
        <p className="prose dark:prose-invert">
          Thank you for choosing our gas station. This is a summary of your
          recent fuel purchase. Please let us know if you have any questions or
          concerns.
        </p>
      </div>

      <div className="flex flex-col md:flex-row p-6 md:p-8 gap-4">
        <div className="w-5/6 md:w-1/4 bg-slate-300 border-2 border-black rounded-xl">
          <img
            className="mx-auto aspect-square  overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            // src={data.image} // Add the path to your image here
            // height={100}
            src={car}
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            // width={200}
          />
        </div>
        <div
          id="print-section"
          className="w-full h-full pt-12 mt-12 md:w-1/2 ml-32 bg-gray-100 border-4 border-slate-800 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">
                Name Of Customer:
              </span>
              <span>minhaj</span>
              {/* <span>{`${datae.username.slice(0, -11)}`}</span> */}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">
                Vehicle Number:
              </span>
              <span>21BH2345AA</span>
              {/* <span>{datae.vehiclenumber}</span> */}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">
                Location:
              </span>
              {/* <span>{datae.location}, Telangana India</span> */}
              <span>Upall, Telangana India</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">Date:</span>
              {/* <span>{getCurrentTime}</span> */}
              <span>28 May 2024, 8:30 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">
                Fuel Purchased:
              </span>
              {/* <span>{datae.quantity}</span> */}
              <span>1.2 ltr</span>
            </div>
            {/* <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">
                Discount:
              </span>
              <span className="text-green-500">-₹ 2.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">
                Additional Charges:
              </span>
              <span className="text-red-500">+₹ 1.50</span>
            </div> */}
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">
                Total Cost:
              </span>
              {/* <span className="font-semibold">₹ {datae.totalcost}</span> */}
              <span className="font-semibold">₹ 112</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handlePrint}
              className="bg-blue-500 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-600"
            >
              {/* Print */}
              <div className="flex items-center">
                <PrinterIcon className="mr-2" />
                print
              </div>
            </button>
            <Link to="/transcation">
              <button className="bg-green-500 text-white py-2 px-4 rounded shadow-lg hover:bg-green-600">
                <div className="flex items-center">
                  <PlusIcon className="mr-2" /> Save the Bill
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Component() {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1 w-full items-center justify-center h-screen bg-red-400">
        <FB />
      </main>
    </div>
  );
}

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
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function PrinterIcon(props) {
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
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  );
}
