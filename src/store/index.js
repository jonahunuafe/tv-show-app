import { createStore } from 'redux';


const initialState = { show: [] };

const showReducer = (state = initialState, action) => {
    if(action.type === 'displayShow') {
        return {
            counter: state.show = 'trying',
        }
    }

    return state;
}


const store = createStore(showReducer);
store.dispatch({ type: 'text'});

export default store;




