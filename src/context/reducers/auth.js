export default (state, action) => {
    switch (action.type) {
        case 'AUTH_START': 
          return {
            ...state,
            loading: action.paylaod
          }
        case 'AUTH_SUCCESS': 
          return {
            ...state,
            token: action.idToken,
            userId: action.userId,
            loading: false
          }
        case 'AUTH_FAILED': 
          return {
              ...state,
              error: action.error,
              loading: false
          }
        case 'AUTH_LOGOUT': 
          return {
              ...state,
              token: null,
              userId: null
          }
        case 'AUTH_REDIRECT':
          return {
              ...state,
              redirectPath: action.payload
          }
        default: throw new Error(`Unhandled action type: ${action.type}`)
    }
}