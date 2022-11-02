import Item from './items/item'

export default function() {
  return (
    <div className="flex w-full justify-center p-spacing-y">

      <div className="flex flex-col justify-center w-[600px]">
        <div className="">
          <h1 className="text-[2.5rem] font-bold">Ofertas por tempo limitado!<br/>Termina em 28:34m</h1>
        </div>

        <article className=" bg-green-200 row-span-2 flex justify-evenly py-10">
          <Item /> <Item />
        </article>
      </div>

      <aside className="h-100 w-[300px] bg-violet-400 ">
          D
      </aside>
    </div>
  )
}