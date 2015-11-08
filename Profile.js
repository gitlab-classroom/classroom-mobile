'use strict';

var React = require('react-native');
var Square = require('./itemSquare');
var ItemProfile = require('./itemProfile');
var {
  PixelRatio,
  NavigatorIOS,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  } = React;

var ratio = PixelRatio.get()

var Seperator = React.createClass({

  render: function() {
    return (
      <View style={styles.rowSeparator}/>
    );
  }

});

var Profile = React.createClass({

  getInitialState: function() {
    return {
      data: null,
    };
  },

  componentDidMount() {
    // this._loadInitialState().done();
    this.fetch();
  },

  async _loadInitialState() {
    try {
      var value = await AsyncStorage.getItem('TOKEN');
      if (value !== null){
        // this.setState({selectedValue: value});
      } else {
      }
    } catch (error) {
    }
  },

  fetch: function () {
    let USER_URL = 'https://htc.fdu13ss.org/api/v1/users/me';
    fetch(USER_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: responseData,
        });
      })
      .done();
  },

  renderProfile: function () {

  },

  renderLogin: function () {

  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 30}}/>
        <Seperator/>
        {this.state.data == null ? <View/> :
          <View>
          <ItemProfile data={this.state.data}/>
          <Seperator/>
          <View style={{marginTop: 40}}/>
          <Square data={{name: 'Email:', description: this.state.data.email}}/>
          <Square data={{name: 'Skype:', description: this.state.data.skype}}/>
          <Square data={{name: 'Linkedin:', description: this.state.data.linkedin}}/>
          <Square data={{name: 'Twitter:', description: this.state.data.twitter}}/>
          <Square data={{name: 'Website:', description: this.state.data.website_url}}/>
          <Seperator/>
          </View>
        }

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#eeeeee',
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5 * ratio,
    backgroundColor: 'white',
  },
  thumbnail: {
    width: 25 * ratio,
    height: 25 * ratio,
    borderRadius: 12.5 * ratio,
    marginLeft: 5 * ratio,
    marginRight: 5 * ratio,
  },
  name: {
    flex: 1,
    fontSize: 8 * ratio,
    fontWeight: 'bold',
    paddingBottom: 1.5 * ratio,
  },
  description: {
    flex: 1,
    fontSize: 6 * ratio,
    color: '#666666',
    paddingTop: 1.5 * ratio,
  },
  right: {
    flex: 1,
    marginLeft: 30,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
});

module.exports = Profile;
