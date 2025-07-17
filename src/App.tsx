import './App.css'

function App() {
  

  return (
    <>
      <h1 className='bg-blue-950 text-white'>Dolarito App</h1>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <input className="border w-2xs h-15 text-center rounded-2xl" type="number" name="" id="" placeholder='Ingrese la cantidad en pesos'/>
          <button className='bg-blue-950 text-white rounded-2xl h-14 w-40 hover:bg-blue-800 cursor-pointer'>Convertir</button>
        </div>
        <div>
          <h2 className='text-2xl text-blue-950 mt-4'>Resultado:</h2>
          <p className='text-xl text-blue-950'>0 USD</p>
        </div>
      </div>
    </>
  )
}

export default App
