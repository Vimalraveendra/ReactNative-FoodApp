import React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';

import Data from '../../Data/MenuData';

import RenderMenu from '../../RenderItems/RenderMenu';

class Menu extends React.Component {
  state = {
    data: Data,
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <RenderMenu item={item} props={this.props} />}
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
