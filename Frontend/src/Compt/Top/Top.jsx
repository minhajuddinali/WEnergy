import { BiLogOutCircle, BiLogoUnsplash, BiSearchAlt } from "react-icons/bi";
import "./top.css";
import "../../App.css";
import i from "../../Assets/pro.png";
import { TbLogout2, TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { LogOut, LogOutIcon, LucideLogOut, User, User2Icon, UserCheck2Icon, UserCircle2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Top = () => {
  const Fname=localStorage.getItem("Fname");
  const navigateTo = useNavigate();
  const logout=async()=> await new Promise((resolve, reject) => {
    const confirmLogout = confirm("Are you sure you want to log out?");
    resolve(confirmLogout);
  
    navigateTo("/landing");});
    return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to WEnergy.</h1>
          <p>Hello {Fname}, Welcome back!</p>
        </div>

        {/* <div className="searchBar flex">
          <input type="text" placeholder="search Dashboard" />
          <BiSearchAlt className="icon" />
        </div> */}

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <LucideLogOut size={40} className="icon" onClick={logout}/>
          {/* <div className="adminImage">
            <img src={i} alt="Admin image" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Top;
