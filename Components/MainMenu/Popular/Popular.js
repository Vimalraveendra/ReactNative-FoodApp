import React from 'react';

import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import ratingStar from '../../Ratings/Ratings';
import Data from '../../Data/PopularData';

import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

class Popular extends React.Component {
  state = {
    data: Data,
  };

  renderAvatar = ({item}) => {
    return (
      <View style={styles.avatarContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.rating}>{ratingStar(item.rating)}</View>
        <Text numberOfLines={2} style={styles.comment}>
          {item.comment}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderAvatar}
          showsVerticalScrollIndicator={false}
          numColumns={3}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },

  avatarContainer: {
    flex: 1,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'blue',
    marginRight: 30,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 5,
    color: 'blue',
    fontSize: 14,
  },
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  star: {
    color: '#FF8C00',
  },
  comment: {
    fontStyle: 'italic',
    marginVertical: 5,
  },
});

export default Popular;
