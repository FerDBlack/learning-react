import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { EVENTS } from './const'


function navigate(href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <a href='/about'>Sobre nostros</a>
    </>
  )
}

function AboutPage() {
  return (<>
    <h1>About</h1>
    <div>
      <img src="https://avatars.githubusercontent.com/u/98603521?v=4" alt="img-profile" />
      <p>¡Hola! Me llamo FerDBlack y estoy creando un clon de React Router.</p>
    </div>
    <a href='/'>Home</a>
  </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }

  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
