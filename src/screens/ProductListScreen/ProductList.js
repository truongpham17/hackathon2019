import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { getCategoryDetail } from '../../actions';
import Search from '../../components/Search';
import category from '../../reducers/category';
import ProductItem from './ProductItem';
import { distance, textStyles } from '../../constants/Style';
import { TitleBack } from '../../components';
import Background from '../../assets/images/background_1';
import Background2 from '../../assets/images/background_2';
import Background3 from '../../assets/images/background_3';
import Background4 from '../../assets/images/background_4';

class Home extends React.Component {
  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.props.getCategoryDetail(id);
  }

  renderBackground = () => {
    switch (this.props.currentCategory.name) {
      case 'Vegestables':
        return (
          <Background style={{ position: 'absolute', top: -32, left: 0 }} />
        );
      case 'Aquaculture':
        return (
          <Background2 style={{ position: 'absolute', top: -32, left: 0 }} />
        );
      case 'Fruits':
        return (
          <Background4 style={{ position: 'absolute', top: -32, left: 0 }} />
        );
      case 'Meat':
        return (
          <Background3 style={{ position: 'absolute', top: -32, left: 0 }} />
        );
      default:
        return (
          <Background style={{ position: 'absolute', top: -32, left: 0 }} />
        );
    }
  };

  renderItem = ({ item }) => {
    console.log(item);
    return (
      <ProductItem
        label={item.name}
        image={item.image}
        onPress={() =>
          this.props.navigation.navigate('PostList', { id: item._id })
        }
      />
    );
  };

  render() {
    console.log(this.props.image);
    const { navigation, currentCategory } = this.props;
    return (
      <ScrollView
        style={{ flex: 1, paddingTop: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {this.renderBackground()}
        <Search />
        <TitleBack
          navigation={navigation}
          title={currentCategory.name}
          color="white"
        />
        <FlatList
          data={currentCategory.productTypes || []}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          numColumns={2}
          contentContainerStyle={{ alignItems: 'center' }}
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
    currentCategory: state.category.currentCategory,
  }),
  { getCategoryDetail }
)(Home);
