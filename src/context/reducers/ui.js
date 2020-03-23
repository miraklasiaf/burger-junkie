export default (state, action) => {
    switch (action.type) {
        case 'SET_SIDEBAR':
            return {
                ...state,
                isSidebarOpen: action.payload
            }
        case 'SET_MODAL':
            return {
                ...state,
                isModalOpen: action.payload
            }
        default: throw new Error(`Unhandled action type: ${action.type}`)
    }
}
