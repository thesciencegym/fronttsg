
import { CheckOutlined, RetweetOutlined, ClockCircleOutlined, DollarOutlined, OrderedListOutlined } from '@ant-design/icons';
import React from 'react'
import { Tabs, Row, Col, Button, Collapse } from 'antd'

import './home.scss'
import { Link } from 'react-router-dom';
import Header from './Header';
import Products from './homeTabs/Products';
import TSG2GO from './homeTabs/tsg2go';

const { TabPane } = Tabs;

class Home extends React.Component {
  render() {
    return <div>
        <Header title='Our Online Store'/>
        <div className='home'>
        <div className='container'>
        <div className='intro'>
            <h2 className='red-line'>Stay Healthy, Happy and Active!</h2>
            <h3 style={{color:'#666666'}}>Look out for new programs, live virtual classes, live webinars with tips and tricks across our social media platforms.</h3>
        </div>
        
        <div style={{marginBottom: 70}}>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Science@Home" key="1">
                    <div>
                        <h2 className='tab-title red-line'>How Science@Home Works?</h2>
                        <div className='tab1-wrap'>
                            <content>
                                
                                <h3><img src='/assets/images/smartphone.png' width={30}/> Full Access to TSG App features:</h3>
                                <ul>
                                    <li>Track your daily fitness activities.</li>
                                    <li>Personalized workouts that are designed specifically for you based on your fitness level and musculoskeletal condition.</li>
                                    <li>Monthly updated online classes’ schedule.</li>
                                    <li>TSG club community.</li>
                                    <li>Open channel of communication with your coach.</li>
                                </ul>
                            </content>
                            <content>
                                <h3> <img src='/assets/images/report.png' width={30}/> Online Induction Sessions</h3>
                                <p>Online induction sessions for full personal and medical history.</p>
                            </content>
                            <content>
                                <h3> <img src='/assets/images/star.png' width={30}/> Online Fitness Assessment</h3>
                                <p>Online fitness assessment and postural check to determine your fitness level.</p>
                            </content>
                            <content>
                                <h3> <img src='/assets/images/physiotherapy.png' width={30}/> Physiotherapy Screening Session</h3>
                                <p>Online physiotherapy screening session to discuss any health concerns.</p>
                            </content>
                            <content>
                                <h3> <img src='/assets/images/tofu.png' width={30}/> Bi-Weekly Online Nutrition Session</h3>
                                <p>Biweekly Nutrition session, where you receive your individually tailored meal plans designed according to your goals.</p>
                            </content>
                            <content>
                                <h3> <img src='/assets/images/team.png' width={30}/> Full Access to our online classes</h3>
                                <p>Steps of attending the online GX classes.</p>
                            </content>
                        </div>
                        <Row>
                            <Col lg={8} md={24}>
                                <img src='/assets/images/step1.jpg' width={314}/>
                            </Col>
                            <Col lg={8} md={24}>
                                <img src='/assets/images/step2.jpg' width={314}/>
                            </Col>
                            <Col lg={8} md={24}>
                                <img src='/assets/images/step3.jpg' width={314}/>
                            </Col>
                        </Row>

                        <div className='tab1-wrap' style={{marginTop: 20}}>
                        <content>
                                <h3> <OrderedListOutlined />  Steps</h3>
                                <p>1. Make the purchase</p>
                                <p>2. An email will be sent to you to activate your account and download TSG App.</p>
                                <p>3. Our coach will contact you to kick start the program within 48 hours of the purchase.</p>
                                <p>4. Biweekly update to the training program based on the progression.</p>
                                <p>5. Book your nutrition sessions through the App.</p>
                            </content>
                            </div>
                        <div className='plans'>
                        <h2 className='tab-title'>Payment Plans</h2>
                        <Row>
                            <Col lg={12} md={24} xs={24}>
                                <div className='box'>
                                    <p>1 MONTH MEMBERSHIP</p>
                                    <h1>1500 EGP</h1>
                                    <Link to='/order/1'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={12} md={24} xs={24}>
                                <div className='box'>
                                    <p>3 MONTHS MEMBERSHIP</p>
                                    <h1>3300 EGP</h1>
                                    <Link to='/order/2'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </div>
                </TabPane>
                <TabPane tab="Online Classes Packages" key="2">
                    <h2 className='tab-title'>Access to all our online live classes</h2>
                    <Row>
                        <Col md={12}>
                            <div className='tab2-wrap'>
                                <h3>Benefits:</h3>
                                <content>
                                    <h3> <img src='/assets/images/smartphone.png' width={30}/> Access to TSG App</h3>
                                    <p>With unlimited number of classes for a week.</p>
                                </content>
                                <content>
                                    <h3> <img src='/assets/images/team.png' width={30}/> Access to our Club Community</h3>
                                    <p>Join to our club community.</p>
                                </content>
                            </div>
                        </Col>
                        <Col>
                            <img src='/assets/images/fitgirl.png'/>
                        </Col>
                    </Row>
                    <div>
                        <h2 className='tab-title'>Steps of attending the online GX classes</h2>
                        <Row>
                            <Col lg={8} md={24}>
                                <img src='/assets/images/step1.jpg' width={314}/>
                            </Col>
                            <Col lg={8} md={24}>
                                <img src='/assets/images/step2.jpg' width={314}/>
                            </Col>
                            <Col lg={8} md={24}>
                                <img src='/assets/images/step3.jpg' width={314}/>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h2 className='tab-title'>Schedule</h2>
                        <img src='/assets/images/june_schedule.jpg' width={'100%'}/>
                    </div>
                    <div className='plans'>
                        <h2 className='tab-title'>Payment Plans</h2>
                        <Row>
                            <Col lg={12} md={24} xs={24}>
                                <div className='box'>
                                    <p>1 Class</p>
                                    <h1>100 EGP <span>/class</span></h1>
                                    <Link to='/order/6'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={12} md={24} xs={24}>
                                <div className='box'>
                                    <p>1 Week Package</p>
                                    <h1>600 EGP <span>/week</span></h1>
                                    <Link to='/order/3'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={24} xs={24}>
                                <div className='box'>
                                    <p>2 Weeks Package</p>
                                    <h1>1000 EGP <span>/class</span></h1>
                                    <Link to='/order/14'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={12} md={24} xs={24}>
                                <div className='box'>
                                    <p>1 Month Package</p>
                                    <h1>1500 EGP <span>/week</span></h1>
                                    <Link to='/order/15'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <TabPane tab="Online Programs" key="3">
                    <div>
                    <Collapse defaultActiveKey={['1']} accordion >
                        <Collapse.Panel header="Pro Athlete Nutrition Program" key="1">
                            <div className='panel-wrap'>
                                <content>
                                    <h3><CheckOutlined /> Purpose</h3>
                                    <p>To help athletes maintain their target weights that is compatible with the nature of their sports with how to manage the food intake and use proper energy fuel based on the nature of the sports</p>
                                </content>
                                <content>
                                    <h3> <img src='/assets/images/team.png' width={30}/> Target</h3>
                                    <p>Athletes + 14 years</p>
                                </content>
                                <content>
                                    <h3> <ClockCircleOutlined /> Duration</h3>
                                    <p>6 weeks</p>
                                </content>
                                <content>
                                    <h3> <RetweetOutlined /> Frequency of follow up</h3>
                                    <p>Biweekly</p>
                                </content>
                                <content>
                                    <h3> <OrderedListOutlined /> Steps</h3>
                                    <p>1. Make the purchase.</p>
                                    <p>2. An email will be sent to you to activate your account and download TSG App.</p>
                                    <p>3. Our Nutritionist will contact you for the First Nutrition Assessment session within 24 hours.</p>
                                    <p>4. Book your sessions through the App.</p>
                                    <p>5. Daily follow up.</p>
                                </content>
                                <content>
                                    <h3> <DollarOutlined /> Price</h3>
                                    <p>700 EGP</p>
                                </content>
                                <div style={{textAlign:'center'}}>
                                    <Link to='/order/4'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </div>
                        </Collapse.Panel>
                        <Collapse.Panel header="General Nutrition Program" key="2">
                            <div className='panel-wrap'>
                                <content>
                                    <h3> <CheckOutlined /> Purpose</h3>
                                    <p>Our Nutrition program will help you reach your optimum body composition goals.</p>
                                </content>
                                <content>
                                    <h3> <img src='/assets/images/team.png' width={30}/> Target</h3>
                                    <p>Everyone</p>
                                </content>
                                <content>
                                    <h3> <ClockCircleOutlined /> Duration</h3>
                                    <p>4 weeks</p>
                                </content>
                                <content>
                                    <h3> <RetweetOutlined /> Frequency of follow up</h3>
                                    <p>Weekly Plans</p>
                                </content>
                                <content>
                                    <h3> <OrderedListOutlined /> Steps</h3>
                                    <p>1. Make the purchase.</p>
                                    <p>2. An email will be sent to you to activate your account and download TSG App.</p>
                                    <p>3. Our Nutritionist will contact you for the First Nutrition Assessment session within 24 hours.</p>
                                    <p>4. Book your sessions through the App.</p>
                                    <p>5. Daily follow up.</p>
                                </content>
                                <content>
                                    <h3> <DollarOutlined /> Price</h3>
                                    <p>600 EGP</p>
                                </content>
                                <div style={{textAlign:'center'}}> 
                                    <Link to='/order/5'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </div>
                        </Collapse.Panel>
                        <Collapse.Panel header="Online Superheroes Program" key="3">
                            <div className='panel-wrap'>
                                <content>
                                    <h3> <CheckOutlined /> Purpose</h3>
                                    <p>Is to help clients who can’t train on their own to do the workout while being monitored from our certified coaches through live one to one training sessions.</p>
                                </content>
                                <content>
                                    <h3> <img src='/assets/images/team.png' width={30}/> Target</h3>
                                    <p>Age group above 60</p>
                                    <p>Adults with injuries</p>
                                </content>
                                <content>
                                    <h3> <ClockCircleOutlined /> Duration</h3>
                                    <p>12 sessions</p>
                                    <p>24 sessions</p>
                                    <p>48 sessions</p>
                                </content>
                                <content>
                                    <h3> <OrderedListOutlined /> Steps</h3>
                                    <p>1. Make the purchase.</p>
                                    <p>2. An email will be sent to you to activate your account and download TSG App.</p>
                                    <p>3. Our coach will contact you to kick start the program through the online fitness assessment session.</p>
                                    <p>4. The links to the live training with your coach will be sent to you via the App.</p>
                                </content>
                                <content>
                                    <h3> <DollarOutlined /> Price</h3>
                                    <div className='plans prices'>
                                        <Row>
                                            <Col lg={8} md={24} xs={24}>
                                                <div className='box'>
                                                    <p>12 sessions</p>
                                                    <h1>2400 EGP</h1>
                                                    <Link to='/order/8'>
                                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col lg={8} md={24} xs={24}>
                                                <div className='box'>
                                                    <p>24 sessions</p>
                                                    <h1>3750 EGP</h1>
                                                    <Link to='/order/9'>
                                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col lg={8} md={24} xs={24}>
                                                <div className='box'>
                                                    <p>48 sessions</p>
                                                    <h1>6200 EGP</h1>
                                                    <Link to='/order/10'>
                                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </content>
                            </div>
                        </Collapse.Panel>
                        <Collapse.Panel header="Online Rehabilitation Program" key="4">
                            <div className='panel-wrap'>
                                <content>
                                    <h3> <CheckOutlined /> Purpose</h3>
                                    <p>help patients with musculoskeletal problems restore normal movement and functional abilities through an online rehab program that will be designed after assessment of the case.</p>
                                </content>
                                <content>
                                    <h3> <img src='/assets/images/team.png' width={30}/> Target</h3>
                                    <p>patients with following problems:</p>
                                    <ul>
                                        <li>Back problems</li>
                                        <li>Neck problems</li>
                                        <li>Knee problems</li>
                                        <li>Ankle problems</li>
                                    </ul>
                                </content>
                                <content>
                                    <h3> <ClockCircleOutlined /> Duration</h3>
                                    <p>1 month</p>
                                    <p>3 months</p>
                                </content>
                                <content>
                                    <h3> <OrderedListOutlined /> Steps</h3>
                                    <p>1. Make the purchase.</p>
                                    <p>2. An email will be sent to you to activate your account and download TSG App.</p>
                                    <p>3. Our Physiotherapist will contact you to start the program within 24 hours. </p>
                                    <p>4. Weekly online assessment sessions to check progress and update the program.</p>
                                    <p>5. Daily follow up</p>
                                </content>
                                <content>
                                    <h3> <DollarOutlined /> Price</h3>
                                    <div className='plans prices'>
                                        <Row>
                                            <Col lg={12} md={24} xs={24}>
                                                <div className='box'>
                                                    <p>1 month</p>
                                                    <h1>1500 EGP</h1>
                                                    <Link to='/order/11'>
                                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col lg={12} md={24} xs={24}>
                                                <div className='box'>
                                                    <p>3 months</p>
                                                    <h1>3500 EGP</h1>
                                                    <Link to='/order/12'>
                                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </content>
                            </div>
                        </Collapse.Panel>
                    </Collapse>
                    </div>

                </TabPane>
                <TabPane tab="TSG2GO" key="4">
                    <TSG2GO/>
                </TabPane>
                <TabPane tab="Events" key="5">
                    <div style={{margin: '30px 0'}}>
                        <h2 style={{color:'#c41230'}}>COMING SOON!</h2>

                    </div>
                </TabPane>
                <TabPane tab="Products" key="6">
                    <Products/>
                </TabPane>
            </Tabs>
        </div>
    </div>
    </div></div>
  }
}
export default Home