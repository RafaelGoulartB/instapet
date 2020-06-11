const INITIAL_STATE = ['Post 1', 'Post 2', 'Post 3'];

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "REMOVE_POST":
      return [];
    case "ADD_LIKE":
      return [];
    case "REMOVE_LIKE":
      return [];
    default:
      return state;
  }
}
