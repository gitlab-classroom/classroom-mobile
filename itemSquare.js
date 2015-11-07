/**
 * Created by zhanjiyuan on 15/11/7.
 */

'use strict';

var React = require('react-native');
var {
  PixelRatio,
  AppRegistry,
  NavigatorIOS,
  Image,
  StyleSheet,
  Text,
  View,
  } = React;

var ratio = PixelRatio.get();

var ItemSquare = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.data.title}</Text>
        <Text style={styles.content}>{this.props.data.content}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30 * ratio,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 10 * ratio,
    color: '#000000',
    fontWeight: 'bold',
    paddingLeft: 10 * ratio,
    paddingRight: 5 * ratio,
  },
  content: {
    flex: 4,
    fontSize: 7 * ratio,
    color: '#000000',
    paddingRight: 5 * ratio,
  },
});

module.exports = ItemSquare;