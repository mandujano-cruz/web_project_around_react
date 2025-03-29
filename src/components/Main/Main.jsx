import { useState } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "../NewCard/NewCard.jsx";
import EditProfile from "../EditProfile/EditProfile.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import editPhoto from "../../images/editPhoto.png";
import photo from "../../images/profile.jpg";

export default function Main () {
  const [popup, setPopup] = useState(null);
  const newCardPopup = {title: "Nuevo lugar", children: <NewCard/>, classPopup: "popup_add"};
  const newEditProfile = {title: "Editar perfil", children: <EditProfile/>, classPopup: "popup_edit"};
  const newEditAvatar = {title: "Cambiar foto de perfil", children: <EditAvatar/>, classPopup: "popup_edit"};

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
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
        <template id="card-template">
          <div className="card">
            <button className="card__delete"></button>
            <img className="card__image" src="#" alt=""/>
            <div className="card__footer">
              <h2 className="card__title"></h2>
              <button className="card__like"></button>
            </div>
          </div>
        </template>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title} classPopup={popup.classPopup}>
          {popup.children}
        </Popup>
      )}
    </main>
  )
}