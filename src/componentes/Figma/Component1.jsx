import React from 'react'
import './Component1.css'
import styles from './Component1.module.scss'
import Blue from '../../elements/Blue.svg'
import User from '../../elements/User.svg'
import Card from '../../elements/Card.svg'
import Out from '../../elements/Out.svg'
import Noti from '../../elements/Notification.svg'
import NotiWhite from '../../elements/NotiWhite.svg'
import Inbox from '../../elements/Chat.svg'
import ChatWhite from '../../elements/ChatWhite.svg'
import Adv from '../../elements/Advertisement.svg'
import AdvBlack from '../../elements/AdvertBlack.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Component1() {

const [advButton, setAdvButton] = useState(true);
const [notiButton, setNotiButton] = useState(false);
const [inboxButton, setInboxButton] = useState(false);


  return (
    <div className={`${styles.father}`}>
      <div 
      
      className={styles.box1}>
        <img src={Blue}
            className={`${styles.logo}`}></img>
      </div>

      {/*cominza box 2*/}
      <div className={styles.box2}>
        <NavLink to='/advert' 
                  onClick={ () => {setAdvButton(true); setNotiButton(false); setInboxButton(false) }}

                  className={advButton ? `${styles.item1}` : `${styles.items}`} >
            <img src={advButton ? Adv : AdvBlack}/>
            <h3 className={advButton ? `${styles.title1}` : `${styles.titleBlack}`}>Advertisements</h3>
        </NavLink>
        <NavLink to='/noti'
                  onClick={ () => {setAdvButton(false); setNotiButton(true); setInboxButton(false) }}
                  className={notiButton ? `${styles.item1}` : `${styles.items}`} >
            <img  src={notiButton ? NotiWhite : Noti}
                  className={notiButton ? `${styles.itemWhite}` : `${styles.itemBlack}`}/>
          <h3 className={notiButton ? `${styles.title1}` : `${styles.titleBlack}`}>Notifications</h3>
        </NavLink>

        <NavLink to='/inbox' 
                onClick={() => {setAdvButton(false); setNotiButton (false); setInboxButton(true)}}
                className={inboxButton ? `${styles.item1}` : `${styles.items}`} >
          <img className={styles.itemBlack}
                src={inboxButton ? ChatWhite : Inbox}/>
          <h3 className={inboxButton ? `${styles.title1}` : `${styles.titleBlack}`}>Inbox</h3>
        </NavLink>

        <NavLink to='/profile'
                  
                  className={`${styles.items} ${styles.lastItem}`}>
          <img src={User} 
                className={styles.itemBlack}
                alt="user"></img>
          <h3 className={styles.titleBlack}>Profile</h3>
        </NavLink>

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