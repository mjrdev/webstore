export default function() {
  return (
    <div className="p-spacing-y bg-primary flex justify-center">
      <section className=" w-small flex flex-col items-center justify-center">
        <h1 className="text-[20pt] text-white font-bold">RECEBA OFERTAS EXCLUSIVAS E ÚNICAS:</h1>
        <div className="w-full flex justify-center gap-5 px-10 flex-wrap">
          <input type="text" className="w-[35%] rounded-md px-4 h-[3rem]" placeholder="Seu nome" />
          <input type="text" className="w-[35%] rounded-md px-4 h-[3rem]" placeholder="Seu email" />
          <input type="button" className="w-[20%] rounded-md px-4 h-[3rem] bg-primary-dark text-white font-bold" value="Cadastrar" />
        </div>
      </section>
    </div>
  )
}