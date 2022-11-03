import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiFillAppstore, AiOutlineLogin, AiOutlineHeart } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'

export default function() {
  return (
    <div className="flex justify-center h-[5rem] w-full">
      <header className="flex justify-center h-[5rem] w-[1400px] bg-white px-10 z-10 invisible sm:invisible md:invisible lg:visible">

        <div className='flex justify-between items-center h-full w-full'>

          <div className='flex items-center gap-4'>
            <h1>
              <DiReact color="#317fd4" size={35}/>
            </h1>
            <h1 className='text-primary'>Technology Web Store</h1>
          </div>

          <ul className='flex gap-7 items-center'>
            
            <li className='flex items-center gap-3'>
              <input type="text" placeholder='o que deseja?' className='w-[20rem] outline outline-1 outline-gray-200 rounded-lg px-4 py-2'/>
              <AiOutlineSearch size={25}/>
            </li>

            <li>
              <AiOutlineHeart size={25}/>
            </li>

            <Link className='flex gap-2 py-2 px-4 rounded-md bg-secundary text-white' to="/cart">
                <AiOutlineShoppingCart size={25}/>
                Carrinho
              </Link>
            

            <li className='flex gap-2 py-2 px-4 rounded-md bg-secundary text-white self-end'>
              entrar
              <AiOutlineLogin size={25}/>
              </li>
          </ul>

        </div>
      </header>
    </div>
  )
}