/**
 * Created by zhanjiyuan on 15/11/7.
 */

'use strict';

var React = require('react-native');
var {
  PixelRatio,
  StyleSheet,
  Text,
  View,

  } = React;

var ratio = PixelRatio.get();

var ItemDeadline = React.createClass({
  render: function() {
    var courses = this.props.data.forked_from_project.name_with_namespace.split(' / ');
    var days = this.props.data.daysLeft;
    return (
      days>=0?
      <View style={styles.container}>
        <View style={{flex: 6}}>
          <Text style={[styles.description, {color: '#000000'}]}>{"距离 " + courses[1] + " 截止"}</Text>
          <Text style={[styles.name, {color: '#666666'}]}>{courses[0]}</Text>
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
            <Text style={[styles.description, {color: '#AAAAAA'}]}>{"距离 " + courses[1] + " 截止"}</Text>
            <Text style={[styles.name, {color: '#AAAAAA'}]}>{courses[0]}</Text>
          </View>
          <View style={[styles.right, {flex: 2.5}]}>
            <Text style={styles.unit}>{"已结束   "}</Text>
          </View>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10 * ratio,
    paddingRight: 10 * ratio,
    paddingTop: 5 * ratio,
    paddingBottom: 5 * ratio
  },
  time: {
    fontSize: 20 * ratio,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 2 * ratio,
  },
  description: {
    fontSize: 8 * ratio,
    fontWeight: 'bold',
    paddingRight: 10 * ratio,
    paddingBottom: 1.5 * ratio,
  },
  name:{
    fontSize: 6 * ratio,
    paddingRight: 10 * ratio,
    paddingTop: 1.5 * ratio,
  },
  unit:{
    fontSize: 10 * ratio,
  },
  right: {
    padding: 5 * ratio,
  }
});

module.exports = ItemDeadline;