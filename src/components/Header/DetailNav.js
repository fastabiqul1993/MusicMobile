import React, {Fragment} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Left, Body, Right, Button, Header, Icon} from 'native-base';
import logo from '../../asset/aneka-musik.png';

function DetailNav(props) {
  const onProduct = () => {
    props.navigation.navigate('List', props.id);
  };

  return (
    <Fragment>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={onProduct}>
            <Icon style={styles.iconStyle} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Image source={logo} style={styles.logo} />
        </Body>
        <Right>
          <Button transparent>
            <Icon style={styles.iconStyle} name="heart-empty" />
          </Button>
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

export default DetailNav;
