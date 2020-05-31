import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button} from 'antd'

import { PRODUCTS } from '../../PRODUCTS';

const myProducts = {0: [16,17,18,19,20], 1: [21,22,23,24,25], 2: [26,27,28,29,30]}

class TSG2GO extends React.Component {

  state = {selectedIndex: '0'}

  _render_prices() {
    let p1 = PRODUCTS.find(p => p.id == myProducts[this.state.selectedIndex][0])
    let p2 = PRODUCTS.find(p => p.id == myProducts[this.state.selectedIndex][1])
    let p3 = PRODUCTS.find(p => p.id == myProducts[this.state.selectedIndex][2])
    let p4 = PRODUCTS.find(p => p.id == myProducts[this.state.selectedIndex][3])
    let p5 = PRODUCTS.find(p => p.id == myProducts[this.state.selectedIndex][4])

    return (
      <div className='plans tsg2go'>
      <h2 className='tab-title'>Payment Plans</h2>
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
    let selectedStyle = {border: 'medium solid #c41230'};
    return (
      <div className='plans select-card'>
        <h2 className='tab-title'>Please selece one of the following</h2>

        <Row>
          <Col lg={8} md={24} xs={24}>
            <div className='box' onClick={() => this.setState({selectedIndex: 0})} style={this.state.selectedIndex == 0 ? selectedStyle : {} }>
              <h1>Individual</h1>
            </div>
          </Col>
          <Col lg={8} md={24} xs={24}>
            <div className='box' onClick={() => this.setState({selectedIndex: 1})} style={this.state.selectedIndex == 1 ? selectedStyle : {} }>
              <h1>Couple</h1>
            </div>
          </Col>
          <Col lg={8} md={24} xs={24}>
            <div className='box' onClick={() => this.setState({selectedIndex: 2})} style={this.state.selectedIndex == 2 ? selectedStyle : {} }>
              <h1>Family</h1>
            </div>
          </Col>
        </Row>
      </div>

    )
  }
  render() {
    return (
      <div>
        <h2 className='tab-title'>One on one coaching with TSG coaches at your place.</h2>
        <Row>
          <Col md={12}>
            <div className='tab2-wrap'>
              <h3>TSG team is coming to you with all what you need to reach your training goals.</h3>
              <content>
                <h3> <img src='/assets/images/star.png' width={30} /> Fitness assessment</h3>
                <p></p>
              </content>
              <content>
                <h3> <img src='/assets/images/team.png' width={30} /> One on one training sessions</h3>
                <p>.......</p>
              </content>
              <content>
                <h3> <img src='/assets/images/tofu.png' width={30} /> Individually tailored Nutrition plans</h3>
                <p>.......</p>
              </content>
              <content>
                <h3> <img src='/assets/images/physiotherapy.png' width={30} /> Physiotherapy screening session</h3>
                <p>.......</p>
              </content>
            </div>
          </Col>
          <Col>
            <img src='/assets/images/fitgirl.png' />
          </Col>
        </Row>
        {this._render_buttons()}
        {this._render_prices()}
      </div>
    )
  }
}
export default TSG2GO

