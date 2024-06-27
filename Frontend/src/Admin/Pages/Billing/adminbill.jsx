import { Button } from "@/components/ui/button";
import {
  Grid2X2Icon,
  User2Icon,
  VerifiedIcon,
  UserCog,
  BadgeIndianRupee,
} from "lucide-react";
import { Link } from "react-router-dom";
import Tesseract from "tesseract.js";

import { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

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

function B() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [userData, setUserData] = useState(null);
  const [fuelType, setFuelType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [location, setLocation] = useState("");
  const [text2,setText2]=useState("");
  const[vehicle,setVehicle]=useState("");
  let temp=0;
  let Balance=localStorage.getItem("Balance");
  let Paid=localStorage.getItem("Paid");
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  let unpaid=localStorage.getItem('Unpaid');
  const extractText = async () => {
    if (image) {
      try {
        const { data: { text } } = await Tesseract.recognize(URL.createObjectURL(image), "eng");
        const alphanumericText = text.trim().replace(/[^a-zA-Z0-9]/g, '');
        setText(alphanumericText);
        temp = 1;
  
        const response = await Axios.get(`http://localhost:5150/api/Agent/${alphanumericText}`);
        const userData = response.data;
        console.log("User Data:", userData);
        setUserData(userData);
      } catch (error) {
        console.error("Error extracting text or fetching user data:", error);
      }
    }
  };

  // const fetchUserData = (numberPlate) => {
  //   axios
  //     .post("http://localhost:3001/getUserDetails", { numberPlate })
  //     .then((response) => {
  //       setUserData(response.data[0]);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //     });
  // };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //const dateObj = new Date(date);
    const today = new Date();
  const date = today.toISOString().slice(0, 10);
    console.log(date);
    // Define a constant for the formatted date
    // const formattedDate = dateObj.toLocaleDateString('en-US', {
    //   month: 'long',
    //   day: 'numeric',
    //   year: 'numeric',
    // });
    const aemail=localStorage.getItem('adminemail');
    //console.log("Image:", image);
    // console.log("Fuel Type:", fuelType);
    // console.log("Quantity:", quantity);
   
    try {
      await Axios.post("http://localhost:5150/api/Billings", {VNo:text,Fuel_type:fuelType,Quantity:quantity,Location:location,Amount:totalCost,Date:date,status:false,email:aemail})
        toast.success("bill generated");
        const f=parseFloat(unpaid)+parseFloat(totalCost);
        Balance=parseFloat(Balance);
        Paid=parseFloat(Paid);
        //console.log(f);
        //localStorage.setItem('Unpaid',f);
       await Axios.put(`http://localhost:5150/api/Payments/updates/${text}`,{balance:Balance,unpaid:f,paid:Paid});
       toast.success('done');
    
      //alert("Data uploaded successfully");
    
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Error uploading data");
    }
  };
  const handletext=async()=>
  {
    if(temp==0){
    setText(text2);
    const response = await Axios.get(`http://localhost:5150/api/Agent/${text}`);
    const userData = response.data;
  //  console.log("User Data:", userData);
    setUserData(userData);
    }
  }
  return (
    <div className="container mx-auto px-4  md:py-4 bg-gray-100 h-screen">
      <div className="grid gap-12 md:grid-row-2 h-full mb-2">
        <div className="flex flex-col p-4 pb-4 top-0 items-center justify-center h-5/6 w-5/6 ml-32 bg-white border-4 border-black rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Upload an Image</h2>
          <div className="flex items-center">
          <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="bg-slate-500 mr-4 p-4 rounded-2xl"
    />
    <button
      onClick={extractText}
      className="bg-slate-900 text-white p-4 rounded-full"
    >
      Extract Text
    </button>
  </div>
  {/* {text && <p>Vehicle Number: {text}</p>} */}
  <span className="bg-slate-900 text-white p-4 rounded-full p-3 mt-4">Or</span>
  <div className="flex items-center mt-10">
    <input
      type="text"
      placeholder="Enter vehicle number"
      onChange={(event) => {
        setText2(event.target.value);
        //setVehicle(event.target.value);
      }}
      className={`bg-slate-250 mr-4 p-4 rounded-2xl font-bold text-black border-4 ${
        image ? 'opacity-50 cursor-not-allowed' : 'border-black'
      }`}
      disabled={image}
    />
    <button
      onClick={handletext}
      className="bg-slate-900 text-white p-4 rounded-full"
    >
      Enter
    </button>
           
          </div>
        </div>
        {/* className="text-3xl font-bold mb-4 flex items-center justify-center" */}
        {text &&<p className="text-3xl font-bold mb-4 flex items-center justify-center">Vehicle Number: {text}</p>}
        {userData && (
          <div>
            <h2 className="text-3xl font-bold mb-4">User Details</h2>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400">
                    Name
                  </div>
                  <div className="text-base font-bold text-green-400">
                    {userData.Fname} {userData.Lname}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400">
                    Vehicle Number
                  </div>
                  <div className="text-base font-bold text-green-400">
                    {userData.VNo}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400">
                    Vehicle Name
                  </div>
                  <div className="text-base font-bold text-green-400">
                    {userData.VName}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400">
                    Contact
                  </div>
                  <div className="text-base font-bold text-green-400">
                    Number:{userData.Contact} <br>
                    </br>
                    Mail:{userData.email}
                  </div>
                </div>
              </div>
            </div>
            <section className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-lg">
              <div className="grid gap-4">
                <h2 className="text-2xl font-bold">Billing</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label
                      className="text-md font-semibold mr-2"
                      htmlFor="fuel-type"
                    >
                      Fuel Type
                    </label>
                    <select
                      value={fuelType}
                      onChange={(e) => setFuelType(e.target.value)}
                      className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      id="fuel-type"
                    >
                      <option>Petrol</option>
                      <option>Power</option>
                      <option>Diesel</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-md font-semibold mr-2"
                      htmlFor="quantity"
                    >
                      Quantity (Liters)
                    </label>
                    <input
                      className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-700 border-gray-600 dark:border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      id="quantity"
                      min="0"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      type="number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-md font-semibold mr-2"
                      htmlFor="total-cost"
                    >
                      Total Cost
                    </label>
                    <input
                      className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-700 border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      id="total-cost"
                      min="0"
                      value={totalCost}
                      onChange={(e) => setTotalCost(e.target.value)}
                      type="number"

          
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-md font-semibold mr-2"
                      htmlFor="location"
                    >
                      Location
                    </label>
                    <input
                      className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-700 border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </section>
            <div className="flex items-center ml-2">
              <div className="flex justify-end mr-2">
                <Button onClick={handleFormSubmit}>Submit</Button>
              </div>
              <div className="flex justify-end">
                <Link to="/otp">
                  <Button>Cancel</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default function Component() {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1">
        <B />
      </main>
    </div>
  );
}

// function UploadIcon(props) {
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
//       <polyline points="17 8 12 3 7 8" />
//       <line x1="12" x2="12" y1="3" y2="15" />
//     </svg>
//   );
// }
