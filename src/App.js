import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ParentComponent from './pages/Parent';
import TemplateComponent from "./pages/test/Test.jsx"
import TripPlanner from './pages/tripPlanner/TripPlanner';
// import Chatbot from "./components/Bot/Bot.jsx"
import PlanTrip from './pages/planTrip/PlanTrip';
import Payment201 from './pages/Payment201';
import Payment202 from './pages/Payment202';

// import MapPage from "./pages/mapPage/MapPage";
// import TrafficMap from './pages/trafficPage/TrafficPage';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
         
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Chatbot />} /> */}
            <Route path="/explore"element={<TemplateComponent/>}/>
            <Route path="/tripPlanner"element={<TripPlanner/>}/>
            <Route path="/planTrip"element={<PlanTrip/>}/>
            <Route path="/payment/201"element={<Payment201/>}/>
            <Route path="/payment/202"element={<Payment202/>}/>
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
