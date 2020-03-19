const INGREDIENT_PRICES = {
  salad: 1000,
  cheese: 1500,
  meat: 3000,
  bacon: 5000
};

export default (state, action) => {
  switch (action.type) {
    case 'SET_INGREDIENTS':
      return {
        ...state,
        ingredients: action.payload,
        loading: false
      }
    case 'SET_INGREDIENTS_ERROR':
      return {
        ...state,
        error: true
      }
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] + 1
        },
        price: state.price + INGREDIENT_PRICES[action.payload],
    }
    case 'DELETE_INGREDIENT':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] - 1
        },
        price: state.price - INGREDIENT_PRICES[action.payload]
      }
    case 'SET_SIDENAV':
      return {
        ...state,
        isSidenavActive: action.payload
      }
    default: throw new Error(`Unhandled action type: ${action.type}`)
  }
}
