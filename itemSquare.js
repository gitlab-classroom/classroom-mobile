/**
 * Created by zhanjiyuan on 15/11/7.
 */

'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  } = React;


var ItemSquare = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.name} numberOfLines = {1}>{this.props.data.name}</Text>
        <Text style={styles.description} numberOfLines = {1}>{this.props.data.description}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 10,
  },
  description: {
    flex: 4,
    fontSize: 15,
    color: '#000000',
    paddingRight: 10,
  },
});

module.exports = ItemSquare;
