/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Category from './container/Category';
import ProductList from './container/ProductList';
import Detail from './container/Detail';

import store from './public/redux/store';
import {Provider} from 'react-redux';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Category,
    navigationOptions: () => ({
      header: null,
    }),
  },
  List: {
    screen: ProductList,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Detail: {
    screen: Detail,
    navigationOptions: () => ({
      header: null,
    }),
  },
  defaultNavigationOptions: {
    screen: Category,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
