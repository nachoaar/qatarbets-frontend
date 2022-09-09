import React from "react";
import { PieChart, Pie, Cell } from 'recharts';

export default function BetResultGraph(){

    const data = [
        { name: 'home', value: 1200 },
        { name: 'draw', value: 800 },
        { name: 'away', value: 2000 },
      ];
      
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
        <PieChart width={400} height={400}>
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
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
        </PieChart>
    )
}

