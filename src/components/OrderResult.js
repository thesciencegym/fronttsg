import { CheckOutlined, ExclamationCircleOutlined, ExclamationOutlined} from '@ant-design/icons';
import './order.scss';

import React from 'react'
import Header from './Header';

class OrderResult extends React.Component {
  render() {
    const params = new URLSearchParams(this.props.location.search);
    const success = params.get('success');
    const merchant_order_id = params.get('merchant_order_id')
    return <div>
        <Header title= 'Our Online Store'/>
        <div className='order-result'>   
          {success == 'true' ? <div className='success'>
              <CheckOutlined />
              <h2>Payment Successful!</h2>
              <p>Thank you for shopping at TSG’s online store! your order has been successfully placed.</p>
              { merchant_order_id && <p>An email is sent now to your Inbox, please follow the steps to activate your account.</p>}
          </div>: <div className='fail'>
              <ExclamationOutlined />
              <h2>OOPS!</h2>
              <p >We are unable to process your online payment. Our online payment system is unable to access your credit card. Please try again.</p>
          </div> }
          
      </div>
      </div>
  }
}
export default OrderResult

