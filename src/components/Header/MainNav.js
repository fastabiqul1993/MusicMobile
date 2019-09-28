import React, {Fragment} from 'react';
import {Header, Body} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import logo from '../../../assets/aneka-musik.png';

const MainNav = () => {
  return (
    <Fragment>
      <Header style={styles.header}>
        <Body>
          <Image source={logo} style={styles.logo} />
        </Body>
      </Header>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5D273',
  },
  logo: {
    resizeMode: 'stretch',
    width: 50,
    height: 25,
  },
});

export default MainNav;
