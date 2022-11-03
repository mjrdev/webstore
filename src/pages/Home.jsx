
import Header from './templates/Header';
import Options from './templates/options';

import { Add, Category, ProductList, Offers, Capture, Bottom } from './components/home/index';

export default function App() {
  return (
    <div>

      <Header/>
      <Options/>
      <main className="w-full justify-center bg-gray-50">
        <Add/>
        <ProductList className=""/>
        <Category />
        <Offers/>
        <Capture />
        <Bottom />
      </main>
      
    </div>
  )
}