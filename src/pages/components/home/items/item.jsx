import { AiFillStar } from 'react-icons/ai';

export function Item(props) {

  return (
    <div className="w-[14rem] h-[28rem] bg-white flex flex-col p-3 justify-between drop-shadow-md">
      <div className="h-[50%] bg-gray-50 rounded-sm">
        <img src={props.img} alt="" className="self-center m-auto h-full"/>
      </div>

      <div className="h-[25%] flex flex-col ">
        <h1 className="font-semibold text-[12pt] leading-4">{props.name}</h1>
        <p className="text-sm flex items-center gap-[2px]">
          <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>{props.asses} avaliações</p>
        <h1 className="font-bold text-lg">R$ {props.price}</h1>
        <p className="text-sm">com pix</p>
      </div>

      <button className="h-[12%] bg-secundary rounded-md p-2 text-white">adicionar ao carrinho</button>
    </div>
  )
}

export function ItemOffer(props) {
  return (
    <div className="w-[70%] h-[30rem] bg-white flex flex-col p-6 justify-between drop-shadow-2xl">
      <div className="h-[55%] bg-gray-50 rounded-sm flex justify-center">
        <img src={props.img} alt="" className="self-center h-full"/>
      </div>

      <div className="flex flex-col m-y-0 p-0">
        <h1 className="font-semibold text-lg leading-5">{props.name}</h1>
        <p className="text-sm flex items-center gap-[2px]">
          <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>{props.asses} avaliações</p>
        <h1 className="font-bold text-lg">de <s>R$ {props.price + 600}</s></h1>
        <h1 className="font-bold text-lg">por apenas R${props.price} no pix</h1>
        <p className="text-sm">ou 12x de R${(props.price / 12).toFixed(2)}</p>
      </div>

      <button className="h-[12%] bg-secundary rounded-md p-2 text-white">adicionar ao carrinho</button>
    </div>
  )
}