import {Item} from './items/item';
import products from './products'

export default function() {


  const list = products.map((item, i) => {
    return (
      <Item name={item.name} price={item.price} img={item.img} asses={item.asses} key={i}/>
    ) 
  })
  
  return (
    <section className="max-w-[1400px] flex justify-center gap-8 flex-wrap my-10 m-auto">
        {list}
      </section>
  )
}