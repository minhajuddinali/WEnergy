import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";
import axios  from "axios";
// const id=localStorage.getItem('VNo');
// const balance=localStorage.getItem('balances');
//console.log(balance);
export default function Component() {
  const [amount, setAmount] = useState("");

  const navigateTo = useNavigate();
  
  const handlePay = async () =>{
   // console.log(id);
   // console.log(balance);
    if (amount.trim() !== "" && amount>0) {
      // Navigate to Page 2 with amount as state
      localStorage.setItem('addedamount',amount);
     
      navigateTo("/payment");
    } else {
      if(amount==0){
        alert("0 cannot be added in the wallet.")
      }
      alert("Please enter a valid amount.");
    }
  };
  const handleCancel=async()=>{
    navigateTo("/payment");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white font-bold">
            Recharge Wallet
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Enter your details to recharge your wallet.
          </p>
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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
          <CardFooter>
            <Button onClick={handlePay} className="w-full" type="submit">
              Recharge
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
