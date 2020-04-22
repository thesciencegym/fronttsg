import React from 'react'

class Header extends React.Component {
  render() {
    return <div className='header'>   
        <div className='overlay vertical-horizontal-center'>
            <div className='logo'>
                <img src='/assets/images/logo.png' width={260}/>
            </div>
            <h1>Our Online Store</h1>
        </div>
    </div>
  }
}
export default Header

