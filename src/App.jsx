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
import {
  getApiConfiguration,
  getGenres,
} from "../src/ClientSite/Global/store/homeSlice";
import Details from "./ClientSite/Global/Details";
import Trending_Today from "./ClientSite/Global/Trending today/Trending_Today";

function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
function App() {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  const [Author, setAuthor] = useState(localStorage.getItem("Author"));
  useScrollToTop();

  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res[0].images.secure_base_url + "original",
        poster: res[0].images.secure_base_url + "original",
        profile: res[0].images.secure_base_url + "original",
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
    dispatch(getGenres(data[1]));
  };

  console.log(Author);
  if (login == "true") {
    return (
      <Routes>
        <Route path="/" element={<Login setLogin={setLogin} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  } else if (Author == "admin") {
    return (
      <div className="app">
        <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/AppClient" element={<AppClient />} />
          <Route path="/Explore/:mediaType" element={<Explore />} />
          <Route path="/:mediaType/:id" element={<Details />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<AppClient />} />
          <Route path="/AppClient" element={<AppClient />} />
          <Route path="/Trending_Today" element={<Trending_Today />} />
          <Route path="/Explore/:mediaType" element={<Explore />} />
          <Route path="/:mediaType/:id" element={<Details />} />
        </Routes>
      </div>
    );
  }
}

export default App;
