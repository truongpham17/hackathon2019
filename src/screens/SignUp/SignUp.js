import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';
import { Input, Avatar } from 'react-native-elements';
import { signUp } from '../../actions';
import { colors } from '../../constants/color';
import { textStyles, distance } from '../../constants/Style';
import location from '../../assets/location.json';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class Login extends React.Component {
  state = {
    phone: null,
    password: null,
    province: null,
    district: null,
    street: null,
    number: null,
    name: null,
    role: null,
    avatarSource: {},
  };

  onSignUp = () => {
    const { signUp } = this.props;
    const {
      phone,
      password,
      province,
      district,
      street,
      number,
      role,
      name,
      avatarSource,
    } = this.state;
    if (
      !phone ||
      !password ||
      !province ||
      !district ||
      !street ||
      !number ||
      !role ||
      !name
    ) {
      return;
    }

    const provinceMap = location.find(item => item.name === province);
    const provinceId = provinceMap.code;

    const districtId = provinceMap.districts.find(
      item => item.name === district
    ).code;

    signUp(
      {
        name,
        phone,
        password,
        province: provinceId,
        district: districtId,
        address: `${street} ${number}`,
        type: role,
      },
      {
        success: () => {
          if (role === 'Seller') {
            this.props.navigation.navigate('MainSellerNavigation');
          } else {
            this.props.navigation.navigate('MainNavigation');
          }
        },
      }
    );
  };

  onLogin = () => {
    this.props.navigation.pop();
  };

  onSelectAvatar = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: `data:image/jpeg;base64,${response.data}` };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  getProvince = () =>
    location.map(item => ({
      value: item.name,
    }));

  getDistricts = () => {
    const { province } = this.state;
    const p = location.find(item => item.name === province);
    if (!p) {
      return [];
    }
    return p.districts.map(item => ({ value: item.name }));
  };

  render() {
    const { phone, password, name, number, street } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
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
          Sign up
        </Text>

        <Avatar
          rounded
          size="large"
          onPress={this.onSelectAvatar}
          source={this.state.avatarSource}
        />
        <Input
          placeholder="Full name"
          value={name}
          onChangeText={name => this.setState({ name })}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 32,
          }}
          containerStyle={styles.input}
        />

        <Input
          placeholder="Phone"
          value={phone}
          onChangeText={phone => this.setState({ phone })}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 32,
          }}
          containerStyle={styles.input}
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

        <Dropdown
          label="Province"
          data={this.getProvince()}
          containerStyle={[styles.input, { justifyContent: 'center' }]}
          onChangeText={province => this.setState({ province })}
        />
        <Dropdown
          label="District"
          data={this.getDistricts()}
          containerStyle={[styles.input, { justifyContent: 'center' }]}
          onChangeText={district => this.setState({ district })}
        />
        <Dropdown
          label="Role"
          data={[{ value: 'Buyer' }, { value: 'Seller' }]}
          containerStyle={[styles.input, { justifyContent: 'center' }]}
          onChangeText={role => this.setState({ role })}
        />
        <Input
          placeholder="Street"
          value={street}
          onChangeText={street => this.setState({ street })}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 32,
          }}
          containerStyle={styles.input}
        />
        <Input
          placeholder="Address"
          value={number}
          onChangeText={number => this.setState({ number })}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 32,
          }}
          containerStyle={styles.input}
        />

        <View style={[styles.form]}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.grey }]}
            onPress={this.onLogin}
          >
            <Text style={textStyles.normalHighlight}>
              Already have account?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('MainNavigation')}
            style={[styles.button, { paddingHorizontal: 32 }]}
            onPress={this.onSignUp}
          >
            <Text style={textStyles.normalLight}>Sign up</Text>
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
    marginTop: 12,
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
  { signUp }
)(Login);
