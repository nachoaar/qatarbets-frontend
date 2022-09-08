import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import gruopByHour from "./groupByhour";


export default function DayliBetsGraphic({allBets}){
    
    let data = gruopByHour(allBets)
    let sortedData = data?.sort((a,b)=> Number(a.date) - Number(b.date))

    return(
        <div>
        <BarChart
          width={500}
          height={300}
          data={sortedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bets" fill="#8884d8" />
        </BarChart>
        </div>
    )
}

