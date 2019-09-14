import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { getCategoryDetail, publishPost } from '../../actions';
import Search from '../../components/Search';
import category from '../../reducers/category';
import ProductTypeItem from './ProductTypeItem';
import { textStyles, distance } from '../../constants/Style';
import { Title, TitleBack } from '../../components';
import { colors } from '../../constants/color';

class SelectProductType extends React.Component {
  onItemPress = item => {
    const { publishData, publishPost, sellerId } = this.props;
    publishPost(
      { ...publishData, productType: item._id, seller: sellerId },
      {
        success: () => {
          this.props.navigation.navigate('SellerTabNavigation');
        },
      }
    );
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.props.getCategoryDetail(id);
  }

  renderItem = ({ item }) => (
    <ProductTypeItem label={item.name} onPress={() => this.onItemPress(item)} />
  );

  render() {
    const { currentCategory, navigation } = this.props;
    return (
      <ScrollView
        style={{ flex: 1, marginTop: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <TitleBack title="Select Type" navigation={navigation} />
        {/* <Text style={[textStyles.bigTitle, styles.titleStyle]}>Category</Text> */}
        <FlatList
          data={currentCategory.productTypes || []}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          // numColumns={2}
          contentContainerStyle={{ alignItems: 'center' }}
        />
        {/* <TouchableOpacity style={styles.button} onPress={this.onNext}>
          <Text style={[textStyles.bigLight]}>DONE</Text>
        </TouchableOpacity> */}
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
    marginEnd: distance.longDistance,
  },
});

export default connect(
  state => ({
    categoryList: state.category.list,
    currentCategory: state.category.currentCategory,
    publishData: state.publish,
    sellerId: state.user.seller._id,
  }),
  { getCategoryDetail, publishPost }
)(SelectProductType);

// export default CategoryScreen;
