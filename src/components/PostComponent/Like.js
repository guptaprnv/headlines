import React,{Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../../styles';
const LikeOrDislike = props => {
  if (props.like === false) {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>like</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>dislike</Text>
      </View>
    );
  }
};
const LikeBeforeConnect = props => {
  const handlePress = () => {
    props.like(props.post.id);
  };
  return (
    <View style={styles.likeContainer}>
      <TouchableOpacity onPress={handlePress}>
        <LikeOrDislike like={props.post.like} />
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state, ownProps) => {
  let props;
  if (ownProps.feed === 1) {
    props = {post: state.reducerForFeed1.entityList[ownProps.id]};
  } else {
    props = {post: state.reducerForFeed2.entityList[ownProps.id]};
  }
  //console.log('likeprops');
  //console.log(props);
  return props;
};

const mapDispactchToProps = dispatch => ({
  like: id => dispatch({type: 'LIKE', id}),
});
export const Like = connect(
  mapStateToProps,
  mapDispactchToProps,
)(LikeBeforeConnect);
