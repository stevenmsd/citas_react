function App() {
/* Antes del return es bueno agregar funciones para realizar tareas*/
const sumar =()=>{
  console.log(2+2)
}
sumar()

/* Se puede declararles variables y mostrar en el front */
const edad =18;
/* Todas las funciones deben tener un return */
/* En el nivel mas alto solo se devuelve un elemento
  Como en este codigo devuelve solo un div
*/
  return (
    /* Tambien se puede devolver un fragment '<> </>' */
    <div>
      
    {/* Las etiquedas tienen apertura y 
      cierra es obligatoria 
      Las etiquetas que no tienen cierrre deben contar con un /
      al final de la etique
      */}
      <h1>Hola Mundo</h1>
      <input type="text" />

      {/* Se pone las llaves para indicar que es codigo de JavaScript */}
      {1+1}

      {edad>=18?  <h1>Eres Mayor de edad</h1>: <h1>Eres menor de edad</h1>}

      <h1>{'Hola mundo'.toUpperCase()}</h1>

      <h2>{edad}</h2>
    </div>
  )
}

export default App
