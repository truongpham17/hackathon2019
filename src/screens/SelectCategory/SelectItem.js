import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../../constants/dimension';
import { textStyles } from '../../constants/Style';

class SelectItem extends React.PureComponent {
  render() {
    const { label } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={textStyles.bigDark}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: SCREEN_WIDTH / 2 - 20,
    height: 200,
    marginHorizontal: 8,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default SelectItem;
