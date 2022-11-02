import { AiFillStar } from 'react-icons/ai';

export default function Item() {
  return (
    <div className="w-[14rem] h-[25rem] bg-white flex flex-col p-3 justify-between drop-shadow-md">
      <div className="h-[50%] bg-gray-50 rounded-sm">
        <img src="https://images.samsung.com/is/image/samsung/p6pim/br/sm-a736blggzto/gallery/br-galaxy-a73-5g-a736-sm-a736blggzto-532080416?$650_519_PNG$" alt="" className="self-center alig"/>
      </div>

      <div className="h-[25%] flex flex-col m-y-0 p-0">
        <h1 className="font-semibold text-lg leading-5">Smartfone Sempresung Univer 3, 5.5 Pol, 5G</h1>
        <p className="text-sm flex items-center gap-[2px]">
          <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>2304 avaliações</p>
        <h1 className="font-bold text-lg">R$ 3499,89</h1>
        <p className="text-sm">com pix</p>
      </div>

      <button className="h-[12%] bg-secundary rounded-md p-2 text-white">adicionar ao carrinho</button>
    </div>
  )
}