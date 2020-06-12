const INITIAL_STATE = {
  token: '',
  user: {}
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        token: action.token,
        user: action.user
      };
    case "LOG_OUT":
      return {token: '', user: {}};
    default:
      return state;
  }
}
