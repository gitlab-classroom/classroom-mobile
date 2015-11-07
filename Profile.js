'use strict';

var React = require('react-native');
var Square = require('./itemSquare');
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

  componentDidMount() {
    this._loadInitialState().done();
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

  renderProfile: function () {

  },

  renderLogin: function () {

  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 30}}/>
        <Seperator/>
        <View style={styles.profile}>
          <Image
            source={{uri: 'https://pic2.zhimg.com/a39818e6281796ee9936ab25f26ec20d_m.jpg'}}
            style={styles.thumbnail}
          />
          <View style={styles.right}>
            <Text style={styles.name}>何天成</Text>
            <Text style={styles.description}>汪汪汪！</Text>
          </View>
        </View>
        <Seperator/>
        <View style={{marginTop: 40}}/>
        <Square data={{title: 'Email', content: '13302010000@fudan.edu.cn'}}/>
        <View/>
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
