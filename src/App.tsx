import Forecast from "./Components/Forecast";
import Navigation from "./Components/Navigation";
import OtherCities from "./Components/OtherCities";
import Overview from "./Components/Overview";

function App() {
  return (
    <div className="bg-black min-h-auto text-white p-5 font-roboto flex flex-col">
      <div>
        <Navigation />
      </div>
      <div className="forecast my-5">
        <Forecast />
      </div>
      <div className="flex flex-row flex-1 gap-10">
        <div className="overview">
          <Overview />
        </div>
        <div className="other-cities flex-1">
          <OtherCities />
        </div>
      </div>
    </div>
  );
}

export default App;
