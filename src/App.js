import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs';
import Directions from './component/Directions';
import Login from './component/Login';
import Main from './component/Main';
import Header from './include/Header';
import ScrollToTop from './include/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/directions" element={<Directions />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
