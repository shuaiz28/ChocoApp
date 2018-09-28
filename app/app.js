import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProductList from './components/productList/productList';

import PetList from './mockups/data/petList';

const styles = StyleSheet.create({

});

export default class ChocoApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>ChocoApp</Text>
        <ProductList
          //data={PetList}
          listTitle='出售中的狗狗🐶'
        />
      </View>
    );
  }
}