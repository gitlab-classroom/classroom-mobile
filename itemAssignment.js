/**
 * Created by zhanjiyuan on 15/11/8.
 */

'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  } = React;

var ItemDeadline = require('./itemDeadline');
var ItemAssignment = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.class}>{this.props.data.class}</Text>
        <Text style={styles.deadline}>{'Deadline: ' + this.props.data.deadline}</Text>

        <Text style={styles.description}>{this.props.data.description}</Text>
        <View style={styles.materials}>
          <Text style={styles.title}>{'ssh'}</Text>
          <Text style={styles.content}>{this.props.data.ssh_url_to_repo}</Text>
        </View>
        <View style={styles.materials}>
          <Text style={styles.title}>{'http'}</Text>
          <Text style={styles.content}>{this.props.data.http_url_to_repo}</Text>
        </View>
        <View style={styles.materials}>
          <Text style={styles.title}>{'web'}</Text>
          <Text style={styles.content}>{this.props.data.web_url}</Text>
        </View>

      </View>
    );
  }

});

var styles = StyleSheet.create({
  container:{
    marginTop: 60,
    padding:20,
  },
  class:{
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  description:{
    padding: 10,
    backgroundColor: '#AAAAAA',
    borderRadius: 3,
    fontSize: 14,
  },
  deadline:{
    fontWeight:'bold',
    paddingBottom: 20,
    fontSize: 13,
    color: '##FF3B30',
  },
  materials:{
    paddingTop:5,
    paddingBottom:5,
  },
  content:{
    fontSize: 10,
    padding:10,
    backgroundColor: '#DDDDDD',
    borderRadius:3,
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold',
    padding:10,
  }
});

module.exports = ItemAssignment;

//var testdata = {
//  "description": "Android界面跳转",
//
//  "ssh_url_to_repo": "git@git.fdu13ss.org:SOFT130067.01-2015/lab2.git",
//  "http_url_to_repo": "https://git.fdu13ss.org/SOFT130067.01-2015/lab2.git",
//  "web_url": "https://git.fdu13ss.org/SOFT130067.01-2015/lab2",
//  "name": "lab2",
//
//  "deadline": "2015-11-05T23:59:59.000Z",
//  "class": "智能移动平台应用开发-2015",
//};
