import React from 'react'
import styles from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faShoppingCart,
  faArchive,
  faBagShopping
} from "@fortawesome/free-solid-svg-icons";
const footer = () => {
  return (
    <div className = {styles.footerContainer}>
      <div className = {styles.upperPart}>
      <div>
        <h1>Logo</h1>
        <h4>Company Name</h4>
      </div>
      <div>
        <h4>Weekly-Themes</h4>
        <h4>Submit A Ticket</h4>
      </div>
      <div>
        <h4>Services</h4>
        <h4>Theme Twick</h4>
        <h4>Contact</h4>
      </div>
      <div>
        <h4>Home</h4>
        <h4>About us</h4>
        <h4>Affiliates</h4>
      </div>
      <div>
        <h4>Showcase</h4>
        <h4>Support</h4>
      </div>
      </div>
      <hr />
      <div className = {styles.downPart}>
        <div className={styles.fonts}>
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
        <h3> &copy; Copyright All Right Reserved </h3>
      </div>
    </div>
  )
}

export default footer
