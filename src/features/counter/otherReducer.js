
const initialState = {
  clicks: {
    count: 0
  }
}

const setClicks = (state, action) => {
  return {
    ...state,
    clicks: action.clicks
  }
}

const other = (state = initialState, action) => {
  let actionMap = {
    'SET_CLICKS': setClicks,
  };

  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  } else {
    return state;
  }
};

export default other;