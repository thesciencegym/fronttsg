import React from 'react'
import { Row, Col } from 'antd'

class Footer extends React.Component {
  render() {
    return <div className='footer'>
        <Row >
            <Col lg={{span:6, offset:5}} md={12}>
                <h2>About Us</h2>
                <img src='/assets/images/logo.png' width={300}/>
                <p>we design your sports-specific conditioning workout, and your customized training and nutrition programs.</p>
                <div className='social'>
                </div>
            </Col>
            <Col lg={{span:6, offset:3}} md={12}>
                <h2>Contact Us</h2>
                <div>
                    <p>Rivulet Mall – Tower “B”, 1st Floor, Zayed City, Giza, Egypt</p>
                </div>
                <div>
                    <p>(+20)01201021015 / 16 / 17</p>
                </div>
                <div>
                    <p>info@thesciencegym.net</p>
                </div>
                <div>
                    <p>(+20)237939028 / 237939036</p>
                </div>
            </Col>
        </Row>
        <div className='copyrights'>
            <h3>Copyright © 2019 The Science Gym . All rights reserved.</h3>
        </div>
    </div>
  }
}
export default Footer