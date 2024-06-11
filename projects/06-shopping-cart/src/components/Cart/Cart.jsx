import { useId } from "react"
import './Cart.css'
import { CartIcon, ClearCartIcon } from "../Icons/Icons"
import { useCart } from "../../hooks/useCart/useCart.js"

function CartItem({thumbnail, price, title, quantity, addToCart, decreaseToCart }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title} />
            <div>
                <strong>title</strong> - {price}
            </div>

            <footer>
                <small>
                    qty:{quantity}
                </small>
                <div>
                <button onClick={addToCart}>+</button>
                <button onClick={decreaseToCart}>-</button>
                </div>
                
            </footer>
        </li>
    )
}


export function Cart() { 
    const cartCheckBoxId = useId()
    const { cart, addToCart, decreaseToCart, clearCart } = useCart()

    return (
        <>
            <label htmlFor={cartCheckBoxId} className="cart-button">
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckBoxId} hidden />
            <aside className="cart">
                <ul>
                    {
                        cart.map(product => (
                            <CartItem
                                key={product.id}
                                {...product}
                                addToCart={() => addToCart(product)}
                                decreaseToCart={()=>decreaseToCart(product)} />
                        ))

                    }
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>

        </>
    )
}