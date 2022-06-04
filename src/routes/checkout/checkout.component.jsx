import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CartImage from '../../assets/shopping-cart.png';

import './checkout.styles.scss';

const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CheckoutItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <div className='empty-message'>
                        <img src={CartImage} alt="shopping-cart" height={50} width={50} />
                        <h3>Your cart is empty</h3>
                        <p>start adding something that makes you look fashion</p>
                    </div>
                )
            }
            <span className='total'>Total: $ {cartTotal}</span>
        </div>
    );
};

export default CheckOut;
