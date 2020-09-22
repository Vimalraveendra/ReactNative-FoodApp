import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const ratingStar = (rating) => {
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

const styles = StyleSheet.create({
  star: {
    color: '#FF8C00',
  },
});

export default ratingStar;
