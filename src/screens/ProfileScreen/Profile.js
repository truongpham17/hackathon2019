import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { colors } from '../../constants/color';
import { distance, textStyles } from '../../constants/Style';
import { Title } from '../../components';
import { avatar } from '../../assets/avatars';

class Profile extends React.Component {
  renderInfoItem = (title, info) => (
    <View style={styles.item}>
      <Text style={textStyles.bigDarkEmphasize}>{title}</Text>
      <Text style={textStyles.normalDark}>{info}</Text>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Title title="Profile" />
        <View style={styles.avatar}>
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri: avatar[0],
            }}
          />
        </View>
        {this.renderInfoItem('NAME', 'Truong cute')}
        {this.renderInfoItem('EMAIL', 'phamminhtruongpro17@gmail.com')}
        {this.renderInfoItem('ADDRESS', 'Ho Chi Minh')}
        {this.renderInfoItem('POSTS', '29 posts')}
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            padding: distance.defaultDistance,
            backgroundColor: colors.grey,
          }}
          onPress={() => this.props.navigation.navigate('LoginNavigation')}
        >
          <Text style={{ color: 'red' }}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  avatar: {
    flex: 1,
    maxHeight: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: distance.defaultDistance,
  },
  item: {
    // width: '100%',
    height: 72,
    paddingHorizontal: distance.defaultDistance,
    paddingVertical: distance.smallDistance,
    justifyContent: 'space-around',
    backgroundColor: colors.grey,
    margin: distance.defaultDistance,
    marginVertical: distance.smallDistance,
    borderRadius: 8,
  },
});

export default Profile;
