export default function Popup(props) {
  const [title, children] = props;
  return (
    <>
      <div className="popup popup_edit popup_opened">
        <button className="popup__close"></button>
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </>
  )
}