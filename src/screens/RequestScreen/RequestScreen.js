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
import { distance, textStyles } from '../../constants/Style';
import { colors } from '../../constants/color';
import { getPostDetail } from '../../actions';
import RequestItem from './RequestItem';

const lists = [1, 2, 3, 4];

class YourNew extends React.Component {
  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.props.getPostDetail(id);
  }

  renderList = () =>
    (this.props.post.requests || []).map(item => (
      <RequestItem
        image={item.buyer.avatar}
        name={item.buyer.name}
        phone={item.buyer.phone}
        price={item.requestPrice}
        note={item.note}
      />
    ));

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ padding: 2 }}
          showsHorizontalScrollIndicator={false}
        >
          <Text
            style={[
              textStyles.bigTitle,
              { color: colors.primaryColor },
              styles.title,
            ]}
          >
            Request
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
    post: state.post.currentPost,
  }),
  { getPostDetail }
)(YourNew);
