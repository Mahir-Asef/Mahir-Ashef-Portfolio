import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home/Home';
import BikeZone from './components/BikeZone/BikeZone';
import TravelPro from './components/TravelPro/TravelPro';
import NavBar from '../src/components/Home/NavBar/NavBar';
import UnionMedical from './components/UnionMedical/UnionMedical';
import CentralUniversity from './components/CentralUniversity/CentralUniversity';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
     <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/BikeZone' element={<BikeZone></BikeZone>}></Route>
        <Route path='/TravelPro' element={<TravelPro></TravelPro>}></Route>
        <Route path='/UnionMedical' element={<UnionMedical></UnionMedical>}></Route>
        <Route path='/CentralUniversity' element={<CentralUniversity></CentralUniversity>}></Route>
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
