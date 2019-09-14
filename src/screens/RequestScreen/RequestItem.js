import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { distance, textStyles } from '../../constants/Style';
import { colors } from '../../constants/color';

type PropsType = {
  image: String,
  name: String,
  phone: String,
  price: String,
  note: String,
};

class RequestItem extends React.PureComponent<PropsType> {
  render() {
    const { image, name, phone, price, note } = this.props;
    return (
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={this.props.onPress}
      >
        <View style={styles.image}>
          <Avatar source={{ uri: image }} size="large" rounded />
        </View>
        <View style={styles.content}>
          <Text
            style={[textStyles.title, { marginBottom: distance.smallDistance }]}
          >
            {name}fsd
          </Text>
          <Text style={textStyles.normalDark}>Phone: {phone}</Text>
          <Text style={textStyles.normalDark}>Price request: {price}</Text>
          <Text style={[textStyles.normalDark]}>Note: {note}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    padding: distance.defaultDistance,
    flexDirection: 'row',
    // minHeight: 120,
    borderRadius: 8,
    backgroundColor: colors.grey,
    // width: '100%',
    marginHorizontal: distance.defaultDistance,
    marginVertical: distance.smallDistance,
    height: 140,
  },
  image: {
    width: '30%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    marginEnd: distance.defaultDistance,
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default RequestItem;
