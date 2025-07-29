import {
  Line,
  LineChart,
  ResponsiveContainer,
  Pie,
  PieChart,
  BarChart,
  Bar,
} from "recharts";

const o2data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 216 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const barData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const carData = [
  {
    name: "Page A",
    uv: 1200,
    pv: 3400,
    amt: 1800,
  },
  {
    name: "Page B",
    uv: 500,
    pv: 2398,
    amt: 1210,
  },
  {
    name: "Page C",
    uv: 3200,
    pv: 4800,
    amt: 3290,
  },
  {
    name: "Page D",
    uv: 1780,
    pv: 2908,
    amt: 1000,
  },
  {
    name: "Page E",
    uv: 890,
    pv: 2800,
    amt: 1181,
  },
  {
    name: "Page F",
    uv: 1390,
    pv: 1800,
    amt: 1500,
  },
  {
    name: "Page G",
    uv: 2490,
    pv: 3300,
    amt: 1100,
  },
];

export default function Overview() {
  return (
    <div className="flex flex-col w-[70vw]">
      <div>Today's Overview</div>
      <div className="grid grid-rows-2 grid-cols-2 gap-5">
        <div className="o2 bg-grey rounded-xl p-4 flex flex-col">
          <span>
            O<sub>2</sub> Concentration
          </span>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={o2data}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#ED33B9"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="uv bg-grey rounded-xl p-4 flex flex-col">
          <span>UV Index</span>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#EAE0CC"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="parking bg-grey rounded-xl p-4 flex flex-col gap-20">
          <span>Car Park Vacancy For Private Car</span>
          <ResponsiveContainer width={"100%"} height={300}>
            <BarChart width={150} height={40} data={carData}>
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="wind bg-grey rounded-xl p-4 flex flex-col gap-20">
          <span>Wind Status</span>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart width={150} height={40} data={barData}>
              <Bar dataKey="uv" fill="#F72C25" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
