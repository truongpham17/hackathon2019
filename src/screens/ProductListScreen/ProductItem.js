import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { SCREEN_WIDTH } from '../../constants/dimension';
import { textStyles } from '../../constants/Style';

class CategoryItem extends React.PureComponent {
  render() {
    const { label, onPress, image } = this.props;
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <ImageBackground
          style={styles.container}
          source={{
            uri: this.props.image,
          }}
        >
          <Text style={[textStyles.bigLight, { fontWeight: 'bold' }]}>
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
    overflow: 'hidden',
  },
});

export default CategoryItem;
