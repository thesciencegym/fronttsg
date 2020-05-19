import React from 'react'
import { Button } from 'antd'

class MyZone extends React.Component {
  render() {
    return(
      <div className='my-zone' >
        <h2>  MyZone® Training Belt:  </h2>
        <div>
          <h3> MyZone® belt monitors heart rate, calories and exercising time which also get calculated as MEPs ( myzone® effort points ).</h3>
          <h3> MyZone is for anyone who wants an accurate, gamified and motivating wearable experience. </h3>
        </div>
        <img src='/assets/images/myZone.jpg' width={'100%'} />
        <h2 style={{color:'#c41230'}}>2500 EGP</h2>
        <a href='https://accept.paymobsolutions.com/p/bVr'>
          <Button className='tsg-btn'>BUY NOW</Button>
        </a>
      </div>
      )
  }
}
export default MyZone

