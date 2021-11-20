import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

import { Toolpit } from './DesktopChart.styled';

function CustomTooltip({ active, payload}) {
  if ( active ) {
    // console.log("data inside", payload[0].payload.name)
    return (
      <Toolpit>
        <p>{`${payload[0].value} грн`}</p>
          <h4 className="mb-1">{`${payload[0].payload.description}`}</h4>
      </Toolpit>
    );
  }
  return null;
};


const DesktopChart = ({ data }) => {
  
  console.log("data inside DesctopChart >>", data)

  // const sortByValue = value => (prevValue, nextValue) => prevValue[value] < nextValue[value] ? 1 : -1;
  const sortedData = data.sort((prevValue, nextValue) => prevValue.value < nextValue.value ? 1 : -1)

  const renderCustomizedLabel = props => {
    const { x, y, width, value } = props;

    return (
      <text
        x={x + width / 2}
        y={y}
        dy={-10}
        textAnchor="middle"
        fontSize={12}
      >{`${value} грн`}</text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={422}>
      <BarChart
        width={758}
        height={300}
        data={sortedData}
        margin={{
          top: 20,
          right: 40,
          left: -10,
          bottom: 5,
        }}
      >
        
        <XAxis dataKey="description" axisLine={false} tickLine={false} padding={{ left: 10, right: 10 }}/>

        <YAxis axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={( num ) => `${num.toString().slice( 0, -50 )}`}
        />

        <Tooltip cursor={false} content={<CustomTooltip/>}/>

        <CartesianGrid opacity={0.6} vertical={false} />
        
        <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={38} label={renderCustomizedLabel}>

          {data?.map((el, index) => (
            <Cell fill={index % 3 ? '#FFDAC0' : '#ff751d'} key={`cell-${index}`}/>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DesktopChart;