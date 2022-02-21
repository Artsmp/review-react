import { createStore } from "redux";

const reducer = (state, action) => {
    let newState = { ...state }
    console.log(state, action);
    switch (action.type) {
        case 'TEST':
            newState.text = newState.text + action.payload
            break;
        default:
            break;
    }
    return newState
}

const store = createStore(reducer, { text: 'initial state' })

export default store