import Axios from "axios";
import { useEffect, useState } from "react";
import "./Login.css";
import "../../App.css";
import video from "../../Assets/intro.mp4";
import logo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
//import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAgentData } from "../../lib/reducers";
// import { useState } from "react";
const Login = () => {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigateTo = useNavigate();
  //const history = useHistory();
  //const dispatch = useDispatch();

  const [loginStatus, setLoginStatus] = useState();
  const [statusHolder, setStatusHolder] = useState("mesage");
  
      // const data={
      //   'email':loginUserName,
      //   'pwd':loginPassword
      // };
  // const loginUSer = (e) => 
  const creatUser = async (e) => {
   e.preventDefault();
   //console.log("hi");
  
    try {
      const response = await Axios.get(`http://localhost:5150/api/Agent/Login/${loginUserName}/${loginPassword}`);
      const data = response.data;
    //  console.log("login",data.Fname);
      localStorage.setItem('VNo',response.data.VNo);
      localStorage.setItem('Fname',response.data.Fname);
      localStorage.setItem('Lname',response.data.Lname);
      localStorage.setItem('Unpaid',response.data.Unpaid);
      localStorage.setItem('Balance',response.data.Balance);
      localStorage.setItem('Paid',response.data.Paid);
     
    // localStorage.setItem('agent',JSON.stringify(data));
      navigateTo("/home");
     // dispatch(setAgentData(data));
//     console.log("this is login "+JSON.stringify(data));
  //     if(data){
  //     navigateTo("/home");
  //   // console.log("Hi"+data);
  // //  sessionStorage.setItem('agentData', JSON.stringify(data));

  //   // You can now use the data object to update your application's state or UI
  // //   const storedData = JSON.parse(sessionStorage.getItem('agentData'));
  // //  console.log(storedData);
  //       // if (data.length > 0) {
  //         const [VNo, status, lname, vName, city, fname, contact, balance, unpaid, paid, total] = data;
        
  //         const agentData = {
  //           VNo,
  //           status,
  //           balance,
  //           lname,
  //           vName,
  //           city,
  //           fname,
  //           contact,
  //           unpaid,
  //           paid,
  //           total
  //         };
  //    //  console.log("HIi",agentData);
  //       localStorage.setItem('agentData',JSON.stringify(agentData));
  //       // Extract the relevant data from the response
  // //       const [VNo, status,lname, vName, city,fname,contact,balance,unpaid,paid,total] = data;
  // //       //console.log(balance);
  // //       // Perform any necessary processing or display the data
  // //       localStorage.setItem('VNo', VNo);
  // //   localStorage.setItem('status', status);
  // //  // localStorage.setItem('amount', amount);
  // //   localStorage.setItem('lname', lname);
  // //   localStorage.setItem('vName', vName);
  // //   localStorage.setItem('city', city);
  // //   localStorage.setItem('fname',fname);
  // //   localStorage.setItem('contact',contact);
  // //   localStorage.setItem('total',balance);
  // //   localStorage.setItem('unpaid',unpaid);
  // //     localStorage.setItem('paid',paid);
  // //     localStorage.setItem('total',total);
  //       // Redirect the user to the "/home" route if the login is successful
       
  //     } else {
  //       alert("Invalid Login Credentials");
  //     }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
    
   };
   
  //  const handleSubmit = () => {
  //   //console.log("hi");
  //   creatUser();
  //   //getdetails();
 
  // };


  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Fuel with Future</h2>
            <p>Pay By Plate!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don't having an account ?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
          <div className="footer2Div flex">
            <span className="text">Admin Login</span>
            <Link to={"/adminlogin"}>
              <button className="btn">Sign IN</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo" />
            <h3>Welcome Back!</h3>
          </div>
          <form onSubmit={onsubmit} action="" className="form grid">
            <span className={statusHolder}>{loginStatus}</span>
            <div className="inputDiv">
              <label htmlFor="username">UserName</label>
              <div className="input flex">
                <FaUser className="icon" />
                <input
                  type="text"
                  id="username"
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
                  }}
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <MdPassword className="icon" />
                <input
                  type="password"
                  id="password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <Link to={"/home"}>
              <button onClick={creatUser} type="submit" className="btn flex">
                <span>Login</span>
                <FaSignInAlt className="icon" />
              </button>
            </Link>

            <span className="forgotPassword">
              Forgot your password? <a href="">click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
