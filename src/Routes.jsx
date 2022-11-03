import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export function AppRoutes() {
  return (
    <Router>
      <Routes >
        <Route path="/webapp" element={<Home></Home>}/>
        <Route path="/cart" element={<Cart></Cart>}/>
      </Routes>
    </Router>
  )
}