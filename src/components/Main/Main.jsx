import { useState, useEffect } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "../NewCard/NewCard.jsx";
import EditProfile from "../EditProfile/EditProfile.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import editPhoto from "../../images/editPhoto.png";
import photo from "../../images/profile.jpg";
import Card from "./components/Card.jsx";
import ImagePopup from "./components/ImagePopup.jsx";
import Api from "../../utils/api.js";

export default function Main () {
  const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1/",
    headers: {
      authorization: "f79f57e0-6adb-472c-835e-8925770b15f2",
      "Content-Type": "application/json"
    }
  });
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const newCardPopup = {title: "Nuevo lugar", children: <NewCard/>, classPopup: "popup_add"};
  const newEditProfile = {title: "Editar perfil", children: <EditProfile/>, classPopup: "popup_edit"};
  const newEditAvatar = {title: "Cambiar foto de perfil", children: <EditAvatar/>, classPopup: "popup_edit"};

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

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleImageClick (card) {
    const newPopupImage = {title: null, children: <ImagePopup card={card}/>, classPopup: "popup_image"};
    handleOpenPopup(newPopupImage);
  }

  return(
    <main>
      <section className="profile">
        <div className="profile__container">
          <img className="profile__image" src={photo} alt="Foto de perfil."/>
          <img className="profile__image-edit" src={editPhoto} alt="Imagen de edición" onClick={() => handleOpenPopup(newEditAvatar)}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <p className="profile__about-me">Explorador</p>
          <button className="profile__edit-button" onClick={() => handleOpenPopup(newEditProfile)}></button>
        </div>
        <button className="profile__add-image" onClick={() => handleOpenPopup(newCardPopup)}></button>
      </section>
      <section className="elements">
        <ul className="card__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onImageClick={handleImageClick}/>
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title} classPopup={popup.classPopup}>
          {popup.children}
        </Popup>
      )}
    </main>
  )
}