import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Icon, Toast} from 'native-base';
import {connect} from 'react-redux';
import {deleteWishlist} from '../../public/redux/action/wishlist';

const Wish = props => {
  const {Product, id} = props.wish;

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Image style={styles.img} source={{uri: Product.img}} />
        <View style={styles.txt}>
          <Text>{Product.name}</Text>
          <Text style={styles.secondary}>Rp. {Product.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F7E7BE',
    borderRadius: 20,
    width: 282,
    height: 103,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  img: {
    resizeMode: 'stretch',
    alignSelf: 'flex-start',
    width: 42,
    height: 69,
  },
  txt: {
    flexDirection: 'column',
    fontSize: 12,
  },
  secondary: {
    color: '#8D8D8D',
    marginTop: 5,
  },
});

export default connect(null)(Wish);
