/* eslint-disable react/prop-types */
import './Card.css'
function Card(props) {
  return (
    <div className="card">
      <img src={props.image}  className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-subtitle">{props.subtitle}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
