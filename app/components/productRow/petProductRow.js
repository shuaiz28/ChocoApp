import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

import ProductRow from './productRow';

const styles = StyleSheet.create({
  petInfoContainer: {
    flex: 1,
  },
  name: {
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  nameText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#92cdef',
  },
  details: {
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 12,
  }
});

class PetProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPetInfo = () => (
    <View style={styles.petInfoContainer}>
      <View style={styles.name}>
        <Text style={styles.nameText}>{this.props.data.name}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.text}>品种：{this.props.data.breed}</Text>
        <Text style={styles.text}>年龄：{this.props.data.age}</Text>
        <Text style={styles.text}>性别：{this.props.data.gender}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <ProductRow
        data={this.props.data}
        renderProductInfo={this.renderPetInfo}
        isEditing={this.props.isEditing}
        handleRemove={this.props.handleRemove}
      />
    );
  }
}

PetProductRow.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      uri: PropTypes.string,
    }),
    sellingPrice: PropTypes.string,
    name: PropTypes.string,
  }),
  isEditing: PropTypes.bool,
  handleRemove: PropTypes.func,
};

PetProductRow.defaultProps = {
  data: {},
  isEditing: false,
  handleRemove: _.noop,
};

export default PetProductRow;
