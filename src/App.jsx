import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Topbar from "./Topbar";
import Login from "./Forms/Login";
import AppClient from "./AppClient";
import Header from "./ClientSite/Global/Header";
import Footer from "./ClientSite/Global/Footer";

function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
function App() {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  useScrollToTop();
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
            <Route path="/Header" element={<Header />} />
            <Route path="/Footer" element={<Footer />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
