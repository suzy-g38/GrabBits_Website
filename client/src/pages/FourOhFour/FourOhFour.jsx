import React from 'react'
import './FourOhFour.css'
import Homepage from '../Homepage'
export const FourOhFour = () => {
  return (
    <div id='oopss'>
    <div id='error-text'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
        <span>404 PAGE</span>
        <p className='pa'>
           . The page you were looking for could not be found</p>
        <p className='pb'>
            ... Back to previous page
        </p>
        <a href='{<Homepage/>}' className='back'>... Back to previous page</a>
    </div>
</div>
  )
}
