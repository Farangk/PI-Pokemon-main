import React, {useEffect}from 'react'
import styles from './Loading.module.css'; 

export const Loading = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight); 
  }, []); 
  return (

    <div className={styles.container}>
      <img src="https://media.tenor.com/images/98f97eb748d73e0bd147b5e0037fe9a9/tenor.gif" alt="PokeLoading" className={styles.image}/>

    </div>
  )
}
