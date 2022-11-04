
import { useState } from 'react';
import { MdOutlineRemoveCircle, MdOutlineAddCircle } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

export default function(props) {


  let img = 'https://images.samsung.com/is/image/samsung/p6pim/br/sm-a736blggzto/gallery/br-galaxy-a73-5g-a736-sm-a736blggzto-532080416?$650_519_PNG$';

  const [select, setSelect] = useState(true)

  function handleSelect(e) {
    console.log(e.target);
  }

  return (
    <div className="flex flex-col w-full border max-w-[40rem] h-[15rem] rounded-md" >
      <div className="h-[70%] flex">
        <img src={img} alt="" className="w-1/3"/>
        <div className="w-2/3 p-4" >
          <h1 className="font-semibold text-[15pt] leading-5">Smartfone Samsung Galaxy 3, 5.5 Pol, 5G, 128GB, 3GB RAM</h1>
          <p className="leading-4 my-3">
            Cor: {typeof(select)} <br/>
            Capacidade: 128GB
          </p>
          <span className='flex items-center gap-2 justify-between'>
            <div className='flex items-center gap-2'>
              <input type="checkbox" onClick={handleSelect}/>Adicionar
            </div>
            <FaTrashAlt className='cursor-pointer'/>
          </span>
        </div>
      </div>

      <div className="h-[30%] bg-primary flex justify-evenly items-center text-white">
        <span className="font-bold text-[14pt]">Valor: R$349,99</span>
        <h1 className='font-bold text-[12pt]'>Modelo: Branco</h1>

        <span className="flex items-center gap-2 font-bold">
          <MdOutlineRemoveCircle className='cursor-pointer' size={25}/>
          Unidade: 1
          <MdOutlineAddCircle className='cursor-pointer' size={25}/>
          <button></button>
        </span>
      </div>
    </div>
  )
}