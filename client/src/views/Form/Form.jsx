import { useState } from "react";
import axios from "axios"; 
import styles from "./Form.module.css"; 
const Form = ()=> {


    const [form, setForm] = useState({
        name: "",
        hp: "",
        attack: "", 
        defense:"",
        speed: "",
        height: "", 
        weight:"",
        types: [],
        img: ""
    })

   

    const [typeCount, setTypeCount] = useState(0); 

    const changeHandler =(event) => {
        

        const property = event.target.name; 
        const value = event.target.value; 
         
        
        if (property === "types") {
      const selectedTypes = [...form.types];
      const isChecked = event.target.checked;

      if (isChecked) {
        if (typeCount >= 2) {
          return;
        }
        setTypeCount(typeCount + 1);
        selectedTypes.push(value);
      } else {
        setTypeCount(typeCount - 1);
        selectedTypes.splice(selectedTypes.indexOf(value), 1);
      }
      setForm({ ...form, [property]: selectedTypes });
    } else {
      setForm({ ...form, [property]: value });
    }
    }

    const submitHandler =(event) => {
        event.preventDefault(); 
        // console.log(form);
        // alert("POKEMON POKECREATED"); 

    axios.post("http://localhost:3001/pokemons", form )
    .then(res=> alert(res))
    .catch(err=> alert(err)); 
     }
 
//REVISAR CONVERSIÓN MANCO 
    return ( 
    <div className={styles.formStyle}>
        <form className={styles.container } onSubmit={submitHandler}>

<div className={styles.containerText} >
    <label>Name: </label>
    <input type="text" value={form.name} onChange={changeHandler} name="name"/>
</div>

<div className={styles.containerText}>
    <label>Health: </label>
    <input type="text" value={form.hp} onChange={changeHandler} name="hp"/>
</div>

<div className={styles.containerText}>
    <label>Attack: </label>
    <input type="text" value={form.attack} onChange={changeHandler} name="attack"/>
</div>

<div className={styles.containerText}>
    <label>Defense: </label>
    <input type="text" value={form.defense} onChange={changeHandler} name="defense"/>
</div>

<div className={styles.containerText}>
    <label>Speed: </label>
    <input type="text" value={form.speed} onChange={changeHandler} name="speed"/>
</div>


<div className={styles.containerText}>
    <label>Height: </label>
    <input type="text" value={form.height} onChange={changeHandler} name="height"/>
</div>

<div className={styles.containerText}>
    <label>Weight: </label>
    <input type="text" value={form.weight} onChange={changeHandler} name="weight"/>
</div>

<div className={styles.containerText}>
    <label>Image: </label>
    <input type="text" value={form.img} onChange={changeHandler} name="img"/>
</div>

<div>
    
    <p>Select one or two types: </p>
    <label htmlFor="normal">
        <input type="checkbox" name="types" value="normal" onChange={changeHandler}/> Normal
    </label>

    <label htmlFor="fighting">
        <input type="checkbox" name="types" value="fighting" onChange={changeHandler}/> Fighting
    </label>

    
    <label htmlFor="flying">
        <input type="checkbox" name="types" value="flying" onChange={changeHandler}/> Flying
    </label>

    <label htmlFor="rock">
        <input type="checkbox" name="types" value="rock" onChange={changeHandler}/> Rock
    </label>

    <label htmlFor="poison">
        <input type="checkbox" name="types" value="poison" onChange={changeHandler}/> Poison
    </label>

    <label htmlFor="bug">
        <input type="checkbox" name="types" value="bug" onChange={changeHandler}/> Bug
    </label>

    <label htmlFor="ground">
        <input type="checkbox" name="types" value="ground" onChange={changeHandler}/> Ground
    </label>

    <label htmlFor="ghost">
        <input type="checkbox" name="types" value="ghost" onChange={changeHandler}/> Ghost
    </label>

    <label htmlFor="steel">
        <input type="checkbox" name="types" value="steel" onChange={changeHandler}/> Steel
    </label>
    
    <label htmlFor="fire">
        <input type="checkbox" name="types" value="fire" onChange={changeHandler}/> Fire
    </label>

    <label htmlFor="water">
        <input type="checkbox" name="types" value="water" onChange={changeHandler}/> Water
    </label>
    
    <label htmlFor="grass">
        <input type="checkbox" name="types" value="grass" onChange={changeHandler}/> Grass
    </label>

    <label htmlFor="electric">
        <input type="checkbox" name="types" value="electric" onChange={changeHandler}/> Electric
    </label>

    <label htmlFor="ice">
        <input type="checkbox" name="types" value="ice" onChange={changeHandler}/> Ice
    </label>
    
    <label htmlFor="dragon">
        <input type="checkbox" name="types" value="dragon" onChange={changeHandler}/> Dragon
    </label>
    
    <label htmlFor="psychic">
        <input type="checkbox" name="types" value="psychic" onChange={changeHandler}/> Psychic
    </label>
</div>

    <button className={styles.btn} type="submit">Create Pokemon</button>


</form>
    </div>
       
    )
}


export default Form; 