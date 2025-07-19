import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar'
import './App.css'

type DolarApiResponseType = {
  compra: number;
  fechaActualizacion: string;
  moneda: string;
  nombre: string;
  venta: number;
}

function App() {

  const [pesos, setPesos] = useState<number>(0);
  const [dolar, setDolar] = useState<DolarApiResponseType | null >(null);
  const [conversion, setConversion] = useState<string>("");
  
  const convertir = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  }

  const limpiar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPesos(0);
    setConversion("")
  }

  const fetchDolar = async () => {
    try {
      const response = await fetch('https://dolarapi.com/v1/dolares/oficial');
      const data = await response.json();
      setDolar(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDolar();
  },[]);


  const pesosADolar = () => {
    const venta = dolar?.venta || 0;
    const resultado = (pesos / venta).toFixed(2);
    setConversion(resultado)
  }

  const convertirFecha = () => {
    if (dolar) {
      const original = dolar.fechaActualizacion;
      const [fecha, horaConMs] = original.split("T");
      const hora = horaConMs.slice(0, 8);
      const fechaFinal = ` ${fecha} - ${hora} hs `;
      return fechaFinal;
    }
    return '';
  }

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-screen'>
        <form onSubmit={(e) => convertir(e)} className='flex flex-col items-center justify-center gap-4  bg-white rounded-2xl shadow-lg h-80 w-100'>
          <input onChange={(e) => setPesos(parseFloat(e.target.value) || 0)} className="w-2xs h-16 text-center rounded-2xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950" type="number" name="" id="" placeholder='Ingrese la cantidad en pesos' value={pesos}/>
          <div className='flex gap-4'>
            <button  className='bg-blue-950 text-white rounded-2xl h-14 w-40 hover:bg-blue-800 cursor-pointer' type='submit' onClick={() => pesosADolar() }>Convertir</button>
            <button onClick={(e) => limpiar(e)} className='bg-blue-950 text-white rounded-2xl h-14 w-40 hover:bg-blue-800 cursor-pointer' type='button' value={pesos}>Limpiar</button>
          </div>
          {
            dolar? <span className='text-gray-500 mt-5 text-2'>Última Actualización: {convertirFecha()}</span> : ''
          }
        </form>
        {
          conversion !== "" ? <div>
          <h2 className='text-2xl text-blue-950 mt-4'>Resultado:</h2>
          <p className='text-xl text-blue-950'>{conversion} USD</p>
        </div> : ''
        }

      </div>
    </>
  )
}

export default App
