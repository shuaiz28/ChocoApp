import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

const PRODUCT_ROW_HEIGHT = 90;
const PRODUCT_ROW_BORDER_WIDTH = 1;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    flexDirection: 'row',
    borderWidth: PRODUCT_ROW_BORDER_WIDTH,
    borderColor: '#F0F0F0',
    height: PRODUCT_ROW_HEIGHT,
  },
  productImage: {
    height: PRODUCT_ROW_HEIGHT - PRODUCT_ROW_BORDER_WIDTH * 2,
    width: PRODUCT_ROW_HEIGHT - PRODUCT_ROW_BORDER_WIDTH * 2,
  },
  productInfo: {
    flex: 7,
  },
  splitter: {
    width: 2,
    height: PRODUCT_ROW_HEIGHT - PRODUCT_ROW_BORDER_WIDTH * 10,
    alignSelf: 'center',
    backgroundColor: '#E0E0E0',
    opacity: 0.4,
  },
  productPrice: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  remove: {
    position: 'absolute',
    top: 2,
    right: 5,
    width: 12,
    borderColor: '#F00',
    borderWidth: 1,
  }
});

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.props.data.image}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          {this.props.renderProductInfo()}
        </View>
        <View style={styles.splitter}/>
        <View style={styles.productPrice}>
          {
            this.props.isEditing && (
              <View style={styles.remove}>
                <TouchableOpacity onPress={() => this.props.handleRemove(this.props.data.id)}>
                  <Text>X</Text>
                </TouchableOpacity>
              </View>
            )
          }
          <Text>{this.props.data.sellingPrice}</Text>
        </View>
      </View>
    );
  }
}

ProductRow.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      uri: PropTypes.string,
    }),
    id: PropTypes.string,
    sellingPrice: PropTypes.string,
  }),
  renderProductInfo: PropTypes.func,
  isEditing: PropTypes.bool,
  handleRemove: PropTypes.func,
};

ProductRow.defaultProps = {
  data: {},
  renderProductInfo: _.noop,
  isEditing: false,
  handleRemove: _.noop,
};

export default ProductRow;
