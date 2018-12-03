import React from 'react'
import { Link } from 'react-router-dom'

const SubmitLinkButton = () => (
  <div className='addLinkButton'>
    <Link to='/add'>
      <div className='submitLink'>
        <div className='plus'>
          <span>+</span>
        </div>
        <span className='textSubmit'>SUBMIT A LINK</span>
      </div>
    </Link>
    <span className='line'></span>
  </div>
)

export default SubmitLinkButton;