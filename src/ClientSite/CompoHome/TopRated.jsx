import React, { useState } from "react";

import Carousel from "../../Componants/carousel/Carousel";
import ContentWrapper from "../../ClientSite/contentWrapper/ContentWrapper";
import SwitchTabs from "../Global/SwitchTabs";

import useFetch from "../../Componants/hooks/useFetch";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  const sortDataDescending = (data) => {
    if (!data) return [];
    return data.slice().sort((a, b) => b.vote_count - a.vote_count);
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel
        data={sortDataDescending(data?.results)}
        loading={loading}
        endpoint={endpoint}
      />
    </div>
  );
};

export default Popular;
