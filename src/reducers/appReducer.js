
const appState = {
  menuToggled: false
}

// Reducer
const appReducer = (state = appState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return { 
        ...state,
        menuToggled: !state.menuToggled
      };
    default:
      return state;
  }
}

export default appReducer;