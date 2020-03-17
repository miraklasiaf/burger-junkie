export default (state, action) => {
  switch (action.type) {
    case 'SET_INGREDIENTS':
      return {
        ...state,
        loading: false,
        ingredients: action.payload,
      }
    case 'SET_INGREDIENTS_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction._id !== action.payload,
        ),
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      throw new Error()
  }
}
