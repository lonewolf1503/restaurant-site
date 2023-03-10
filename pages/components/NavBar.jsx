import styles from "../../styles/NavBar.module.css";
import React from 'react'
import Image from "next/image";

const NavBar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
        <div className={styles.callBtn}>
            <Image src="/img/telephone.png" width="32" height="32" alt="" />      
        </div>
        <div className={styles.texts}>
        <div className={styles.text}>
              ORDER NOW!!
        </div>
        <div className={styles.text}>
              987 789 8978
        </div>
        </div>
    </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    Homepage
                </li>
                <li className={styles.listItem}>
                    Products
                </li>
                <li className={styles.listItem}>
                    Menu
                </li>
                <li className={styles.listItem3}>
                    Tomato
                </li>
                
                <li className={styles.listItem}>
                    Events
                </li>
                <li className={styles.listItem}>
                    Blog
                </li>
                <li className={styles.listItem}>
                    Contact
                </li>
            </ul>
        </div>
        <div className={styles.item}>
            <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30" height="30" />
            <div className={styles.counter}>
                  2
            </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar