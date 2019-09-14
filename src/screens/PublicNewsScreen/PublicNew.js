import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import { Input, Icon } from 'react-native-elements';
import { setPublicData } from '../../actions';
import { distance, textStyles } from '../../constants/Style';
import { colors } from '../../constants/color';

type PropsType = {};

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const images = [
  { value: '', key: 0 },
  { value: '', key: 1 },
  { value: '', key: 2 },
];

class PublicNews extends React.Component {
  state = {
    title: null,
    price: null,
    quantity: null,
    unit: null,
    description: null,
    image: null,
  };

  onNext = () => {
    this.props.setPublicData({ ...this.state, image: null });
    this.props.navigation.navigate('SelectCategory');
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
          image: source,
        });
      }
    });
  };

  renderImageItem = (item, index) => (
    <TouchableOpacity style={styles.image} onPress={this.onSelectAvatar}>
      {this.state.image && index === 0 ? (
        <Image source={this.state.image} style={{ width: 100, height: 100 }} />
      ) : (
        <Image source={require('../../assets/images/plus.png')} />
      )}
    </TouchableOpacity>
  );

  render() {
    const { title, price, quantity, unit, description } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ padding: 2 }} showsVerticalScrollIndicator={false}>
          <Text
            style={[
              textStyles.bigTitle,
              { color: colors.primaryColor },
              styles.title,
            ]}
          >
            Add Post
          </Text>
          <Input
            placeholder="Title"
            value={title}
            onChangeText={title => this.setState({ title })}
            inputContainerStyle={{
              borderBottomWidth: 0,
              height: 32,
            }}
            containerStyle={styles.input}
          />
          <Input
            placeholder="Unit"
            value={unit}
            onChangeText={unit => this.setState({ unit })}
            inputContainerStyle={{
              borderBottomWidth: 0,
              height: 32,
            }}
            containerStyle={styles.input}
          />
          <Input
            placeholder="Quantity"
            value={quantity}
            onChangeText={quantity => this.setState({ quantity })}
            inputContainerStyle={{
              borderBottomWidth: 0,
              height: 32,
            }}
            containerStyle={styles.input}
          />
          <Input
            placeholder="Price"
            value={price}
            onChangeText={price => this.setState({ price })}
            inputContainerStyle={{
              borderBottomWidth: 0,
              height: 32,
            }}
            containerStyle={styles.input}
          />
          <Input
            placeholder="Description"
            value={description}
            onChangeText={description => this.setState({ description })}
            inputContainerStyle={{
              borderBottomWidth: 0,
              height: 32,
            }}
            containerStyle={[styles.input, { height: 140 }]}
            multiline
          />
          <View style={[styles.input, styles.images]}>
            {images.map((item, index) => this.renderImageItem(item, index))}
          </View>
          <TouchableOpacity style={styles.button} onPress={this.onNext}>
            <Text style={[textStyles.bigLight]}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: distance.defaultDistance - 2,
    alignItems: 'center',
  },
  title: {
    marginTop: distance.defaultDistance,
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
    backgroundColor: colors.lightGrey,
    width: 320,
    marginTop: 24,
    height: 60,
    justifyContent: 'center',
    // height: 200,
  },
  images: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
  },
  image: {
    width: 72,
    height: 72,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 8,
  },
  button: {
    width: 120,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
    marginTop: distance.defaultDistance,
    alignSelf: 'flex-end',
    marginBottom: distance.defaultDistance,
  },
});

export default connect(
  null,
  { setPublicData }
)(PublicNews);
