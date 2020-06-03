import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd'

import { PRODUCTS } from '../../PRODUCTS';

const myProducts = { 0: [16, 17, 18, 19, 20], 1: [21, 22, 23, 24, 25], 2: [26, 27, 28, 29, 30] };
const titles = ['Individual', 'Couple', 'Family'];

class TSG2GO extends React.Component {

  state = { selectedIndex: '0' }

  _render_prices() {
    let p1 = PRODUCTS.find(p => p.id == myProducts[this.state.selectedIndex][0])
    let p2 = PRODUCTS.find(p => p.id == myProducts[this.state.selectedIndex][1])
    let p3 = PRODUCTS.find(p => p.id == myProducts[this.state.selectedIndex][2])
    let p4 = PRODUCTS.find(p => p.id == myProducts[this.state.selectedIndex][3])
    let p5 = PRODUCTS.find(p => p.id == myProducts[this.state.selectedIndex][4])

    return (
      <div className='plans tsg2go'>
        <h2 className='tab-title'>Payment Plans for {titles[this.state.selectedIndex]}</h2>
        <Row>
          <Col lg={12} md={24} xs={24}>
            <div className='box'>
              <p>8 SESSIONS</p>
              <h1>{p1.price}</h1>
              <Link to={'/order/' + p1.id}>
                <Button className='tsg-btn'>BOOK NOW</Button>
              </Link>
            </div>
          </Col>
          <Col lg={12} md={24} xs={24}>
            <div className='box'>
              <p>12 SESSIONS</p>
              <h1>{p2.price}</h1>
              <Link to={'/order/' + p2.id}>
                <Button className='tsg-btn'>BOOK NOW</Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={8} md={24} xs={24}>
            <div className='box'>
              <p>16 SESSIONS</p>
              <h1>{p3.price}</h1>
              <Link to={'/order/' + p3.id}>
                <Button className='tsg-btn'>BOOK NOW</Button>
              </Link>
            </div>
          </Col>
          <Col lg={8} md={24} xs={24}>
            <div className='box'>
              <p>24 SESSIONS</p>
              <h1>{p4.price}</h1>
              <Link to={'/order/' + p4.id}>
                <Button className='tsg-btn'>BOOK NOW</Button>
              </Link>
            </div>
          </Col>
          <Col lg={8} md={24} xs={24}>
            <div className='box'>
              <p>48 SESSIONS</p>
              <h1>{p5.price}</h1>
              <Link to={'/order/' + p5.id}>
                <Button className='tsg-btn'>BOOK NOW</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    )
  }

  _render_buttons() {
    // let selectedStyle = { border: 'medium solid #c41230' };
    let selectedStyle = { backgroundColor: '#c41230' };
    let selectedStyleText = { color: 'white' };


    return (
      <div className='plans select-card'>
        <h2 className='tab-title'>Please selece one of the following</h2>

        <Row>
          <Col lg={8} md={24} xs={24}>
            <div className='box' onClick={() => this.setState({ selectedIndex: 0 })} style={this.state.selectedIndex == 0 ? selectedStyle : {}}>
              <h1 style={this.state.selectedIndex == 0 ? selectedStyleText : {}}>Individual</h1>
            </div>
          </Col>
          <Col lg={8} md={24} xs={24}>
            <div className='box box-selected' onClick={() => this.setState({ selectedIndex: 1 })} style={this.state.selectedIndex == 1 ? selectedStyle : {}}>
              <h1 style={this.state.selectedIndex == 1 ? selectedStyleText : {}}>Couple</h1>
            </div>
          </Col>
          <Col lg={8} md={24} xs={24}>
            <div className='box' onClick={() => this.setState({ selectedIndex: 2 })} style={this.state.selectedIndex == 2 ? selectedStyle : {}}>
              <h1 style={this.state.selectedIndex == 2 ? selectedStyleText : {}}>Family</h1>
            </div>
          </Col>
        </Row>
      </div>

    )
  }

  _render_coach(name) {
    return (
      <Col lg={8} md={24} xs={24}>
        <div className='box'>
          <h3>{name}</h3>
        </div>
      </Col>
    )
  }

  _render_coaches() {
    return (
      <div className='plans coach-card'>
        <h2 className='tab-title'>Our Coaches</h2>

        <Row>
          {this._render_coach('Kamal Ashraf')}
          {this._render_coach('Abdelrahman Refaey')}
          {this._render_coach('Ahmed ElWassif')}
        </Row>
        <Row>
          {this._render_coach('Mohamed Samir')}
          {this._render_coach('Mohamed Osama')}
          {this._render_coach('Adham Ezzat')}
        </Row>
        <Row>
          {this._render_coach('Rami Khamees')}
          {this._render_coach('Kamal ElAzab')}
          {this._render_coach('Mennatallah Mohamed')}
        </Row>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2 className='tab-title'>One on one coaching with TSG coaches at your place.</h2>

        <div className='tab4-wrap'>
          <h4>We’re pleased to announce that TSG is launching its latest fitness product, namely "TSG2GO"</h4>
          <h4>What makes our product different and special is that you can enjoy your private coaching sessions from the comfort of your own HOME </h4>
          <h4>We will provide you with your very own Private Coach, all the necessary equipment and tools that you will need in your training program.</h4>
          <div style={{ marginTop: 40 }}>

            <Row>
              <Col md={12}>
                <h2>Benefits:</h2>
                <content>
                  <h3> <img src='/assets/images/star.png' width={30} /> Fitness assessment</h3>
                </content>
                <content>
                  <h3> <img src='/assets/images/team.png' width={30} /> One on One training sessions</h3>
                </content>
                <content>
                  <h3> <img src='/assets/images/tofu.png' width={30} /> Individually tailored Nutrition plans</h3>
                </content>
                <content>
                  <h3> <img src='/assets/images/physiotherapy.png' width={30} /> Physiotherapy screening session</h3>
                </content>
                <h2 style={{ marginTop: 40 }}>Steps:</h2>
                <content>
                  <h5>1. Make the purchase</h5>
                  <h5>2. An email will be sent to you to activate your account and download the App.</h5>
                  <h5>3. Our coach will contact you to confirm the session date and time.</h5>
                </content>

              </Col>
              <Col md={12}>
                <img src='/assets/images/training_at_your_door_step.jpg' width={'100%'} />
              </Col>
            </Row>
          </div>
        </div>

        {this._render_coaches()}

        {this._render_buttons()}
        {this._render_prices()}
      </div>
    )
  }
}
export default TSG2GO

