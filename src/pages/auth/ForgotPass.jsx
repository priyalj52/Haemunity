import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import { ToastContainer, toast } from "react-toastify";
const ForgotPassword = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{
         toast.error(error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      
      
      
      }</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner1.jpg" alt="ForgotPasswordImage" />
          </div>
          <div className="col-md-4 form-container">
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
            <Form
              formTitle={"Forgot Password "}
              submitBtn={"Submit"}
              formType={"ForgotPassword"}
            />
            
          </div>
        
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
