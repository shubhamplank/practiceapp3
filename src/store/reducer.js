export const userReducer = (state = {}, action) => {
  return state;
};
export const contactsReducer = (state = {}, action) => {
  return state;
};
export const typingReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_TYPING":
      return true;
    case "STOP_TYPING":
      return false;
    default:
      return state;
  }
};
export const activeUserReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_ACTIVE_USER":
      return action.payload;
    default:
      return state;
  }
};
export const messagesReducer = (state = {}, action) => {
  return state;
};
