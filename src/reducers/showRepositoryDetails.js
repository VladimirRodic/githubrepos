// shows repository details
const initialState = {
    repositories: [],
    repository: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_REPOSITORY':
            //debugger;
            return action.payload;
            break;
        default:
            return [];
    }
} 