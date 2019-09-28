import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Button, Icon} from 'native-base';

const Cart = props => {
  const {Product, qty} = props.cart;
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Image style={styles.img} source={{uri: Product.img}} />
        <View style={styles.txt}>
          <Text>{Product.name}</Text>
          <Text style={styles.secondary}>Rp. {Product.price}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <TouchableOpacity>
              <Icon style={styles.icon} name="remove-circle-outline" />
            </TouchableOpacity>
            <Text style={styles.iconStats}>{qty}</Text>
            <TouchableOpacity>
              <Icon style={styles.icon} name="add-circle" />
            </TouchableOpacity>
          </View>
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
    marginTop: 3,
  },
  icon: {
    color: '#575757',
    fontSize: 20,
  },
  iconStats: {
    color: '#575757',
    fontSize: 18,
  },
});

export default Cart;
