import { useContext, useState } from "react"
import { Products } from "./components/Products.jsx"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { IS_DEVELOPMENT } from "./config.js"
import { FiltersContext} from "./context/filters.jsx"

function useFilters() {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

  const FiltersContext = useContext(FiltersContext)
  const setFilters = () => {}
  
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= FiltersContext.minPrice &&
        (
          FiltersContext.category === 'all' ||
          product.category === FiltersContext.category
        )
      )
    })
  }
  return { filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
