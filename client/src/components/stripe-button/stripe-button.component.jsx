import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100

    const onToken = async token => {
        try {
            await axios.post('/payment', {
                amount: priceForStripe,
                token,
            })
            alert('Payment Successful!')
        } catch (error) {
            console.log('Payment error: ', JSON.parse(error))
            alert(
                'There was an issue with your payment. Please make sure you use provided credit card',
            )
        }
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        />
    )
}

export default StripeCheckoutButton
