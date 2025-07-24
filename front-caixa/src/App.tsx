import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Index';
import CardInfo from './Pages/CardInformation/Index';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/info/:NumeroImovel`} element={<CardInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
