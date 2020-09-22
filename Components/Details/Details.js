import React from 'react';

import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
console.log('hi', height);

const Details = (props) => {
  console.log('item', props.route.params);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image source={props.route.params.image} style={styles.image} />
        </View>
      </View>
      <View style={styles.footer}></View>
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
    marginTop: height / 14,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: (height / width) * 20,
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
  },
});

export default Details;
