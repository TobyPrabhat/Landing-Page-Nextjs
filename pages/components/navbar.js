import React from "react";
import Logo from "./Logo.png"
import Image from 'next/image'
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faShoppingCart,
  faArchive,
  faBagShopping
} from "@fortawesome/free-solid-svg-icons";
export default function navbar(){
  return(
    <div className={styles.NavbarContent}> 
      <nav className={styles.Navbar}>
        <div className={styles.logo}>
        <Image src={Logo} alt="alt"/>
        </div>
      <div className={styles.SocialInfo}>
      <a href="#"><FontAwesomeIcon icon={faIndianRupeeSign} className = {styles.icon1}/></a>
      <a href="#">
      <FontAwesomeIcon icon = {faShoppingCart} className = {styles.icon2}/>
      </a>
      <a href="#">
      <FontAwesomeIcon icon={faArchive} className = {styles.icon3} />
      </a>
      <a href="#">
      <FontAwesomeIcon icon = {faBagShopping} className = {styles.icon4} />
      </a>
      </div>
      <a href="./Home"><h2>Home</h2><span></span></a>
      <a href="./about"><h2>About</h2><span></span></a>
      </nav>
    </div>
  )
}