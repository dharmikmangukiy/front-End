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
import axios from "axios";

const Home = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
    console.log(bg);
  }, [data]);

  const searchQueryHandler = () => {
    if (query.length != 0) {
      axios.post(`http://localhost:3001/search/${query}`).then((res) => {
        if (res.data.message == "Movie not found.") {
          toast.error(res.data.message);
        } else {
          navigate(`/movie/${res.data.id}`);
        }
      });
    } else {
      toast.warn("Enter Movie Name");
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
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={searchQueryHandler}>Search</button>
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
