import { withRouter } from "react-router-dom";
import styles from "./Landing.module.css";
import "animate.css";

const Landing = (props) => {
  const handleClick = () => {
    props.history.push("/home");
  };

  return (
    <div className={styles.background}>
     
        <h1 className={styles.h1}> Welcome to the PokeApp! </h1>
     
      <div className={styles.btnContainer}>
        <button className={styles.btn} type="submit" onClick={handleClick}>
          <span className={styles.btnText}>PokeCLick Me!</span>
        </button>
        <img
          className={styles.imgGif}
          src="http://clipart-library.com/image_gallery/n1582570.gif "
          alt=""
        />
      </div>
    </div>
  );
};

export default withRouter(Landing);
