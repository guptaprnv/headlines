import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {News} from './news';
import {Like} from './Like';
import {styles} from '../../styles';
export const NewsItem = props => {
  return (
    <View style={styles.postContainer}>
      <News news={props.news} />
      <Like news={props.news} />
    </View>
  );
};
