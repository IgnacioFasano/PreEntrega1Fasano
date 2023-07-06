import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export default  function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer greeting={'Tu nuevo celular te espera aquí'}/>} />
      <Route path="/category/:id" element={<ItemListContainer greeting={'Tu nuevo celular te espera aquí'}/>} />
      </Routes>
      
    </BrowserRouter>
  );
}
