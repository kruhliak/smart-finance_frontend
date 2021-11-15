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
    name: 'пАмидор',
    value: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Круглое красное',
    value: 3000,
    pv: 4398,
    amt: 2210,
  },
  {
    name: 'Хурма',
    value: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Авокадо',
    value: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Куринные когти',
    value: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Печень медведя',
    value: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Кисляк',
    value: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const MobileCharts = () => {
  const BarLabel = ({ x, y, width, value }) => (
    <text x={x + width / 1.1} y={y} textAnchor="middle" fontSize={10} dy={-10}>
      {value ? `${value} грн` : ''}
    </text>
  );

  const LabelListContent= ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );

  const sortedData = data.sort((prevValue, nextValue) => prevValue.value < nextValue.value ? 1 : -1)

  return (
    <ResponsiveContainer width="90%" height={500}>
      <BarChart
      width={290}
        height={600}
        layout="vertical"
        data={sortedData}
        margin={{ top: 30, right: 0, bottom: 30, left: 0 }}
      >
        <Bar
          dataKey="value"
          barSize={18}
          radius={[0, 10, 10, 0]}
          label={<BarLabel />}
          fill="#52555f"
          minPointSize={80}
        >
          {data.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
          <LabelList
            dataKey="name"
            content={<LabelListContent/>}
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