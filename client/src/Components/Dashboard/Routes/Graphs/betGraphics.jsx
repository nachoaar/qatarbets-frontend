import React from "react";
import { PieChart, Pie, Cell } from 'recharts';
import GroupByResult from "./grouByResult";

export default function BetResultGraph({dataa}){

  let auxData = GroupByResult(dataa)

  let data = auxData.sort((a,b) => a.index - b.index)
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {` ${(percent * 100).toFixed(0)}%`}
          </text>
    );
  };

  return (
    <div className="bg-white rounded-3xl p-3 shadow flex gap-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-green-400 font-titulodash">Draw</p>
        <p className="text-blue-400 font-titulodash">Home</p>
        <p className="text-orange-400 font-titulodash">Away</p>
      </div>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key='name' fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}

