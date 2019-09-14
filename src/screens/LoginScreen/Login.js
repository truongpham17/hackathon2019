import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';

import { Input, CheckBox } from 'react-native-elements';
import { login } from '../../actions';
import { colors } from '../../constants/color';
import { textStyles } from '../../constants/Style';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isSeller: false,
  };

  onLogin = () => {
    const { email, password, isSeller } = this.state;
    const { login, navigation } = this.props;
    login(
      { phone: email, password, isSeller },
      {
        success: () => {
          if (isSeller) {
            navigation.navigate('MainSellerNavigation');
          } else {
            navigation.navigate('MainNavigation');
          }
        },
      }
    );
  };

  render() {
    const { email, password } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={[
            textStyles.superBigTitle,
            {
              textAlign: 'left',
              width: '100%',
              marginStart: 64,
            },
          ]}
        >
          Login to you account
        </Text>
        <Input
          placeholder="Email or username"
          value={email}
          onChangeText={email => this.setState({ email })}
          containerStyle={styles.input}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 32,
          }}
        />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 32,
          }}
          containerStyle={styles.input}
        />

        <CheckBox
          center
          title="Login as seller"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.isSeller}
          onPress={() => this.setState({ isSeller: !this.state.isSeller })}
          containerStyle={{
            alignSelf: 'flex-start',
            backgroundColor: 'transparent',
            marginLeft: 20,
          }}
        />

        <View style={[styles.form]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={[styles.button, { backgroundColor: colors.grey }]}
          >
            <Text style={textStyles.normalHighlight}>Create new account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('MainNavigation')}
            style={[styles.button, { paddingHorizontal: 32 }]}
            onPress={this.onLogin}
          >
            <Text style={textStyles.normalLight}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 18,
  },
  input: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 4,
    backgroundColor: colors.white,
    width: 320,
    marginTop: 24,
    height: 48,
    justifyContent: 'center',
    // height: 200,
  },
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 4,
    padding: 8,
    backgroundColor: colors.primaryColor,
  },
});

export default connect(
  null,
  { login }
)(Login);
