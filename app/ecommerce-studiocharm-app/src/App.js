import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login } from './components/Screens';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
