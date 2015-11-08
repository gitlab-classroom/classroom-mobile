/**
 * Created by zhanjiyuan on 15/11/8.
 */
'use strict';

var React = require('react-native');
var {
  Image,
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
        <Image
          source={require('./gitlab_icon.png')}
          style={styles.icon}/>
        <Text style={styles.title}>{'Username'}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.props.changeUsername(text)}
        />
        <Text style={styles.title}>{'Password'}</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => this.props.changePassword(text)}
        />
      <TouchableHighlight
        onPress={this.props.onPressButton}
        style={styles.button}
        underlayColor="#cccccc">
        <Text style={styles.buttonText}>Login with GitLab</Text>
      </TouchableHighlight>
      <Text style={styles.errorText}>{this.props.errorText}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    padding:20,
  },
  icon: {
    flex: 1,
    height: 150,
    width: 150,
    alignSelf: 'center',
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
  },
  button: {
    marginTop: 30,
    backgroundColor: '#efefef',
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
    color: 'red',
  }
});

module.exports = ItemLogin;
