import { useState } from 'react';
import Header from './components/cart/Header';
import BodyCart from './components/cart/BodyCart'

export default function() {
  const [cartVoid, setCartVoid] = useState(true)

  return (
    <div>
      <Header />
      <BodyCart className="sticky"/>
    </div>
  )
}