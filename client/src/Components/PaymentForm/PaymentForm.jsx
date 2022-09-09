import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Boton } from '../Utils/Boton';
import axios from 'axios';

const stripePromise = loadStripe("pk_test_51Lf5Z3I9jvIrubEQTIjniJRp0Cf2594MF8pv11AXeHDLQRIgYXYouRHlKYaZ2unO0aPiaPv0SWUXP4hl4xuNhB3J00GAso0TuL");


const CheckoutForm = () => {

  const [amount, setAmount] = useState(0);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      const { id } = paymentMethod;

      const { data } = await axios.post('http://localhost:3001/pay/api/checkout', {
        id,
        amount: amount * 100
      });

      if (data.message === 'Successful Payment') {
        await axios.post('http://localhost:3001/bet/newBet', {
          fecha_hora: new Date(),
          money_bet: amount,
          result: "draw",
          condition: "ready",
          expected_profit: amount * 1.6,
          final_profit: 0,
          matchId: 855734,
          userId: "175d16fc-2af6-4b99-b6bb-fd27b69f6a21"
        })
      }
    }
  };

  const handleInputChange = (inputAmount) => {
    setAmount(inputAmount);
    console.log(amount);
  }

  return <form onSubmit={handleSubmit}>
    <div className="bg-moradosec max-w-md mx-auto px-2 py-2 rounded-lg">
      <label className="font-parrafo text-white font-extrabold mx-5">Amount USD $</label>
      <input className="rounded-md w-20" type="number" onChange={e => handleInputChange(e.target.value)} />
      <CardElement className="bg-white rounded-md py-3 my-6" />
      <Boton name={'Buy'} />
    </div>
  </form>
}

export const PaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

