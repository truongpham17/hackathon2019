// App.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Tts from 'react-native-tts';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { getSmartPost } from '../../actions';
import { dialogflowConfig } from '../../env';

const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar: 'https://i.imgur.com/7k12EPD.png',
};

class Assistant extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hi ${this.props.user.name}, what do you want to buy`,
        createdAt: new Date(),
        user: BOT_USER,
      },
    ],
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    const message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  onProcess = value => {
    const data = value.split(',');
    const dataProcess = {};
    data.forEach(item => {
      const itemArr = item.split(':');
      dataProcess[itemArr[0]] = itemArr[1];
    });
    console.log(dataProcess);
    this.props.getSmartPost(dataProcess, {
      success: () => {
        this.props.navigation.navigate('PostList');
      },
      failure: () => {
        this.sendBotResponse(
          `Sorry we can't find any result. What do you want to buy`
        );
        Tts.speak(`Sorry we can't find any result. What do you want to buy`);
      },
    });
  };

  handleGoogleResponse(result) {
    let text = '';
    if (
      result.queryResult.fulfillmentMessages[0].text.text[0].startsWith('type')
    ) {
      this.onProcess(result.queryResult.fulfillmentMessages[0].text.text[0]);
      text = 'Please wait...';
    } else {
      text = result.queryResult.fulfillmentMessages[0].text.text[0];
    }
    this.sendBotResponse(text);
    Tts.speak(text);
  }

  sendBotResponse(text) {
    const msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER,
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg]),
    }));
  }

  render() {
    const { messages } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    user: state.user.buyer,
  }),
  { getSmartPost }
)(Assistant);
