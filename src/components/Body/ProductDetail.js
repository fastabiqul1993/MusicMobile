import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button} from 'native-base';
import {Text} from 'native-base';

function ProductDetail(props) {
  const product = props.product;

  return (
    <View style={styles.wrapper}>
      <View style={styles.imgContent}>
        <Image style={styles.img} source={{uri: product.img}} />
      </View>
      <View style={styles.txtContent}>
        <Text style={styles.txtTitle}>{product.name}</Text>
        <Text style={styles.txtDesc} numberOfLines={3}>
          {product.description}
        </Text>
        <Text style={styles.txtPrice}>Rp. {product.price}</Text>
      </View>
      <Button style={styles.btnStyle} block rounded>
        <Text>Add to Cart</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: 1,
  },
  imgContent: {
    paddingTop: 30,
  },
  img: {
    resizeMode: 'stretch',
    width: 136,
    height: 222,
  },
  txtContent: {
    alignSelf: 'flex-start',
    paddingTop: 28,
  },
  txtTitle: {
    fontSize: 30,
  },
  txtDesc: {
    fontSize: 12,
    textAlign: 'justify',
    color: '#8D8D8D',
  },
  txtPrice: {
    paddingTop: 20,
    fontSize: 25,
  },
  btnStyle: {
    marginTop: 20,
    backgroundColor: '#F5D273',
  },
});

export default ProductDetail;
