import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { colors } from '../constants/color';
import { textStyles } from '../constants/Style';

// navigation.state.routeName
const TAB_NAME = [
  'PublicNews',
  'YourNew',
  'Profile',
  // 'UserScreen',
];
const routeConfig = [
  {
    icon: 'home',
    title: 'Home',
  },
  {
    icon: 'collections-bookmark',
    title: 'Your Posts',
  },
  {
    icon: 'person',
    title: 'Profile',
  },
  // {
  //   icon: 'user',
  //   title: 'Profile',
  // },
];

class TabBar extends React.PureComponent {
  renderTabIcon = ({ icon, title, onPress, color }) => (
    <TouchableWithoutFeedback onPress={onPress} key={title}>
      <View>
        <Icon name={icon} size={20} color={color} />
        <Text style={[textStyles.smallDark, { color }]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  render() {
    const { navigation } = this.props;
    const { index } = navigation.state;
    const colorArr = TAB_NAME.map((item, idx) =>
      idx === index ? colors.white : colors.primaryDark
    );
    return (
      // <View style={{ backgroundColor: colors.primaryLight }}>
      <View style={styles.containerStyle}>
        {routeConfig.map((item, idx) =>
          this.renderTabIcon({
            icon: item.icon,
            title: item.title,
            onPress: () => navigation.navigate(TAB_NAME[idx]),
            color: colorArr[idx],
          })
        )}
      </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 6,
    paddingTop: 6,
    backgroundColor: colors.primaryLight,
    // borderTopRightRadius: 24,
    // borderTopLeftRadius: 24,
    overflow: 'hidden',
    elevation: 12,
  },
});

export default withNavigation(TabBar);
