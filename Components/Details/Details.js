import React from 'react';

import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AntIcon from 'react-native-vector-icons/AntDesign';
AntIcon.loadFont();
import {useDeviceOrientation} from '@react-native-community/hooks';
const {width, height} = Dimensions.get('screen');

const Details = (props) => {
  const orientation = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <View
        style={
          orientation.portrait ? styles.headerPortrait : styles.headerLandscape
        }>
        <View
          style={
            orientation.portrait
              ? styles.imageContainerPortrait
              : styles.imageContainerLandscape
          }>
          <Image source={props.route.params.image} style={styles.image} />
        </View>
        <View style={styles.backArrow}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntIcon name="arrowleft" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={
          orientation.portrait ? styles.footerPortrait : styles.footerLandscape
        }>
        <View style={styles.status}>
          <Text style={styles.statusText}>AVAILABLE</Text>
        </View>
        <Text style={styles.name} numberOfLines={1}>
          {props.route.params.name}
        </Text>
        <Text style={styles.price}>{props.route.params.price}</Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#333CFF', '#33A2FF']}
          style={styles.gradient}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>order Now</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerPortrait: {
    flex: 1,
    backgroundColor: 'blue',
    borderBottomRightRadius: 300,
  },
  headerLandscape: {
    flex: 2,
    backgroundColor: 'blue',
    borderBottomRightRadius: 300,
  },
  imageContainerPortrait: {
    width: width / 2,
    height: width / 2,
    alignSelf: 'center',
    marginTop: width / 12,
  },
  imageContainerLandscape: {
    width: height / 4,
    height: width / 2,
    alignSelf: 'center',
    marginTop: width / 14,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: (height / width) * 20,
  },
  backArrow: {
    position: 'absolute',
    left: 0,
    marginTop: 30,
    marginLeft: 15,
  },
  footerPortrait: {
    flex: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    paddingVertical: 60,
  },
  footerLandscape: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    paddingTop: 10,
  },
  status: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 5,
    borderColor: '#3349FF',
  },
  statusText: {
    color: '#13D313',
  },
  name: {
    color: '#3e3c3e',
    fontWeight: '500',
    fontSize: 27,
    marginTop: 20,
    textTransform: 'uppercase',
  },
  price: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  gradient: {
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
  },
});

export default Details;
