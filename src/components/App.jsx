import { useState, useEffect } from "react"
import Header from "./Header/Header.jsx"
import Main from "./Main/Main.jsx"
import Footer from "./Footer/Footer.jsx"
import Api from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isPopup, setIsPopup] = useState(null);
  const [cards, setCards] = useState([]);

  const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1/",
    headers: {
      authorization: "f79f57e0-6adb-472c-835e-8925770b15f2",
      "Content-Type": "application/json"
    }
  });

  useEffect(() => {
    api.getInitialCards("cards/")
      .then((item) => {
        if(Array.isArray(item[0])) {
          setCards(item[0]);
        } else {
          console.warn("Respuesta inesperada: ", item);
        }
      })
      .catch((err) => console.error("Error al obtener tarjetas: ", err));
  }, []);

  useEffect(() => {
    (async () => {
      await api.getUserInfo("users/me")
        .then((data) => setCurrentUser(data))
        .catch((err) => console.error("Error al obtener el usuario", err));
    })();
  }, []);

  const handleAddPlaceSubmit = (newCardData) => {
    api.addCard("cards/", newCardData)
      .then((newCard) => {
        console.log("New: ", newCard)
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((err) => console.error("Error al agregar la tarjeta: ", err));
  }

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setProfile("users/me",data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        });
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.setProfile("users/me/avatar", data)
        .then((newAvatar) => {
          console.log(newAvatar)
          setCurrentUser((prevUser) => ({
            ...prevUser,
            avatar: newAvatar.avatar,
          }));
        })
        .catch((err) => console.error("Error al actualizar el avatar", err))
    })();
  }

  function handleOpenPopup(popup) {
    setIsPopup(popup);
  }

  function handleClosePopup() {
    setIsPopup(null);
  }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    await api.toggleLike("cards/", card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      })
      .catch((err) => console.error(err));
  }

  function handleCardDelete (card) {
    api.deleteCard("cards/", card._id)
      .then(() => {
        setCards((prevCard) => 
          prevCard.filter((cardSelected) => cardSelected._id !== card._id)
        )
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
        <Header/>
          <Main onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} isPopup={isPopup} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onAddPlaceSubmit={handleAddPlaceSubmit} />
        <Footer/>
      </CurrentUserContext.Provider>
    </>
  )
}
