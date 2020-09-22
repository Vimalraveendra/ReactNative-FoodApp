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

const {width, height} = Dimensions.get('screen');

const Details = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image source={props.route.params.image} style={styles.image} />
        </View>
        <View style={styles.backArrow}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <AntIcon name="arrowleft" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.footer}>
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
          <Text style={styles.buttonText}>order N ow</Text>
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
  header: {
    flex: 1,
    backgroundColor: 'blue',
    borderBottomRightRadius: 300,
  },
  imageContainer: {
    width: width / 3,
    height: height / 6,
    alignSelf: 'center',
    marginTop: height / 12,
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
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    paddingVertical: 60,
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
