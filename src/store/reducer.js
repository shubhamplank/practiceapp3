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
  switch (action.type) {
    case "SET_MESSAGE":
      const { activeUserId, text } = action.payload;
      const number = Object.keys(state[activeUserId]);
      return {
        ...state,
        [activeUserId]: {
          ...state[activeUserId],
          [number]: { number, text, is_user_msg: true },
        },
      };
    default:
      return state;
  }
};
