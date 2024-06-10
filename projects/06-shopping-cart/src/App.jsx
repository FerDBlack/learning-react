import { useState } from "react"
import { Products } from "./components/Products/Products.jsx"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { IS_DEVELOPMENT } from "./config.js"
import { useFilters } from "./hooks/useFilters/useFilters.js"
import { Cart } from "./components/Cart/Cart.jsx"
import { CartProvider } from "./context/Cart/cart.jsx"

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>

      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
