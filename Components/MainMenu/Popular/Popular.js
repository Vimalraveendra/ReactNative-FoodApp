import React from 'react';

import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const Data = [
  {
    name: 'Don Bosco',
    rating: 5,
    comment: 'Good',
    image: require('../../assets/avatars/avatar1.png'),
  },
  {
    name: 'Stephen Fleming',
    rating: 4,
    comment: 'Ok',
    image: require('../../assets/avatars/avatar2.png'),
  },
  {
    name: 'Julia Roberts',
    rating: 2,
    comment: 'Bad',
    image: require('../../assets/avatars/avatar3.png'),
  },
  {
    name: 'Mathew Hayden',
    rating: 5,
    comment: 'good food good mood',
    image: require('../../assets/avatars/avatar4.png'),
  },
  {
    name: 'Nathen Astle',
    rating: 4,
    comment: 'Very good',
    image: require('../../assets/avatars/avatar2.png'),
  },
  {
    name: 'Jondy Rodes',
    rating: 2,
    comment: 'normal',
    image: require('../../assets/avatars/avatar4.png'),
  },
];

class Popular extends React.Component {
  state = {
    data: Data,
  };

  ratingStar = (rating) => {
    let stars = [];
    //Loop 5 times
    for (let i = 1; i <= 5; i++) {
      // setting rating to filled star
      let name = 'ios-star';

      // If ratings is lower, set the rating to unfilled star
      if (i > rating) {
        name = 'ios-star-outline';
      }
      stars.push(<Icon name={name} size={15} style={styles.star} key={i} />);
    }

    return stars;
  };

  renderAvatar = ({item}) => {
    return (
      <View style={styles.avatarContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.rating}>{this.ratingStar(item.rating)}</View>
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
