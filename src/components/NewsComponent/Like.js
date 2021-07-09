import React, {Component} from 'react';
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
    props.like(props.news.id);
  };
  //console.log('like', props);
  return (
    <View style={styles.likeContainer}>
      <TouchableOpacity onPress={handlePress}>
        <LikeOrDislike like={props.news.like} />
      </TouchableOpacity>
    </View>
  );
};

const mapDispactchToProps = dispatch => ({
  like: newsId => dispatch({type: 'like', payload: {id: newsId}}),
});
export const Like = connect(null, mapDispactchToProps)(LikeBeforeConnect);
