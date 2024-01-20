import { createContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Componets/Home/Header/Navbar";
import Header from "./Componets/Home/Header/Header";
import AdminRegister from "./Componets/Admin/AdminRegister";
import AdminSign from "./Componets/Admin/AdminSign";
import Admin from "./Componets/Admin/Admin";
import InfoTravle from "./Componets/Home/InfoTravle/InfoTravle";
import ScrollTop from "./Componets/ScrollTop/ScrollTop";
import Footer from "./Componets/Home/Header/Footer";
import Events from "./Componets/Events/Events";
import Abouts from "./Componets/Abouts/Abouts";
import Contacts from "./Componets/Contacts/Contacts";
import TravleInfo from "./Componets/Admin/InfoTravle/TravleInfo";
import LiveChat from "./Componets/LiveChat/LiveChat";
import LeafletMap from "./Componets/LeafletMap/LeafletMap";
import Comment from "./Componets/Blog/Comment";

axios.defaults.withCredentials = true;

export const TravleContext = createContext();

function App() {
  const [getTravleCard, setgetTravleCard] = useState([]);

  const getTravle = async () => {
    try {
      const TravleAxios = await axios.get("http://localhost:5555/");
      setgetTravleCard(TravleAxios.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTravle = async (id, name) => {
    try {
      const axiosdDelet = await axios.delete(
        "http://localhost:5555/Delete-Travle/" + id
      );
      if (axiosdDelet.status === 200) {
        alert(`${name}:  ----The tour with this name has been deleted...!!`);
        getTravle();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTravle();
  }, []);

  return (
    <>
      <TravleContext.Provider
        value={{
          getTravle,
          deleteTravle,
          getTravleCard,
        }}
      >
        <BrowserRouter>
          <ScrollTop />
          <Navbar />
          <LiveChat />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Abouts" element={<Abouts />} />
            <Route path="/Contact" element={<Contacts />} />
            <Route path="/Admin-Register" element={<AdminRegister />} />
            <Route path="/Admin-Sign" element={<AdminSign />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Info-Travle/:id" element={<InfoTravle />} />
            <Route path="/Admin-Travle-Info/:id" element={<TravleInfo />} />
            <Route path="/Map" element={<LeafletMap />} />
            <Route path="/Comment" element={<Comment />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TravleContext.Provider>
    </>
  );
}

export default App;
