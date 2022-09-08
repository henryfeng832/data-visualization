import './App.less';
import TopView from "./components/TopView";
import SalesView from "./components/SalesView";
import BottomView from "./components/BottomView";
import MapView from "./components/MapView";


function App() {
  return (
      <div className="App">
          <TopView />
          <SalesView />
          <BottomView />
          <MapView />
      </div>
  );
}

export default App;
