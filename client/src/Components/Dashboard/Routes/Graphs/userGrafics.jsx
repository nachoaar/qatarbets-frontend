import React from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import getStats from './userStatsExtraccion';


export default function UserStatGafic({dataa,userId}){


    let data = getStats(dataa,userId)


    return (
        <div>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
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
          <Bar dataKey="bets" fill="#8884d8" />
          <Bar dataKey="gained" fill="#82ca9d" />
          <Bar dataKey="losed" fill='#FFBB28'/>
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
        </div>
    )
}