import React from 'react'
import classes from './Login.module.css'
import { AiOutlineUser } from "react-icons/ai";
import { Button} from '../common/index';


const Login = () => {
    // const signUp = document.querySelector(".signupButton");
    // console.log(signUp);
    // signUp.addEventListener('click',()=>{
    //     const signForm = document.querySelector('form')
    //     signForm.classList.add("signupForm")
    // })
  return (
    <>
        <div className={classes.mainSection}>
            <div className={classes.innerSection}>
                <div className={classes.buttonSwitch}>
                    <div className={`${classes.signupButton} ${classes.active}`}>Sign Up</div>
                    {/* <div className={classes.signupButton}>Sign Up</div> */}
                    
                    <div className={classes.loginButton}>Log In</div>
                    {/* <div className={`${classes.loginButton} ${classes.active}`}>Log In</div> */}
                </div>
                <form className={classes.signupForm}>
                    <label className={classes.inputLabel}>Name <span className={classes.mandatory}>*</span></label>
                    <div className={classes.inputField}><AiOutlineUser className={classes.container} size={42} color="#767676"/><input type="text" className={classes.inputAns} placeholder='Your Name or UserName'/></div>
                    <label className={classes.inputLabel}>Email <span className={classes.mandatory}>*</span></label>
                    <div className={classes.inputField}><AiOutlineUser className={classes.container} size={42} color="#767676"/><input type="text" className={classes.inputAns} placeholder='Your Name or UserName'/></div>
                    <label className={classes.inputLabel}>Password <span className={classes.mandatory}>*</span></label>
                    <div className={classes.inputField}><AiOutlineUser className={classes.container} size={42} color="#767676"/><input type="text" className={classes.inputAns} placeholder='Your Name or UserName'/></div>
                    <label className={classes.checkBox}>
                        <input type="checkbox" name="newsletter" value="yes" className={classes.checkBoxInput}/>
                        I agree to Grabbits&apos;s Terms of Service and Privacy Policy.
                    </label>
                    <div className={classes.buttonContainer}>
                        <Button label="Submit" padding="10px 32px" fontSize="24px" bgColor="#9f62ff" className={classes.submitButton}/>
                    </div>  
                </form>
                {/* <form className={classes.loginForm}>
                    <div className={classes.inputField}><AiOutlineUser className={classes.container} size={42} color="#767676"/><input type="text" className={classes.inputAns} placeholder='Your Name or UserName'/></div>
                    <label className={classes.inputLabel}>Password <span className={classes.mandatory}>*</span></label>
                    <div className={classes.inputField}><AiOutlineUser className={classes.container} size={42} color="#767676"/><input type="text" className={classes.inputAns} placeholder='Your Name or UserName'/></div>
                    <div className={classes.buttonContainer}>
                        <Button label="Submit" padding="10px 32px" fontSize="24px" bgColor="#9f62ff" className={classes.submitButton}/>
                    </div>
                </form> */}
                
            </div>
        </div>
    </>
  )
}

export default Login
