// shows repository details

export default (state = [], action) => {
  switch (action.type) {
    case "SHOW_REPOSITORY":
      return action.payload;
      break;
    default:
      return state;
  }
};
