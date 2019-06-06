// list of repositories

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_REPOSITORIES":
      return action.payload;
      break;
    default:
      return state;
  }
};

export const updateRepositories = (state, { payload }) => ({
  ...state,
  repositories: payload
});
