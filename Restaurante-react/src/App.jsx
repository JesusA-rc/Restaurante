import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import { MenuComidas } from './Pages/MenuComidas/MenuComidas';
import Franchises from './Pages/Franchises/Franchises';

const queryClient = new QueryClient();

function App() 
{
  return (
    <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />

          <Route path="/menu" element={<Menu />} />

          <Route path="/menucomidas" element={<MenuComidas />} />

          <Route path="/franchises" element={<Franchises />} />
        </Routes>
    </QueryClientProvider>
  )
}

export default App
