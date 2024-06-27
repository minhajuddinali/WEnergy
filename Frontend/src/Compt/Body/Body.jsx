import "./body.css";
import Top from "../../Compt/Top/Top";
import Details from "../../Pages/HomeDetails/HomeDetails";
// import { Button } from "@/components/ui/button";
// import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
// import Hero from "./HeroSection/hero";
// import RecentList from "./RecentList/recentList";
// import Header from "../Body/RecentList";
const Body = () => {
  return (
    <div className="mainContent">
      {/* <div className="stick"> */}
      <Top />
      {/* </div> */}
      <hr />
      <div className="bottom flexx">
        <div className="flex  justify-center items-center top-0 min-h-[100dvh] w-full">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Body;
