import { AiOutlineMenu } from 'react-icons/ai';

export default function() {
  return (
    <div className="flex justify-center h-[3rem] bg-primary-dark">
      <ul className="flex justify-start list-none items-center w-[1400px] px-10 gap-x-10">
        <li className='flex gap-2 items-center  py-[0.5px] text-white'>
          <AiOutlineMenu/>
          <button>Categorias</button>
        </li>

        <li className=' py-[0.5px] text-white'>
          <button>Promoções</button>
        </li>
        <li className=' py-[0.5px] text-white'>
          <button>Fretes</button>
        </li>
        <li className=' py-[0.5px] text-white'>
          <button>Atendimento</button>
        </li>

      </ul>
    </div>
  )
}