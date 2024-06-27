import "./sidebar.css";
import "../../App.css";
// import i from "../../Assets/logo.png";
//icon import
import { GoHomeFill } from "react-icons/go";
import { FaWallet } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { FaChartPie } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  const Fname=localStorage.getItem('Fname');
  const Lname=localStorage.getItem('Lname');
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        {/* <img src={i} alt="logo" /> */}
        <h2>WEnergy.</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="/home" className="menuLink flex">
              <GoHomeFill className="icon" />
              <span className="smallText">Home</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/payment" className="menuLink flex">
              <FaWallet className="icon" />
              <span className="smallText">Wallet</span>
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
              <span className="smallText">About</span>
            </a>
          </li>
        </ul>
      </div>
      <hr />

      <div className="settingsDiv">
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
      </div>

      <div className="sideBarCard">
        <FaUser className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>{Fname} {Lname}</h3>
          <p>Thanking you for trusting us.</p>
          <Link to={"/"}>
            <button className="btn">Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
