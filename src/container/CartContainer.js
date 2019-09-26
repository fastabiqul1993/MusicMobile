import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import MainNav from '../components/Header/MainNav';
import Cart from '../components/Body/Cart';
import CartFooter from '../components/Footer/CartFooter';
import MainFooter from '../components/Footer/MainFooter';

const CartContainer = props => {
  const {navigation} = props;

  return (
    <Fragment>
      <MainNav />
      <View style={styles.CartContainer}>
        <Cart />
      </View>
      <CartFooter />
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
});

export default CartContainer;
