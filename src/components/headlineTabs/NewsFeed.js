import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {NewsItem} from '../NewsComponent/newsItem';
import {styles} from '../../styles';
import {makeSelectEntity} from '../../selectors/selectors';
import {fetchNewsFeed} from '../../reducers/feed';
class NewsFeedBeforeConnect extends Component {
  async componentDidMount() {
    await fetchNewsFeed(this.props.dispatch, this.props.feedId);
  }
  render() {
    if (this.props.isLoading) {
      return (
        <View>
          <Text> Loading... </Text>
        </View>
      );
    } else if (this.props.isSuccess === true) {
      //console.log('newsList', this.props.newsList);
      return (
        <View>
          <FlatList
            style={styles.flatList}
            data={this.props.idList}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <NewsItem news={this.props.newsList[item]} />
            )}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text>{this.props.error}</Text>
        </View>
      );
    }
  }
}

const makeMapStateToProps = () => {
  const selectEntity = makeSelectEntity();
  const mapStateToProps = (state, props) => {
    const feedStatus = getFeedStatus(state, props);
    const entity = selectEntity(state, props);
    return {
      ...feedStatus,
      ...entity,
    };
  };
  return mapStateToProps;
};

const getFeedStatus = (state, props) => {
  const currentFeed = state.feeds.byId[props.feedId];
  if (currentFeed === undefined) {
    return {
      isSuccess: undefined,
      isLoading: true,
    };
  }
  return {
    isSuccess: currentFeed.metaData.success,
    isLoading: currentFeed.metaData.loading,
    error: currentFeed.error,
  };
};

export const NewsFeed = connect(
  makeMapStateToProps,
  null,
)(NewsFeedBeforeConnect);
