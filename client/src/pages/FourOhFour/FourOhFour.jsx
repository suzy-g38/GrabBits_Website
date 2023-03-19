import React from 'react'
import classes from './FourOhFour.module.css'
import Homepage from '../Homepage'
export const FourOhFour = () => {
  return (
    <div className={classes.oopss}>
    <div className={classes.errorText}>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
        <span>404 PAGE</span>
        <p className={classes.pa}>
           . The page you were looking for could not be found</p>
        {/* <p className={classes.pb}>
            ... Back to previous page
        </p> */}
        <a href='../Homepage.jsx' className={classes.back}>... Back to previous page</a>
    </div>
</div>
  )
}
