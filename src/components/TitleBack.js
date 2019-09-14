import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { distance, textStyles } from '../constants/Style';
import { colors } from '../constants/color';

type PropsType = {
  title: String,
  navigation: String,
};

class TitleBack extends React.PureComponent<PropsType> {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name="keyboard-arrow-left"
          size={38}
          color={this.props.color ? this.props.color : colors.primaryColor}
          onPress={() => this.props.navigation.pop()}
        />

        <Text
          style={[
            textStyles.bigTitle,
            {
              color: this.props.color ? this.props.color : colors.primaryColor,
            },
          ]}
        >
          {this.props.title}
        </Text>
      </View>
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

export default TitleBack;
