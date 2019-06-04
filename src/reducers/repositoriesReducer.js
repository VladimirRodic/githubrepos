// list of repositories
export default (repositories = [], action) => {
    switch(action.type){
        case 'FETCH_REPOSITORIES':
            return action.payload;
            break;
        default:
            return [];
    }
} 