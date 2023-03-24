import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Button from '../Button/Button'
import { selectCartTotal } from '../../store/cart/cartSelector'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import './PaymentForm.css'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const cartTotal = useSelector(selectCartTotal) * 100
  const user = useSelector((state) => state.user.user)
  const contact = user ? user.email : 'Guest'

  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: cartTotal }),
    }).then((res) => res.json())

    const {
      paymentIntent: { client_secret },
    } = await response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: contact,
        },
      },
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      alert('Payment success')
    }
  }

  return (
    <form className='payment-form' onSubmit={paymentHandler}>
      <h2>Card payment:</h2>
      <CardElement className='payment-form__card-element' />
      <Button
        isLoading={isProcessingPayment}
        buttonType='inverted'
        text='Pay now'
      />
    </form>
  )
}

export default PaymentForm
