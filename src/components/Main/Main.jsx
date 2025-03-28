export default function Main () {
  return(
    <>
      <main>
        <section className="profile">
          <div className="profile__container">
            <img className="profile__image" src=" " alt="Foto de perfil."/>
            <img className="profile__image-edit" src="./images/editPhoto.png" alt="Imagen de edición"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <p className="profile__about-me"></p>
            <button className="profile__edit-button"></button>
          </div>
          <button className="profile__add-image"></button>
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
      </main>
    </>
  )
}