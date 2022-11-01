import Item from './components/item'
import Header from './templates/Header'

import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillAppstore } from 'react-icons/ai';

export default function App() {
  return (
    <div className="">
      <Header/>

      <main className="h-[100%] w-full justify-center">
        <div className="h-[10rem] bg-sky-600 flex justify-center items-center text-[3rem] font-bold text-white">
          <h1 className='animate-pulse'>THE BEST PRICES IS HERE AND NOW!</h1>
        </div>


        <section className="h-[100%] w-[1400px] self-center bg-white flex justify-center gap-8 flex-wrap my-10 m-auto">
          <Item/><Item/><Item/><Item/><Item/><Item/><Item/><Item/>
        </section>
      </main>

      <main className="h-[10rem] bg-sky-600">

      </main>
    </div>
  )
}