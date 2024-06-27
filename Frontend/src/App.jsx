import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Demo from "./Pages/Demo";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import Billing from "./Pages/Billing/Billing";
import Payment from "./Pages/Payment/Payment";
import AddToWallet from "./Pages/AddMoney/AddToWallet";
import Paynow from "./Pages/Paynow/Paynow";
import Transcation from "./Admin/Pages/Transaction/Transcation";
import AdminLogin from "./Admin/Pages/Login/adminlogin";
import EmpList from "./Admin/Pages/EmpList/emplist";
import WalletVerify from "./Admin/Pages/Wallet_verification/verification";
import UserList from "./Admin/Pages/UsersList/userlist";
import AdminBill from "./Admin/Pages/Billing/adminbill";
import OTP from "./Admin/compt/otp/otp";
import F from "./Admin/compt/FBill/fbill";
import { Provider } from 'react-redux';
import store from './lib/store';
import { ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Landing />
      </div>
    ),
  },
  {
    path: "/otp",
    element: (
      <div>
        <OTP />
      </div>
    ),
  },
  {
    path: "/fbill",
    element: (
      <div>
        <F />
      </div>
    ),
  },
  {
    path: "/adminlogin",
    element: (
      <div>
        <AdminLogin />
      </div>
    ),
  },
  {
    path: "/emplist",
    element: (
      <div>
        <EmpList />
      </div>
    ),
  },
  {
    path: "/userlist",
    element: (
      <div>
        <UserList />
      </div>
    ),
  },
  {
    path: "/walletverify",
    element: (
      <div>
        <WalletVerify />
      </div>
    ),
  },
  {
    path: "/adminbill",
    element: (
      <div>
        <AdminBill />
      </div>
    ),
  },
  {
    path: "/transcation",
    element: (
      <div>
        <Transcation />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <HomePage />
      </div>
    ),
  },
  {
    path: "/addmoney",
    element: (
      <div>
        <AddToWallet />
      </div>
    ),
  },
  {
    path: "/payment",
    element: (
      <div>
        <Payment />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/demo",
    element: (
      <div>
        <Demo />
      </div>
    ),
  },

  {
    path: "/contact",
    element: (
      <div>
        <Contact />
      </div>
    ),
  },
  {
    path: "/billing",
    element: (
      <div>
        <Billing />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
      </div>
    ),
  },
  {
    path: "/paynow",
    element: (
      <div>
        <Paynow />
      </div>
    ),
  },
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
}
export default App;
