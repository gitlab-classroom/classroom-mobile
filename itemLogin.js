/**
 * Created by zhanjiyuan on 15/11/8.
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight
  } = React;

var ItemLogin = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Username'}</Text>
        <TextInput
          style={styles.input}
        />
        <Text style={styles.title}>{'Password'}</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableHighlight onPress={this._onPressButton}>
      <Text>2333</Text>
    </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    padding:20,
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title:{
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
  }
});

module.exports = ItemLogin;
