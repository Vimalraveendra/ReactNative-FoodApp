import * as React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import ratingStar from '../Ratings/Ratings';

import LinearGradient from 'react-native-linear-gradient';

import AntIcon from 'react-native-vector-icons/AntDesign';

AntIcon.loadFont();

const RenderMain = ({item, props}) => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.nameContent}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.rating}>{ratingStar(item.rating)}</View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          props.props.navigate('Details', {
            image: item.image,
            price: item.price,
            name: item.name,
            orientation: props.orientation,
          })
        }>
        <AntIcon name="arrowright" size={20} color="blue" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 8,
  },
  imageContainer: {
    width: 90,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 10,
  },
  nameContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  star: {
    color: '#FF8C00',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  priceContainer: {
    marginTop: 10,
  },
  price: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default RenderMain;
