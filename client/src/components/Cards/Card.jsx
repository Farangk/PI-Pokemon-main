import { Link } from 'react-router-dom';
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <Link to={`/detail/${props.id}`}>
        <p className={style.text}>Name:{props.name}</p>
        <img
          src={props.img}
          alt={`Imagen de ${props.name}`}
          className={style.pokeImg}
        />
        <p className={style.text}>Health:{props.hp}</p>
        <p className={style.text}>Types:{props.types}</p>
      </Link>
    </div>
  );
};




export default Card;
