import React from 'react';
import {StyleSheet, Touchable} from 'react-native';
import {Footer, FooterTab, Button, Icon, Text, Badge} from 'native-base';

const MainFooter = props => {
  const onHome = () => {
    props.navigation.navigate('Home');
  };

  return (
    <Footer style={styles.footerWrap}>
      <FooterTab>
        <Button horizontal onPress={onHome}>
          <Icon name="home" />
          <Text style={styles.navText}>Home</Text>
        </Button>
        <Button horizontal>
          <Icon name="heart" />
          <Text style={styles.navText}>Wishlist</Text>
        </Button>
        <Button badge horizontal>
          <Badge>
            <Text>51</Text>
          </Badge>
          <Icon name="cart" />
          <Text style={styles.navText}>Cart</Text>
        </Button>
        <Button horizontal>
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

export default MainFooter;
