import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from '../../styles';
import {connect} from 'react-redux';

const _Post = props => {
  //console.log('props');
  //console.log(props);
  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={{uri: props.post.imageUrl}} style={styles.image}>
        <Text style = {styles.imageDescription}> {props.post.description} </Text>
        <Text style = {styles.imageTitle}> {props.post.title} </Text>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  let props;
  if (ownProps.feed === 1) {
    props = {
      post: state.reducerForFeed1.entityList[ownProps.id],
    };
  } else {
    props = {
      post: state.reducerForFeed2.entityList[ownProps.id],
    };
  }
  //console.log('propinmap');
  //console.log(state.reducerForFeed1.entityList[ownProps.id]);

  return props;
};
export const Post = connect(mapStateToProps, null)(_Post);
