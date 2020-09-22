import React from 'react';

import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const RenderItem = ({item, props}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        props.props.navigate('Details', {
          image: item.image,
          price: item.price,
          name: item.name,
        })
      }>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 30,
  },
  name: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
  },
});
export default RenderItem;
