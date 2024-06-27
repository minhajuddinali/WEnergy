// import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar } from "@radix-ui/react-avatar";
import i from "../../Assets/p2.jpeg";
import { useLocation } from 'react-router-dom';
// import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";
import axios from "axios";
import Axios from "axios";

// import { useSelector } from 'react-redux';

const HomeDetails =  () => {
 // const data=JSON.parse(localStorage.getItem('agent'));

 // console.log("vehicle"+data.VNo);
 // const agentData = useSelector((state) => state.agentData);
 const Vno= localStorage.getItem('VNo');
 const Fname=localStorage.getItem('Fname');
 const Lname=localStorage.getItem('Lname');
 const Unpaid=localStorage.getItem('Unpaid');
 const Balance=localStorage.getItem('Balance');
 const Paid=localStorage.getItem('Paid');

  return (
   
   
    <div className="bg-gradient-to-r from-blue-300 to-blue-600 rounded-2xl">
      <div className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-4">
          <CarIcon className="h-6 w-6" />
          <div>
            <div className="flex items-center space-x-2">
              <p className="text-base font-semibold">Vehicle Number</p>
              <p className="text-2xl font-semibold">{Vno}</p>
            </div>
            <p className="text-base font-bold text-[32px]">{Fname} {Lname}</p>
          </div>
        </div>
        <div className="rounded-lg bg-yellow-500 px-6 py-3 text-black">
          <p className="text-base font-medium text-[20px]">Unpaid Bills</p>
          <p className="text-2xl font-bold">₹{Unpaid}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 px-8 py-12">
        <div className="max-w-md space-y-4">
          <h1 className="text-3xl font-bold">Future of Fueling Experiences</h1>
          <p className="text-lg">
            Revolutionize your fueling experience with our cutting-edge
            application. Streamline your vehicle management and stay on top of
            your finances.
          </p>
        </div>
        <img
          className="rounded-lg"
          src={i}
          alt="Hero Image"
          height={300}
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
      </div>
      <div className="px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex items-center space-x-4 hover:bg-white hover:text-black hover:scale-x-120 hover:scale-y-120 hover: rounded-3xl hover:p-4">
            <BarChartIcon className="h-8 w-8 animate-bounce" />
            <div>
              <h3 className="text-lg font-bold">Vehicle Usage Tracking</h3>
              <p className="text-sm">
                Monitor your vehicle usage and optimize your fuel consumption.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 hover:bg-white hover:text-black hover:scale-x-120 hover:scale-y-120 hover: rounded-3xl hover:p-4">
            <ReceiptIcon className="h-8 w-8 animate-bounce" />
            <div>
              <h3 className="text-lg font-bold">Automatic Invoice</h3>
              <p className="text-sm">
                Receive timely and accurate invoices for your fuel expenses.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 hover:bg-white hover:text-black hover:scale-x-120 hover:scale-y-120 hover: rounded-3xl hover:p-4">
            <BarChartIcon className="h-8 w-8 animate-bounce" />
            <div>
              <h3 className="text-lg font-bold">Comprehensive Reporting</h3>
              <p className="text-sm">
                Gain valuable insights into your fuel consumption and spending.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 hover:bg-white hover:text-black hover:scale-x-120 hover:scale-y-120 hover: rounded-3xl hover:p-4">
            <LockIcon className="h-8 w-8 animate-bounce" />
            <div>
              <h3 className="text-lg font-bold">Secure Payment</h3>
              <p className="text-sm">
                Enjoy a seamless and secure payment experience for your fuel
                bills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-12">
        <h2 className="mb-8 text-2xl font-bold">What Our Customers Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gray-800 p-6 text-white">
            <blockquote className="mb-4 text-lg font-medium">
              This app has been a game-changer for my business. It has
              streamlined our fuel management and saved us a significant amount
              of time and money.
            </blockquote>
            <div className="flex items-center space-x-4">
              <Avatar className="bg-white rounded-full px-3 py-3 font-bold text-black">
                <AvatarImage alt="Avatar 1" src="/avatar1.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-bold">John Doe</p>
                <p className="text-sm text-gray-400">CEO, Acme Corp</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 text-white">
            <blockquote className="mb-4 text-lg font-medium">
              I was hesitant to try a new fuel management app, but this one has
              exceeded my expectations. The user-friendly interface and
              comprehensive features have made my life so much easier.
            </blockquote>
            <div className="flex items-center space-x-4">
              <Avatar className="bg-white rounded-full px-3 py-3 font-bold text-black">
                <AvatarImage alt="Avatar 2" src="/avatar2.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-bold">Jane Appleseed</p>
                <p className="text-sm text-gray-400">Fleet Manager, XYZ Corp</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 p-6 text-white">
            <blockquote className="mb-4 text-lg font-medium">
              This app has been a game-changer for my business. It has
              streamlined our fuel management and saved us a significant amount
              of time and money.
            </blockquote>
            <div className="flex items-center space-x-4 ">
              <Avatar className="bg-white rounded-full px-3 py-3 font-bold text-black">
                <AvatarImage alt="Avatar 3" src="/avatar3.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-bold">Sarah Mayer</p>
                <p className="text-sm text-gray-400">
                  Operations Manager, Acme Inc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white px-8 py-6 rounded-xl">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">© 2024 WEnergy. All rights reserved.</p>
          <nav className="flex space-x-4">
            <Link className="text-sm hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function CarIcon(props) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ReceiptIcon(props) {
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
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  );
}

export default HomeDetails;
