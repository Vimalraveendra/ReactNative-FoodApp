import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';

import RenderMain from '../../RenderItems/RenderMain';

import data from '../../Data/MainData';

import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

class Main extends React.Component {
  state = {
    data: data,
    text: '',
  };

  setSearchText = (inputText) => {
    this.setState({text: inputText});
  };

  clearItems = () => {
    const {data} = this.state;
    this.setState({text: '', data});
  };

  filteredData = () => {
    return this.state.data.filter((item) => {
      return item.name.toLowerCase().includes(this.state.text.toLowerCase());
    });
  };

  render() {
    return (
      <View style={styles.containerPortrait}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search here..."
            style={styles.textInput}
            onChangeText={(text) => this.setSearchText(text)}
            value={this.state.text}
          />
          <TouchableOpacity onPress={this.clearItems}>
            <Icon name="ios-close" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <FlatList
            data={this.filteredData()}
            renderItem={({item}) => (
              <RenderMain item={item} props={this.props} />
            )}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPortrait: {
    flex: 1,
    backgroundColor: '#fff',
  },

  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: Platform.OS === 'ios' ? 5 : 0,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginTop: 10,
    marginVertical: 5,

    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
  },
  list: {
    flex: 1,
  },
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
export default Main;
