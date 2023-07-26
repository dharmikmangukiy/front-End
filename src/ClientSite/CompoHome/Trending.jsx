import React, { useState } from "react";

import Carousel from "../../Componants/carousel/Carousel";
import ContentWrapper from "../../ClientSite/contentWrapper/ContentWrapper";
import SwitchTabs from "../Global/SwitchTabs";

import useFetch from "../../Componants/hooks/useFetch";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Daily" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Daily", "Weekly"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={"movie"}/>
        </div>
    );
};

export default Trending;
