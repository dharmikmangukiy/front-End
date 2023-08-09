import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../Componants/hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Img from "../../Componants/lazyLoadImage/Img";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Trending from "./Trending";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Select from "react-select";

const Home = () => {
  const [background, setBackground] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/discover/movie");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.[Math.floor(Math.random() * 40)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  const onChange = (selectedItems, action) => {
    if (action.name === "Search") {
      navigate(`/movie/${selectedItems.id}`);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="heroBanner">
        {!loading && (
          <div className="backdrop-img">
            <Img src={background} />
          </div>
        )}

        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <Select
                name="Search"
                options={data}
                getOptionLabel={(option) => option.original_title}
                getOptionValue={(option) => option.id}
                onChange={onChange}
                placeholder="Search for a movie or tv show...."
                className="react-select-Welcome input"
                classNamePrefix="react-select"
              />
              <button onClick={() => toast.warn("Enter Movie Name")}>
                Search
              </button>
            </div>
          </div>
        </ContentWrapper>
      </div>
      <Trending />
      <Popular />
      <TopRated />
    </>
  );
};

export default Home;
