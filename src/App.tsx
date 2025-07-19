import { useState } from 'react';
import { Navbar } from './components/Navbar'
import './App.css'

function App() {

  const [pesos, setPesos] = useState<number>(0);
  
  const convertir = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(pesos)
  }

  const limpiar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPesos(0);
    console.log("Input Limpiado");
  }

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-screen'>
        <form onSubmit={(e) => convertir(e)} className='flex flex-col items-center justify-center gap-4  bg-white rounded-2xl shadow-lg h-80 w-100'>
          <input onChange={(e) => setPesos(parseFloat(e.target.value) || 0)} className="w-2xs h-16 text-center rounded-2xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950" type="number" name="" id="" placeholder='Ingrese la cantidad en pesos' value={pesos}/>
          <div className='flex gap-4'>
            <button  className='bg-blue-950 text-white rounded-2xl h-14 w-40 hover:bg-blue-800 cursor-pointer' type='submit'>Convertir</button>
            <button onClick={(e) => limpiar(e)} className='bg-blue-950 text-white rounded-2xl h-14 w-40 hover:bg-blue-800 cursor-pointer' type='button' value={pesos}>Limpiar</button>
          </div>
        </form>
        <div>
          <h2 className='text-2xl text-blue-950 mt-4'>Resultado:</h2>
          <p className='text-xl text-blue-950'>0 USD</p>
        </div>
      </div>
    </>
  )
}

export default App
