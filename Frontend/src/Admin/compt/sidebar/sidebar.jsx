// import "./sidebar.css";
// import "../../../App.css";
// import i from "../../Assets/logo.png";
//icon import
import { GoHomeFill } from "react-icons/go";
// import { FaWallet } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { FaChartPie } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { BsFillCreditCard2FrontFill } from "react-icons/bs";
// import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        {/* <img src={i} alt="logo" /> */}
        <h2>WEnergy.</h2>
      </div>
      <div className="menuDiv">
        {/* <h3 className="divTitle">QUICK MENU</h3> */}
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="/home" className="menuLink flex">
              <GoHomeFill className="icon" />
              <span className="smallText">Home</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/payment" className="menuLink flex">
              <WalletIcon className="icon" />
              <span className="smallText">Wallet-Verification </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <RxDashboard className="icon" />
              <span className="smallText">DashBoard</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/about" className="menuLink flex">
              <FaChartPie className="icon" />
              <span className="smallText">Users</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/about" className="menuLink flex">
              <UsersIcon className="icon" />
              <span className="smallText">Employee-List</span>
            </a>
          </li>
        </ul>
      </div>
      <hr />

      {/* <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="/billing" className="menuLink flex">
              <BsFillCreditCard2FrontFill className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/contact" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </a>
          </li>
        </ul>
      </div> */}

      <div className="sideBarCard">
        <FaUser className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Synick</h3>
          <p>TankingYou for trusting us.</p>
          <Link to={"/"}>
            <button className="btn">LogOut</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

export default Sidebar;
