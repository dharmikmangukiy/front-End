import React, { useState } from "react";
import Header from "../ClientSite/Global/Header";
import Footer from "../ClientSite/Global/Footer";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { NavLink } from "react-router-dom";

function PlanForm() {
  return (
    <>
      <div className="client_conteint">
        <Header />
        <div
          className="text-white container contentWrapper"
          style={{ paddingTop: "100px", paddingBottom: "50px" }}
        >
          <div className="pt-3">STEP 1 OF 3</div>
          <div>
            <h2>Choose the plan that’s right for you</h2>
            <div className="pt-4">
              <div>
                <DoneAllRoundedIcon
                  style={{
                    color: "red",
                    paddingRight: "8px",
                    fontSize: "35px",
                  }}
                />
                Watch all you want. Ad-free.
              </div>
              <div>
                <DoneAllRoundedIcon
                  style={{
                    color: "red",
                    paddingRight: "8px",
                    fontSize: "35px",
                  }}
                />
                Recommendations just for you.
              </div>
              <div>
                <DoneAllRoundedIcon
                  style={{
                    color: "red",
                    paddingRight: "8px",
                    fontSize: "35px",
                  }}
                />
                Change or cancel your plan anytime.
              </div>
            </div>
          </div>
          <div className="pt-4 responsive_box">
            <div className="border_max">
              <div className="box_premium py-2 px-3 ">
                <span className="premiun_quality">Premium</span>
                <br />
                <span>₹649/mo.</span>
              </div>
              <ul>
                <li>
                  Our best video quality in 4K <br /> and HDR
                </li>
                <li>
                  Watch on your TV, computer, <br /> mobile phone and tablet
                </li>
                <li>Downloads available</li>
              </ul>
            </div>
            <div className="border_max">
              <div className="second_box py-2 px-3 ">
                <span className="premiun_quality">Standard</span>
                <br />
                <span>₹499/mo.</span>
              </div>
              <ul>
                <li>
                  Great video quality in 1080p <br /> and HD Audio
                </li>
                <li>
                  Watch on your TV, computer, <br /> mobile phone and tablet
                </li>
                <li>Downloads available</li>
              </ul>
            </div>

            <div className="border_max">
              <div className="third_box py-2 px-3 ">
                <span className="premiun_quality">Basic</span>
                <br />
                <span>₹199/mo.</span>
              </div>
              <ul>
                <li>
                  Good video quality in 720p <br /> and HD Audio
                </li>
                <li>
                  Watch on your TV, computer, <br /> mobile phone and tablet
                </li>
                <li>Downloads available</li>
              </ul>
            </div>

            <div className="border_max">
              <div className="forth_box py-2 px-3 ">
                <span className="premiun_quality">Mobile</span>
                <br />
                <span>₹149/mo.</span>
              </div>
              <ul>
                <li>
                  Good video quality in 480p <br /> and HD Audio
                </li>
                <li>
                  Watch on your mobile phone <br /> and tablet
                </li>
                <li>Downloads available</li>
              </ul>
            </div>
          </div>
          <div className="p-3 text-secondary">
            <span className="" style={{ fontSize: "15px" }}>
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our Terms of Use for
              more details.
            </span><br />
            <span className="" style={{ fontSize: "15px" }}>
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard,
              and 1 with Basic and Mobile.
            </span>
          </div>
        <div className="text-center">
      <NavLink to='/step3'>
      <button className="Next_button">NEXT</button>
      </NavLink>
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PlanForm;
