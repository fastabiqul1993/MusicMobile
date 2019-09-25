import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getAllProduct} from '../public/redux/action/product';
import MainNav from '../components/Header/MainNav';
import MainFooter from '../components/Footer/MainFooter';
import ProductCard from '../components/Body/ProductCard';

const ProductList = props => {
  const fetchProduct = async () => {
    await props.dispatch(getAllProduct(props.navigation.getParam('productId')));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const onDetail = id => {
    props.navigation.navigate('Detail', {id});
  };

  const {products, navigation} = props;

  return (
    <View style={styles.wrap}>
      <MainNav />
      <ScrollView style={styles.scroll}>
        <View style={styles.productContainer}>
          {products.map((product, index) => (
            <TouchableOpacity key={index} onPress={() => onDetail(product.id)}>
              <ProductCard product={product} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <MainFooter navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {position: 'relative', height: '100%'},
  productContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  scroll: {
    marginBottom: 50,
  },
});

const mapStateToProps = state => {
  return {
    isLoading: state.product.isLoading,
    products: state.product.productList,
  };
};

export default connect(mapStateToProps)(ProductList);
