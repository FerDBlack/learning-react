import './App.css'
import { Router } from './pages/Router/Router.jsx'

import HomePage from './pages/Home/Home.jsx'
import AboutPage from './pages/About/About.jsx'
import SearchPage from './pages/Search/Search.jsx'
import Page404 from './pages/Errors/404/404.jsx'


const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  },

]

function App() {
 

  return (
    <main>
      <Router routes={routes} defaultComponent={Page404} />
     
    </main>
  )
}

export default App
