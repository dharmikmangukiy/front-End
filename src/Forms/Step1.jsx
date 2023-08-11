import React, { useState } from "react";
import Header from "../ClientSite/Global/Header";
import Footer from "../ClientSite/Global/Footer";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { NavLink } from "react-router-dom";

function Step1() {
  return (
    <>
      <div className="client_conteint">
        <Header />
        <div
          className="text-white container contentWrapper text-center"
          style={{ paddingTop: "150px", paddingBottom: "100px" }}
        >
          <div className="pb-2">
            <CheckCircleOutlineRoundedIcon
              style={{
                color: "red",
                fontSize: "50px",
              }}
            />
          </div>
          <div className="pt-3">STEP 1 OF 3</div>
          <h3>Choose your plan.</h3>
          <div className="p-3">
            <div className="pb-2">
              <DoneAllRoundedIcon
                style={{
                  color: "red",
                  fontSize: "30px",
                  paddingRight: "8px",
                }}
              />
              No ads and no extra fees. Ever
            </div>
            <div className="pb-2">
              <DoneAllRoundedIcon
                style={{
                  color: "red",
                  fontSize: "30px",
                  paddingRight: "8px",
                }}
              />
              No commitments, cancel anytime.
            </div>
            <div className="pb-2">
              <DoneAllRoundedIcon
                style={{
                  color: "red",
                  fontSize: "30px",
                  paddingRight: "8px",
                }}
              />
              Everything on Netflix for one low price.
            </div>
          </div>
          <div className="text-center pt-4">
            <NavLink to="/PlanForm">
              <button className="Next_button">NEXT</button>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Step1;
