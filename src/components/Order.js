import React from 'react'
import './order.scss';
import { Modal, Form, Input, Button, Radio, Row, Col, Select } from 'antd';
import _map from 'lodash/map'
import validator from 'validator'
import Header from './Header';
import { PRODUCTS } from '../PRODUCTS';
import { STATES } from '../STATES-CITIES';

const ORDER_URL = 'https://science-gym-backend.herokuapp.com/order'; // Test backend
// const ORDER_URL = 'https://science-gym-backend-prod.herokuapp.com/order'; // Production backend

const {Option} = Select
class Order extends React.Component {
    productId = this.props.match.params.id
    current_project = PRODUCTS.find(p => p.id == this.productId)
    state={
        showAgreeModal: false,
        agree: false,
        disable: true,
        loading: false,
        emailHelp:'',
        payment_method: {value: (this.current_project && this.current_project.is_shipping? 'cash' : 'card') , validation: undefined},
        order : {first_name: {value:'', validation: undefined},
                last_name: {value:'', validation: undefined},
                email: {value:'', validation: undefined},
                phone_number: {value:'', validation: undefined},
                city: {value:'', validation: undefined}, 
                country: {value:'', validation: undefined}, 
                gender: {value:'', validation: undefined}
        },
        shipping_info : {building: {value:'', validation: undefined},
                street: {value:'', validation: undefined},
                floor: {value:'', validation: undefined},
                apartment: {value:'', validation: undefined},
                city: {value:'', validation: undefined}, 
                state: {value:'', validation: undefined}, 
                postal_code: {value:'', validation: undefined}, 
                
        }
        
    }

