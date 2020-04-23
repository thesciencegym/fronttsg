import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return <div className='header'>   
        <div className='overlay vertical-horizontal-center'>
            <Link to='/'>
              <div className='logo'>
                  <img src='/assets/images/logo.png' width={260}/>
              </div>
            </Link>      
            <h1>Our Online Store</h1>
        </div>
    </div>
  }
}
export default Header

