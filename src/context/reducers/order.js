export default (state, action) => {
  switch (action.type) {
    case 'FETCH_ORDER_START':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_ORDER_SUCCESS':
      return {
        ...state,
        orders: action.payload,
        loading: true
      }
    case 'FETCH_ORDER_FAILED':
      return {
        ...state,
        loading: false
      }
    case 'PURCHASE_INIT':
      return {
        ...state,
        purchased: false
      }
    case 'PURCHASE_START':
      return {
        ...state,
        loading: true
      }
    case 'PURCHASE_SUCCESS':
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(action.payload)
      }
    case 'PURCHASE_FAILED':
      return {
        ...state,
        loading: false
      }
    default: throw new Error(`Unhandled action type: ${action.type}`)
  }
}
