import React from 'react';

import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Data from '../../Data/MenuData';

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
