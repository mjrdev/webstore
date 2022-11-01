import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillAppstore } from 'react-icons/ai';

export default function() {
  return (
    <header className="h-[5rem] bg-white mx-10">
        <div className='flex justify-between items-center h-full'>
          <h1>
            <AiFillAppstore color="#317fd4" size={35}/>
          </h1>
          <ul className='flex gap-7 items-center'>
            <li className='flex items-center gap-3'>
              <input type="text" placeholder='o que deseja?' className='outline outline-1 outline-gray-200 rounded-lg p-2'/>
              <AiOutlineSearch size={25}/>
            </li>

            <li>compras</li>

            <li className='py-1 px-4 rounded-md bg-sky-300 text-white'>entrar</li>
          </ul>
        </div>
      </header>
  )
}