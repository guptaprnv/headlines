import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from '../../styles';

export const News = props => {
  //console.log('props', props);
  return (
    <View style={styles.imageContainer}>
      <ImageBackground style={styles.image} source={{uri: props.news.imageUrl}}>
        <Text style={styles.imageDescription}>{props.news.description}</Text>
        <Text style={styles.imageTitle}>{props.news.title}</Text>
      </ImageBackground>
    </View>
  );
};
