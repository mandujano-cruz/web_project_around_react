export default function NewCard() {
  return (
    <form 
      className="popup__container"
      name="image"
      id="new-card" 
      noValidate
    >
      <input 
        className="popup__input popup__input-title" 
        type="text" 
        id="title-input" 
        name="title" 
        placeholder="Título" 
        minLength="2" 
        maxLength="30" 
        required
      />
      <span className="popup__input-error title-input-error"></span>
      <input 
        className="popup__input popup__input-link" 
        type="url" 
        id="link-input" 
        name="link" 
        placeholder="Enlace de la imagen" 
        required
      />
      <span className="popup__input-error link-input-error"></span>
      <button className="popup__save-button">Crear</button>
    </form>
  );
}