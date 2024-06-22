export const cartListReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let foundProduct = state.find(item => item.id === action.payload.id)
            if (!foundProduct) {
                return [...state, { ...action.payload, count: 1 }]
            } else {
                foundProduct.count++;
                return [...state]
            }
        case "COUNT_INCREAMENT":
            action.payload.count++
            return [...state]
        case "COUNT_DECREAMENT":
            if (action.payload.count > 1) {
                action.payload.count--
            } else {
                return state.filter(item => item.id !== action.payload.id)
            }
            return [...state]
        case "REMOVE_FROM_CART":
            return state.filter(item => item.id !== action.payload);
        case "EMPTY_CART":
            return []
        default:
            return state
    }
} 