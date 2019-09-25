import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

function ProductCard(props) {
  const product = props.product;
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Image style={styles.img} source={{uri: product.img}} />
        <Text style={styles.priceTxt}>Rp. {product.price}</Text>
        <Text style={styles.titleTxt}>{product.name}</Text>
        <Text style={styles.cityTxt}>Kota {product.Branch.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F7E7BE',
    borderRadius: 20,
    width: 137,
    height: 184,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'stretch',
    width: 58,
    height: 95,
  },
  priceTxt: {
    color: '#756E5A',
    paddingTop: 10,
    paddingLeft: 15,
    alignSelf: 'flex-start',
    fontSize: 18,
  },
  titleTxt: {
    color: '#756E5A',
    paddingTop: 3,
    paddingLeft: 15,
    alignSelf: 'flex-start',
    fontSize: 12,
  },
  cityTxt: {
    color: '#756E5A',
    paddingTop: 3,
    paddingLeft: 15,
    alignSelf: 'flex-start',
    fontSize: 12,
  },
});

export default ProductCard;
