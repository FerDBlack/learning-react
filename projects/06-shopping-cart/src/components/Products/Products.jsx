import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons/Icons.jsx'
import { useCart } from '../../hooks/useCart/useCart.js'


export function Products({ products }) {
    const { cart, addToCart, removeFromCart, clearCart } = useCart()

    const checkPorductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const isProductInCart = checkPorductInCart(product)

                    return (
                        <li key={product.id}>
                            <img src='{product.thumbnail}' alt={product.title} />
                            <div>
                                <strong>{product.title}</strong>
                            </div>
                            <div>
                                <button
                                    className={
                                        isProductInCart
                                            ? 'remove-cart-btn'
                                            : 'add-cart-btn'}
                                    onClick={() =>
                                        isProductInCart
                                            ? removeFromCart(product)
                                            : addToCart(product)}>
                                    {isProductInCart
                                        ? <RemoveFromCartIcon />
                                        : <AddToCartIcon />
                                    }

                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}