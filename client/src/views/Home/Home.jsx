import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pokeGet } from "../../redux/actions";
import OnSearch from "../../components/onSearch/onSearch";
import styles from "./Home.module.css"; 

const Home = () => {
    //Cuando se monta, que haga el dispatch ==> useEffect();  ,   useDispatch()
const dispatch = useDispatch(); 
    useEffect(()=>{
        dispatch(pokeGet())
    }, [dispatch])

    return (
    
    <div className={styles.Container}>
        <h1 className={styles.title}>Pokemons!</h1>
        <OnSearch/>
        <CardsContainer />
    </div>
        
    )
}



export default Home; 