import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Img from "../../../Componants/lazyLoadImage/Img";
import Header from "../Header";
import Footer from "../Footer";
import Trending from "../../CompoHome/Trending";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";
import { useState } from "react";
import Video_onff from "../../../../public/Video/Netflix New Logo Animation 2019.mp4";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Trending_Today = () => {
  const [open, setOpen] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const [Background, setBackground] = useState("");
  const [Storage, setStorage] = useState([
    {
      NameLOGO:
        "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABct73m5eMUR8GLE0KkBubJ-qChflATmWKQKNGTURH2sLclqlW2Vhdy6rA1G-D3vwRfOoBDWD6bShVQN4cQAS5m_m1Z0_Ms3nVNZ-A9ZcMGDkEp9601RZStRardjy3dkssOiO1ec7xitJJwPARAqwGQr9cd7_jCla8qyJV1yRYC2C3FrYadv12w.webp?r=c41",
      Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABT-gRT0J2kaA0UPX_7tgo_rnEuGl-LlDIM_HLHNuoUWRtuZ8njF-HD0dNNXJfjPO5Zh2m_HDdxkjl0tbS3Wvt2OvLSB2G0lGFcY4.webp?r=89e",
    },
    {
      NameLOGO:
        "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVYBNVsnjk6uT2qV5RSi-BfoFDfWqfUIGQo9B4dGy9aVQ4U5diQQPoVSebLs29enTCJq2bpzKlT8ZLsXQWtlWFFBr2NuShnS4guxy6EVSRG4.webp?r=aec",
      Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfsZlboG6R7nF2Fb4l-WeWNDDBnxC2d2c4q2EjGg3fu7Jiggb_pwICDDCAeNhhbMDNa1EuNb8YgOXWGYKOjGSojZocJq34_MT-TC.webp?r=227",
    },
    {
      NameLOGO:
        "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcvXa1DBhOilwwcUxV92MEpFPzgPf9O7qqHP8D_tzs0q9D7Bqsstz0gt7fVYNkzq2j2afrwnlxPuZg3iTrUcnhqc5kUDO7sbCwWTXLDGOWtzJaxlCrF7l1o7gVwj8-8fPvYTlkiVyMeSqXQ7JkcEpcFPyBhaIuGuGOMMGNq7VPzX-jQ0RnqLJA.webp?r=ce9",
      Back: "	https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcxpwy-3Ro80hSapeXR417NpC3Ehs7_VlS1OwEwJRb2U4Irmbx_Jahtokzbx6SAX0sI4aKEqaACWONA_JCx_rQE3EUJgVML3HLau.webp?r=01a",
    },
    {
      NameLOGO:
        "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABX1wzC7jRI_a8gTASoeTklkzXWvhZ5jwPKOcBEtG88Z1glNYLMzwt_jouJXNGaEJwbSYEhWxgM3EXQcIO2CEEmfBBq9H_CpdgUPjNswAqpxu.webp?r=aea",
      Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTlFnW9roEyP182OEfagWfB-5lIR1-pmljQ42CKaul4g_ntefExxPYe-EPkhbpM0iAXxqRWvmqgMsnIbr81g-k6vruaFf4q3e_q5.webp?r=a90",
    },
    {
      NameLOGO:
        "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABct73m5eMUR8GLE0KkBubJ-qChflATmWKQKNGTURH2sLclqlW2Vhdy6rA1G-D3vwRfOoBDWD6bShVQN4cQAS5m_m1Z0_Ms3nVNZ-A9ZcMGDkEp9601RZStRardjy3dkssOiO1ec7xitJJwPARAqwGQr9cd7_jCla8qyJV1yRYC2C3FrYadv12w.webp?r=c41",
      Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYJaziarMl8y-6S1KF1Q2Cp44FekcZKzoWlYTZlxHe1e-Pd-F8wY0dLviWQXgx1Yzii54_FZgZLG6XNz6Hvrv92EosTGkPEi2nO1.webp?r=157",
    },
    {
      NameLOGO:
        "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQ4uguhAxGr-PvcN9Ndge6gj50I8HiUvgyMLY_A5YeEJWn45emsxH0XEW7hvajhcH-F4pyx1bima0V2apju-6QdqNoVNhfkMRM-cnmnn3lzTDlud-xDnzwe_9HvV331IHebsKclJSIA8YaJ0Q44Am17koQMXF52hOZFobFPYYgXBsYyrRxGE5w.webp?r=3c8",
      Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSj01ej1gfzZCsm9Fh2uSqWH_A0P6HQiFBD3lt4NCNLyOAAHl5WJKPLNBlwskdwSQi3NXQUhod9ofpzeIq34Qd-dmlM7y_vrpr-D.webp?r=a28",
    },
    {
      NameLOGO:
        "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVKx0sSTp5OxajOblfVqXuetP241HlgD9C2t80Slo9i-FalBKtIP35pr9KBO46agR98EJnAUGtkskNMD2G4n338G2hO7c2AMAO_WW55dJInc0DEhFF_ZoTZK1B6VnvbIBcAzurHA78iPjJOJ-EZ21f5XOpIOY3ohaoDNrSY_j2ys-5_6kecv_A.webp?r=2b9",
      Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABa6sIGGKzszsqjTxaiT389wX2hc750XlqbK9M_LlyrfO93Nl2iS8T9evSihqarwdG9ol2L0Rj_GSbjEQHeHc-65S2jkfDx0AByhn.webp?r=b1b",
    },
    {
      NameLOGO:
        "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABS24gTOb8NHT8PA-PLW28nhR2KhnGOU_KJMIJvLIw6EtEPoKh78XJ0Da-QcG43UOcVxrk9ZkRbekfiXt5lyxswuCVCMZIGaYbegQwiPCIdJ7.webp?r=52d",
      Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYhJ4a3AD9VpK61wjZ5HW0zldV_vbe5Cp9fAfeMC4asR8O-dvNQ0UyWvTqJSQU6hYElySVmIIU6VXNGm_QLnVFI2LKOK8kdijkVA.webp?r=7ba",
    },
    {
      NameLOGO:
        "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVKx0sSTp5OxajOblfVqXuetP241HlgD9C2t80Slo9i-FalBKtIP35pr9KBO46agR98EJnAUGtkskNMD2G4n338G2hO7c2AMAO_WW55dJInc0DEhFF_ZoTZK1B6VnvbIBcAzurHA78iPjJOJ-EZ21f5XOpIOY3ohaoDNrSY_j2ys-5_6kecv_A.webp?r=2b9",
      Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW35CGfJFaaKMmMJARezHUgi7bVBppELidw7X81PVjePR_EV3azckM8irO0gekxCwZN5IohB_0H_FGJ8NCqC91JqrOWdWWCk6crd.webp?r=422",
    },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const bg = Storage?.[Math.floor(Math.random() * 9)];
    setBackground(bg);
  }, [Storage]);
  return (
    <>
      <Header />
      <div className="heroBanner" style={{ height: "750px" }}>
        <div className="backdrop-img">
          <Img src={Background.Back} />
        </div>
        <div className="mx-5 ">
          <Img src={Background.NameLOGO} alt="name" />
        </div>
        <div className="opacity-layer">
          <div className="pt-5 px-5 d-flex">
            <div style={{ width: "3%" }}>
              <svg viewBox="0 0 28 30" class="svg-icon svg-icon-top-10-badge">
                <rect x="0" width="28" height="30" rx="3" fill="#e50914"></rect>
                <path
                  d="M16.8211527,22.1690594 C17.4133103,22.1690594 17.8777709,21.8857503 18.2145345,21.3197261 C18.5512982,20.7531079 18.719977,19.9572291 18.719977,18.9309018 C18.719977,17.9045745 18.5512982,17.1081018 18.2145345,16.5414836 C17.8777709,15.9754594 17.4133103,15.6921503 16.8211527,15.6921503 C16.2289952,15.6921503 15.7645345,15.9754594 15.427177,16.5414836 C15.0904133,17.1081018 14.9223285,17.9045745 14.9223285,18.9309018 C14.9223285,19.9572291 15.0904133,20.7531079 15.427177,21.3197261 C15.7645345,21.8857503 16.2289952,22.1690594 16.8211527,22.1690594 M16.8211527,24.0708533 C15.9872618,24.0708533 15.2579042,23.8605988 14.6324861,23.4406836 C14.0076618,23.0207685 13.5247891,22.4262352 13.1856497,21.6564897 C12.8465103,20.8867442 12.6766436,19.9786109 12.6766436,18.9309018 C12.6766436,17.8921018 12.8465103,16.9857503 13.1856497,16.2118473 C13.5247891,15.4379442 14.0076618,14.8410352 14.6324861,14.4205261 C15.2579042,14.0006109 15.9872618,13.7903564 16.8211527,13.7903564 C17.6544497,13.7903564 18.3844012,14.0006109 19.0098194,14.4205261 C19.6352376,14.8410352 20.1169224,15.4379442 20.4566558,16.2118473 C20.7952012,16.9857503 20.9656618,17.8921018 20.9656618,18.9309018 C20.9656618,19.9786109 20.7952012,20.8867442 20.4566558,21.6564897 C20.1169224,22.4262352 19.6352376,23.0207685 19.0098194,23.4406836 C18.3844012,23.8605988 17.6544497,24.0708533 16.8211527,24.0708533"
                  fill="#FFFFFF"
                ></path>
                <polygon
                  fill="#FFFFFF"
                  points="8.86676 23.9094206 8.86676 16.6651418 6.88122061 17.1783055 6.88122061 14.9266812 11.0750267 13.8558085 11.0750267 23.9094206"
                ></polygon>
                <path
                  d="M20.0388194,9.42258545 L20.8085648,9.42258545 C21.1886861,9.42258545 21.4642739,9.34834303 21.6353285,9.19926424 C21.806383,9.05077939 21.8919103,8.83993091 21.8919103,8.56731273 C21.8919103,8.30122788 21.806383,8.09572485 21.6353285,7.94961576 C21.4642739,7.80410061 21.1886861,7.73104606 20.8085648,7.73104606 L20.0388194,7.73104606 L20.0388194,9.42258545 Z M18.2332436,12.8341733 L18.2332436,6.22006424 L21.0936558,6.22006424 C21.6323588,6.22006424 22.0974133,6.31806424 22.4906012,6.51465818 C22.8831952,6.71125212 23.1872921,6.98684 23.4028921,7.34142182 C23.6178982,7.69659758 23.7259952,8.10522788 23.7259952,8.56731273 C23.7259952,9.04246424 23.6178982,9.45762788 23.4028921,9.8122097 C23.1872921,10.1667915 22.8831952,10.4429733 22.4906012,10.6389733 C22.0974133,10.8355673 21.6323588,10.9335673 21.0936558,10.9335673 L20.0388194,10.9335673 L20.0388194,12.8341733 L18.2332436,12.8341733 Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M14.0706788,11.3992752 C14.3937818,11.3992752 14.6770909,11.322063 14.9212,11.1664509 C15.1653091,11.0114327 15.3553697,10.792863 15.4913818,10.5107418 C15.6279879,10.2286206 15.695697,9.90136 15.695697,9.52717818 C15.695697,9.1535903 15.6279879,8.82573576 15.4913818,8.54361455 C15.3553697,8.26149333 15.1653091,8.04351758 14.9212,7.88790545 C14.6770909,7.73288727 14.3937818,7.65508121 14.0706788,7.65508121 C13.7475758,7.65508121 13.4642667,7.73288727 13.2201576,7.88790545 C12.9760485,8.04351758 12.7859879,8.26149333 12.6499758,8.54361455 C12.5139636,8.82573576 12.4456606,9.1535903 12.4456606,9.52717818 C12.4456606,9.90136 12.5139636,10.2286206 12.6499758,10.5107418 C12.7859879,10.792863 12.9760485,11.0114327 13.2201576,11.1664509 C13.4642667,11.322063 13.7475758,11.3992752 14.0706788,11.3992752 M14.0706788,12.9957842 C13.5634545,12.9957842 13.0995879,12.9090691 12.6784848,12.7344509 C12.2573818,12.5604267 11.8915152,12.3163176 11.5808848,12.0027176 C11.2708485,11.6891176 11.0314909,11.322063 10.8634061,10.9003661 C10.6953212,10.479263 10.6115758,10.0213358 10.6115758,9.52717818 C10.6115758,9.03302061 10.6953212,8.57568727 10.8634061,8.1539903 C11.0314909,7.73288727 11.2708485,7.36523879 11.5808848,7.05163879 C11.8915152,6.73803879 12.2573818,6.49452364 12.6784848,6.31990545 C13.0995879,6.14588121 13.5634545,6.05857212 14.0706788,6.05857212 C14.577903,6.05857212 15.0417697,6.14588121 15.4628727,6.31990545 C15.8839758,6.49452364 16.2498424,6.73803879 16.5604727,7.05163879 C16.871103,7.36523879 17.1098667,7.73288727 17.2779515,8.1539903 C17.4460364,8.57568727 17.5297818,9.03302061 17.5297818,9.52717818 C17.5297818,10.0213358 17.4460364,10.479263 17.2779515,10.9003661 C17.1098667,11.322063 16.871103,11.6891176 16.5604727,12.0027176 C16.2498424,12.3163176 15.8839758,12.5604267 15.4628727,12.7344509 C15.0417697,12.9090691 14.577903,12.9957842 14.0706788,12.9957842"
                  fill="#FFFFFF"
                ></path>
                <polygon
                  fill="#FFFFFF"
                  points="8.4639503 12.8342327 6.65837455 13.2666206 6.65837455 7.77862061 4.65323515 7.77862061 4.65323515 6.22012364 10.4690897 6.22012364 10.4690897 7.77862061 8.4639503 7.77862061"
                ></polygon>
              </svg>
            </div>
            <div>
              <h3 className="text-white mx-3">#1 in TV Shows Today</h3>
            </div>
          </div>
          <div className="pt-3 px-5 d-flex justify-content-between ">
            <h5 className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              smuggler whose bloody reign sparked a 20-year-long manhunt <br />{" "}
              in south India.
            </h5>

            <div className="play_goggle">
              <div className="roww">
                <div className="playbtn" onClick={handleClickOpen}>
                  <svg
                    height="100px"
                    width="100px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="19.456"
                    ></g>

                    <g id="">
                      {" "}
                      <path d="M256,20C125.872,20,20,125.872,20,256s105.872,236,236,236s236-105.872,236-236S386.128,20,256,20z M156.64,387.712V124.288l246.72,131.72L156.64,387.712z" />{" "}
                      <path
                        style={{ fill: "#ff3333" }}
                        d="M512,256C512,114.616,397.384,0,256,0S0,114.616,0,256s114.616,256,256,256S512,397.384,512,256z M256,492C125.872,492,20,386.128,20,256S125.872,20,256,20s236,105.872,236,236S386.128,492,256,492z"
                      />{" "}
                      <polygon
                        style={{ fill: "#cc001b" }}
                        points="156.64,387.712 403.36,256.008 156.64,124.288 "
                      />{" "}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="client_conteint pb-1 pt-2">
        <Trending />
      </div>
      <Footer />
      <BootstrapDialog
        className="BAck_player"
        maxWidth={maxWidth}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent>
          <video width="1000" height="550" controls autoPlay loop>
            <source src={Video_onff} type="video/mp4" quality="high" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};

export default Trending_Today;
