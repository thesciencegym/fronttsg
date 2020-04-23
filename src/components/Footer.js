import {   TwitterOutlined,  InstagramOutlined, FacebookOutlined, YoutubeOutlined, PhoneOutlined, MailOutlined, SendOutlined } from '@ant-design/icons';

import React from 'react'
import { Row, Col } from 'antd'

class Footer extends React.Component {
  render() {
    return <div className='footer'>
        <Row >
            <Col lg={{span:6, offset:3}} md={12}>
                <h2>About Us</h2>
                <img className='logo' src='/assets/images/logo.png' width={300}/>
                <p>we design your sports-specific conditioning workout, and your customized training and nutrition programs.</p>
                <div className='social'>
                    <a href="https://www.facebook.com/thesciencegym"> <FacebookOutlined /> </a>
                    <a href="https://www.instagram.com/thesciencegym/"> <InstagramOutlined /> </a>
                    <a href="https://twitter.com/thesciencegym"> <TwitterOutlined /> </a>
                    <a href="https://www.youtube.com/watch?v=CAyxj5BC4GU"> <YoutubeOutlined /> </a>        
                </div>
            </Col>
            <Col lg={{span:6, offset:6}} md={12} className='contact'>
                <h2>Contact Us</h2>
                <content>   
                    <SendOutlined />            
                    <span>Rivulet Mall – Tower “B”, 1st Floor, Zayed City, Giza, Egypt</span>
                </content>
                <content>
                    <PhoneOutlined />
                    <span>(+20)01201021015 / 16 / 17</span>
                </content>
                <content>
                    <MailOutlined />
                    <span>info@thesciencegym.net</span>
                </content>
                <content>
                    <PhoneOutlined />
                    <span>(+20)237939028 / 237939036</span>
                </content>
            </Col>
        </Row>
        <div className='copyrights'>
            <h4 style={{fontWeight:'normal'}}>Copyright © 2019 The Science Gym . All rights reserved.</h4>
        </div>
    </div>
  }
}
export default Footer