import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import currency from 'currency.js';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import CartItemDetails from '../Components/CartItemDetails';

const Cart = () => {
    const clientID = import.meta.env.VITE_CLIENT_ID_PAYPAL;
    const { cart, emptyCart } = useCart();
    const [isPaid, setIsPaid] = useState(false);


    const exchangeRate = 5.0;
    const convertToBRL = (priceUSD) => currency(priceUSD).multiply(exchangeRate).format();


    const totalPriceUSD = cart.reduce((total, item) => total + item.prices[0].price * item.quantity, 0);

    
    const totalPriceBRL = cart.reduce(
        (total, item) =>
            total.add(currency(convertToBRL(item.prices[0].price)).multiply(item.quantity)),
        currency(0)
    );

  
    const createOrder = (data, actions) => {
        return actions.order.create({ 
            purchase_units: [
                {
                    amount: {
                        currency_code: 'BRL',
                        value: totalPriceBRL.toString(),
                    },
                },
            ],
        });
    };

 
    const onApprove = (data, actions) => {
      
        return actions.order.capture().then((details) => {
            alert('Pagamento efetuado com sucesso, realizado na conta de ' + details.payer.name.given_name);
            setIsPaid(true); 
            emptyCart()
        });
    };

    return (
        <div className="cart-page">
            <h2>Seu Carrinho:</h2>
            <CartItemDetails convertToBRL={convertToBRL} />

            <h2>Resumo do Pedido: </h2>
            <p>Total USD: ${totalPriceUSD.toFixed(2)} </p>
            <p>Total BRL: R${totalPriceBRL.toString()} </p>

            <div className='cart-payment'>
                <h2>Finalizar Compra</h2>
                <div className="paypal-buttons-container">
                    <PayPalScriptProvider options={{ "client-id": `${clientID}`, currency: "BRL" }}>
                        <PayPalButtons createOrder={createOrder} onApprove={onApprove} disabled={isPaid} className="paypal-buttons" />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    );
};

export default Cart;
