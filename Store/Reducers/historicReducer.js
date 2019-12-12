const initialState = {
  historicFilms: []
};

function manageHistoricFilms(state = initialState, action) {
  
  let nextState;
  switch(action.type) {
    case 'TOGGLE_FILMDETAIL':
      if(state.historicFilms.findIndex(item => item.id === action.value.id) === -1) {
        nextState = {
          ...state,
          historicFilms: [...state.historicFilms, action.value]
        }
      }
      return nextState || state;
      break;
    case 'REMOVE_HISTORIC_FILM':
      const filmIndex = state.historicFilms.findIndex(item => item.id === action.value.id);
      if (filmIndex !== -1) {
        nextState = {
          ...state,
          historicFilms: state.historicFilms.filter( (item,index) => index !== filmIndex )
        }
      }
      return nextState || state;
      break;
    case 'RESET_HISTORIC':
      nextState = {
        ...state,
        historicFilms: []
      };
      return nextState || state;
      break;
    default:
      return state;
  }
  return state
}

export default manageHistoricFilms
