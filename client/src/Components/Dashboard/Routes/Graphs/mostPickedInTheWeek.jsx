import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import sortBets from './funtionFunction';

export default function WeekBets({dataa,date}){

  let data = sortBets(dataa, date)

  return (
    <div>
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
        top: 20,
        right: 30,
        left: 40,
        bottom: 5,
        }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="money_bet" stackId="a" fill="#8884d8" />
      <Bar dataKey="cantidad" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
