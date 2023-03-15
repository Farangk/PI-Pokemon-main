import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <img className={style.img1} src="https://gifimage.net/wp-content/uploads/2018/04/pokeball-opening-gif-8.gif" alt="pokelogo" />
      <div className={style.linkDiv}>
        <Link to="/home" className={style.link}>HOME</Link>
      </div>

      <div className={style.linkDiv}>
        <Link to="/create" className={style.link}>CREATE</Link>
      </div>
      <img className={style.img2} src="https://gifimage.net/wp-content/uploads/2018/04/pokeball-opening-gif-8.gif" alt="pokelogo" />

    </div>
  );
};

export default NavBar;
