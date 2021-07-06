import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Post} from './Post';
import {Like} from './Like';
import {styles} from '../../styles';
export const PostContainer = props => {
  return (
    <View style={styles.postContainer}>
      <Post id={props.id} feed={props.feed} />
      <Like id={props.id} feed={props.feed} />
    </View>
  );
};

