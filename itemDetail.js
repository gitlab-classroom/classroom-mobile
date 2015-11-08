/**
 * Created by zhanjiyuan on 15/11/7.
 */

'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,

  } = React;

var ItemDetail = React.createClass({
  render: function() {
    var type = this.props.data.item_type;
    if (type == 'member') return null;
    var header = ((type=='assignment')?('Assignments'):((type=='material')?('Materials'):('Notifications')));
    var color = ((type=='assignment')?('#FF3B30'):((type=='material')?('#FFCC00'):('#007AFF')));
    var title = type=='assignment'?this.props.data.name_with_namespace:
                type=='material'?this.props.data.name:this.props.data.title;
    var content = type=='assignment'?this.props.data.description:
                  type=='material'?this.props.data.type:this.props.data.description;
    return (
    <TouchableHighlight
      onPress={this.props.onSelect}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={[styles.circle, {backgroundColor: color}]}></View>
          <Text style={styles.header}>{header}</Text>
        </View>
        <Text style={styles.title} numberOfLines = {1}>{title}</Text>
        <Text style={styles.content} numberOfLines = {1}>{content}</Text>
        <View style={styles.separator}/>
      </View>
    </TouchableHighlight>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    margin: 7.5,
  },
  top: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
  },
  title: {
    paddingLeft: 30,
    paddingRight: 7.5,
    fontSize: 14,
    lineHeight: 20,
    paddingBottom: 2.5,
  },
  content: {
    fontSize: 12,
    paddingLeft: 30,
    paddingRight: 7.5,
    paddingTop: 2.5,
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
    marginTop: 20,
  }
});

module.exports = ItemDetail;
