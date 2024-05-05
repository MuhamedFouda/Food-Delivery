import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.scss'
import { useNavigate } from 'react-router-dom';

export default function Cart() {

  const{cartitems,food_list,removeFromcart,getTotalCartAmount}= useContext(StoreContext);
  const navigate=useNavigate()

  return (
    <div className='cartt'>
      <div className="cart-items">
        <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Prive</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {
          food_list.map((item,index)=>{
            if(cartitems[item._id]>0){
              return(
                <>
                
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt=''/>
                  <p>{item.name} </p>
                  <p>${item.price} </p>
                  <p>{cartitems[item._id]} </p>
                  <p>${item.price*cartitems[item._id]} </p>
                  <p onClick={()=>removeFromcart(item._id)} className='crosse'>x</p>
                </div>
                <hr/>
                </>
              )
            }
          })
        }
      </div>
      <div className='bottom-content'>
      <div className="cart-bottom">
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
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code , Enter it here</p>
          <div className="cart-promocode-input">
            <input type='text' placeholder='Promo Code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}
