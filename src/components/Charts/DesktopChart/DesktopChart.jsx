import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

import { Toolpit } from './DesktopChart.styled';

const data = [
  {
    name: 'пАмидор',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Круглое красное',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Хурма',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Авокадо',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Куринные когти',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Печень медведя',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Кисляк',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// const getIntroOfPage = (label) => {
//   if (label === 'пАмидор') {
//     return "пАмидор is about men's clothing";
//   }
//   if (label === 'Page B') {
//     return "Page B is about women's dress";
//   }
//   if (label === 'Page C') {
//     return "Page C is about women's bag";
//   }
//   if (label === 'Page D') {
//     return 'Page D is about household goods';
//   }
//   if (label === 'Page E') {
//     return 'Page E is about food';
//   }
//   if (label === 'Page F') {
//     return 'Page F is about baby food';
//   }
//   return '';
// };

// const CustomTooltip = ({ payload, label }) => {
//   if ( payload && payload.length) {
//     return (
//       <div >
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//         <p className="intro">{getIntroOfPage(label)}</p>
//         <p className="desc">Anything you want can be displayed here.</p>
//       </div>
//     );
//   }

//   return null;
// };

function CustomTooltip({ active, payload}) {
  if ( active ) {
    // console.log("data inside", payload[0].payload.name)
    return (
      <Toolpit>
        <p>{`${payload[0].value} грн`}</p>
          <h4 className="mb-1">{`${payload[0].payload.name}`}</h4>
      </Toolpit>
    );
  }
  return null;
};


const DesktopChart = () => {

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
        data={data}
        margin={{
          top: 20,
          right: 40,
          left: -10,
          bottom: 5,
        }}
      >
        
        <XAxis dataKey="name" axisLine={false} tickLine={false} padding={{ left: 10, right: 10 }}/>

        <YAxis axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={( num ) => `${num.toString().slice( 0, -50 )}`}
        />

        <Tooltip cursor={false} content={<CustomTooltip/>}/>

        <CartesianGrid opacity={0.6} vertical={false} />
        
        <Bar dataKey="pv" radius={[10, 10, 0, 0]} barSize={38} label={renderCustomizedLabel}>

          {data?.map((el, index) => (
            <Cell fill={index % 3 ? '#FFDAC0' : '#ff751d'} key={`cell-${index}`}/>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DesktopChart;