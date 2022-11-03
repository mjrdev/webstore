import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import notFound from './notFound.jsx';

export function AppRoutes() {
  return (
    <Router>
      <Routes >
        <Route path="*" element={<Home />} />
        <Route path="/webstore" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  )
}