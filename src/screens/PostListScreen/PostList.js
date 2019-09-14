import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { getPostByType } from '../../actions';
import Search from '../../components/Search';
import { textStyles, distance } from '../../constants/Style';
import PostItem from './PostItem';
import location from '../../assets/location.json';
import { TitleBack } from '../../components';
import { getLocation } from '../../utils/Location';
import { post_image } from '../../assets/avatars';

class PostList extends React.Component {
  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.props.getPostByType(id);
  }

  renderItem = ({ item, index }) => (
    <PostItem
      image={post_image[index]}
      title={item.title}
      price={item.price}
      unit={item.unit}
      quantity={item.quantity}
      location={getLocation(item.seller)}
      onPress={() =>
        this.props.navigation.navigate('DetailForm', { id: item._id })
      }
    />
  );

  render() {
    const { navigation, category } = this.props;
    const id = navigation.getParam('id');
    const productType = category.productTypes
      ? category.productTypes.find(item => item._id === id)
      : 'Result';

    return (
      <ScrollView style={{ flex: 1, marginTop: 32 }}>
        <Search />
        <TitleBack
          title={category ? category.name : ''}
          navigation={navigation}
        />
        <Text
          style={[
            textStyles.title,
            {
              marginStart: distance.defaultDistance + 2,
              marginBottom: distance.defaultDistance,
            },
          ]}
        >
          {productType.name ? productType.name : productType}
        </Text>
        <FlatList
          data={this.props.posts}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          // contentContainerStyle={{ alignItems: 'center' }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: distance.defaultDistance,
    marginStart: distance.defaultDistance,
    marginBottom: 4,
  },
});

export default connect(
  state => ({
    posts: state.post.posts,
    category: state.category.currentCategory,
  }),
  { getPostByType }
)(PostList);
