const data = [
  {
    country: "China",
    city: "Beijing",
    weather: "Cloudy",
    icon: "🌧️",
  },
  {
    country: "USA",
    city: "California",
    weather: "Windy",
    icon: "🌬️",
  },
  {
    country: "Dubai",
    city: "Arab Emirates",
    weather: "Mostly Sunny",
    icon: "⛅",
  },
];

export default function OtherCities() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>Other Cities</div>
        <div className="underline hover:cursor-pointer">See All</div>
      </div>
      <div>
        <div>
          {data.map(({ country, city, weather, icon }) => (
            <div
              key={city}
              className="flex flex-row items-center justify-between py-5"
            >
              <div className="flex flex-col gap-5">
                <div className="text-amber-300 bg-amber-500 w-auto rounded-full px-5">
                  {country}
                </div>
                <div className="text-2xl">{city}</div>
                <div className="">{weather}</div>
              </div>
              <div className="text-4xl">{icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
