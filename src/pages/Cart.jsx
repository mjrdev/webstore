import { useState } from "react";

export default function() {
  const [cartVoid, setCartVoid] = useState(true)

  return (
    <div>
      <h1>ok</h1>
      {
        cartVoid ?
        <h1>cart void</h1> :
        <h1>cart</h1>
      }
    </div>
  )
}