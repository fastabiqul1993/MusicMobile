import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const CategoryCard = props => {
  const category = props.category;

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Image style={styles.img} source={{uri: category.img}} />
        <Text style={styles.txt}>{category.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F7E7BE',
    borderRadius: 20,
    width: 137,
    height: 184,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  img: {
    resizeMode: 'stretch',
    width: 73,
    height: 120,
  },
  txt: {
    color: '#2c3e50',
    paddingTop: 15,
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default CategoryCard;
