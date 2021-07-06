export const reducerForFeed1 = (state = {loading: true}, action) => {
  switch (action.type) {
    case 'LoadingFeed1':
      return {...state, loading: true};
    case 'SuccessFeed1': {
      const normalizedData = dataNormalization(action.payload);
      const answer = {
        ...state,
        ...normalizedData,
        success: true,
        loading: false,
      };
      //console.log('answer');
      //console.log(answer);
      return answer;
    }
    case 'FailureFeed1': {
      return {...state, success: false, error: action.payload, loading: false};
    }
    case 'LIKE': {
      return updateEntity(state, action);
    }
    default:
      return state;
  }
};

function dataNormalization(data) {
  let entityList = {};
  //console.log('data');
  //console.log(data);
  for (let ind in data) {
    const entity = data[ind];
    entityList[data[ind].url] = {
      id: entity.url,
      description: entity.description,
      author: entity.author,
      imageUrl: entity.urlToImage,
      like: false,
      title: entity.title,
    };
  }
  const idList = data.map(item => item.url);
  //console.log('idlist');
  //console.log(idList);
  return {idList: idList, entityList: entityList};
}

function updateEntity(state, action) {
  let temp;
  if(state.entityList[action.id] !== undefined) {
    temp = state.entityList[action.id].like;
  } else {
    return state;
  }
  //console.log(temp);
  let entityList = {
    ...state.entityList,
  };
  entityList[action.id] = {
    ...entityList[action.id],
    like: !temp,
  };
  return {
    ...state,
    entityList: entityList,
  };
}
