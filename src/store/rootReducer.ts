export default function rootReducer(state, action) {
    if (action.type === 'UPDATE_GREETING') {
            return {
                ...state,
                greeting: action.payload
            }
    }
    return state;
}