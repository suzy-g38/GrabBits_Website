import React from 'react'
import classes from './Contact.module.css'
import { FaLocationArrow } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Contact = () => {
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus", focusFunc);
  }

  function blurFunc() {
    let parent = this.parentNode;
    if(this.value==""){
    parent.classList.remove("focus");
    }
  }

  inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  })
  return (
    <>
      <div className={classes.container}>
      {/* <span className={classes.big_circle}></span> */}
      <div className={classes.form}>
        <div className={classes.contact_info}>
          <h3 className={classes.title}>Lets Get in Touch</h3>
          <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae enim distinctio nostrum possimus in dolor beatae, illo iusto! Incidunt cum aliquid exercitationem, maxime optio vero pariatur suscipit explicabo nesciunt. Debitis.</p>
          <div className={classes.info}>
            <div className={classes.information}>
              <FaLocationArrow className={classes.icon}/>
              <p>lorem</p>
            </div>
            <div className={classes.information}>
              <FaEnvelope className={classes.icon}/>
              <p>lorem</p>
            </div><div className={classes.information}>
              <FaMobileAlt className={classes.icon}/>
              <p>lorem</p>
            </div>
          </div>
         
          <div className={classes.social_media}>
            <p>Connect with us : </p>
            <div className={classes.social_icons}>
              <a href="https://www.instagram.com/grabbits_/" target="blank">
                <FaInstagram/>
              </a>
              <a href="https://www.linkedin.com/company/grabbits/" target="blank">
                <FaLinkedinIn/>
              </a>
              <a href="https://twitter.com/grabbits_" target="blank">
                <FaTwitter/>
              </a>
            </div>
          </div>
        </div>
        
        <div className={classes.contact_form}>
          <span className={`${classes.circle} ${classes.one}`}></span>
          <span className={`${classes.circle} ${classes.two}`}></span>

          <form>
            <h3 className={classes.title}>Contact Us</h3>
            <div className={`${classes.input_container} ${classes.focus}`}>
              <input type="text" name='name' className={classes.input} />
              <label htmlFor="">Name</label>
              <span>Name</span>
            </div>
            <div className={`${classes.input_container}`}>
              <input type="email" name='email' className={classes.input} />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className={`${classes.input_container}`}>
              <input type="tel" name='phone' className={classes.input} />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className={`${classes.input_container} ${classes.textarea}`}>
              <textarea name='message' className={classes.input} />
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" className={classes.btn}/>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact