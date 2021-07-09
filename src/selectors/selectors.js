import {createSelector} from 'reselect';

const selectIdList = (state, props) => {
  const currentFeed = state.feeds.byId[props.feedId];
  if (currentFeed === undefined || currentFeed.idList === undefined) {
    return undefined;
  }
  return currentFeed.idList;
};

const selectNewsItems = (state, props) => {
  return state.entity.newsItems;
};
export const makeSelectEntity = () => {
  return createSelector(
    [selectIdList, selectNewsItems],
    (idList, newsItems) => {
      let newsList;
      if (idList === undefined) {
        newsList = undefined;
      } else {
        newsList = {};
        idList.forEach(id => {
          newsList[id] = newsItems[id];
        });
      }
      return {
        idList,
        newsList,
      };
    },
  );
};
