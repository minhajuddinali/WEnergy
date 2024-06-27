import "./Billing.css";
import "../../App.css";
import Top from "../../Compt/Top/Top";
import SideBar from "../../Compt/SideBar/SideBar";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
// import { Separator } from "@/components/ui/separator";
// import { Badge } from "@/components/ui/badge";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import React, { useEffect, useState } from 'react';
import axios from "axios";
// import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

// import { } from "@/components/ui/dropdown-menu"
// import Header from "../Dashboard/components/Header/Header";
// import Body from "../../Compt/Body/Body";
const Billing =()=> {
 const [billings, setBillings] = useState("");
 
   useEffect(() => {
  
 const id = localStorage.getItem('VNo'); // Replace this with the user's actual email
  // //  console.log("User email:", userEmail);

    const fetchBillings = async () => {
      try {
        const response = await axios.get(`http://localhost:5150/api/Billings/onlyUser/${id}`);
        //console.log(response.data);
        setBillings(response.data);
      //console.log("Fetched billings:", billings.Amount);
      } catch (error) {
        console.error('Error fetching billings:', error);
      }
    };
    
    fetchBillings();
  }, []); 
  return (
    <div className="Bod">
      <div className="cont">
        <SideBar />
        <div className="mainContent">
          {/* <div className="stick"> */}
          <Top />
          {/* </div> */}
          <hr />
          {/* <div className="bottom flex">
            <div className="flex  justify-center  min-h-[100dvh] w-full">
              <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-lg md:text-xl">
                    Vehicle Transactions
                  </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white">
                    <CardHeader>
                      <CardTitle>Petrol Station</CardTitle>
                      <Badge variant="success">Fuel</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">$150.00</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            May 15, 2023 - 10:30 AM
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Vehicle Number: ABC 1234
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Location: Main Street Petrol, 123 Main St.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white">
                    <CardHeader>
                      <CardTitle>Toll Plaza</CardTitle>
                      <Badge variant="success">Toll Charges</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">$5.00</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            June 1, 2023 - 3:45 PM
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Vehicle Number: XYZ 5678
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Location: Highway 101 Toll, 456 Toll Rd.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white">
                    <CardHeader>
                      <CardTitle>Parking Lot</CardTitle>
                      <Badge variant="success">Parking</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">$10.00</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            July 1, 2023 - 2:15 PM
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Vehicle Number: ABC 1234
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Location: Downtown Parking Lot, 789 Main St.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:scale-105 hover:shadow-lg hover:bg-black hover:text-white">
                    <CardHeader>
                      <CardTitle>Toll Plaza</CardTitle>
                      <Badge variant="success">Toll Charges</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-2xl font-bold">$7.50</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            August 1, 2023 - 4:30 PM
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Vehicle Number: XYZ 5678
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Location: Highway 101 Toll, 456 Toll Rd.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </main>
            </div>
          </div> */}
          <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
            <div className="flex items-center justify-between mb-1 bg-slate-900 p-4 text-white rounded-t-2xl">
              <h1 className="text-2xl font-bold">User Transactions</h1>
              {/* <Button size="sm" variant="outline">
                <DownloadIcon className="w-4 h-4 mr-2" />
                Export
              </Button> */}
              {/* <Button size="sm" variant="outline">
                <DownloadIcon className="w-4 h-4 mr-2" />
                Export
              </Button> */}
            </div>
            <div className="h-screen bg-slate-400 overflow-x-auto mt-0 pt-0 pl-0 pr-0 pb-10">
              <Table className="bg-slate-400">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-600 font-semibold">
                      User Name
                    </TableHead>
                    <TableHead className="text-gray-600 font-semibold">
                      Vehicle Number
                    </TableHead>
                    <TableHead className="text-gray-600 font-semibold">
                      Vehicle Type
                    </TableHead>
                    <TableHead className="text-gray-600 font-semibold">
                      Fuel Station Location
                    </TableHead>
                    <TableHead className="text-gray-600 font-semibold">
                      Transaction Date
                    </TableHead>
                    <TableHead className="text-gray-600 font-semibold">
                      Due Date
                    </TableHead>
                    <TableHead className="text-gray-600 font-semibold">
                      Bill Status
                    </TableHead>
                    <TableHead className="w-8" />
                  </TableRow>
                </TableHeader>
                <TableBody className>
                  <TableRow>
                     <TableCell>{localStorage.getItem('Fname')} {localStorage.getItem('Lname')}</TableCell> 
                     <TableCell>{localStorage.getItem('VNo')}</TableCell> 
                    <TableCell>{billings.Fuel_type}</TableCell>
                    <TableCell>{billings.Location}</TableCell>
                    <TableCell>{billings.Date}</TableCell>
                    <TableCell>{formatDate(billings.Date)}</TableCell>
                    <TableCell>
                      <Badge variant="success" className={"bg-green-500"}>
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="w-5 h-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px]">
                          <Card>
                            <CardHeader>
                              <CardTitle>Transaction Details</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  User Name:
                                </div>
                                <div className="font-medium">{localStorage.getItem('Fname')} {localStorage.getItem('Lname')}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Vehicle Number:
                                </div>
                                <div className="font-medium">{localStorage.getItem('VNo')}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                Fuel Type:
                                </div>
                                <div className="font-medium">{billings.Fuel_type}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Fuel Station Location:
                                </div>
                                <div className="font-medium">
                                {billings.Location}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Transaction Date:{billings.Date}
                                </div>
                                <div className="font-medium">2023-05-01</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Due Date:{formatDate(billings.Date)}
                                </div>
                                <div className="font-medium">2023-05-15</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Bill Status:
                                </div>
                                <div className="font-medium">
                                  <Badge
                                    variant="success"
                                    className={"bg-green-500"}
                                  >
                                    Paid
                                  </Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Total Amount:
                                </div>
                                <div className="font-medium">50.00</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Payment Method:
                                </div>
                                <div className="font-medium">Credit Card</div>
                              </div>
                            </CardContent>
                          </Card>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{localStorage.getItem('Fname')} {localStorage.getItem('Lname')}</TableCell>
                    <TableCell>{localStorage.getItem('VNo')}</TableCell>
                    <TableCell>{billings.Fuel_type}</TableCell>
                    <TableCell>456 Oak Rd, Anytown USA</TableCell>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>2023-04-30</TableCell>
                    <TableCell>
                      <Badge variant="success" className={"bg-green-500"}>
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="w-5 h-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px]">
                          <Card>
                            <CardHeader>
                              <CardTitle>Transaction Details</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  User Name:
                                </div>
                                <div className="font-medium">{localStorage.getItem('Fname')} {localStorage.getItem('Lname')}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Vehicle Number:
                                </div>
                                <div className="font-medium">{localStorage.getItem('VNo')}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                Fuel Type:
                                </div>
                                <div className="font-medium">{billings.Fuel_type}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Fuel Station Location:
                                </div>
                                <div className="font-medium">
                                  456 Oak Rd, Anytown USA
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Transaction Date:
                                </div>
                                <div className="font-medium">2023-04-15</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Due Date:
                                </div>
                                <div className="font-medium">2023-04-30</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Bill Status:
                                </div>
                                <div className="font-medium">
                                  <Badge
                                    variant="success"
                                    className={"bg-green-500"}
                                  >
                                    Paid
                                  </Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Total Amount:
                                </div>
                                <div className="font-medium">$40.00</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Payment Method:
                                </div>
                                <div className="font-medium">Debit Card</div>
                              </div>
                            </CardContent>
                          </Card>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{localStorage.getItem('Fname')} {localStorage.getItem('Lname')}</TableCell>
                    <TableCell>{localStorage.getItem('VNo')}</TableCell>
                    <TableCell>{billings.Fuel_type}</TableCell>
                    <TableCell>789 Elm St, Anytown USA</TableCell>
                    <TableCell>2023-03-30</TableCell>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>
                      <Badge variant="warning" className={"bg-yellow-400"}>
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="w-5 h-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px]">
                          <Card>
                            <CardHeader>
                              <CardTitle>Transaction Details</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  User Name:
                                </div>
                                <div className="font-medium">Emily Parker</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Vehicle Number:
                                </div>
                                <div className="font-medium">GHI 9012</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                Fuel Type:
                                </div>
                                <div className="font-medium">Truck</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Fuel Station Location:
                                </div>
                                <div className="font-medium">
                                  789 Elm St, Anytown USA
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Transaction Date:
                                </div>
                                <div className="font-medium">2023-03-30</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Due Date:
                                </div>
                                <div className="font-medium">2023-04-15</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Bill Status:
                                </div>
                                <div className="font-medium">
                                  <Badge
                                    variant="warning"
                                    className={"bg-yellow-400"}
                                  >
                                    Pending
                                  </Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Total Amount:
                                </div>
                                <div className="font-medium">$75.00</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Payment Method:
                                </div>
                                <div className="font-medium">Cash</div>
                              </div>
                            </CardContent>
                          </Card>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{localStorage.getItem('Fname')} {localStorage.getItem('Lname')}</TableCell>
                    <TableCell>{localStorage.getItem('VNo')}</TableCell>
                    <TableCell>{billings.Fuel_type}</TableCell>
                    <TableCell>123 Main St, Anytown USA</TableCell>
                    <TableCell>2023-05-01</TableCell>
                    <TableCell>2023-05-15</TableCell>
                    <TableCell>
                      <Badge variant="success" className={"bg-green-500"}>
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="w-5 h-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px]">
                          <Card>
                            <CardHeader>
                              <CardTitle>Transaction Details</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  User Name:
                                </div>
                                <div className="font-medium">Sarah Johnson</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Vehicle Number:
                                </div>
                                <div className="font-medium">ABC 1234</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                Fuel Type:
                                </div>
                                <div className="font-medium">Sedan</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Fuel Station Location:
                                </div>
                                <div className="font-medium">
                                  123 Main St, Anytown USA
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Transaction Date:
                                </div>
                                <div className="font-medium">2023-05-01</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Due Date:
                                </div>
                                <div className="font-medium">2023-05-15</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Bill Status:
                                </div>
                                <div className="font-medium">
                                  <Badge
                                    variant="success"
                                    className={"bg-green-400"}
                                  >
                                    Paid
                                  </Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Total Amount:
                                </div>
                                <div className="font-medium">$50.00</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Payment Method:
                                </div>
                                <div className="font-medium">Credit Card</div>
                              </div>
                            </CardContent>
                          </Card>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{localStorage.getItem('Fname')} {localStorage.getItem('Lname')}</TableCell>
                    <TableCell>{localStorage.getItem('VNo')}</TableCell>
                    <TableCell>{billings.Fuel_type}</TableCell>
                    <TableCell>789 Elm St, Anytown USA</TableCell>
                    <TableCell>2023-03-30</TableCell>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>
                      <Badge variant="warning" className={"bg-yellow-400"}>
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <EyeIcon className="w-5 h-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px]">
                          <Card>
                            <CardHeader>
                              <CardTitle>Transaction Details</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  User Name:
                                </div>
                                <div className="font-medium">Emily Parker</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Vehicle Number:
                                </div>
                                <div className="font-medium">GHI 9012</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Fuel Type:
                                </div>
                                <div className="font-medium">Truck</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Fuel Station Location:
                                </div>
                                <div className="font-medium">
                                  789 Elm St, Anytown USA
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Transaction Date:
                                </div>
                                <div className="font-medium">2023-03-30</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Due Date:
                                </div>
                                <div className="font-medium">2023-04-15</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Bill Status:
                                </div>
                                <div className="font-medium">
                                  <Badge variant="warning">Pending</Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Total Amount:
                                </div>
                                <div className="font-medium">$75.00</div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  Payment Method:
                                </div>
                                <div className="font-medium">Cash</div>
                              </div>
                            </CardContent>
                          </Card>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <footer className="bg-gray-900 text-white px-8 py-6 rounded-b-xl">
              <div className="container mx-auto flex items-center justify-between">
                <p className="text-sm">© 2023 WEnergy. All rights reserved.</p>
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
        </div>
        {/* <a href="/">To LogOut</a> */}
      </div>
    </div>
  );
};

// function DownloadIcon(props) {
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
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//       <polyline points="7 10 12 15 17 10" />
//       <line x1="12" x2="12" y1="15" y2="3" />
//     </svg>
//   );
// }

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

export default Billing;
function formatDate(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 15);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
