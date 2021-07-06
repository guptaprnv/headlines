import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {PostContainer} from '../PostComponent/PostContainer';
import {stream} from '../../streamdata';
import { styles } from '../../styles';
class NewsFeed2BeforeConnect extends Component {
  async componentDidMount() {
    //this.props.loading();
    const result = await stream();
    if (result.success === true) {
      //console.log('success');
      this.props.success(result.Posts);
    } else {
      //console.log('error');
      this.props.failure(result.error);
    }
    //console.log(this.props);
  }
  render() {
    //console.log(this.props.loadingFlag);
    if (this.props.loadingFlag === true) {
      return (
        <View>
          <Text> Loading... </Text>
        </View>
      );
    } else if (this.props.successFlag === true) {
      return (
        <View>
          <FlatList
            style = {styles.flatList}
            data={this.props.idList}
            keyExtractor={item => item}
            renderItem={({item}) => <PostContainer id={item} feed={2} />}
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

const mapStateToProps = state => ({
  idList: state.reducerForFeed2.idList,
  successFlag: state.reducerForFeed2.success,
  errorFlag: state.reducerForFeed2.error,
  loadingFlag: state.reducerForFeed2.loading,
});

const mapDispactchToProps = dispatch => ({
  success: Posts => dispatch({type: 'SuccessFeed2', payload: Posts}),
  failure: error => dispatch({type: 'FailureFeed2', payload: error}),
  loading: () => dispatch({type: 'LoadingFeed2'}),
});

export const NewsFeed2 = connect(
  mapStateToProps,
  mapDispactchToProps,
)(NewsFeed2BeforeConnect);
