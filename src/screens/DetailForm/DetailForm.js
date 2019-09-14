import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { createRequest } from '../../actions';
import { distance, textStyles } from '../../constants/Style';
import { colors } from '../../constants/color';
import { SCREEN_WIDTH } from '../../constants/dimension';
import { getLocation } from '../../utils/Location';
import { getDate } from '../../utils/Date';
import { post_image, avatar } from '../../assets/avatars';

type PropsType = {
  images: [String],
  title: String,
  name: String,
  type: String,
  unit: String,
  price: String,
  location: String,
  description: String,
  date: String,
};

class DetailForm extends React.Component<PropsType> {
  // static defaultProps = {
  //   images: [
  //     'https://s7img.ftdi.com/is/image/ProvideCommerce/PF_19_A3024_LAY_SHP_V2?$proflowers-tile-wide-mv-new$',
  //     'https://s7img.ftdi.com/is/image/ProvideCommerce/PF_19_A3024_LAY_SHP_V2?$proflowers-tile-wide-mv-new$',
  //   ],
  //   title: 'afs',
  //   name: 'Truong ucd',
  //   type: 'fafas',
  //   unit: 'fdfdsafds',
  //   price: 'fdafdsfsa',
  //   location: 'fafdsafads',
  //   description: 'fdafdafdjfajwefojw eofj ewaofjwao jfow ijwao ja iw',
  //   date: 'fsfd',
  // };
  state = {
    quantity: '',
    requestPrice: '',
    note: '',
    showDialog: false,
  };

  onCreateRequest = () => {
    const { quantity, requestPrice, note } = this.state;
    const { navigation } = this.props;
    const currentPost = this.getData();
    const { createRequest } = this.props;
    createRequest({ quantity, requestPrice, note, post: currentPost._id });

    setTimeout(() => {
      Alert.alert('Success', null, [
        { text: 'OK', onPress: () => navigation.pop() },
      ]);
    }, 1000);
  };

  getData() {
    const id = this.props.navigation.getParam('id');
    return this.props.posts.find(item => item._id === id);
  }

  renderItem = (title, value) => (
    <Text style={{ marginTop: 8 }}>
      <Text style={[textStyles.bigDark, { fontWeight: 'bold' }]}>
        {title}:{' '}
      </Text>
      <Text style={textStyles.bigDark}>{value}</Text>
    </Text>
  );

  renderPurchaseForm = () => {
    const { quantity, requestPrice, note } = this.state;
    return (
      <View style={styles.purchase}>
        <Text style={[textStyles.titleLight, { textAlign: 'center' }]}>
          Request form
        </Text>
        <Input
          placeholder="Quantity"
          value={quantity}
          onChangeText={quantity => this.setState({ quantity })}
          containerStyle={styles.input}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 32,
          }}
        />
        <Input
          placeholder="Request price"
          value={requestPrice}
          onChangeText={requestPrice => this.setState({ requestPrice })}
          containerStyle={styles.input}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 32,
          }}
        />
        <Input
          placeholder="Other request"
          value={note}
          multiline
          onChangeText={note => this.setState({ note })}
          containerStyle={styles.input}
          inputContainerStyle={{
            borderBottomWidth: 0,
            height: 80,
          }}
        />
        <View style={styles.action}>
          <TouchableOpacity
            style={[styles.buttonv, { backgroundColor: '#F75E56' }]}
            onPress={() => this.setState({ showDialog: false })}
          >
            <Text style={[textStyles.bigLight]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonv, { backgroundColor: colors.white }]}
            onPress={this.onCreateRequest}
          >
            <Text style={[textStyles.bigLight, { color: colors.primaryColor }]}>
              Request
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const {
      images,
      title,
      // seller,
      type,
      unit,
      price,
      createdAt,
      seller,
      description,
    } = this.getData();
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 280 }}>
          <ScrollView horizontal>
            {post_image.map(item => (
              <Image
                style={{ width: SCREEN_WIDTH, height: 280 }}
                source={{ uri: item }}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.title}>
          <Text style={[textStyles.bigTitle, { color: 'white' }]}>{type}</Text>
        </View>
        <View style={styles.content}>
          <View style={{ flexDirection: 'row' }}>
            <Avatar rounded size="large" source={{ uri: avatar[0] }} />
            <Text
              style={[
                textStyles.title,
                {
                  marginStart: distance.longDistance,
                  marginTop: distance.longDistance,
                },
              ]}
            >
              {seller.name}
            </Text>
          </View>
          <Text
            style={[
              textStyles.bigTitleHighLight,
              { width: '100%', textAlign: 'center' },
            ]}
          >
            {title}
          </Text>
          {this.renderItem('Unit', unit)}
          {this.renderItem('Price', price)}
          {this.renderItem('Publish Date', getDate(createdAt))}
          {this.renderItem('Location', getLocation(seller))}
          {this.renderItem('Description', description)}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ showDialog: true })}
        >
          <Text style={textStyles.bigLight}>Order</Text>
        </TouchableOpacity>
        {this.state.showDialog ? this.renderPurchaseForm() : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    position: 'absolute',
    top: 220,
    left: 40,
    zIndex: 2,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#ffffff',
    padding: distance.defaultDistance,
    overflow: 'hidden',
    marginTop: -40,
  },
  button: {
    position: 'absolute',
    width: 120,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
    bottom: 16,
    right: 16,
    borderRadius: 8,
  },
  purchase: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    top: 360,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.primaryColor,
    padding: distance.defaultDistance,
    paddingTop: distance.longDistance,
    width: '100%',
    alignItems: 'center',
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
  buttonv: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
  },
  action: {
    marginTop: distance.defaultDistance,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default connect(
  state => ({
    posts: state.post.posts,
  }),
  { createRequest }
)(DetailForm);
