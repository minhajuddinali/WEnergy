import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";
import axios  from "axios";
import { toast } from "react-toastify";
// const id=localStorage.getItem('VNo');
// const balance=localStorage.getItem('balances');
//console.log(balance);
export default function Component() {
  const [payment, setPayment] = useState("");
  const Unpaid=localStorage.getItem('Unpaid');
  const Paid=localStorage.getItem('Paid');
  const Balance=localStorage.getItem('Balance');
  const navigateTo = useNavigate();
  
  const handlePay = async () =>{
   console.log(payment);
   console.log(Balance);
   let temp=0;
   if(payment.trim() =="" || payment <=0 )
   {
    temp=1;
    toast.error("Enter Valid Amount");
   }
   else if(parseFloat(payment)>parseFloat(Balance))
   {
    temp=1;
    toast.error("Amount Exceeds Wallet");
   }else if(parseFloat(payment)>parseFloat(Unpaid))
   {
    temp=1;
    toast.error("Amount Exceeds pending bills");
   }
    else if (payment.trim() !== "" && parseFloat(payment)>0 && temp==0) {
      // Navigate to Page 2 with amount as state
      const wallet=Balance-payment;
      const unpaid=Unpaid-payment;
      const paid=parseFloat(Paid)+parseFloat(payment);
      localStorage.setItem('Balance',wallet);
      localStorage.setItem('Unpaid',unpaid);

      localStorage.setItem('Paid',paid);
     localStorage.setItem('payment',payment);
     alert("Are you sure?");
     localStorage.setItem('flag','0');
      navigateTo("/payment");
    } else {
      // if(payment==0){
      //   alert("0 cannot be added in the wallet.")
      // }
      // alert("Please enter a valid amount.");
    }
  };
const handleCancel=async()=>
{
  navigateTo("/payment");
};
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white font-bold">
            Pay from your wallet
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Enter your details to pay pending bills.
          </p>
        </div>
        <div className="rounded-lg bg-yellow-500 px-6 py-3 text-black flex justify-between flex-row-reverse">
  <div>
    <p className="text-base font-medium text-[20px]">Wallet</p>
    <p className="text-2xl font-bold">₹ {Balance}</p>
  </div>
  <div>
    <p className="text-base font-medium text-[20px]">Unpaid Bills</p>
    <p className="text-2xl font-bold">₹ {Unpaid}</p>
  </div>
</div>
        <Card className="p-4">
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="vehicle-number">Vehicle Number</Label>
              <Input
                id="vehicle-number"
                placeholder="Enter your vehicle number"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                id="phone-number"
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                placeholder="Enter the amount to recharge"
                type="number"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>Payment Mode</Label>
              <RadioGroup
                className="flex items-center gap-4"
                defaultValue="upi"
              >
                <RadioGroupItem className="peer sr-only" id="upi" value="upi" />
                <Label
                  className="flex items-center gap-2 rounded-md border-2 border-gray-100 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                  htmlFor="upi"
                >
                  <WalletIcon className="h-5 w-5" />
                  UPI
                </Label>
                <RadioGroupItem
                  className="peer sr-only"
                  id="debit"
                  value="debit"
                />
                <Label
                  className="flex items-center gap-2 rounded-md border-2 border-gray-100 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                  htmlFor="debit"
                >
                  <CreditCardIcon className="h-5 w-5" />
                  Debit Card
                </Label>
                <RadioGroupItem
                  className="peer sr-only"
                  id="credit"
                  value="credit"
                />
                <Label
                  className="flex items-center gap-2 rounded-md border-2 border-gray-100 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                  htmlFor="credit"
                >
                  <CreditCardIcon className="h-5 w-5" />
                  Credit Card
                </Label>
              </RadioGroup>
            </div>
          </CardContent>
          {/* <CardFooter>
  <div className="flex justify-center space-x-40">
    <Button onClick={handlePay} className="w-full" type="submit">
      Pay
    </Button>
    <Button onClick={handleCancel} className="w-1/2 ml-2" type="submit">
      Cancel
    </Button>
  </div>
</CardFooter> */}
<CardFooter>
            <Button onClick={handlePay} className="w-full" type="submit">
              Pay
            </Button>
            <Button onClick={handleCancel} className="w-1/2 ml-2" type="submit">
      Cancel
    </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

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
