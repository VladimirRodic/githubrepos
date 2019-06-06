// list of repositories
const initialState = {
    repositories: [],
    repository: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_REPOSITORIES':
            return action.payload;
            break;
        default:
            return [];
    }
} 