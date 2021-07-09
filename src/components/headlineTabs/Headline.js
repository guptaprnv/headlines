import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {NewsFeed} from './NewsFeed';
import {styles} from '../../styles';
const FirstRoute = () => (
  <View style={styles.newsFeed}>
    <NewsFeed feedId={'Feed1'} />
  </View>
);

const SecondRoute = () => (
  <View style={styles.newsFeed}>
    <NewsFeed feedId={'Feed2'} />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export function Headline() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'NewsFeed1'},
    {key: 'second', title: 'NewsFeed2'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
