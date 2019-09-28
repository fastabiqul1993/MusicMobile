import React, {Fragment, useEffect} from 'react';
import {StyleSheet, View, ScrollView, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {getCart} from '../public/redux/action/cart';
import MainNav from '../components/Header/MainNav';
import Cart from '../components/Body/Cart';
import CartFooter from '../components/Footer/CartFooter';
import MainFooter from '../components/Footer/MainFooter';

const CartContainer = props => {
  const {navigation, cartList, user} = props;

  const fetchList = async () => {
    const token = await AsyncStorage.getItem('access_token');

    await props.dispatch(getCart(user.id, token));
  };

  useEffect(() => {
    fetchList();
  }, []);

  let count = 0;

  cartList.map(cart => {
    count += cart.Product.price * cart.qty;
  });

  return (
    <Fragment>
      <MainNav />
      <ScrollView style={styles.scroll}>
        <View style={styles.CartContainer}>
          {cartList.map((cart, index) => (
            <Cart key={index} cart={cart} />
          ))}
        </View>
      </ScrollView>
      <CartFooter
        count={count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
      />
      <MainFooter navigation={navigation} />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  CartContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  scroll: {
    marginBottom: 50,
  },
});

const mapStateToProps = state => {
  return {
    user: state.user.user,
    cartList: state.cart.cartList,
  };
};

export default connect(mapStateToProps)(CartContainer);
