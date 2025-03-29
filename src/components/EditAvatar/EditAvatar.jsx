export default function EditAvatar() {
    return (
      <form 
        className="popup__container"
        name="photoProfile"
        id="edit-avatar" 
        noValidate
      >
        <input 
          className="popup__input popup__input-photo" 
          type="url"
          id="photo-input" 
          name="avatar" 
          placeholder="Enlace de la foto de perfil"
          required
        />
        <span className="popup__input-error photo-input-error"></span>
        <button className="popup__save-button">Guardar</button>
      </form>
    );
  }