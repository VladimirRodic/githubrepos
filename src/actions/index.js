import axios from "axios";

// updateRepositories(organisationName) GET https://api.github.com/orgs/organisationName/repos
export const updateRepositories = organisationName => async dispatch => {
  const response = await axios.get(
    "https://api.github.com/orgs/" + organisationName + "/repos"
  );
  console.log("nesto", response.data);
  dispatch({ type: "FETCH_REPOSITORIES", payload: response.data });
};

// shows Repository Details
export const showRepoDetails = repo => async dispatch => {
  dispatch({ type: "SHOW_REPOSITORY", payload: repo });
};
