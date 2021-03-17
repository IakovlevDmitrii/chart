import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from './data';
import Gradient from './Gradient';

export default class Example extends PureComponent {
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <Gradient data={data} lineName="pv" color="#8884d8" />
          <Gradient data={data} lineName="uv" color="#82ca9d" />
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="url(#pvGradient)" dot={false} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="url(#uvGradient)" dot={false} />
      </LineChart>
    );
  }
}
