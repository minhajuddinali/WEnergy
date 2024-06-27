import "./Payment.css";
import "../../App.css";
import Top from "../../Compt/Top/Top";
import SideBar from "../../Compt/SideBar/SideBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios, { Axios }  from "axios";
import { useEffect,useState } from "react";

const id= localStorage.getItem('VNo');
import { FileIcon } from "lucide-react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Payment = () => {
  let Paid=localStorage.getItem("Paid");
  let Unpaid=localStorage.getItem("Unpaid");
  let Balance=localStorage.getItem("Balance");
  console.log(Balance);
  const location = useLocation();
  const [promo,setPromo]=useState("");
  let Am=Balance;
  const addedamount=parseFloat(localStorage.getItem('addedamount'));
  const payment=parseFloat(localStorage.getItem('payment'))
  let prom=0;
  let code1="WEnergy200";
  let code2="WEnergy500";
  let code3="WEnergy1000";
  if(localStorage.getItem('flag')==0)
  {
    axios.put(`http://localhost:5150/api/Payments/updates/${id}`,{balance:Balance,unpaid:Unpaid,paid:Paid});
  }
  const addpromo=async()=>{prom=1;//console.log(promo)
    alert('Do you want to apply coupon?')
    //console.log("hi prom");
    if(promo==code1)
      {
        Balance=parseFloat(Balance)+parseFloat("200");
        code1="somejunk";
       // console.log(Balance);
      }
      else if(promo==code2)
      {
        Balance=parseFloat(Balance)+parseFloat("500");
        code2="somejunkkk";
      }
      else if(promo==code3)
      {
        Balance=parseFloat(Balance)+parseFloat("1000");
        code3="junky";

      }
      else
      {
        toast.error("Coupon Expired");
      }
      Paid=parseFloat(Paid);
      Unpaid=parseFloat(Unpaid);
     
    //  console.log(Unpaid);
     axios.put(`http://localhost:5150/api/Payments/updates/${id}`,{balance:Balance,unpaid:Unpaid,paid:Paid});
     toast.success("Coupon Applied Successfully");
     localStorage.setItem('addedamount',0);
    localStorage.setItem('payment',0);
    localStorage.setItem('Balance',Balance);
    Am=Balance;
  }
   // Default amount to 0 if state is undefined
  // const update=null;
  //console.log("added",addedamount);
  if(Balance>Unpaid){
    
    Balance=parseFloat(Balance)+parseFloat(addedamount);
    Paid=parseFloat(Paid);
    Unpaid=parseFloat(Unpaid);
    axios.put(`http://localhost:5150/api/Payments/updates/${id}`,{balance:Balance,unpaid:Unpaid,paid:Paid});
    if(addedamount>0){
    toast.success("Amount added successfully");
    }
    else if(payment>0)
    {
      toast.success("Payment done");
    }
    // else if(prom>0)
    // {
    //     toast.success("Coupon Redeemed");
    // }
    localStorage.setItem('addedamount',0);
    localStorage.setItem('payment',0);
    localStorage.setItem('Balance',Balance);
    Am=Balance;
  }
  // if(Unpaid==0){
  //   window.alert("Congratulations! There are no pending bills");
  // }
  const reload = () => {
    toast.success('Coupon Redeemed');
    window.location.reload();
  };
  const upi=async()=>{
// Check if the user is on a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Construct the Google Pay deep link URL
const googlePayDeepLink = 'https://pay.google.com/gp/w/u/0/home';

if (isMobile) {
  // Open the Google Pay app directly
  window.location.href = googlePayDeepLink;
} else {
  // Open the URL in a new tab
  window.open('https://payments.google.com/gp/w/home/paymentmethods', '_blank');
}
  }
  return (
    <div className="Bod">
      <div className="cont">
        <SideBar />
        <div className="mainContent">
       
          <Top />
        
          <hr />
          <div className="bottom flex bg-gray-100 border-solid border-4 border-black rounded-3xl pl-6">
            <div className="flex  justify-center  min-h-[100dvh] w-full">
             
              
              <div className="min-h-[95vh] bg-gray-100 dark:bg-gray-900 p-6 rounded-xl w-5/6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Wallet Card */}
                  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:bg-black hover:text-white">
                    <div className="p-6">
                      <div className="flex flex-col items-center mb-4">
                        <WalletIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-2" />
                        <h2 className="text-xl font-bold">Wallet</h2>
                      </div>
                      <div className="text-2xl font-bold text-center">
                      ₹{Am}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                        Available Balance
                      </div>
                      <Link to={"/addmoney"}>
                        <button className="w-full bg-gray-900 text-gray-50 rounded-md py-2 px-4 text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                          Add Money
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Pending Bills Card */}
                  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:bg-black hover:text-white">
                    <div className="p-6">
                      <div className="flex flex-col items-center mb-4">
                        <FileIcon className="h-12 w-12 text-red-500 dark:text-red-400 mb-2" />
                        <h2 className="text-xl font-bold">Pending Bills</h2>
                      </div>
                      <div className="text-2xl font-bold text-center text-red-500">
                       ₹{Unpaid}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                        Pending Payments
                      </div>
                      <Link to={"/paynow"}>
                      <button className="w-full bg-gray-900 text-gray-50 rounded-md py-2 px-4 text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                        Pay Now
                      </button>
                      </Link>
                    </div>
                  </div>

                  {/* Total Paid Card */}
                  <div className="bg-blue-400 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
                    <div className="p-6">
                      <div className="flex flex-col items-center mb-4">
                        <RupeeIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-2" />
                        <h2 className="text-xl font-bold text-green-700">Total Paid</h2>
                      </div>
                      <div className="text-2xl font-bold text-center text-green-700">
                      ₹{Paid}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                        Total Paid Amount
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                    Add Payment
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* UPI Option */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
                      <div className="p-6 flex flex-col items-center">
                        <CreditCardIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-4" />
                        <h3 className="text-xl font-bold">UPI</h3>
                        <button onClick={upi} className="mt-4 w-full bg-gray-900 text-gray-50 rounded-md py-2 px-4 text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                          Add UPI
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-full ">
                      <section className="w-full max-w-md mx-auto py-12 md:py-16">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h2 className="text-2xl font-bold">
                             Redeem Coupon
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                              Add funds to your account and take advantage of
                              our special promotions.
                            </p>
                          </div>
                          <Card>
                            <CardContent className="space-y-4">
                              <div className="grid gap-2">
                                <Label htmlFor="promocode">Promocode</Label>
                                <div className="flex space-x-2 space-y-2">
                                  <Input
                                    id="promocode"
                                    placeholder="Enter promocode"
                                    onChange={(event) => {
                                      setPromo(event.target.value);
                                    }}
                                  />
                                  <Button onClick={addpromo}>Apply</Button>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-end space-x-2">
                              <Button variant="outline">Cancel</Button>
                              <Button onClick={reload}>Redeem</Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </section>
                    </div>
                    
                    {/* <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
                      <div className="p-6 flex flex-col items-center">
                        <CreditCardIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-4" />
                        <h3 className="text-xl font-bold">Debit Card</h3>
                        <button className="mt-4 w-full bg-gray-900 text-gray-50 rounded-md py-2 px-4 text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                          Add Debit Card
                        </button>
                      </div>
                    </div> */}

                   
                    {/* <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
                      <div className="p-6 flex flex-col items-center">
                        <CreditCardIcon className="h-12 w-12 text-gray-500 dark:text-gray-400 mb-4" />
                        <h3 className="text-xl font-bold">Credit Card</h3>
                        <button className="mt-4 w-full bg-gray-900 text-gray-50 rounded-md py-2 px-4 text-sm font-medium shadow-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                          Add Credit Card
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};



function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function RupeeIcon(props) {
  return (
    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>₹</span>
  );
}
function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
export default Payment;
