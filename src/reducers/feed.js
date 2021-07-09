import {stream} from '../fetchdata';

export const feeds = (state = {byId: {}}, action) => {
  switch (action.type) {
    case 'Loading': {
      return loading(state, action);
    }
    case 'Success': {
      return success(state, action);
    }
    case 'Failure': {
      return failure();
    }
    default:
      return state;
  }
};
export const fetchNewsFeed = async (dispatch, feedId) => {
  dispatch({type: 'Loading', payload: {feedId}});
  const [response, error] = await stream();
  if (error === undefined) {
    const [idList, newsItems] = extractResponse(response);
    dispatch({
      type: 'dumpNews',
      payload: {feedId, newsItems},
    });
    dispatch({
      type: 'Success',
      payload: {feedId, idList: idList},
    });
  } else {
    dispatch({type: 'Failure', payload: {feedId, error}});
  }
};

const extractResponse = response => {
  const idList = [];
  const idVsNews = response.reduce((idVsNewsAccumulator, news) => {
    idVsNewsAccumulator[news.url] = {
      id: news.url,
      description: news.description,
      author: news.author,
      imageUrl: news.urlToImage,
      like: false,
      title: news.title,
    };
    idList.push(news.url);
    return idVsNewsAccumulator;
  }, {});
  //console.log('idList', idVsNews);
  return [idList, idVsNews];
};

const loading = (state, action) => {
  //console.log('loading');
  const byId = {
    ...state.byId,
  };
  const currentFeed = {
    metaData: {
      loading: true,
      success: false,
    },
  };
  byId[action.payload.feedId] = currentFeed;
  return {
    ...state,
    byId,
  };
};

const success = (state, action) => {
  //console.log('success');
  const byId = {
    ...state.byId,
  };
  const currentFeed = {
    idList: action.payload.idList,
    metaData: {
      loading: false,
      success: true,
    },
  };
  byId[action.payload.feedId] = currentFeed;
  //console.log('byId', action.payload.idList);
  return {
    ...state,
    byId,
  };
};

const failure = (state, action) => {
  const byId = {
    ...state.byId,
  };
  const currentFeed = {
    error: action.payload.error,
    metaData: {
      loading: false,
      success: false,
    },
  };
  byId[action.payload.feedId] = currentFeed;
  return {
    ...state,
    byId,
  };
};
