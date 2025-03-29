export default function Popup(props) {
  const {onClose, title, children, classPopup} = props;
  return (
    <div className={`popup ${classPopup}`}>
      <button className="popup__close" onClick={onClose}></button>
      <h2 className="popup__title">{title}</h2>
      {children}
    </div>
  )
}