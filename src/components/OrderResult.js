import { CheckOutlined, ExclamationCircleOutlined, ExclamationOutlined} from '@ant-design/icons';
import './order.scss';

import React from 'react'

class OrderResult extends React.Component {
  render() {
      let success = false
    return <div className='order-result'>   
        {success == true ? <div className='success'>
            <CheckOutlined />
            <h1>Payment Successful!</h1>
            <p >Thank you for shopping at TSG’s online store! your order has been successfully placed. An email is sent now to your Inbox, please follow the steps to activate your account.</p>
        </div>: <div className='fail'>
            <ExclamationOutlined />
            <h1>OOPS!</h1>
            <p >We are unable to process your online payment. Our online payment system is unable to access your credit card. Please try again.</p>
        </div> }
        
    </div>
  }
}
export default OrderResult

