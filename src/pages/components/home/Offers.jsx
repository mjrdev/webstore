import { ItemOffer } from './items/item';
import products from './products';

export default function() {

  const product = products[0]

  return (
    <div className="flex w-full justify-center p-spacing-y ">

      <div className="flex flex-col justify-center w-[600px] bg-gray-100 drop-shadow-md">
        <div className="flex justify-center items-center pt-[2rem]">
          <h1 className="text-[2.5rem] font-bold leading-10 text-center">Ofertas por tempo limitado!<br/>Termina em 28:34m</h1>
        </div>

        <article className="  row-span-2 flex justify-evenly py-10">
          <ItemOffer name={product.name} price={product.price} img={product.img} asses={product.asses} key={product.name}/>
        </article>
      </div>

      <aside className="h-100 w-[300px] drop-shadow-md bg-ofertas">
          
      </aside>
    </div>
  )
}