import { useState, useEffect } from "react"
import Header from "./Header/Header.jsx"
import Main from "./Main/Main.jsx"
import Footer from "./Footer/Footer.jsx"
import Api from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isPopup, setIsPopup] = useState(null);

  const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1/",
    headers: {
      authorization: "f79f57e0-6adb-472c-835e-8925770b15f2",
      "Content-Type": "application/json"
    }
  });

  useEffect(() => {
    (async () => {
      await api.getUserInfo("users/me")
        .then((data) => setCurrentUser(data))
        .catch((err) => console.error("Error al obtener el usuario", err));
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setProfile("users/me",data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        });
    })();
  };

  function handleOpenPopup(popup) {
    setIsPopup(popup);
  }

  function handleClosePopup() {
    setIsPopup(null);
  }

  return (
    <>
      <CurrentUserContext.Provider value={{currentUser, handleUpdateUser}}>
        <Header/>
          <Main onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} isPopup={isPopup}/>
        <Footer/>
      </CurrentUserContext.Provider>
    </>
  )
}
