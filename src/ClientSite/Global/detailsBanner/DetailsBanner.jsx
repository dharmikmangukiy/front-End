import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Video_onff from "../../../../public/Video/Netflix New Logo Animation 2019.mp4";
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import useFetch from "../../../Componants/hooks/useFetch";
import Genres from "../Genres";
import CircleRating from "../CircleRating";
import Img from "../../../Componants/lazyLoadImage/Img";
import PosterFallback from "../../../../public/Images/no-poster.png";
import { PlayIcon } from "./Playbtn";
import Cast from "../cast/Cast";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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

const DetailsBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();
  const [open, setOpen] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState("lg");

  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.home);
  const [Kast, setCast] = useState({
    cast: [
      {
        name: "Keanu Reeves",
        profile_path: "/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg",
        character: "John Wick",
      },
      {
        name: "Donnie Yen",
        profile_path: "/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg",
        character: "Caine",
      },
      {
        name: "Bill Skarsgård",
        profile_path: "/eiwLQDK9katNq2E9la3dwc5PRGD.jpg",
        character: "Marquis",
      },
      {
        name: "Ian McShane",
        profile_path: "/qh9RTLbnr128TZLdGuXwUH9mdBM.jpg",
        character: "Winston",
      },
      {
        name: "Laurence Fishburne",
        profile_path: "/iwx7h0AfWMm9K4sMmhru3ShSra.jpg",
        character: "Bowery King",
      },
    ],
  });
  const _genres = data?.genres?.map((g) => g.id);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };
  const CastSection = () => {
    if (mediaType == "movie") {
      return <Cast data={Kast?.cast} />;
    } else {
      console.log("TV Show section");
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="detailsBanner" style={{ paddingBottom: "1px" }}>
      {!loading ? (
        <>
          {!!data ? (
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data.poster_path ? (
                      <Img
                        className="posterImg"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img className="posterImg" src={PosterFallback} />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data.original_name || data.original_title} (${dayjs(
                        data?.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="subtitle">{data.tagline}</div>

                    <Genres data={_genres} />

                    <div className="roww" onClick={handleClickOpen}>
                      <CircleRating rating={data.vote_average.toFixed(1)} />
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <PlayIcon />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>

                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data.overview}</div>
                    </div>

                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date: </span>
                          <span className="text">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Runtime: </span>
                          <span className="text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Director: </span>
                          <span className="text">{data.director}</span>
                        </div>
                      )}
                    </div>
                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Writer: </span>
                          <span className="text">{data.writer}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {CastSection()}
              </ContentWrapper>
            </React.Fragment>
          ) : (
            <h2 className="nodatafound">Sorry, Results not found!</h2>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="roww skeleton"></div>
              <div className="roww skeleton"></div>
              <div className="roww skeleton"></div>
              <div className="roww skeleton"></div>
              <div className="roww skeleton"></div>
              <div className="roww skeleton"></div>
              <div className="roww skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
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
    </div>
  );
};

export default DetailsBanner;
