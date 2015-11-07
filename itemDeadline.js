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

var ItemDeadline = React.createClass({
  render: function() {
    var courses = this.props.data.class;
    var labs = this.props.data.name;
    var days = this.props.data.daysLeft;
    return (
      days>=0?
      <View style={styles.container}>
        <View style={{flex: 6}}>
          <Text style={[styles.description, {color: '#000000'}]}>{"距离 " + labs + " 截止"}</Text>
          <Text style={[styles.name, {color: '#666666'}]}>{courses}</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={[styles.time, {backgroundColor: days<=0?'#FF3B30':days <= 2?'#FFCC00':'#007AFF'}]}>{days}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.unit}>{"天"}</Text>
        </View>
      </View>
        :
        <View style={styles.container}>
          <View style={{flex: 6}}>
            <Text style={[styles.description, {color: '#AAAAAA'}]}>{"距离 " + labs + " 截止"}</Text>
            <Text style={[styles.name, {color: '#AAAAAA'}]}>{courses}</Text>
          </View>
          <View style={[styles.right, {flex: 2.5}]}>
            <Text style={styles.unit}>{"已结束"}</Text>
          </View>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  time: {
    fontSize: 40,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 4,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 20,
    paddingBottom: 3,
  },
  name:{
    fontSize: 12,
    paddingRight: 20,
    paddingTop: 3,
  },
  unit:{
    fontSize: 20,
  },
  right: {
    padding: 10,
  }
});

module.exports = ItemDeadline;