    handleSubmit = (e) => { 
        const payment_method = this.state.payment_method.value 
        e.preventDefault()
        this.setState({loading: true})
        let order ={ product_code: this.productId, payment_method: payment_method}
        _map(this.state.order, (val,item)=> order[item] = val['value'] )
        if( payment_method == 'cash' || this.current_project.is_shipping) order['country'] = 'EG'
        let billing_data = {}
        _map(this.state.shipping_info, (val,item)=> billing_data[item] = (this.current_project.is_shipping || this.state.payment_method.value == 'cash') ? val['value'] : 'N/A' )
        this.current_project.is_shipping && delete order.city
        order['billing_data'] = billing_data
       console.log('order',order)
        
        fetch(ORDER_URL,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( order)
        }
        )
        .then(res=>{
            if(  payment_method == 'card' && res.url){
                window.location.replace(res.url)
            }  
            return res.json()         
        })
        .then(res=>{
            if( payment_method == 'cash' ){
                const success = res.success? 'true':'false'
                this.props.history.push(`/done-payment?success=${success}`)
            }
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
    handleChangeShippingInput = (e, field, type) => {    
        let shipping_info = {...this.state.shipping_info}
        let value = type =='select' ? e : e.target.value
        shipping_info[field].value = value
        if( value.length > 0  ) {
            shipping_info[field].validation = 'success'
        } else {
            shipping_info[field].validation = undefined
        }
        if(field == 'state'){
            shipping_info['city'].value = ''
            shipping_info['city'].validation = undefined
        }
        this.setState({shipping_info})

    }

  render() {
    if(!this.current_project) return <div><h2>Not a valid product</h2></div>
    const { order } = this.state
    const payment_method = this.state.payment_method.value
    let disabled = !this.state.agree 
    !disabled && _map(this.state.order, (val,item) =>{
        if( (this.current_project.is_shipping || payment_method =='cash') && ['city','country'].includes( item ) ) return
        if ( val.validation == undefined || val.validation == 'error' ){
            disabled = true
            return;
        }
    })
    if( !disabled && (this.current_project.is_shipping || payment_method =='cash' ) ){
        _map(this.state.shipping_info, (val,item) =>{    
            if ( val.validation == undefined || val.validation == 'error' ){
                disabled = true
                return;
            }
        })
    }
    
    return <div>
            <Header title='Our Online Store'/>
            <div className='order'>
            <div className='product-card vertical-horizontal-center' >
                <Row>
                    <Col md={10} className='vertical-horizontal-center'>
                        <img width={'100%'} src='/assets/images/logo.png' style={{backgroundColor: 'black', padding:'5px 10px'}}/>
                    </Col>
                    <Col className='vertical-horizontal-center' md={14} style={{flexDirection:'column'}}>
                       <h3>{this.current_project.name}</h3>
                       <h1>{this.current_project.price} EGP</h1>
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
                                help={this.state.emailHelp || null}
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
                                <Form.Item
                                    
                                >
                                    <label >Payment Method</label>
                                    <div className="_gender">
                                        <Radio.Group value = {payment_method} onChange={(e)=>this.setState({payment_method:{ ...this.state.payment_method, value: e.target.value}})} >
                                            <Radio value={'cash'}>Cash on delivery</Radio>
                                            <Radio value={'card'}>Credit Card</Radio>
                                        </Radio.Group>
                                    </div>
                                </Form.Item>           
                            </div>
                       
                    </div>
                    {!this.current_project.is_shipping  && payment_method =='card' && <div className="_row ">
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

                    </div>}
                    {(this.current_project.is_shipping || payment_method == 'cash') && <div className='shipping_fields'>
                        <div className="_row ">
                            <div className="_form-group">
                                <Form.Item
                                    // validateStatus={order.city.validation}
                                >
                                    <label>State</label>
                                   <Select value={this.state.shipping_info.state.value} onChange={(e)=> this.handleChangeShippingInput(e, 'state', 'select')}>
                                        <Option disabled value={''}>State</Option>
                                       {_map(STATES, (cities,state )=>{
                                           return <Option key={state} value={state}>{state}</Option>
                                       })}
                                   </Select>
                                </Form.Item>                           
                            </div>

                            <div className="_form-group">
                                <Form.Item
                                    // validateStatus={order.city.validation}
                                >
                                    <label>City</label>
                                   <Select value={this.state.shipping_info.city.value} onChange={(e)=> this.handleChangeShippingInput(e, 'city', 'select')}>
                                        <Option disabled value={''}>City</Option>
                                       {STATES[this.state.shipping_info.state.value] && STATES[this.state.shipping_info.state.value].map(city=>{
                                           return <Option key={city} value={city}>{city}</Option>
                                       })}
                                   </Select>
                                </Form.Item>
                            
                            </div>

                        </div>
                        <div className='address'>
                            <p >Address</p>
                            <div className="address_row ">
                                <div className="_form-group">
                                    <Form.Item
                                        
                                    >
                                        <input  placeholder="building" type="text" onChange={(e)=>this.handleChangeShippingInput(e,'building')}/>
                                    </Form.Item>           
                                </div>

                                <div className="_form-group">
                                    <Form.Item
                                        
                                    >
                                        <input  placeholder="street" type="text" onChange={(e)=>this.handleChangeShippingInput(e,'street')}/>
                                    </Form.Item>  
                                </div>
                                <div className="_form-group">
                                    <Form.Item
                                        
                                    >
                                        <input  placeholder="floor" type="text" onChange={(e)=>this.handleChangeShippingInput(e,'floor')}/>
                                    </Form.Item>  
                                </div>
                                <div className="_form-group">
                                    <Form.Item
                                        
                                    >
                                        <input  placeholder="apartment" type="text" onChange={(e)=>this.handleChangeShippingInput(e,'apartment')}/>
                                    </Form.Item>  
                                </div>
                            </div>
                        </div>
                        <div className="_row ">
                            <div className="_form-group">
                                <Form.Item
                                    
                                >
                                    <label >Postal Code</label>
                                    <input  placeholder="postal code" type="text" onChange={(e)=>this.handleChangeShippingInput(e,'postal_code')}/>
                                </Form.Item>         
                            </div>
                            {/* <div className="_form-group">
                                <Form.Item
                                    
                                >
                                    <label >Payment Method</label>
                                    <div className="_gender">
                                        <Radio.Group value = {this.state.payment_method.value} onChange={(e)=>this.setState({payment_method:{ ...this.state.payment_method, value: e.target.value}})} >
                                            <Radio value={'cash'}>Cash on delivery</Radio>
                                            <Radio value={'card'}>Credit Card</Radio>
                                        </Radio.Group>
                                    </div>
                                </Form.Item>           
                            </div> */}
                        </div>
                    </div>}
                    <div className="_form-group agree">
                        <div className="agree">
                            <input  type="checkbox" id="agree" onChange={()=>this.setState({agree: !this.state.agree})} />
                            <label htmlFor="agree"> <p onClick={()=>this.setState({showAgreeModal: true})}> I agree to the terms and conditions </p> </label>                           
                        </div>
                    </div>
                    
                    <div className="_submit-btn">
                        <Button block type="submit" size="large" 
                        onClick={(e)=>this.handleSubmit(e)}
                        loading={this.state.loading}
                        disabled={disabled}
                        >
                            { payment_method == 'card' ? 'Proceed to payment' : 'Place your order'}
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
