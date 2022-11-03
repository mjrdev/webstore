
export default function() {
  return (
      <div className=" bg-primary-dark text-white p-spacing-y">
        <div className="flex justify-center gap-x-10">
        
          <ul>
            <h1 className="font-bold">Departamentos</h1>
            <li className="text-[10pt]">Eletrônicos</li>
            <li className="text-[10pt]">Perifericos</li>
            <li className="text-[10pt]">Telefones e Celulares</li>
            <li className="text-[10pt]">Computadores</li>
            <li className="text-[10pt]">TVs e Aúdio</li>
          </ul>

          <ul>
            <h1 className="font-bold">Politica</h1>
            <li className="text-[10pt]">Sobre nós</li>
            <li className="text-[10pt]">Termos de compromisso</li>
            <li className="text-[10pt]">Reembolso</li>
            <li className="text-[10pt]">Devoluções</li>
          </ul>

          <ul>
            <h1 className="font-bold">Minha Conta</h1>
            <li className="text-[10pt]">Meus pedidos</li>
            <li className="text-[10pt]">Lista de desejo</li>
            <li className="text-[10pt]">Remover Newsletter</li>
            <li className="text-[10pt]">Reembolso</li>
          </ul>

          <ul>
            <h1 className="font-bold">Redes Sociais</h1>
            <li className="text-[10pt]">Instagram</li>
            <li className="text-[10pt]">Facebook</li>
            <li className="text-[10pt]">Twitter</li>
            <li className="text-[10pt]">LinkenIn</li>
          </ul>

        </div>
        <p className="flex flex-col justify-center items-center h-full pt-[3rem] font-semibold">
          Contruido com Javascript/React/TailwindCSS por Manoel Júnior
          <a href="http://github.com/mjrdev" className="text-primary">github.com/mjrdev</a>
        </p>
      </div>
  )
}