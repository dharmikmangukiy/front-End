import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../Componants/hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import Header from "./Header";
import Footer from "./Footer";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data: credits } = useFetch(
    `/${mediaType}/${id}`
  );
  return (
    <div>
      <Header />
      <DetailsBanner crew={credits?.crew} />
      <Footer />
    </div>
  );
};

export default Details;
