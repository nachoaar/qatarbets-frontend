import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { ButtonMedium } from '../Utils/Buttons/ButtonMedium';

const stripePromise = loadStripe("pk_test_51LfBfGH8GSChtV84IGSv7a6FNuytSwQSVrCy3gyenf4zdJ7TtMsWodH3bxJ4AhAyRMd7UhsiLpGTH9r7uGDKTJiV00wpKR8Haa");


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

      const { data } = await axios.post('https://qatarbets-backend-production-ab54.up.railway.app/pay/', {
        id,
        amount: amount * 100
      });

      if (data.message === 'Successful Payment') {
        const { data } = await axios.post('https://qatarbets-backend-production-ab54.up.railway.app/bet/newBet', {
          fecha_hora: new Date(),
          money_bet: amount,
          result: "draw",
          condition: "ready",
          expected_profit: amount * 1.6,
          final_profit: 0,
          matchId: 855734,
        }, { withCredentials: true });
        if (data === 'La apuesta se creo correctamente') {
          alert('Pago realizado con exito!!')
        }
      }
    }
  };

  const handleInputChange = (inputAmount) => {
    setAmount(inputAmount);
    console.log(amount);
  }

  return <form onSubmit={handleSubmit}>
    <div className="bg-moradosec w-full mx-auto px-6 py-8 rounded-lg">
      <label className="font-titulo text-white mr-5 text-xl">Amount USD $</label>
      <input className="rounded-md w-24" type="number" onChange={e => handleInputChange(e.target.value)} />
      <CardElement className="bg-white rounded-md py-3 my-6" />
      <ButtonMedium name={'Buy'} />
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

