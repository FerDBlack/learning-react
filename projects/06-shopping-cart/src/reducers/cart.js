
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    DECREASE_TO_CART: 'DECREASE_FROM_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if (productInCartIndex >= 0) {
            const newState = structuredClone(state)
            newState[productInCartIndex].quantity += 1
            updateLocalStorage(newState)
            return newState
        }

        const newState = [
            ...state,
            {
                ...action.payload,
                quantity: 1
            }
        ]

        updateLocalStorage(newState)
        return newState

    },
    [CART_ACTION_TYPES.DECREASE_TO_CART]: (state, action) => {
        const { id } = action.payload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if (productInCartIndex >= 0) {
            const newState = structuredClone(state)
            const product = newState[productInCartIndex];

            if (product.quantity > 1) {
                product.quantity -= 1;
            } else {
                // If the quantity is 1, removing the item
                newState.splice(productInCartIndex, 1);
            }
            updateLocalStorage(newState)
            return newState
        }
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
        const { id } = action.payload
        const newState = state.filter(item => item.id !== id)

        updateLocalStorage(newState)
        return newState
    },
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
        updateLocalStorage([])
        return []
    }
}
export const cartReducer = (state, action) => {
    const { type: actionType } = action
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state, action) : state
}
