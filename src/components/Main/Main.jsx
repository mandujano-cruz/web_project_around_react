import { useState } from "react";
import Popup from "./Popup/Popup.jsx";
import NewCard from "../NewCard/NewCard.jsx";
import EditProfile from "../EditProfile/EditProfile.jsx";
import EditAvatar from "../EditAvatar/EditAvatar.jsx";
import editPhoto from "../../images/editPhoto.png";
import photo from "../../images/profile.jpg";
import Card from "./components/Card.jsx";
import ImagePopup from "./components/ImagePopup.jsx";

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

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