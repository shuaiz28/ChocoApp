import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

import PetProductRow from '../productRow/petProductRow';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  editLink: {
    color: '#02ADF0',
    alignSelf: 'flex-end',
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  list: {
    //marginBottom: 80,
   // flex: 1,
  },
  listHeader: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 10,
    marginVertical: 5,
  },
});

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: '1',
          image: {
            uri: 'https://usercontent1.hubstatic.com/12446986_f520.jpg',
          },
          sellingPrice: '25000',
          name: 'Choco',
          gender: '公',
          age: '2岁',
          breed: '爱尔兰软毛梗',
        },
        {
          id: '2',
          image: {
            uri: 'https://img.alicdn.com/img/bao/uploaded/i4/TB-6281785706.jpg%3F/i2/TB2Xf1BojoIL1JjSZFyXXbFBpXa_!!58305263.jpg_196x196Q50s50.jpg',
          },
          sellingPrice: '30000',
          name: 'Yuki',
          gender: '母',
          age: '1岁',
          breed: '法国斗牛犬',
        },
      ],
      isEditing: false,
    };
  }

  setToViewMode = () => {
    this.setState({ isEditing: false });
  };

  setToEditMode = () => {
    this.setState({ isEditing: true });
  };

  handleAdd = () => {
    const newItem = {
        id: _.random(1, 100).toString(),
        image: {
          uri: 'https://usercontent1.hubstatic.com/12446986_f520.jpg',
        },
        sellingPrice: _.random(15000, 30000).toString(),
        name: 'Choco' + _.random(1, 100),
        gender: '公',
        age: _.random(1, 9) + '岁',
        breed: '爱尔兰软毛梗',
      };
    this.setState({
      data: _.concat(newItem, this.state.data),
    })
  };

  handleRemove = (itemId) => {
    this.setState({
      data: _.filter(_.clone(this.state.data), item => (item.id !== itemId)),
    });
  };

  renderItem = ({item}) => {
    return (
      <PetProductRow
        data={item}
        isEditing={this.state.isEditing}
        handleRemove={this.handleRemove}
      />
    )
  };

  renderListHeader = () => _.isNil(this.props.listTitle) ? null :
    <Text
      style={styles.listHeader}
    >
      {this.props.listTitle}
    </Text>

  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.isEditing && (
            <TouchableOpacity onPress={this.setToEditMode}>
              <Text style={styles.editLink}>编辑</Text>
            </TouchableOpacity>
          )
        }
        {
          this.state.isEditing && (
            <TouchableOpacity onPress={this.setToViewMode}>
              <Text style={styles.editLink}>返回</Text>
            </TouchableOpacity>
          )
        }
        {
          this.state.isEditing && (
            <TouchableOpacity onPress={this.handleAdd}>
              <Text style={styles.editLink}>添加</Text>
            </TouchableOpacity>
          )
        }
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.id}
            ListHeaderComponent={this.renderListHeader}
            // isEditing={this.state.isEditing}
            extraData={this.state}
          />
        </View>

      </View>
    );
  }
}

ProductList.propTypes = {
  data: PropTypes.array,
  listTitle: PropTypes.string,
};

ProductList.defaultProps = {
  data: null,
  listTitle: null,
};

export default ProductList;
