import { CheckOutlined, ExclamationCircleOutlined, ExclamationOutlined} from '@ant-design/icons';
import './order.scss';

import React from 'react'
import Header from './Header';

class PaymentResult extends React.Component {
  params = new URLSearchParams(this.props.location.search);
  success = this.params.get('success');
  state={

  }

  render() {
    return <div>
        <Header title= 'Our Online Store'/>
        <div className='payment-result order-result'>   
          {this.success == 'true' ? <div className='success'>
              <CheckOutlined />
              <h2>Payment Successful!</h2>
              {/* <p>Thank you for shopping at TSG’s online store! your order has been successfully placed.</p> */}
          </div>: <div className='fail'>
              <ExclamationOutlined />
              <h2>Payment Failed!</h2>
          </div> }
          
      </div>
      </div>
  }
}
export default PaymentResult

