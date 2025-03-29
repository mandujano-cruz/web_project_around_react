export default function Card (props) {
    const {name, link, isLiked} = props.card;
    const {onImageClick} = props;
    return (
        <li className="card">
            <button className="card__delete"></button>
            <img className="card__image" src={link} alt="" onClick={() => onImageClick(props.card)}/>
            <div className="card__footer">
                <h2 className="card__title">{name}</h2>
                <button className="card__like"></button>
            </div>
        </li>
    );
}