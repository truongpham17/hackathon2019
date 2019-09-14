import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { textStyles } from '../../constants/Style';

class CategoryItem extends React.PureComponent {
  render() {
    const { label, onPress } = this.props;

    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Text style={textStyles.bigDark}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 200,
    height: 64,
    marginHorizontal: 8,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default CategoryItem;
