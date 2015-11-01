'use strict';

var React = require('react-native');
var MK = require('react-native-material-kit');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
} = React;

const {
  MKButton,
  MKColor,
} = MK;

const dummyData = {
          venue: 'React Native',
          lat: 123,
          long: 123,
          start: 123,
          end: 123,
          id: 1,
        };

const UseCurrentLocationButton = MKButton.accentColoredButton()
  .withText('USE CURRENT LOCATION')
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();

var serverString = 'dummytext';
const AddShowButton = MKButton.accentColoredButton()
  .withText('ADD SHOW')
  .withOnPress(() => {
    fetch('http://httpbin.org/post', {method: "POST", body: ({hello: 'world'})})
      .then((response) => response.json())
      .then((responseText) => {
        console.log(responseText);
        serverString = responseText;
      })
      .catch((error) => {
        serverString = 'error';
        console.warn(error);
      });
  })
  .build();

var Shows = React.createClass({
  render: function() {
    return (
      <View style={pageStyle.container}>

        <Text style={pageStyle.welcome}>
          Shows
          {serverString}
        </Text>

        <TextInput ref={component => this._textInput = component} 
            style={{height: 50, width: 300, borderWidth: 1, borderColor: '#888888 '}}
            placeholder="Venue"></TextInput>

        <TextInput ref={component => this._textInput = component} 
            style={{height: 50, width: 300, borderWidth: 1, borderColor: '#888888 '}}
            placeholder="Lat"></TextInput>

        <TextInput ref={component => this._textInput = component} 
            style={{height: 50, width: 300, borderWidth: 1, borderColor: '#888888 '}}
            placeholder="Long"></TextInput>

        <UseCurrentLocationButton/>

        <TextInput ref={component => this._textInput = component} 
            style={{height: 50, width: 300, borderWidth: 1, borderColor: '#888888 '}}
            placeholder="Start Time"></TextInput>

        <TextInput ref={component => this._textInput = component} 
            style={{height: 50, width: 300, borderWidth: 1, borderColor: '#888888 '}}
            placeholder="End Time"></TextInput>

        <AddShowButton/>

      </View>

    );
  }
});


var pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5C6BC0',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = Shows;
