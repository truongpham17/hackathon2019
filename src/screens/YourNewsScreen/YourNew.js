import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { getPosts } from '../../actions';
import { distance, textStyles } from '../../constants/Style';
import NewsItem from './NewsItem';
import { colors } from '../../constants/color';
import { getDate } from '../../utils/Date';

const lists = [1, 2, 3, 4];

class YourNew extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderList = () =>
    (this.props.posts || []).map(item => (
      <NewsItem
        onPress={() =>
          this.props.navigation.navigate('RequestScreen', { id: item._id })
        }
        title={item.title}
        isPublic={item.published}
        publicDate={getDate(item.createdAt)}
        end="2018"
        message={`You have ${item.requests} request on your post`}
      />
    ));

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ padding: 2 }} showsVerticalScrollIndicator={false}>
          <Text
            style={[
              textStyles.bigTitle,
              { color: colors.primaryColor },
              styles.title,
            ]}
          >
            Your News
          </Text>
          {this.renderList()}
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
    marginStart: distance.defaultDistance,
    marginBottom: distance.defaultDistance,
  },
});

export default connect(
  state => ({
    posts: state.post.posts,
  }),
  { getPosts }
)(YourNew);
