import {  Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs';
import Directions from './component/Directions';
import Main from './component/Main';
import Promotion from './component/Promotion';
import Review from './component/Review';
import SignUp from './component/SignUp';
import Header from './include/Header';
import ScrollToTop from './include/ScrollToTop';

function App() {
  return (
    <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/directions" element={<Directions />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/promotion" element={<Promotion />}></Route>
          <Route path="/promotion/reg" element={<Promotion />}></Route>
          <Route path="/review" element={<Review />}></Route>
        </Routes>
    </div>
  );
}

export default App;
