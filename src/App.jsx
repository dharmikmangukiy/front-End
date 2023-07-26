import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Explore from "./ClientSite/Global/explore/Explore";
import Login from "./Forms/Login";
import AppClient from "./AppClient";

import { fetchDataFromApi } from "../src/Componants/utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "../src/ClientSite/Global/store/homeSlice";
import Details from "./ClientSite/Global/Details";


function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
function App() {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  useScrollToTop();

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  // console.log(url);

  useEffect(() => {
      fetchApiConfig();
      genresCall();
  }, []);

  const fetchApiConfig = () => {
      fetchDataFromApi("/configuration").then((res) => {
          // console.log(res);

          const url = {
              backdrop: res.images.secure_base_url + "original",
              poster: res.images.secure_base_url + "original",
              profile: res.images.secure_base_url + "original",
          };

          dispatch(getApiConfiguration(url));
      });
  };

  const genresCall = async () => {
      let promises = [];
      let endPoints = ["tv", "movie"];
      let allGenres = {};

      endPoints.forEach((url) => {
          promises.push(fetchDataFromApi(`/genre/${url}/list`));
      });

      const data = await Promise.all(promises);
      // console.log(data);
      data.map(({ genres }) => {
          return genres.map((item) => (allGenres[item.id] = item));
      });

      dispatch(getGenres(allGenres));
  };


  if (login == "true") {
    return (
      <Routes>
        <Route path="/" element={<Login setLogin={setLogin} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  } else {
    return (
      <>
        <div className="app">
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/AppClient" element={<AppClient />} />
            <Route path="/Explore/:mediaType" element={<Explore />} />
            <Route path="/:mediaType/:id" element={<Details />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
