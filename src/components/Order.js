import React from 'react'
import './order.scss';
import { Modal } from 'antd';

class Order extends React.Component {

    state={
        showAgreeModal: false,
    }

  render() {
    let productId = this.props.match.params.id
    return <div className='order'>
            <h2 className='title' >Join Us Now!</h2>
            <form className="tsg-form" name="addProduct"action="https://science-gym-backend-prod.herokuapp.com/order"   method="post">
                <div className="_row _name">
                    <div className="_form-group">
                        <label >First Name</label>
                        <input required placeholder="enter your first name" type="text" name="first_name"/>
                    </div>
                    <div className="_form-group">
                        <label >Last Name</label>
                        <input required placeholder="enter your last name" type="text" name="last_name"/>
                    </div>
                </div>
                <div className="_row ">
                    <div className="_form-group">
                        <label >Email</label>
                        <input required placeholder="enter your email" type="email" name="email"/>
                    </div>
                    <div className="_form-group">
                        <label >Phone</label>
                        <input required placeholder="enter your phone number" type="tel" name="phone_number"/>
                    </div>
                </div>
                <div className="_row ">
                    <div className="_form-group">
                        <label >City</label>
                        <input required placeholder="enter your city" type="text" name="phone_number"/>
                    </div>
                    <div className="_form-group">
                        <label >Gender</label>
                        <div className="_gender">
                            <div style={{marginRight: 30}}>
                                <input required type="radio" id="male" name="gender" value="male"/>
                                <label htmlFor="male">  Male</label>
                            </div>
                            <div>
                                <input required type="radio" id="female" name="gender" value="female"/>
                                <label htmlFor="female">  Female</label>
                            </div>
                        </div>          
                    </div>
                    
                </div>
                <div className="_row ">
                    <div className=" agree">
                        <input required type="checkbox" id="agree" name="agree" />
                        <label for="agree"> <p onClick={()=>this.setState({showAgreeModal: true})}> I agree to the terms and conditions </p> </label>                           
                    </div>
                </div>
​
                <input hidden id="product_code" name="product_code" value={productId}/>
                <div className="_submit-btn">
                    <button  type="submit" >Proceed</button>
                </div>
            </form>
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
    </div>
  }
}


export default Order