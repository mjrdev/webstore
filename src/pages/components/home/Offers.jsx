import { ItemOffer } from './items/item'

export default function() {
  return (
    <div className="flex w-full justify-center p-spacing-y ">

      <div className="flex flex-col justify-center w-[600px] bg-gray-100 drop-shadow-md">
        <div className="flex justify-center items-center pt-[2rem]">
          <h1 className="text-[2.5rem] font-bold leading-10 text-center">Ofertas por tempo limitado!<br/>Termina em 28:34m</h1>
        </div>

        <article className="  row-span-2 flex justify-evenly py-10">
          <ItemOffer />
        </article>
      </div>

      <aside className="h-100 w-[300px] bg-violet-400 drop-shadow-md">
          BANNER DE OFERTAS
      </aside>
    </div>
  )
}