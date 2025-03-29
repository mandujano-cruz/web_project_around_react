export default function EditProfile() {
    return (
      <form 
        className="popup__container"
        name="profile"
        id="edit-profile" 
        noValidate
      >
        <input 
          className="popup__input popup__input-name" 
          type="text" 
          id="name-input" 
          name="name" 
          placeholder="Nombre" 
          minLength="2" 
          maxLength="40" 
          required
        />
        <span className="popup__input-error name-input-error"></span>
        <input 
          className="popup__input popup__input-about" 
          type="text" 
          id="about-input" 
          name="about" 
          placeholder="Acerca de mí"  
          minLength="2" 
          maxLength="200" 
          required
        />
        <span className="popup__input-error about-input-error"></span>
        <button className="popup__save-button">Guardar</button>
      </form>
    );
  }