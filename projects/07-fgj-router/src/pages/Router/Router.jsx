
import { useEffect, useState } from 'react'
import { EVENTS } from '../../const.js'
import { match } from 'path-to-regexp'

function Default404Error() {
  return (
    <>
      <h1>Error 404</h1>
      <h3>Page not found</h3>
    </>
  )
}

export function Router({ routes = [], defaultComponent: DefaultComponent = Default404Error() }) {
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


  let routeParams = {}

  
  const Page = routes.find(({ path }) => {


    if (path === currentPath) {
      return true
    }

    const matchURL = match(path, { decode: decodeURIComponent })
    const matched = matchURL(currentPath)

    if(!matched) return false

    routeParams = matched.params
    return true

  })?.Component
  console.log(Page)

  return Page 
    ? <Page routeParams={routeParams} /> 
    : <DefaultComponent routeParams={routeParams} />
}

