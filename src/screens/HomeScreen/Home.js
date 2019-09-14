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
import { getCategory } from '../../actions';
import Search from '../../components/Search';
import category from '../../reducers/category';
import CategoryItem from './components/CategoryItem';
import { textStyles, distance } from '../../constants/Style';
import { Title } from '../../components';

class Home extends React.Component {
  onItemPress = item => {
    this.props.navigation.navigate('ProductList', { id: item._id });
  };

  componentDidMount() {
    this.props.getCategory();
  }

  renderItem = ({ item }) => (
    <CategoryItem
      label={item.name}
      onPress={() => this.onItemPress(item)}
      image={item.image}
    />
  );

  render() {
    const { categoryList } = this.props;
    console.log(categoryList);
    return (
      <ScrollView
        style={{ flex: 1, marginTop: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Search />
        <Title title="Category" />
        {/* <Text style={[textStyles.bigTitle, styles.titleStyle]}>Category</Text> */}
        <FlatList
          data={categoryList}
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
    categoryList: state.category.list,
  }),
  { getCategory }
)(Home);
