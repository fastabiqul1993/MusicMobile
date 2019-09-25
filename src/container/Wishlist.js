import React, {useEffect, Fragment} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
// import {connect} from 'react-redux';
// import {} from '../public/redux/action/';
import MainNav from '../components/Header/MainNav';
import MainFooter from '../components/Footer/MainFooter';
import Wish from '../components/Body/Wish';

function Wishlist(props) {
  const {navigation} = props;

  return (
    <Fragment>
      <MainNav />
      <View style={styles.WishlistContainer}>
        <Wish />
      </View>
      <MainFooter navigation={navigation} />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  WishlistContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

export default Wishlist;
