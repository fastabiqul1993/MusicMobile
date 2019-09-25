import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function CartFooter() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.txtContainer}>
          <Text>Total:</Text>
          <Text>Rp. 50.000,00</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Checkout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f6f6f6',
    width: 320,
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 55,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  txtContainer: {
    flexDirection: 'column',
  },
  btn: {
    width: 122,
    height: 34,
    backgroundColor: '#F5D273',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    paddingVertical: 8,
  },
});

export default CartFooter;
