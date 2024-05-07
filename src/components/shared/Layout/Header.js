import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    
    // alert("Logout Successfully");
  
    toast.success(' Logout Successfully!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    
      });
    navigate("/login");
  };
const askAgain=()=>{
  let answer = window.prompt(
    "Are You Sure you Want To logout",
    "Sure"
  );
  if (!answer) return;
 handleLogout()
 
}

  return (
    <>
      <nav className="navbar">
    
        <div className="container-fluid ">
          <div className="navbar-brand h1 ">
            <BiDonateBlood color="#2d3282" /> Haemunity
          </div>
          <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle /> Welcome{" "}
                {user?.name || user?.hospitalName || user?.organisationName}
                &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
              </p>
            </li>
            {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className="nav-item mx-3">
                <Link to="/analytics" className="nav-link">
                  Analytics
                </Link>
              </li>
            ) : (
              <li className="nav-item mx-3">
                {user?.role!=='donar' && <Link to="/" className="nav-link">
                  Home
                </Link>}
              </li>
            )}
            <li className="nav-item mx-3">
          
              <button style={{backgroundColor: '#2d3282',color:'white'}} className="btn" onClick={askAgain}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
