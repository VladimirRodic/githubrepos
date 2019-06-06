import { combineReducers } from 'redux';
import repositoriesReducer from '../reducers/repositoriesReducer';
import showRepositoryDetails from '../reducers/showRepositoryDetails';

export default combineReducers({
    repositories: repositoriesReducer,
    repository: showRepositoryDetails
});