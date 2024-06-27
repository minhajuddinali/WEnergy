import "./HomePage.css";
import "../../App.css";
import SideBar from "../../Compt/SideBar/SideBar";
// import Header from "../Dashboard/components/Header/Header";
import Body from "../../Compt/Body/Body";
const HomePage = () => {
  return (
    <div className="Bod">
      <div className="cont">
        <SideBar />
        <Body />
        {/* <a href="/">To LogOut</a> */}
      </div>
    </div>
  );
};

export default HomePage;
