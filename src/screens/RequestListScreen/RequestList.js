import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Title } from '../../components';
import { getRequest } from '../../actions';
import RequestItem from './RequestItem';

class RequestList extends React.Component {
  componentDidMount() {
    this.props.getRequest();
  }

  render() {
    const { requests } = this.props;
    return (
      <ScrollView
        style={{ flex: 1, marginTop: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Title title="Request" />
        <FlatList
          data={requests}
          renderItem={({ item }) => (
            <RequestItem
              title={item.post ? item.post.title : ''}
              publicDate={item.requestPrice}
              end={item.post.description}
            />
          )}
        />
      </ScrollView>
    );
  }
}

export default connect(
  state => ({
    requests: state.post.requests,
  }),
  { getRequest }
)(RequestList);
