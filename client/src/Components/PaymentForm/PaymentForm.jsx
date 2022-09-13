import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { ButtonMedium } from '../Utils/Buttons/ButtonMedium';

const stripePromise = loadStripe("pk_test_51LfBfGH8GSChtV84IGSv7a6FNuytSwQSVrCy3gyenf4zdJ7TtMsWodH3bxJ4AhAyRMd7UhsiLpGTH9r7uGDKTJiV00wpKR8Haa");


const CheckoutForm = (props) => {
  // console.log(props);
  // console.log(id, profit, bet);
  const {id, profit, bet} = props.props
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
      const { payId } = paymentMethod;

      const { data } = await axios.post('https://qatarbets-backend-production-ab54.up.railway.app/pay/', {
        payId,
        amount: amount * 100
      });

      if (data.message === 'Successful Payment') {
        const { data } = await axios.post('https://qatarbets-backend-production-ab54.up.railway.app/bet/newBet', {
          fecha_hora: new Date(),
          money_bet: amount,
          result: bet,
          condition: "ready",
          expected_profit: amount * profit,
          final_profit: 0,
          matchId: id,
        }, { withCredentials: true });
        if (data === 'La apuesta se creo correctamente') {
          alert('Pago realizado con exito!!')
        }
      }
    }
  };

  const handleInputChange = (inputAmount) => {
    setAmount(inputAmount);
  }

  console.log(amount);

  return <form onSubmit={handleSubmit}>
    <div className="bg-moradosec w-full mx-auto px-6 py-8 rounded-lg">
      <label className="font-titulo text-white mr-5 text-xl">Amount USD $</label>
       <select
          onChange={e => handleInputChange(e.target.value)}
          id="monto"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Seleccione el monto a apostar</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
        </select>
      <CardElement className="bg-white rounded-md py-3 my-6" />
      <ButtonMedium name={'Buy'} />
    </div>
  </form>
}

export const PaymentForm = (props) => {
  // console.log(props);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm props = {props}/>
    </Elements>
  )
}