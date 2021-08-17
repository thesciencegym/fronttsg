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
            <Link to='https://thesciencegym.net/'>
              <div >
                  <h2> test </g2>
              </div>
            </Link> 
            <h1>{this.props.title}</h1>
        </div>
    </div>
  }
}
export default Header

