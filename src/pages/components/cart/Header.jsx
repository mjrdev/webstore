import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiFillAppstore, AiOutlineLogin, AiOutlineHeart } from 'react-icons/ai';
import { DiReact } from 'react-icons/di'

import { useNavigate } from 'react-router-dom';

export default function() {

  const navigate = useNavigate();

  return (
    <div className="flex justify-center h-[5rem] w-full bg-primary">
      <header className="flex justify-start h-[5rem] w-[1400px] px-10 z-10 invisible sm:invisible md:invisible lg:visible">

        <div className='flex justify-evenly items-center h-full w-full'>

          <div className='flex justify-self-start items-center gap-4' onClick={() => navigate('/')}>
            <h1>
              <DiReact color="#ffffff" size={35}/>
            </h1>
            <h1 className='text-white'>Technology Web Store</h1>
          </div>

          <ul className='flex gap-7 justify-self-end items-center'>
            
            <li className='flex items-center gap-3'>
              <input type="text" placeholder='o que deseja?' className='w-[20rem] outline outline-1 outline-gray-200 rounded-lg px-4 py-2'/>
              <AiOutlineSearch color="#ffffff" size={25}/>
            </li>

            <li>
              <AiOutlineHeart color="#ffffff" size={25}/>
            </li>
            
            <li className='flex gap-2 py-2 px-4 rounded-md bg-white text-black self-end' onClick={() => navigate('/login')}>
              entrar
              <AiOutlineLogin size={25}/>
              </li>
          </ul>

        </div>
      </header>
    </div>
  )
}