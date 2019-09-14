import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SCREEN_WIDTH } from '../../../constants/dimension';
import { textStyles } from '../../../constants/Style';

class CategoryItem extends React.PureComponent {
  render() {
    const { label, image } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <ImageBackground
          source={{ uri: image }}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={[textStyles.titleLight, { fontWeight: 'bold' }]}>
            {label}
          </Text>
        </ImageBackground>
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
    overflow: 'hidden',

    elevation: 3,
  },
});

export default CategoryItem;
