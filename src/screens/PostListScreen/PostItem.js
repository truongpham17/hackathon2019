import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { distance, textStyles } from '../../constants/Style';
import { colors } from '../../constants/color';

type PropsType = {
  image: String,
  title: String,
  unit: String,
  price: String,
  location: String,
  quantity: Number,
};

class PostItem extends React.PureComponent<PropsType> {
  render() {
    const { image, title, unit, price, location, quantity } = this.props;
    return (
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={this.props.onPress}
      >
        <View style={styles.image}>
          <Image source={{ uri: image }} style={{ flex: 1 }} />
        </View>
        <View style={styles.content}>
          <Text
            style={[textStyles.title, { marginBottom: distance.smallDistance }]}
          >
            {title}
          </Text>
          <Text style={textStyles.normalDark}>Unit: {unit}</Text>
          <Text style={textStyles.normalDark}>Price: {price}</Text>
          <Text style={textStyles.normalDark}>Location: {location}</Text>
          <Text style={textStyles.normalDark}>Quantity: {quantity}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    padding: distance.defaultDistance,
    flexDirection: 'row',
    height: 160,
    borderRadius: 8,
    backgroundColor: colors.grey,
    // width: '100%',
    marginHorizontal: distance.defaultDistance,
    marginVertical: distance.smallDistance,
  },
  image: {
    width: '40%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    marginEnd: distance.defaultDistance,
  },
  content: {
    justifyContent: 'space-around',
  },
});

export default PostItem;
