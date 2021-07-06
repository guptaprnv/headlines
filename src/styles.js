import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  newsFeed: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  flatList: {},
  postContainer: {
    height: 300,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    width: '100%',
  },
  imageContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '88%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imageDescription: {
    position: 'absolute',
    top: 30,
    left: 4,
    right:4,
    color: 'white',
    fontSize: 16,
    fontWeight: '100',
  },
  imageTitle: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    right:4,
    color: 'white',
    fontSize: 22,
    fontWeight: '200',
  },
  likeContainer: {
    width: '100%',
    height:'12%',
    backgroundColor: 'grey',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'blue',
  },
});
