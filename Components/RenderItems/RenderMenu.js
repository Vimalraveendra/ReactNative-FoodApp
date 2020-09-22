import React from 'react';

import {View, FlatList, StyleSheet, Text} from 'react-native';
import RenderItem from './RenderItem';

const RenderMenu = ({item, props}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.itemType, {color: item.color}]}>{item.type}</Text>
      <View style={[styles.item, {backgroundColor: item.color}]}>
        <FlatList
          data={item.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <RenderItem item={item} props={props} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

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
});

export default RenderMenu;
