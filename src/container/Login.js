import React, {Fragment, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Form, Label, Input, Item, Toast} from 'native-base';
import {connect} from 'react-redux';
import {login} from '../public/redux/action/user';
import SignNav from '../components/Header/SignNav';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {navigation} = props;

  const onLogin = () => {
    props
      .dispatch(login(email, password))
      .then(() => {
        Toast.show({text: 'Signin success!', buttonText: 'Okay'});
        navigation.navigate('Home');
      })
      .catch(() => {
        Toast.show({text: 'Signin failed!', buttonText: 'Okay'});
      });
  };

  return (
    <Fragment>
      <SignNav navigation={navigation} />
      <View style={styles.SignContainer}>
        <View style={styles.title}>
          <Text style={{fontSize: 30}}>Hi,</Text>
          <Text>Signin to continue</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input onChangeText={email => setEmail(email)} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry
              onChangeText={password => setPassword(password)}
            />
          </Item>
        </Form>
        <Button onPress={onLogin} style={styles.btnStyle} block rounded>
          <Text style={{color: '#FFF'}}>Signin</Text>
        </Button>
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
  title: {
    alignSelf: 'flex-start',
    marginTop: 40,
  },
  form: {
    alignSelf: 'flex-start',
    width: 275,
  },
  txt: {
    marginVertical: 10,
  },
  SignUp: {
    borderColor: '#F5D273',
    marginVertical: 10,
  },
  orText: {
    marginVertical: 10,
    color: '#8D8D8D',
  },
  btnStyle: {
    backgroundColor: '#F5D273',
    marginTop: 30,
  },
});

export default connect(null)(Login);
