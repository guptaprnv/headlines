export const entity = (state = {newsItems: {}}, action) => {
  switch (action.type) {
    case 'dumpNews': {
      return dumpNews(state, action);
    }
    case 'like': {
      return updateEntity(state, action);
    }
    default:
      return state;
  }
};

function dumpNews(state, action) {
  return {
    ...state,
    newsItems: {
      ...state.newsItems,
      ...action.payload.newsItems,
    },
  };
}

function updateEntity(state, action) {
  let temp;
  const id = action.payload.id;
  if (state.newsItems[id] !== undefined) {
    temp = state.newsItems[id].like;
  } else {
    return state;
  }
  let newsItems = {
    ...state.newsItems,
  };
  newsItems[id] = {
    ...newsItems[id],
    like: !temp,
  };
  return {
    ...state,
    newsItems,
  };
}
