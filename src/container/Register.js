import React, {Fragment} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Form, Label, Input, Item} from 'native-base';
import SignNav from '../components/Header/SignNav';

const Register = props => {
  const {navigation} = props;

  return (
    <Fragment>
      <SignNav navigation={navigation} />
      <View style={styles.SignContainer}>
        <View style={styles.title}>
          <Text style={{fontSize: 30}}>Hi,</Text>
          <Text>Please signup</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
        <Button style={styles.btnStyle} block rounded>
          <Text style={{color: '#FFF'}}>Signup</Text>
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
    // marginVertical: 40,
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

export default Register;
