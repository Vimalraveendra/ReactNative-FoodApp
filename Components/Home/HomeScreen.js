import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';

import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import Main from '../MainMenu/Main/Main';
import Menu from '../MainMenu/Menu/Menu';
import Popular from '../MainMenu/Popular/Popular';

import {useDeviceOrientation} from '@react-native-community/hooks';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const orientation = useDeviceOrientation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={
          orientation.portrait ? styles.headerPotrait : styles.headerLandscape
        }>
        <View>
          <Image
            style={
              orientation.portrait
                ? styles.imagePortrait
                : styles.imageLandscape
            }
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
            <Main
              tabLabel="Main"
              props={navigation}
              orientation={orientation}
            />
            <Menu tabLabel="Menu" props={navigation} />
            <Popular tabLabel="Popular" props={navigation} />
          </ScrollableTabView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    position: 'absolute',
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center',
    color: 'blue',
    top: 20,
  },
  headerPortrait: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLandscape: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 40,
  },
  imagePortrait: {
    width: width,
    height: width / 2,
    resizeMode: 'cover',
  },
  imageLandscape: {
    marginTop: 10,
    width: height - 100,
    height: height / 4,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
  },

  tabBar: {
    flex: 1,
    paddingHorizontal: 30,
  },
  tabView: {
    marginTop: Platform.os === 'ios' ? 20 : 10,
  },
});
export default HomeScreen;
