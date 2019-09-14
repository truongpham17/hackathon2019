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
import { getCategory } from '../../actions';
import Search from '../../components/Search';
import category from '../../reducers/category';
import SelectItem from './SelectItem';
import { textStyles, distance } from '../../constants/Style';
import { Title, TitleBack } from '../../components';
import { colors } from '../../constants/color';

class CategoryScreen extends React.Component {
  onItemPress = item => {
    this.props.navigation.navigate('SelectProductType', { id: item._id });
  };

  componentDidMount() {
    this.props.getCategory();
  }

  renderItem = ({ item }) => (
    <SelectItem label={item.name} onPress={() => this.onItemPress(item)} />
  );

  render() {
    const { categoryList, navigation } = this.props;
    console.log(categoryList);
    return (
      <ScrollView
        style={{ flex: 1, marginTop: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <TitleBack title="Select Category" navigation={navigation} />
        {/* <Text style={[textStyles.bigTitle, styles.titleStyle]}>Category</Text> */}
        <FlatList
          data={categoryList}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          numColumns={2}
          contentContainerStyle={{ alignItems: 'center' }}
        />
        <TouchableOpacity style={styles.button} onPress={this.onNext}>
          <Text style={[textStyles.bigLight]}>Next</Text>
        </TouchableOpacity>
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
  }),
  { getCategory }
)(CategoryScreen);

// export default CategoryScreen;
