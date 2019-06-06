// list of repositories
import { initialState } from "./state";

export default (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_REPOSITORIES':
            return {
                ...state,
                repositories: action.payload
            };
            break;
        default:
            return state;
    }
} 