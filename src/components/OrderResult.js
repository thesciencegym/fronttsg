import { CheckOutlined, ExclamationCircleOutlined, ExclamationOutlined} from '@ant-design/icons';
import './order.scss';

import React from 'react'

class OrderResult extends React.Component {
  render() {
    const params = new URLSearchParams(this.props.location.search);
    const success = params.get('success');
    return <div className='order-result'>   
        {success == 'true' ? <div className='success'>
            <CheckOutlined />
            <h2>Payment Successful!</h2>
            <p >Thank you for shopping at TSG’s online store! your order has been successfully placed. An email is sent now to your Inbox, please follow the steps to activate your account.</p>
        </div>: <div className='fail'>
            <ExclamationOutlined />
            <h2>OOPS!</h2>
            <p >We are unable to process your online payment. Our online payment system is unable to access your credit card. Please try again.</p>
        </div> }
        
    </div>
  }
}
export default OrderResult

