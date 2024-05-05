import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Fooditem.scss'
import { StoreContext } from '../../context/StoreContext'

export default function Fooditem({ id, name, price, description, image }) {
    const{cartitems,addTocart,removeFromcart}=useContext(StoreContext)
    return (
        <div className='food-item animate__animated animate__fadeIn'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image}/>
                {!cartitems[id]
                    ?<img className='add' onClick={()=>addTocart(id)} src={assets.add_icon_white}/>
                    :<div className='food-item-counter'>
                        <img onClick={()=>removeFromcart(id)} src={assets.remove_icon_red}/>
                        <p> {cartitems[id]} </p>
                        <img onClick={()=>addTocart(id)} src={assets.add_icon_green}/>
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt=''/>
                </div>
                <p className='food-item-desc'>
                    {description}
                </p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}
