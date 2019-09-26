import React, {Fragment, useState, useEffect} from 'react';
import {Image, StyleSheet, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {Left, Body, Right, Button, Header, Icon, Toast} from 'native-base';
import {
  postWishlist,
  deleteWishlist,
  getWishlist,
} from '../../public/redux/action/wishlist';
import logo from '../../asset/aneka-musik.png';

function DetailNav(props) {
  const {wishlist, product, user, navigation} = props;
  const [token, setToken] = useState('');
  const [heart, setHeart] = useState(null);

  const found = wishlist.find(target => {
    return target.UserId === user.id && target.ProductId === product.id;
  });

  const fetchData = async () => {
    const token = await AsyncStorage.getItem('access_token');
    setToken(token);

    if (found) {
      setHeart(true);
    }

    if (!found) {
      setHeart(false);
    }

    await props.dispatch(getWishlist(user.id, token));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onWishlist = () => {
    props
      .dispatch(postWishlist(product.id, user.id, token))
      .then(() => {
        Toast.show({text: 'Success add to wishlist!'});
      })
      .catch(() => {
        Toast.show({text: 'Failed add to wishlist'});
      });
    setHeart(true);
  };

  const onDeleteWish = () => {
    props
      .dispatch(deleteWishlist(found.id, token))
      .then(() => {
        Toast.show({text: 'Success delete from wishlist!'});
      })
      .catch(() => {
        Toast.show({text: 'Failed delete from wishlist'});
      });
    setHeart(false);
  };

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <Fragment>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={onGoBack}>
            <Icon style={styles.iconStyle} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Image source={logo} style={styles.logo} />
        </Body>
        <Right>
          {heart ? (
            <Fragment>
              <Button onPress={onDeleteWish} transparent>
                <Icon style={styles.iconStyle} name="heart" />
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button onPress={onWishlist} transparent>
                <Icon style={styles.iconStyle} name="heart-empty" />
              </Button>
            </Fragment>
          )}
        </Right>
      </Header>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5D273',
  },
  logo: {
    resizeMode: 'stretch',
    width: 50,
    height: 25,
  },
  iconStyle: {color: '#140101'},
});

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.wishlist,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(DetailNav);
