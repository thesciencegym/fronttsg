
import { CheckOutlined, RetweetOutlined, ClockCircleOutlined, DollarOutlined } from '@ant-design/icons';
import React from 'react'
import { Tabs, Row, Col, Button, Collapse } from 'antd'

import './home.scss'
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

class Home extends React.Component {
  render() {
    return <div className='home'>
        <div className='intro'>
            <h1>Stay Healthy, Happy and Active!</h1>
            <h3 style={{color:'#666666'}}>Look out for new programs, live virtual classes, live webinars with tips and tricks across our social media platforms.</h3>
        </div>
        
        <div style={{marginBottom: 70}}>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Science@Home" key="1">
                    <div>
                        <h1 className='tab-title'>How Science@Home Works?</h1>
                        <div className='tab1-wrap'>
                            <content>
                                
                                <h2><img src='/assets/images/smartphone.png' width={30}/> Full Access to TSG App features:</h2>
                                <ul>
                                    <li>Track your daily fitness activities passed on personalized workouts that are designed specifically for you based on your fitness level and musculoskeletal condition.</li>
                                    <li>Check online classes schedule.</li>
                                    <li>Join to our club community.</li>
                                    <li>Open channel of communication with your coach.</li>
                                </ul>
                            </content>
                            <content>
                                <h2> <img src='/assets/images/report.png' width={30}/> Online Induction Sessions</h2>
                                <p>Online induction sessions for full personal and medical history.</p>
                            </content>
                            <content>
                                <h2> <img src='/assets/images/star.png' width={30}/> Online Fitness Assessment</h2>
                                <p>Online fitness assessment and postural check to determine your fitness level.</p>
                            </content>
                            <content>
                                <h2> <img src='/assets/images/physiotherapy.png' width={30}/> Physiotherapy Screening Session</h2>
                                <p>Online fitness assessment and postural check to determine your fitness level.</p>
                            </content>
                            <content>
                                <h2> <img src='/assets/images/tofu.png' width={30}/> Bi-Weekly Online Nutrition Session</h2>
                                <p>Bi-Weekly online nutrition session, where you get your personalized nutrition plans that are designed according to your goals.</p>
                            </content>
                            <content>
                                <h2> <img src='/assets/images/team.png' width={30}/> Full Access to our online classes</h2>
                                <p>Join to our club community.</p>
                            </content>
                            
                        </div>
                        <Row>
                            <Col md={8}>
                                <img src='/assets/images/step1.jpg' width={314}/>
                            </Col>
                            <Col md={8}>
                                <img src='/assets/images/step2.jpg' width={314}/>
                            </Col>
                            <Col md={8}>
                                <img src='/assets/images/step3.jpg' width={314}/>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <TabPane tab="Online Classes Packages" key="2">
                    <h1 className='tab-title'>Access to all our online live classes</h1>
                    <Row>
                        <Col md={12}>
                            <div className='tab2-wrap'>
                                <h1>Benefits:</h1>
                                <content>
                                    <h2> <img src='/assets/images/smartphone.png' width={30}/> Access to TSG App</h2>
                                    <p>With unlimited number of classes for a week.</p>
                                </content>
                                <content>
                                    <h2> <img src='/assets/images/team.png' width={30}/> Access to our Club Community</h2>
                                    <p>Join to our club community.</p>
                                </content>
                            </div>
                        </Col>
                        <Col>
                            <img src='/assets/images/fitgirl.png'/>
                        </Col>
                    </Row>
                    <div>
                        <h1 className='tab-title'>Steps of attending the online GX classes</h1>
                        <Row>
                            <Col md={8}>
                                <img src='/assets/images/step1.jpg' width={314}/>
                            </Col>
                            <Col md={8}>
                                <img src='/assets/images/step2.jpg' width={314}/>
                            </Col>
                            <Col md={8}>
                                <img src='/assets/images/step3.jpg' width={314}/>
                            </Col>
                        </Row>
                    </div>
                    <div className='plans'>
                        <h1 className='tab-title'>Payment Plans</h1>
                        <Row>
                            <Col md={12}>
                                <div className='box'>
                                    <p>1 Class</p>
                                    <h1>150 EGP <span>/class</span></h1>
                                    <Link to='/order/6'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className='box'>
                                    <p>1 Week Package</p>
                                    <h1>800 EGP <span>/week</span></h1>
                                    <Link to='/order/3'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <TabPane tab="Online Programs" key="3">
                    <h1 className='tab-title'>Nutrition Programs</h1>
                    <div>
                    <Collapse defaultActiveKey={['1']} accordion >
                        <Collapse.Panel header="Pro Athlete Nutrition Package" key="1">
                            <div className='panel-wrap'>
                                <content>
                                    <h2><CheckOutlined /> Purpose</h2>
                                    <p>To help athletes maintain their target weights that is compatible with the nature of their sports with how to manage the food intake and use proper energy fuel based on the nature of the sports</p>
                                </content>
                                <content>
                                    <h2> <img src='/assets/images/team.png' width={30}/> Target</h2>
                                    <p>Athletes + 16 years</p>
                                </content>
                                <content>
                                    <h2> <ClockCircleOutlined /> Duration</h2>
                                    <p>6 weeks</p>
                                </content>
                                <content>
                                    <h2> <RetweetOutlined /> Frequency of follow up</h2>
                                    <p>Biweekly</p>
                                </content>
                                <content>
                                    <h2> <DollarOutlined /> Price</h2>
                                    <p>700 EGP</p>
                                </content>
                                <div style={{textAlign:'center'}}>
                                    <Link to='/order/4'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </div>
                        </Collapse.Panel>
                        <Collapse.Panel header="Immunity Enhancing Nutrition Package" key="2">
                            <div className='panel-wrap'>
                                <content>
                                    <h2> <CheckOutlined /> Purpose</h2>
                                    <p>To improve their immunity and fight viruses better and improve general health</p>
                                </content>
                                <content>
                                    <h2> <img src='/assets/images/team.png' width={30}/> Target</h2>
                                    <p>Above 40 and Under 18</p>
                                </content>
                                <content>
                                    <h2> <ClockCircleOutlined /> width={30}/> Duration</h2>
                                    <p>4 weeks</p>
                                </content>
                                <content>
                                    <h2> <RetweetOutlined /> Frequency of follow up</h2>
                                    <p>Weekly Plans</p>
                                </content>
                                <content>
                                    <h2> <DollarOutlined /> Price</h2>
                                    <p>600 EGP</p>
                                </content>
                                <div style={{textAlign:'center'}}> 
                                    <Link to='/order/5'>
                                        <Button className='tsg-btn'>BOOK NOW</Button>
                                    </Link>
                                </div>
                            </div>
                        </Collapse.Panel>
                    </Collapse>
                    </div>
                    <h1 className='tab-title'>March To Your Goal</h1>
                    <h2>2nd Ramadan Edition</h2>
                    <h1 style={{color:'#c41230'}}>COMING SOON!</h1>
                </TabPane>
                <TabPane tab="Events" key="4">
                    <div style={{margin: '30px 0'}}>
                        <h1 style={{color:'#c41230'}}>COMING SOON!</h1>

                    </div>
                </TabPane>
            </Tabs>
        </div>
        
    </div>
  }
}
export default Home