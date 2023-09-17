import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'January', sales: 30 },
  { name: 'February', sales: 45 },
  { name: 'March', sales: 60 },
  { name: 'April', sales: 80 },
  { name: 'May', sales: 55 },
  { name: 'June', sales: 70 },
];

const LineChartComponent = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default LineChartComponent;
