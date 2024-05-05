import { useContext } from 'react'
import './PlaceOrder.scss'
import { StoreContext } from '../../context/StoreContext'
export default function PalceOrder() {
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
    <p className='title'> Delivery Information</p>
    <div className="muti-field">
      <input type='text' placeholder='Frist name'/>
      <input type='text' placeholder='Last name'/>
    </div>
    <input type='email' placeholder='Email Address'/>
    <input type='text' placeholder='Street'/>
    <div className="muti-field">
      <input type='text' placeholder='City'/>
      <input type='text' placeholder='State'/>
    </div>
    <div className="muti-field">
      <input type='text' placeholder='Zip code'/>
      <input type='text' placeholder='Country'/>
    </div>
    <input type='text' placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>4{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()+2}</p>
            </div>
          </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>
  )
}
