import React from 'react'
import styles from './Component1.module.scss'
import Blue from '../../elements/Blue.svg'
import User from '../../elements/User.svg'
import Card from '../../elements/Card.svg'
import Out from '../../elements/Out.svg'
import Noti from '../../elements/Notification.svg'
import Inbox from '../../elements/Chat.svg'
import Adv from '../../elements/Advertisement.svg'

export default function Component1() {
  return (
    <div className={`${styles.father}`}>
      <div 
      
      className={styles.box1}>
        <img src={Blue}
            className={`${styles.logo}`}></img>
      </div>

      {/*cominza box 2*/}
      <div className={styles.box2}>
        <button className={styles.item1}>
            <img src={Adv}/>
            <h3 className={styles.title1}>Advertisements</h3>
        </button>
        <button className={styles.items}>
            <img  src={Noti}
                  className={styles.itemBlack}/>
          <h3 className={styles.titleBlack}>Notifications</h3>
        </button>

        <button className={styles.items}>
          <img className={styles.itemBlack}
                src={Inbox}/>
          <h3 className={styles.titleBlack}>Inbox</h3>
        </button>

        <button className={`${styles.items} ${styles.lastItem}`}>
          <img src={User} 
                className={styles.itemBlack}
                alt="user"></img>
          <h3 className={styles.titleBlack}>Profile</h3>
        </button>

        {/*aca termina box 2*/}

        <img src={Card} className={styles.line}></img>
        

        <button className={`${styles.items} ${styles.lastItem}`}>
          <img src={Out} className={styles.itemBlack}/>

          <h3 className={styles.titleBlack}>Log Out</h3>
        </button>
      </div>
    </div>
  )
}
