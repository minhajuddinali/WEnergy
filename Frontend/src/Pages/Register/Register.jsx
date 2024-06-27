// import "./Register.css";
// import "../../App.css";
// import video from "../../Assets/intro.mp4";
// // import logo from "../../Assets/logo.png";
// import { Link } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import { MdPassword } from "react-icons/md";
// import { FaSignInAlt } from "react-icons/fa";
// import { MdEditNote } from "react-icons/md";

// const Register = () => {
//   return (
//     <div className="loginPage flex">
//       <div className="container flex">
//         <div className="videoDiv">
//           <video src={video} autoPlay muted loop></video>
//           <div className="textDiv">
//             <h2 className="title">Fuel with Future</h2>
//             <p>Pay By Plate!</p>
//           </div>
//           <div className="footerDiv flex">
//             <span className="text">Having an account ?</span>
//             <Link to={"/login"}>
//               <button className="btn">Sign In</button>
//             </Link>
//           </div>
//         </div>
//         <div className="formDiv flex">
//           <div className="headerDiv">
//             {/* <img src={logo} alt="Logo" /> */}
//             <h3>Join Us</h3>
//           </div>
//           <form action="" className="form grid">
//             {/* <span>Login status will go here</span> */}
//             <div className="inputDiv">
//               <label htmlFor="username">UserName</label>
//               <div className="input flex">
//                 <FaUser className="icon" />
//                 <input
//                   type="text"
//                   id="username"
//                   placeholder="Enter your username"
//                 />
//               </div>
//             </div>
//             <div className="inputDiv">
//               <label htmlFor="vehiclenumber">Vehicle Number</label>
//               <div className="input flex">
//                 <MdEditNote className="icon" />
//                 <input
//                   type="text"
//                   id="vehiclenumber"
//                   placeholder="Enter your vehiclenumber"
//                 />
//               </div>
//             </div>

//             <div className="inputDiv">
//               <label htmlFor="password">PassWord</label>
//               <div className="input flex">
//                 <MdPassword className="icon" />
//                 <input
//                   type="text"
//                   id="password"
//                   placeholder="Enter your password"
//                 />
//               </div>
//             </div>
//             <Link to={"/home"}>
//               <button type="submit" className="btn flex">
//                 <span>Sign In</span>
//                 <FaSignInAlt className="icon" />
//               </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import { useState } from "react";
import Axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import {
//   SelectValue,
//   SelectTrigger,
//   SelectItem,
//   SelectContent,
//   Select,
// } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { CloudCog, Plane } from "lucide-react";
import { toast } from "react-toastify";

export default function Component() {
  const [dlname, setlname] = useState("");
  const [dvno, setvno] = useState("");
  const [dfname, setfname] = useState("");
  const [dcontact, setcontact] = useState("");
  const [demail, setemail] = useState("");
  const [dvname, setvname] = useState("");
  const [dcity, setCity] = useState("");
  const [dpassword, setPassword] = useState("");
    const navigate=useNavigate();
  const data=
{
    'VNo': dvno,
    'fname': dfname,
    'lname': dlname,
    'contact': dcontact,
    'email': demail,
    'Vname': dvname,
    'city': dcity,
    'pwd':dpassword
  };
//  console.log(data)
  const creatUser = async(e) => {
    e.preventDefault();
    // console.log("hi");
    // const response= await Axios.post('http://localhost:5150/api/Agent/Registration', 
    // data,{headers: {
    //   'Content-Type': 'application/json'
    // }})
    // console.log(response)
    // alert("user created")

   console.log(data);

    const res = await Axios.post("http://localhost:5150/api/Agent/Registration", data);
    const temp={
        V_No:data.VNo,
        balance:0,
        unpaid:0,
        paid:0
    }
    const response=await Axios.post('http://localhost:5150/api/Payments',temp)
    toast.success("Registration Successful");
    //navigate("/login");


   // console.log("exit");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/register",
  //       formData
  //     );
  //     alert(response.data);
  //   } catch (error) {
  //     alert("Error registering user");
  //   }
  // };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center  px-4 py-12 sm:px-6 lg:px-8 rounded-3xl">
      <div className="w-full max-w-xl space-y-8 bg-slate-500 p-6 rounded-3xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Register your vehicle
          </h2>
        </div>
        <form
          // action="#"
          className="space-y-7"
          onSubmit={creatUser}
        >
          
          <div class="grid grid-cols-2 gap-4">
    <div>
        <label for="FirstName" class="block text-sm font-medium text-gray-300">
            FirstName
        </label>
        <div class="mt-1">
            <input
                class="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                name="username"
                id="FirstName"
                required
                type="text"
                aria-label="First Name"
                onChange={(e)=>setfname(e.target.value)}
            />
        </div>
    </div>
    <div>
        <label for="LastName" class="block text-sm font-medium text-gray-300">
            Last Name
        </label>
        <div class="mt-1">
            <input
                class="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                name="LastName"
                id="LastName"
                required
                type="text"
                aria-label="Last Name"
                onChange={(e)=>setlname(e.target.value)}
            />
        </div>
    </div>
</div>
<div class="grid grid-cols-2 gap-4">
    <div>
        <label for="contact" class="block text-sm font-medium text-gray-300">
            Contact
        </label>
        <div class="mt-1">
            <input
                class="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                name="contact"
                id="contact"
                required
                type="tel"
                aria-label="Contact Number"
                onChange={(e)=>setcontact(e.target.value)}
            />
        </div>
    </div>
    <div>
        <label for="email" class="block text-sm font-medium text-gray-300">
            Email
        </label>
        <div class="mt-1">
            <input
                class="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                name="email"
                id="email"
                required
                type="email"
                aria-label="Email Address"
                onChange={(e)=>setemail(e.target.value)}
            />
        </div>
    </div>
</div>
<div class="grid grid-cols-2 gap-4">
    <div>
        <label for="vehiclename" class="block text-sm font-medium text-gray-300">
            Vehicle Name
        </label>
        <div class="mt-1">
            <input
                class="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 
                placeholder-gray-400 focus:border-white focus:bg-opacity-75
                 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                name="vehiclename"
                id="vehiclename"
                required
                type="text"
                aria-label="Vehicle Name"
                onChange={(e)=>setvname(e.target.value)}
            />
        </div>
    </div>
    <div>
        <label for="city" class="block text-sm font-medium text-gray-300">
            City
        </label>
        <div class="mt-1">
            <input
                class="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                name="city"
                id="city"
                required
                type="text"
                aria-label="City"
                onChange={(e)=>setCity(e.target.value)}
            />
        </div>
    </div>
</div>
<div>
    <label for="password" class="block text-sm font-medium text-gray-300">
        Password
    </label>
    <div class="mt-1">
        <input
            class="block w-full rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-900 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
            name="password"
            id="password"
            required
            type="password"
            aria-label="Password"
            onChange={(e)=>setPassword(e.target.value)}
        />
    </div>
</div>
<div class="grid grid-cols-2 gap-4">
    <div>
        <label for="vehiclenumber" class="block text-sm font-medium text-gray-300">
            Vehicle Number
        </label>
        <div class="mt-1">
            <input
                class="block w-full appearance-none rounded-md border border-transparent bg-gray-100 bg-opacity-50 px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-white focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:text-sm"
                name="vehiclenumber"
                id="vehiclenumber"
                required
                type="text"
                aria-label="Vehicle Number"
                onChange={(e)=>setvno(e.target.value)}
            />
        </div>
    </div>
    <div>
        <button
            class="flex w-full justify-center rounded-md bg-[#0070f3] px-4 py-2 text-lg font-semibold text-gray-900 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            type="submit"
            aria-label="Register"
            // onClick={creatUser}
            
        >
            Register
        </button>
    </div>
</div>
<div class="text-center text-lg text-gray-300">
    Or <span> </span>
    <a href="/login" class="font-medium text-black hover:text-gray-200">
        <span class="text-xl font-bold"> Sign in </span>
    </a>
    if you already have an account
</div>
</form>
    </div>
  </div>
);};
