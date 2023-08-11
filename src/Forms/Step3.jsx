import React, { useState } from "react";
import Header from "../ClientSite/Global/Header";
import Footer from "../ClientSite/Global/Footer";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { NavLink } from "react-router-dom";

function Step3() {
  return (
    <>
      <div className="client_conteint">
        <Header />
        <div
          className="text-white container contentWrapper text-center"
          style={{ paddingTop: "150px", paddingBottom: "100px" }}
        >
          <div className="pb-2">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
              alt=""
              height="75"
            />
          </div>
          <div className="pt-5">STEP 2 OF 3</div>
          <h3>Finish setting up your account</h3>
          <div className="p-3">
            <span>
              Netflix is personalised for you. Create <br /> a password to watch
              on any device at <br /> any time.
            </span>
          </div>
          <div className="text-center pt-2">
            <NavLink to="/">
              <button className="Next_button">NEXT</button>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Step3;
