import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { ButtonMedium } from '../Utils/Buttons/ButtonMedium';
import { axiosURL } from '../../index.js';
import swal from "sweetalert";


const stripePromise = loadStripe(`${process.env.REACT_APP_CLAVE_STRIPE}`);


const CheckoutForm = (props) => {
  /* console.log("desde funcion fantasma");
  console.log(props); */
  // console.log(id, profit, bet);
  const {matchId, profit, bet} = props.props
  const [amount, setAmount] = useState(0);

  console.log("desde checkout");
  console.log(matchId.toString());

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });
//https://qatarbets-backend-production.up.railway.app
    if (!error) {
      const { id } = paymentMethod;

      const { data } = await axios.post(`${axiosURL}/pay/`, {
        id,
        amount: amount * 100
      }, { withCredentials: true });

      if (data.message === 'Successful Payment') {

        console.log(matchId.toString());

        const { data } = await axios.post(`${axiosURL}/bet/newBet`, {
          fecha_hora: new Date(),
          money_bet: amount,
          result: bet,
          condition: matchId.toString(),
          expected_profit: amount * profit,
          final_profit: 0,
          matchId: null,
        }, { withCredentials: true });
        if (data === 'La apuesta se creo correctamente') {
          swal({
            title: "Pago realizado con exito!!",
            text: "Muchas gracias por su apuesta",
            button: "Acept"
          })
          /* alert('Pago realizado con exito!!') */
        }
      }
    }
  };

  const handleInputChange = (inputAmount) => {
    setAmount(inputAmount);
  }

  console.log(amount);

  return <form onSubmit={handleSubmit}>
    <div className="bg-moradosec w-full mx-auto p-4 sm:px-6 sm:py-8 rounded-lg">
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

export const PaymentFormRound = (props) => {
/* console.log("desde payment");
 console.log(props.matchId); */
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm props = {props}/>
    </Elements>
  )
}
