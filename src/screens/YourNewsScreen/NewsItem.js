import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { distance, textStyles } from '../../constants/Style';
import { colors } from '../../constants/color';

type PropsType = {
  image: String,
  title: String,
  publicDate: String,
  end: String,
  message: String,
  isPublic: Boolean,
};

class NewsItem extends React.PureComponent<PropsType> {
  static defaultProps = {
    image:
      'https://s7img.ftdi.com/is/image/ProvideCommerce/PF_19_A3024_LAY_SHP_V2?$proflowers-tile-wide-mv-new$',
    title: 'This is title',
    publicDate: '23. 9 2018',
    end: '234 342 20',
    message: 'You have 23 abcdef',
  };

  render() {
    const { image, title, publicDate, end, message, isPublic } = this.props;
    return (
      <TouchableOpacity
        style={styles.containerStyle}
        onPress={this.props.onPress}
      >
        <View style={styles.contentContainer}>
          <View style={styles.image}>
            <Image source={{ uri: image }} style={{ flex: 1 }} />
          </View>
          <View style={styles.content}>
            <Text
              style={[
                textStyles.title,
                { marginBottom: distance.smallDistance },
              ]}
            >
              {title}
            </Text>
            <Text style={textStyles.normalDark}>Public Date: {publicDate}</Text>
            <Text style={textStyles.normalDark}>End Date: {end}</Text>
            <Text style={textStyles.normalDark}>{message}</Text>
          </View>
        </View>
        <View style={styles.action}>
          <TouchableOpacity
            style={[
              styles.button,
              isPublic ? {} : { backgroundColor: '#F75E56' },
            ]}
          >
            <Text style={[textStyles.bigLight]}>
              {isPublic ? 'Published' : 'Not Public'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Icon
              name="edit"
              containerStyle={{ marginEnd: distance.smallDistance }}
            />
            <Text style={textStyles.normalDark}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Icon
              name="delete"
              containerStyle={{ marginEnd: distance.smallDistance }}
            />
            <Text style={textStyles.normalDark}>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    padding: distance.defaultDistance,
    borderRadius: 8,
    backgroundColor: colors.grey,
    // width: '100%',
    marginHorizontal: distance.defaultDistance,
    marginVertical: distance.smallDistance,
  },
  contentContainer: {
    flexDirection: 'row',
    height: 120,
  },
  image: {
    width: '30%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    marginEnd: distance.defaultDistance,
  },
  content: {
    justifyContent: 'space-around',
    marginBottom: distance.defaultDistance,
  },
  action: {
    height: 48,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: distance.defaultDistance,
    alignItems: 'center',
    marginEnd: distance.longDistance,
  },
  button: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
  },
});

export default NewsItem;
