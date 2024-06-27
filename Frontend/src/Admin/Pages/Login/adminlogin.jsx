import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Component() {
  const [email,setEmail]=useState("");
  const [pwd,setPwd]=useState("");
  const navigateTo=useNavigate();
  // console.log(email);
  // console.log(pwd);
  const loginadmin=async(e)=>{
    e.preventDefault();
    try{const response = await axios.get(`http://localhost:5150/api/Signups/${email}/${pwd}`);
      const data = response.data;
      //console.log(data);
      localStorage.setItem('adminemail',email);
      navigateTo("/transcation");
    }
      catch (error) {
        console.error("Error:", error);
        alert("Invalid Login Credentials");
  }}
  return (
    <div className="flex h-screen  w-full items-center justify-center bg-gray-300 dark:bg-gray-950">
      <Card className="p-10 w-full max-w-md border-4 border-black h-4/6">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Enter your credentials to access the admin dashboard.
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                type="text"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                onChange={(event) => {
                  setPwd(event.target.value);
                }}
              />
            </div>
          </CardContent>
          <CardFooter>
          {/* <Link to={"/transcation"}> */}
              <button onClick={loginadmin} type="submit" className="btn flex">
                <span>Login</span>
              </button>
              <Link to={"/login"}>
              <button type="submit" className="btn flex">
                <span>Back</span>
              </button>
              </Link>
            {/* </Link> */}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
