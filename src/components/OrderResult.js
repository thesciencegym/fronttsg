import { CheckOutlined, ExclamationCircleOutlined, ExclamationOutlined } from '@ant-design/icons';
import './order.scss';

import React from 'react'
import Header from './Header';
import { Spin } from 'antd';

class OrderResult extends React.Component {
  params = new URLSearchParams(this.props.location.search);
  success = this.params.get('success');
  merchant_order_id = this.params.get('merchant_order_id')
  state = {
    require_shipping: false,
    loading: false,
    error: false
  }
  componentDidMount() {
    const ORDER_URL = 'https://science-gym-backend.herokuapp.com/order'; // Test backend
    // const ORDER_URL = 'https://science-gym-backend-prod.herokuapp.com/order'; // Production backend
    if (this.success) {
      this.setState({ loading: true })
      fetch(ORDER_URL + `/${this.merchant_order_id}`).then(r=>r.status == 200 ? r.json() : null)
      .then(res=>{
        if (!res) {
          this.setState({error: true})
        } else if(res.product.require_shipping) this.setState({require_shipping: true})
      })
      .finally(()=>{
        this.setState({loading: false})
      })
    }
  }

  _render_extra_text(){
    if (this.state.loading) {
      return <Spin />
    } else if (this.state.error) {
      return null;
    } else if (this.state.require_shipping) {
      return <p>You will be contacted soon for more details.</p>
    } else {
      return <p>An email is sent now to your Inbox, please follow the steps to activate your account.</p>
    }
  }

  render() {
    console.log('aaaa', this.state.loading, this.success, this.state.loading && this.success == true)
    return <div>
      <Header title='Our Online Store' />
      <div className='order-result'>
        {this.success == 'true' ? <div className='success'>
          <CheckOutlined />
          <h2>Payment Successful!</h2>
          <p>Thank you for shopping at TSG’s online store! your order has been successfully placed.</p>
          {this._render_extra_text()}
        </div> : <div className='fail'>
            <ExclamationOutlined />
            <h2>OOPS!</h2>
            <p >We are unable to process your online payment. Our online payment system is unable to access your credit card. Please try again.</p>
          </div>}

      </div>
    </div>
  }
}
export default OrderResult

