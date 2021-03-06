import React, { useEffect, useState } from "react";
import Axios from "axios";
import styles from "./blog.module.css"
export default function Blog(){
  const url = "https://ghibliapi.herokuapp.com/films";
  const [anime, setAnime] = useState(null);

  useEffect(()=>{
    Axios.get(url)
    .then(response => {
      setAnime(response.data)
    })
  }, [url])
  if(anime){
    return(
      <>
      <div className={styles.BlogBody}>
         <h2>Anime Blog</h2>
         <div className = {styles.BlogBodyContent}>
         {
           anime.map(elem => {
             return(
            <div key = {elem.id}>
            <h3>{elem.title}</h3>
            <img src={elem.image} alt="err" />  
            <a href = {`../components/${elem.id}`} className={styles.Details1} >Details</a>
            </div>
             )
           })
         }
         </div>
           </div>
           </>
    )
  }
}