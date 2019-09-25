import React, {Fragment, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {getProduct} from '../public/redux/action/product';
import DetailNav from '../components/Header/DetailNav';
import ProductDetail from '../components/Body/ProductDetail';

function Detail(props) {
  const fetchProduct = async () => {
    await props.dispatch(getProduct(props.navigation.getParam('id')));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const {product, navigation} = props;

  return (
    <Fragment>
      <DetailNav navigation={navigation} />
      <View style={styles.container}>
        <ProductDetail id={product.id} product={product} />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    isLoading: state.product.isLoading,
    product: state.product.product,
  };
};

export default connect(mapStateToProps)(Detail);
