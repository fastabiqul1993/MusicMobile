import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, AsyncStorage} from 'react-native';
import {Button, Text, Toast} from 'native-base';
import {connect} from 'react-redux';
import {postCart, patchCart, getCart} from '../../public/redux/action/cart';

function ProductDetail(props) {
  const {product, user, cartList} = props;
  const [token, setToken] = useState('');

  const fetchToken = async () => {
    const token = await AsyncStorage.getItem('access_token');
    await props.dispatch(getCart(user.id, token));

    setToken(token);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  const onAddCart = () => {
    const found = cartList.find(target => {
      return target.UserId === user.id && target.ProductId === product.id;
    });

    if (!found) {
      props
        .dispatch(postCart(product.id, token, user.id))
        .then(() => {
          Toast.show({text: 'Success add to cart!', buttonText: 'Okay'});
        })
        .catch(() => {
          Toast.show({text: 'Add to cart failed!', buttonText: 'Okay'});
        });
    }
    if (found) {
      const qty = (found.qty += 1);
      props
        .dispatch(patchCart(product.id, qty, user.id, token))
        .then(() => {
          Toast.show({text: 'Success add to cart!', buttonText: 'Okay'});
        })
        .catch(() => {
          Toast.show({text: 'Add to cart failed!', buttonText: 'Okay'});
        });
    }
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
    cartList: state.cart.cartList,
  };
};

export default connect(mapStateToProps)(ProductDetail);
