import { CheckOutlined, ExclamationCircleOutlined, ExclamationOutlined} from '@ant-design/icons';
import './order.scss';

import React from 'react'
import Header from './Header';

class CashResult extends React.Component {
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
              <h2>Successful order!</h2>
              <p>Thank you for shopping at TSG’s online store, your order has been successfully placed.</p>
              <p>You will be contacted soon for more details.</p>
          </div>: <div className='fail'>
              <ExclamationOutlined />
              <h2>Order Failed!</h2>
              <p>Something went wrong, we couldn't place your order. </p>
              <p>Please try again or contact us on technicalsupport@thesciencegym.net</p>
          </div> }
          
      </div>
      </div>
  }
}
export default CashResult

