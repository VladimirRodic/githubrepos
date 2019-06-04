// shows repository details
export default (repository = [], action) => {
    switch(action.type){
        case 'SHOW_REPOSITORY':
            return action.payload;
            break;
        default:
            return [];
    }
} 