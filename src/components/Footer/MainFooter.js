import React, {Fragment, useState, useEffect} from 'react';
import {StyleSheet, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

import {Footer, FooterTab, Button, Icon, Text, Badge, Toast} from 'native-base';

const MainFooter = props => {
  const {navigation, isLogin} = props;
  const [token, setToken] = useState('');

  const fetchToken = async () => {
    const token = await AsyncStorage.getItem('access_token');
    setToken(token);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  const onHome = () => {
    navigation.navigate('Home');
  };

  const onWishList = () => {
    navigation.navigate('Wishlist');
  };

  const onCart = () => {
    navigation.navigate('Cart');
  };

  const onUser = () => {
    navigation.navigate('Sign');
  };

  const onWarning = () => {
    Toast.show({text: 'You must signin first!', buttonText: 'Okay'});
  };

  return (
    <Footer style={styles.footerWrap}>
      <FooterTab>
        <Button horizontal onPress={onHome}>
          <Icon name="home" />
          <Text style={styles.navText}>Home</Text>
        </Button>
        {isLogin ? (
          <Fragment>
            <Button horizontal onPress={onWishList}>
              <Icon name="heart" />
              <Text style={styles.navText}>Wishlist</Text>
            </Button>
            <Button horizontal onPress={onCart}>
              <Icon name="cart" />
              <Text style={styles.navText}>Cart</Text>
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Button horizontal onPress={onWarning}>
              <Icon name="heart" />
              <Text style={styles.navText}>Wishlist</Text>
            </Button>
            <Button horizontal onPress={onWarning}>
              <Icon name="cart" />
              <Text style={styles.navText}>Cart</Text>
            </Button>
          </Fragment>
        )}
        <Button horizontal onPress={onUser}>
          <Icon name="contact" />
          <Text style={styles.navText}>User</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

const styles = StyleSheet.create({
  footerWrap: {
    position: 'absolute',
    bottom: 0,
  },
  navText: {
    fontSize: 12,
  },
});

const mapStateToProps = state => {
  return {
    isLogin: state.user.isLogin,
  };
};

export default connect(mapStateToProps)(MainFooter);
