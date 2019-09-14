import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../constants/color';
import { textStyles, distance } from '../constants/Style';

type PropsType = {
  onSearch: text => void,
  onDebounceSearch: text => void,
};

class Search extends React.PureComponent<PropsType> {
  render() {
    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity>
          <Icon
            name="search"
            type="feather"
            color={colors.neutral}
            containerStyle={{ marginEnd: 10 }}
          />
        </TouchableOpacity>

        <TextInput
          style={[textStyles.bigDark, { flex: 1, color: colors.neutral }]}
          selectionColor="white"
          autoFocus
          placeholder="Search"
          onChangeText={this.props.onDebounceSearch}
          // onSubmitEditing={event => this.props.onSearch(event.nativeEvent.text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    borderRadius: 24,
    backgroundColor: colors.grey,
    alignItems: 'center',
    paddingHorizontal: 10,
    // marginHorizontal: 24,
    paddingTop: 2,
    marginHorizontal: distance.defaultMargin,
    justifyContent: 'center',
    height: 36,
  },
});

export default Search;
