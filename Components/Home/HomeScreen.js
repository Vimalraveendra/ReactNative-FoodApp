import * as React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import Main from '../Main/Main';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../assets/images/food3.jpg')}
        />
        <Text style={styles.title}>Food App</Text>
      </View>
      <View style={styles.tabBar}>
        <ScrollableTabView
          style={styles.tabView}
          initialPage={0}
          tabBarActiveTextColor="blue"
          renderTabBar={() => <DefaultTabBar />}>
          <Main tabLabel="Main" props={navigation} />
          <Text tabLabel="Menu">Menu</Text>
          <Text tabLabel="Popular">Popular</Text>
        </ScrollableTabView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 0,
  },
  title: {
    position: 'absolute',
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center',
    color: 'blue',
  },
  image: {
    width: width,
    height: width / 2,
    resizeMode: 'cover',
  },

  tabBar: {
    flex: 1,
    paddingHorizontal: 30,
  },
  tabView: {
    marginTop: 20,
  },
});
export default HomeScreen;
