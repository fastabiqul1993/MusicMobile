import React, {useEffect, Fragment} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getWishlist} from '../public/redux/action/wishlist';
import MainNav from '../components/Header/MainNav';
import MainFooter from '../components/Footer/MainFooter';
import Wish from '../components/Body/Wish';

function Wishlist(props) {
  const {navigation, wishlist, user} = props;

  const fetchList = async () => {
    const token = await AsyncStorage.getItem('access_token');

    await props.dispatch(getWishlist(user.id, token));
  };

  useEffect(() => {
    fetchList();
  }, []);

  const onDetail = id => {
    props.navigation.navigate('Detail', {id});
  };

  return (
    <Fragment>
      <MainNav />
      <ScrollView style={styles.scroll}>
        <View style={styles.WishlistContainer}>
          {wishlist.map((wish, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onDetail(wish.ProductId)}>
              <Wish wish={wish} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
  scroll: {
    marginBottom: 50,
  },
});

const mapStateToProps = state => {
  return {
    user: state.user.user,
    wishlist: state.wishlist.wishlist,
  };
};

export default connect(mapStateToProps)(Wishlist);
