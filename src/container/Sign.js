import React, {Fragment} from 'react';
import {StyleSheet, View, Text, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../public/redux/action/user';
import {Button, Toast} from 'native-base';
import SignNav from '../components/Header/SignNav';

const Sign = props => {
  const {navigation, isLogin, user} = props;
  const fakeLogin = true;

  const onLogin = () => {
    props.navigation.navigate('Login');
  };

  const onRegister = () => {
    props.navigation.navigate('Register');
  };

  const onLogut = async () => {
    await props.dispatch(logout());
    Toast.show({text: 'Sign out success!', buttonText: 'Okay'});
    AsyncStorage.clear();
    props.navigation.navigate('Home');
  };

  return (
    <Fragment>
      <SignNav navigation={navigation} />
      <View style={styles.SignContainer}>
        {fakeLogin ? (
          <Fragment>
            <View style={{width: 100, height: 100, backgroundColor: 'blue'}}>
              <Text
                style={{
                  margin: 0,
                  position: 'absolute',
                  top: '45%',
                  left: '45%',
                }}>
                T
              </Text>
            </View>
            <Button block rounded style={styles.SignIn} onPress={onLogut}>
              <Text style={styles.btnText}>Sign out</Text>
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <View style={{alignSelf: 'flex-start', marginVertical: 60}}>
              <Text style={{fontSize: 30}}>Hi,</Text>
              <Text>Please sign up or sign in first</Text>
            </View>
            <Button block rounded style={styles.SignIn} onPress={onLogin}>
              <Text style={styles.btnText}>Sign In</Text>
            </Button>
            <Text style={styles.orText}>Or</Text>
            <Button
              block
              bordered
              rounded
              style={styles.SignUp}
              onPress={onRegister}>
              <Text style={{color: '#F5D273'}}>Sign Up</Text>
            </Button>
          </Fragment>
        )}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  SignContainer: {
    paddingHorizontal: 15,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  SignIn: {
    color: '#FFFFFF',
    backgroundColor: '#F5D273',
    marginVertical: 10,
  },
  btnText: {
    fontFamily: 'Open-Reguler',
    color: '#FFF',
    fontSize: 18,
  },
  SignUp: {
    borderColor: '#F5D273',
    marginVertical: 10,
  },
  orText: {
    marginVertical: 10,
    color: '#8D8D8D',
  },
});

const mapStateToProps = state => {
  return {
    isLogin: state.user.isLogin,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Sign);
