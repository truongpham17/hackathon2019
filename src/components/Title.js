import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { distance, textStyles } from '../constants/Style';
import { colors } from '../constants/color';

type PropsType = {
  title: String,
  navigation: String,
};

class Title extends React.PureComponent<PropsType> {
  render() {
    return (
      <Text
        style={[
          textStyles.bigTitle,
          { color: colors.primaryColor },
          styles.container,
        ]}
      >
        {this.props.title}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: distance.defaultDistance,
    alignItems: 'center',
  },
});

export default Title;
