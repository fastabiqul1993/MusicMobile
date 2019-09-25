import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Icon} from 'native-base';
import guitar from '../../asset/guitar.png';

function Wish() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Image style={styles.img} source={guitar} />
        <View style={styles.txt}>
          <Text>Guitar Heroes</Text>
          <Text style={styles.secondary}>Rp. 50.0000,00</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon style={styles.icon} name="trash" />
            <Icon style={styles.icon} name="cart" />
          </View>
        </View>
      </View>
    </View>
  );
}

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
  icon: {
    color: '#575757',
    fontSize: 23,
    marginRight: 20,
    marginTop: 5,
  },
});

export default Wish;
