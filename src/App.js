import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs';
import Main from './component/Main';
import Header from './include/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
