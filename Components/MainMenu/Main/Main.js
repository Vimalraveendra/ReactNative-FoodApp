import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import data from '../../Data/MainData';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
AntIcon.loadFont();

class Main extends React.Component {
  state = {
    data: data,
    text: '',
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

  renderItem = ({item}) => {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.item}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.nameContent}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rating}>{this.ratingStar(item.rating)}</View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.props.navigate('Details', {
              image: item.image,
              price: item.price,
              name: item.name,
            })
          }>
          <AntIcon name="arrowright" size={20} color="blue" />
        </TouchableOpacity>
      </LinearGradient>
    );
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
      <View style={styles.container}>
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
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginTop: 10,
    marginVertical: 5,
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
