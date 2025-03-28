import header from "../../images/header.png"

export default function Header() {
  return (
    <>
      <header className="header">
        <img className="header__image" src={header} alt="Logotipo de la página."/>
        <hr className="header__line"/>
      </header>
    </>
  )
}
