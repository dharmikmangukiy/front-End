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
import EmailIcon from "@mui/icons-material/Email";

const Registration = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
    name: "",
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
  const sign_in = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", data)
      .then((res) => {
        console.log(res);
        if (data.email !== "" && data.password !== "" && data.name !== "") {
          if (res.data.message === "This email is already taken.") {
            toast.error(res.data.message);
          } else {
            toast.success("Register successful");
            toast("Back to Login");
            setdata({
              email: "",
              password: "",
              name: "",
            });
          }
        } else {
          toast.error("Please enter all details.");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
  console.log(data);
  return (
    <div className="body_reg">
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
                src="../public/Images/netflix_icon_161073.png"
              />
              <hr />
              <div>
                <span className="text_format">REGISTRATION</span>
              </div>
            </div>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label for="user" className="label">
                    Name
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
                        name="name"
                        value={data.name}
                        onChange={input}
                        className="Text_field"
                      />
                    </FormControl>
                  </Box>
                </div>
                <div className="group">
                  <label for="user" className="label">
                    Email
                  </label>
                  <Box
                    className="input"
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <EmailIcon sx={{ color: "white", my: 0.5, mb: "8px " }} />
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

                <div className="group">
                  <button
                    type="submit"
                    className="button"
                    onClick={(e) => sign_in(e)}
                  >
                    SIGN UP
                  </button>
                </div>
                <div className="group pt-2">
                  <div
                    style={{ display: "flex", justifyContent: "end" }}
                    className="foot-lnk"
                  >
                    <NavLink to="/">You are already Customer ?</NavLink>
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

export default Registration;
