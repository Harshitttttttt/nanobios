import { useState } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Sun",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Mon",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Tue",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Wed",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Thurs",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Fri",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

const tabs: TabKey[] = ["Today", "Tomorrow", "Next 7 Days"];
const switcher = ["Forecast", "Air Quality"];

const forecastData = {
  Today: [{ day: "FRI", temp: "10°", icon: "🌧️" }],
  Tomorrow: [{ day: "SAT", temp: "15°", icon: "⛈️" }],
  "Next 7 Days": [
    { day: "SAT", temp: "15°", icon: "⛈️" },
    { day: "SUN", temp: "15°", icon: "⛈️" },
    { day: "MON", temp: "11°", icon: "☁️" },
    { day: "TUE", temp: "10°", icon: "🌧️" },
    { day: "WED", temp: "12°", icon: "🌥️" },
    { day: "THU", temp: "10°", icon: "🌫️" },
    { day: "FRI", temp: "13°", icon: "⛅" },
  ],
};

type TabKey = keyof typeof forecastData;

export default function Forecast() {
  const [activeTab, setActiveTab] = useState<TabKey>("Today");
  const [activeMode, setActiveMode] = useState("Forecast");

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
              }}
              className={`transition-all ${
                activeTab === tab
                  ? "text-white"
                  : "text-t1 hover:text-white hover:cursor-pointer"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row rounded-full">
            {switcher.map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  setActiveMode(mode);
                }}
                className={`px-4 py-2 transition-all duration-200 text-xs ${
                  activeMode === mode ? "bg-b1 text-black" : "bg-grey text-t1"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
          <div className="mx-5">Chance of rain</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row gap-1 my-5">
          {forecastData[activeTab].map(({ day, temp, icon }) => (
            <div
              key={day}
              className="flex flex-col items-center justify-center w-30 h-45 bg-grey rounded-full gap-5 ring"
            >
              <div className="border-b-1">{day}</div>
              <div className="px-10">{icon}</div>
              <div className="">{temp}</div>
            </div>
          ))}
        </div>
        {activeTab === "Next 7 Days" ? (
          <>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="amt"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
              </ComposedChart>
            </ResponsiveContainer>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
