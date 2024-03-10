import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainpage from './components/Mainpage';
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Mainpage />} /> 
          <Route path="login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
