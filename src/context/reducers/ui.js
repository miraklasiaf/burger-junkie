export default (state, action) => {
    switch (action.type) {
        case 'SET_SIDEBAR':
            return {
                ...state,
                isSidebarActive: action.payload
            }
        default: throw new Error(`Unhandled action type: ${action.type}`)
    }
}
