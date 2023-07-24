import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import KeyIcon from "@mui/icons-material/Key";
import { NavLink, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [infoErrors, setInfoErrors] = useState({});
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const input = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdata((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  function handleClick() {
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }

  const sign_in = (e) => {
    e.preventDefault();
    setInfoErrors(data);
    if (data.email == "dharmik@gmail.com" && data.password == "Admin@123") {
      toast.success("Login successful");
      localStorage.setItem("login", false);
      handleClick();
      Navigate("/dashboard");
    } else {
      if (data.email == "" && data.password == "") {
        toast.warn("Please first enter detail");
      } else if (data.email != "dharmik@gmail.com") {
        toast.error("Enter Valid Email");
      } else if (data.password != "Admin@123") {
        toast.error("Enter Valid Password");
      }
    }
  };

  return (
    <div className="body">
      <div className="container">
        <img src="public/Images/Netflix-Logo.png" alt="logo" height="100px" />
        <ToastContainer />
        <div className="login-wrap">
          <div className="login-html">
            <div className="text-center mb-3">
              <img
                class="rounded-circle shadow  rounded "
                alt="avatar2"
                height={110}
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              />
              <hr />
              <div>
                <span className="text_format">Welcome !</span>
              </div>
            </div>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label for="user" className="label">
                    Email
                  </label>
                  <Box
                    className="input"
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <AccountCircle
                      sx={{ color: "white", my: 0.5, mb: "8px " }}
                    />
                    <FormControl fullWidth sx={{ mr: "6%" }}>
                      <TextField
                        sx={{
                          border: "none",
                          "& fieldset": { border: "none" },
                        }}
                        id="input-with-sx"
                        name="email"
                        value={data.email}
                        onChange={input}
                        className="Text_field"
                      />
                    </FormControl>
                  </Box>
                </div>
                <div className="group">
                  <label for="pass" className="label">
                    Password
                  </label>
                  <Box
                    className="input"
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <KeyIcon sx={{ color: "white", my: 0.5, mb: "8px " }} />
                    <FormControl fullWidth sx={{ mr: "6%" }}>
                      <TextField
                        sx={{
                          border: "none",
                          "& fieldset": { border: "none" },
                        }}
                        id="password"
                        name="password"
                        type="password"
                        className="Text_field"
                        value={data.password}
                        onChange={input}
                      />
                    </FormControl>
                  </Box>
                </div>
                <div className="group pt-2">
                  <div style={{ marginLeft: "5%" }} className="foot-lnk">
                    <a>Forgot Password ? </a>
                  </div>
                </div>
                <div className="group">
                  <button
                    type="submit"
                    className="button"
                    onClick={(e) => sign_in(e)}
                  >
                    Sign In
                  </button>
                </div>
                <div className="group pt-2">
                  <div
                    style={{ display: "flex", justifyContent: "end" }}
                    className="foot-lnk"
                  >
                    <a>Need help ? </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
