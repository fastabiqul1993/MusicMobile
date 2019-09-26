import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, AsyncStorage} from 'react-native';
import {Button, Text} from 'native-base';
import {connect} from 'react-redux';
import {postCart} from '../../public/redux/action/cart';

function ProductDetail(props) {
  const {product, user} = props;
  const [token, setToken] = useState('');

  const fetchToken = async () => {
    const token = await AsyncStorage.getItem('access_token');

    setToken(token);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  const onAddCart = () => {
    props.dispatch(postCart(product.id, token, user.id));
  };

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
      <Button onPress={onAddCart} style={styles.btnStyle} block rounded>
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

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(ProductDetail);
