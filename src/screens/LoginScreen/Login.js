/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getHelloRequest } from '../../actions/index';

class Login extends React.Component {
  render() {
    const { content, getHelloRequest, navigation } = this.props;
    return (
      <View style={styles.containerStyle}>
        <Text>{content}</Text>
        <TouchableOpacity onPress={getHelloRequest}>
          <Text>Change Text</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Assistant')}>
          <Text>Navigate Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(
  state => ({
    content: state.user.content,
  }),
  { getHelloRequest }
)(Login);
