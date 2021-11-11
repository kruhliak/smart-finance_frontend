import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
 },
  {
    name: 'Page G',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const MobileCharts = () => {
  const MobileBarLabel = ({ x, y, width, value }) => (
    <text x={x + width / 1.1} y={y} textAnchor="middle" fontSize={10} dy={-10}>
      {value ? `${value} грн` : ''}
    </text>
  );

  const MobileCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );

  return (
    <ResponsiveContainer width="90%" height={500}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 30, right: 0, bottom: 30, left: 0 }}
        className="chartText"
      >
        <Bar
          dataKey="pv"
          barSize={18}
          radius={[0, 10, 10, 0]}
          label={<MobileBarLabel />}
          fill="#52555f"
          minPointSize={80}
        >
          {data.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
          <LabelList
            dataKey="uv"
            content={<MobileCategoryLabel />}
            fill="#52555F"
          />
        </Bar>

        <XAxis type="number" hide={true} />
        <YAxis dataKey="name" type="category" scale="band" hide={true} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MobileCharts;



// import React from 'react';
// import {
//   ComposedChart,
//   Line,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//   },
//   {
//     name: 'Page B',
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//   },
//   {
//     name: 'Page C',
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//   },
//   {
//     name: 'Page D',
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//   },
//   {
//     name: 'Page E',
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//   },
//   {
//     name: 'Page F',
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//   },
// ];

// const MobileChart = () => {
  
// return (
//     <ResponsiveContainer width="100%" height={400}>
//     <ComposedChart
//         layout="vertical"
//         width={500}
//         height={400}
//         data={data}
//         margin={{
//         top: 20,
//         right: 20,
//         bottom: 20,
//         left: 20,
//         }}
//     >
//         <CartesianGrid stroke="#f5f5f5" />
//         <XAxis type="number" />
//         <YAxis dataKey="name" type="category" scale="band" />
//         <Tooltip />
//         <Legend />
//         <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
//         <Bar dataKey="pv" barSize={20} fill="#413ea0" />
//         <Line dataKey="uv" stroke="#ff7300" />
//     </ComposedChart>
//     </ResponsiveContainer>
// );
// };

  
// export default MobileChart;