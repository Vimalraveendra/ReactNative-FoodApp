import React from 'react';

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const Data = [
  {
    type: 'Dessert',
    color: '#f7932e',
    data: [
      {
        name: 'Cream Sweet',
        image: require('../../assets/images/creamsweet.jpg'),
        price: '$12',
      },
      {
        name: 'Cup Cakes',
        image: require('../../assets/images/cupcakes.jpg'),
        price: '$15',
      },
      {
        name: 'Orange Cake',
        image: require('../../assets/images/orangecake.jpg'),
        price: '$10',
      },
      {
        name: 'Strawberries',
        image: require('../../assets/images/strawberries.jpg'),
        price: '$18',
      },
    ],
  },
  {
    type: 'Main course',
    color: '#39b54a',
    data: [
      {
        name: 'Spaghetti Noodles',
        image: require('../../assets/images/spaghetti.jpg'),
        rating: 4,
        price: '$20',
      },
      {
        name: 'Thai Noodles',
        image: require('../../assets/images/thai.jpg'),
        rating: 2,
        price: '$12',
      },
      {
        name: 'Ramen Noodles',
        image: require('../../assets/images/ramen.jpg'),
        rating: 5,
        price: '$13',
      },
    ],
  },
  {
    type: 'Other',
    color: '#ed3e69',
    data: [
      {
        name: 'Seafood Prawns',
        image: require('../../assets/images/seafoodprawns.jpg'),
        price: '$20',
      },
      {
        name: 'Bread Salad',
        image: require('../../assets/images/bread.jpg'),
        price: '$13',
      },
      {
        name: 'Chicken Feta',
        image: require('../../assets/images/chickenfeta.jpg'),
        price: '$15',
      },
    ],
  },
];

class Menu extends React.Component {
  state = {
    data: Data,
  };

  renderMenu = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={[styles.itemType, {color: item.color}]}>{item.type}</Text>
        <View style={[styles.item, {backgroundColor: item.color}]}>
          <FlatList
            data={item.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() =>
          this.props.props.navigate('Details', {image: item.image})
        }>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderMenu}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  itemType: {
    fontSize: 18,
    fontWeight: '700',
  },
  item: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
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

export default Menu;
