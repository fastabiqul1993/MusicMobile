import React, {Fragment, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {getAllCategory} from '../public/redux/action/category';
import MainNav from '../components/Header/MainNav';
import MainFooter from '../components/Footer/MainFooter';
import CategoryCard from '../components/Body/CategoryCard';

const Home = props => {
  const fetchCategories = async () => {
    await props.dispatch(getAllCategory());
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onProduct = id => {
    props.navigation.navigate('List', {productId: id});
  };

  console.log(AsyncStorage.getItem('name'));

  const {categories, navigation} = props;

  return (
    <Fragment>
      <MainNav />
      <View style={styles.homeContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} onPress={() => onProduct(category.id)}>
            <CategoryCard category={category} />
          </TouchableOpacity>
        ))}
      </View>
      <MainFooter navigation={navigation} />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    isLoading: state.category.isLoading,
    categories: state.category.categoryList,
  };
};

export default connect(mapStateToProps)(Home);
