import { useState } from "react"
import { Products } from "./components/Products/Products.jsx"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { IS_DEVELOPMENT } from "./config.js"
import { useFilters } from "./hooks/useFilters/useFilters.js"

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
{
    console.log(products,filteredProducts)

}      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
