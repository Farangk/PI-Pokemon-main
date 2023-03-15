import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../redux/actions";
import styles from "./Details.module.css";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  const pokemon = useSelector((state) => state.pokeById);

  const [showTypes, setShowTypes] = useState(false); 
  useEffect(() => {
    
    setTimeout(() => {
      setShowTypes(true); 
    }, 2000)
  }, []);

  useEffect(()=> {
    window.scrollTo(0, 0);
  },[])

  return (
    <div className={styles.back}>
      <h1 className={styles.title}>PokeDetails! </h1>
      <div className={styles.container}>
        <h2 className={styles.text}>{pokemon.name}</h2>
        <img className={styles.pokemon} src={pokemon.img} alt={pokemon.name} />
        <div className={styles.content}>
          <h2 className={styles.text} >Health: {pokemon.hp}</h2>
          <h2 className={styles.text} >Attack: {pokemon.attack}</h2>
          <h2 className={styles.text} >Defense: {pokemon.defense}</h2>
          <h2 className={styles.text} >Speed: {pokemon.speed}</h2>
          <h2 className={styles.text} >Weight: {pokemon.weight}</h2>
          <h2 className={styles.text} >height: {pokemon.height}</h2>
          {showTypes && <h2 className={styles.text}>Types: {pokemon.types.map((type) => type.name).join(", ")}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Detail;
