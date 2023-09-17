import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', sales: 30 },
  { name: 'Feb', sales: 45 },
  { name: 'March', sales: 60 },
  { name: 'April', sales: 80 },
  { name: 'May', sales: 55 },
  { name: 'June', sales: 65 },
  { name: 'July', sales: 80 },
  { name: 'Aug', sales: 40 },
  { name: 'Sept', sales: 88 },
  { name: 'Oct', sales: 65 },
  { name: 'Nov', sales: 10 },
  { name: 'Dec', sales: 90 },
];

const LineChartComponent = () => {
  return (
    <LineChart width={800} height={300} data={data}>
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
