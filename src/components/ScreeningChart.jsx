import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import screeningData from "../utils/screening-data.json";

function ScreeningChart() {
  return (
    <div className="d-flex justify-content-center">
      <LineChart
        width={600}
        height={300}
        data={screeningData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='date' />
        <YAxis domain={[4, 18]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Amount of Screenings" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}

export default ScreeningChart;
