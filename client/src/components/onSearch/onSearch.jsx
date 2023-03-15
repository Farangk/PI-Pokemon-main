import { getName } from "../../redux/actions";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import styles from './onSearch.module.css'; 
const OnSearch = () => {
  const [searchValue, setSearchValue] = useState('');
const dispatch = useDispatch(); 
  const handleNameFilter =() => {
    dispatch(getName(searchValue));
  }
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div>
        <label> Buscar: </label>
        <input type="text" value={searchValue} onChange={handleInputChange}/>
        <button className={styles.btn} type="submit" onClick={handleNameFilter}>Poke Search</button>
      </div>
     
    </>
  );
};

export default OnSearch;
