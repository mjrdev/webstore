import { AiFillStar } from 'react-icons/ai';

export function Item() {
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

export function ItemOffer() {
  return (
    <div className="w-[70%] h-[30rem] bg-white flex flex-col p-6 justify-between drop-shadow-2xl">
      <div className="h-[55%] bg-gray-50 rounded-sm flex justify-center">
        <img src="https://images.samsung.com/is/image/samsung/p6pim/br/sm-a736blggzto/gallery/br-galaxy-a73-5g-a736-sm-a736blggzto-532080416?$650_519_PNG$" alt="" className="self-center alig w-[80%]"/>
      </div>

      <div className="flex flex-col m-y-0 p-0">
        <h1 className="font-semibold text-lg leading-5">Smartfone Sempresung Univer 3, 5.5 Pol, 5G</h1>
        <p className="text-sm flex items-center gap-[2px]">
          <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>2304 avaliações</p>
        <h1 className="font-bold text-lg">de R$ 4400,12</h1>
        <h1 className="font-bold text-lg">por apenas R$ 3889,89 no pix</h1>
        <p className="text-sm">ou 12x de R$375,00</p>
      </div>

      <button className="h-[12%] bg-secundary rounded-md p-2 text-white">adicionar ao carrinho</button>
    </div>
  )
}