import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

const MobileCharts = ({ data }) => {
  const BarLabel = ({ x, y, width, value }) => (
    <text x={x + width / 1.09} y={y} textAnchor="middle" fontSize={10} dy={-3}>
      {value ? `${value} грн` : ''}
    </text>
  );

  const LabelListContent= ({ x, y, value }) => (
    <text x={x} y={y} dy={-3} fontSize={10}>
      {value}
    </text>
  );

  const sortedData = data.sort((prevValue, nextValue) => prevValue.value < nextValue.value ? 1 : -1)

  return (
    <ResponsiveContainer width="90%" height={550}>
      <BarChart
      width={290}
        height={650}
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
          minPointSize={130}
        >
          {data.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
          <LabelList
            dataKey="description"
            content={<LabelListContent/>}
            fill="#52555F"
          />
        </Bar>

        <XAxis type="number" hide={true} />
        <YAxis dataKey="description" type="category" scale="band" hide={true} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MobileCharts;