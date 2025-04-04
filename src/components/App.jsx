import { useState, useEffect } from "react"
import Header from "./Header/Header.jsx"
import Main from "./Main/Main.jsx"
import Footer from "./Footer/Footer.jsx"
import Api from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});

  const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1/",
    headers: {
      authorization: "f79f57e0-6adb-472c-835e-8925770b15f2",
      "Content-Type": "application/json"
    }
  });

  useEffect(() => {
    api.getUserInfo("users/me")
      .then((data) => setCurrentUser(data))
      .catch((err) => console.error("Error al obtener el usuario", err));
  }, []);

  return (
    <>
      <Header/>
      <CurrentUserContext.Provider value={currentUser}>
        <Main/>
      </CurrentUserContext.Provider>
      <Footer/>
    </>
  )
}
