// shows repository details
import { initialState } from "./state";

export default (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_REPOSITORY':
            return {
                ...state,
                repository: action.payload    
            };
            break;
        default:
            return state;
    }
} 