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

var Seperator = React.createClass({

  render: function() {
    return (
      <View style={styles.rowSeparator}/>
    );
  }

});

var ItemSquare = React.createClass({
  render: function() {
    return (
      <View>
      <Seperator/>
        <View style={styles.container}>
          <Text style={styles.name} numberOfLines = {1}>{this.props.data.name}</Text>
          <Text style={styles.description} numberOfLines = {1}>{this.props.data.description}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    backgroundColor: 'white',
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
    flex: 3,
    fontSize: 15,
    color: '#000000',
    paddingRight: 10,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
});

module.exports = ItemSquare;
