import Item from './Item';


export default function() {
  return (
    <div className="w-full max-w-[1900px] justify-end flex m-spacing-y h-[70vh] my-10">

      <section className=" overflow-y-scroll h-[80vh] border-r border-gray-300 flex flex-col px-10">
        <h1 className='font-bold text-[20pt]'>Meu Carrinho</h1>
        <div className='flex flex-col gap-y-5'>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>

      <aside className="w-[35%] top-0 flex flex-col p-5 gap-y-3">
        <div className='bg-gray-100 p-5 flex flex-col gap-y-2 w-[20rem]'>
          <h1 className='self-center font-medium text-[14pt]'>Resumo da minha compra</h1>

          <div className='flex flex-col justify-between text-gray-500 '>
            <h2>Total de produtos: <strong>1</strong></h2>
            <h2>subtotal: <strong>R$1200,00</strong></h2>
            <h2>frete: <strong>R$19,98</strong></h2>
          </div>

          <div className='flex justify-end border-t border-b py-4 text-gray-500 '>
            <h1>total: <strong>R$1219,98</strong></h1>
          </div>

          <div className='flex flex-col w-full justify-center py-4 text-gray-500 ' >
            <h1 className='font-medium text-[12pt]'>Calcular Frete</h1>
            <input type="text" className='h-[2rem] border-none rounded-md w-[60%]' placeholder='CEP'/>
          </div>

          <button className='w-[50%] bg-green-500 py-2 px-4 text-white self-center'>Comprar</button>
        </div>
      </aside>
    </div>
  )
}