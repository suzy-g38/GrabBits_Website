
import React from 'react'
import classes from './About.module.css';
import Logo from '../../assets/grabby.png'

export const About = () => {
  return (
    <div className={classes.info}>
    <div className={classes.colOne}>
        <div className={classes.head}>
        Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
        </div>
        <div className={classes.subHead}>
        Euismod magna id purus eget nunc ligula suspendisse dui netus. 
        Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis 
        vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. 
        </div>
        <button className={classes.findJob}>
            <span className={classes.btnText}>Lorem ipsum</span>
        </button>
    </div>
    <div className={classes.colTwo}>
        <img src={Logo}></img>
    </div>
</div>
  )
}
