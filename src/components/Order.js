import React from 'react'
import './order.scss';
import { Modal, Form, Input, Button, Radio, Row, Col } from 'antd';
import _map from 'lodash/map'
import validator from 'validator'
import Header from './Header';
import { PRODUCTS } from '../PRODUCTS';

// const ORDER_URL = 'https://science-gym-backend.herokuapp.com/order'; // Test backend
const ORDER_URL = 'https://science-gym-backend-prod.herokuapp.com/order'; // Production backend


class Order extends React.Component {
    productId = this.props.match.params.id
    state={
        showAgreeModal: false,
        agree: false,
        disable: true,
        loading: false,
        emailHelp:'',
        order : {first_name: {value:'', validation: undefined},
                last_name: {value:'', validation: undefined},
                email: {value:'', validation: undefined},
                phone_number: {value:'', validation: undefined},
                city: {value:'', validation: undefined}, 
                country: {value:'', validation: undefined}, 
                gender: {value:'', validation: undefined}
        }
        
    }

    handleSubmit = (e) => {
        
        e.preventDefault()
        this.setState({loading: true})
        let order ={ product_code: this.productId}
        _map(this.state.order, (val,item)=> order[item] = val['value'] )
        fetch(ORDER_URL,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( order)
        }
        )
        .then(res=>{
            window.location.replace(res.url)
        })
        .finally(()=> this.setState({loading: false}))

    }
    handleChangeInput = (e, field) => {        
        let order = {...this.state.order}
        order[field].value = e.target.value
        if( field == 'email'){
            if( validator.isEmail( e.target.value ) ) {
                order[field].validation = 'success'
                this.setState({emailHelp: ''})
            }
            else{
                order[field].validation = 'error'
                this.setState({emailHelp: 'not a valid email'})
            }
        }
        else if( e.target.value.length > 1 || field == 'gender' ) {
            order[field].validation = 'success'
        } else {
            order[field].validation = undefined
        }
        this.setState({order})

    }

  render() {
    const { order } = this.state
    let disabled = !this.state.agree 
    !disabled && _map(this.state.order, (val,item) =>{
        if ( val.validation == undefined || val.validation == 'error' ){
            disabled = true
            return;
        }
    })
    const current_project = PRODUCTS.find(p => p.id == this.productId)
    return <div>
            <Header title='Our Online Store'/>
            <div className='order'>
            {/* <h2 className='title' >Join Us Now!</h2> */}
            <div className='product-card vertical-horizontal-center' >
                <Row>
                    <Col md={10}>
                        <img width={'100%'} src='/assets/images/logo.png'/>
                    </Col>
                    <Col md={14} className='vertical-horizontal-center'>
                       <h2>{current_project.name}</h2> 
                    </Col>
                </Row>
                

            </div>
            <Form className="">
                <div className="tsg-form">
                    <div className="_row _name">
                        <div className="_form-group">
                            <Form.Item
                                validateStatus={order.first_name.validation}
                            >
                                <label>First Name</label>
                                <input  placeholder="First name" type="text" onChange={(e)=>this.handleChangeInput(e,'first_name')}/>  
                            </Form.Item>
                        
                        </div>
                        <div className="_form-group">
                            <Form.Item
                                validateStatus={order.last_name.validation}
                                
                            >
                            <label>Last Name</label>
                                <input  placeholder="Last name" type="text" onChange={(e)=>this.handleChangeInput(e,'last_name')}/>
                            </Form.Item>           
                        </div>
                    </div>
                    <div className="_row ">
                        <div className="_form-group">
                            <Form.Item
                                validateStatus={order.email.validation}
                                help={this.state.emailHelp}
                            >
                                <label>Email</label>
                                <input  placeholder="Email" type="email" onChange={(e)=>this.handleChangeInput(e,'email')}/>
                            </Form.Item>
                        
                        </div>
                        <div className="_form-group">
                            <Form.Item
                                validateStatus={order.phone_number.validation}
                            >
                                <label>Phone</label>
                                <input  placeholder="Phone number" type="tel" onChange={(e)=>this.handleChangeInput(e,'phone_number')}/>
                            </Form.Item>           
                        </div>
                    </div>
                    <div className="_row ">
                        <div className="_form-group">
                            <Form.Item
                                validateStatus={order.city.validation}
                            >
                                <label>City</label>
                                <input  placeholder="City" type="text" onChange={(e)=>this.handleChangeInput(e,'city')}/>
                            </Form.Item>
                        
                        </div>

                        <div className="_form-group">
                            <Form.Item
                                validateStatus={order.country.validation}
                            >
                                <label>Country</label>
                                <input  placeholder="Country" type="text" onChange={(e)=>this.handleChangeInput(e,'country')}/>
                            </Form.Item>
                        
                        </div>

                    </div>
                    <div className="_row ">
                    <div className="_form-group">
                            <Form.Item
                                validateStatus={order.phone_number.validation}
                            >
                                <label >Gender</label>
                                <div className="_gender">
                                <Radio.Group onChange={(e)=>this.handleChangeInput(e,'gender')} >
                                    <Radio value={'m'}>Male</Radio>
                                    <Radio value={'f'}>Female</Radio>
                                </Radio.Group>
                                </div>
                            </Form.Item>           
                        </div>

                        <div className="_form-group">
                            <div className="agree">
                                <input  type="checkbox" id="agree" onChange={()=>this.setState({agree: !this.state.agree})} />
                                <label htmlFor="agree"> <p onClick={()=>this.setState({showAgreeModal: true})}> I agree to the terms and conditions </p> </label>                           
                            </div>
                        </div>
                    </div>
                    <div className="_submit-btn">
                        <Button block type="submit" size="large" 
                        onClick={(e)=>this.handleSubmit(e)}
                        loading={this.state.loading}
                        disabled={disabled}
                        >
                            Proceed to payment
                        </Button>
                    </div>
                   
                </div>             
            </Form>
            <Modal 
                visible={this.state.showAgreeModal}
                onCancel={()=> this.setState({showAgreeModal: false})}
                onOk={()=> this.setState({showAgreeModal: false})}
            > 
                <div>
                    <ul>
                        <li>I accept full responsibility to participate in any physical activity/exercise/workout during the The Science Gym's training sessions, online programs and/or virtual classes, whether pre-recorded or live.</li>
                        <li>I confirm that I do not have any medical condition or chronic illness that would stop me from engaging in any of the above.</li>
                        <li>I hereby release The Science Gym and all its staff from any responsibility or liability for any injury that may occur during my workout/training.</li>
                        <li>I understand and agree that all payments are non-refundable.</li>
                        <li>I have read and agreed on all the aforementioned terms and conditions. I understand that this is a waiver and total release on any liability.</li>
                    </ul>
                </div>
            </Modal>
    </div></div>
  }
}

export default Order
