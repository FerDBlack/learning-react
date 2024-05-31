import { useRef } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState()
  const { movies } = useMovies()

  const handleClick = (event) => {
    event.preventDefault()

    // Para leer varios inputs.
    //const fields = Object.fromEntries(new window.FormData(event.target))

  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  return (
    <div>
      <header className='page'>
        <h1>Buscador de películas</h1>
        <form action="" className="form" onSubmit={handleClick}>
          <input onChange={handleChange} value={query} name='query' type="text" placeholder='Avengers,Star wars' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
