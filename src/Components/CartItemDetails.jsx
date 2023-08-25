import React from 'react';
import { useCart } from '../Context/CartContext';
import ComicCard from '../Components/ComicCard';
import '../Pages/CartDetails.css';

const CartItemDetails = ({ convertToBRL }) => {
    const { cart, addToCart, removeQuantity, removeFromCart } = useCart();

    return (
        <div className="cart-item-page">
            {cart.map(item => (
                <div className="details" key={item.id}>
                    <ComicCard comic={item} showLink={false} />
                    <p>Quantidade: {item.quantity}</p>
                    <p>Preço em Dólares: ${(item.prices[0].price * item.quantity).toFixed(2)} </p>
                    <p>Preço em Reais: R{convertToBRL(item.prices[0].price * item.quantity)}</p>
                    <div className="buttons-cart">
                    <button onClick={() => removeQuantity(item)}>-</button>
                    <button onClick={() => addToCart(item)}>+</button>
                    <br/>
                    <button onClick={() => removeFromCart(item.id)}>Remover do Carrinho</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItemDetails;
