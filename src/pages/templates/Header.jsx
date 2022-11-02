import { AiOutlineSearch, AiOutlineShoppingCart, AiFillAppstore } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'

export default function() {
  return (
    <div className="flex justify-center h-[5rem] w-full">
      <header className="flex justify-center h-[5rem] w-[1400px] bg-white px-10 z-10 invisible sm:invisible md:invisible lg:visible">

        <div className='flex justify-between items-center h-full w-full'>

          <h1>
            <DiReact color="#317fd4" size={35}/>
          </h1>

          <ul className='flex gap-7 items-center'>
            <li className='flex items-center gap-3'>
              <input type="text" placeholder='o que deseja?' className='w-[20rem] outline outline-1 outline-gray-200 rounded-lg px-4 py-2'/>
              <AiOutlineSearch size={25}/>
            </li>

            <li className='flex gap-2 py-2 px-4 rounded-md bg-secundary text-white'>
              <AiOutlineShoppingCart size={25}/>
              Carrinho
            </li>
            

            <li className='flex gap-2 py-2 px-4 rounded-md bg-secundary text-white self-end'>entrar</li>
          </ul>

        </div>
      </header>
    </div>
  )
}