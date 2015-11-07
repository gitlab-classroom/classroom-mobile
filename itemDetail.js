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

var ItemDetail = React.createClass({
  render: function() {
    var type = this.props.data.item_type;
    if (type == 'members') return null;
    var header = ((type=='assignments')?('Assignments'):((type=='materials')?('Materials'):('Notifications')));
    var color = ((type=='assignments')?('#FF3B30'):((type=='materials')?('#FFCC00'):('#007AFF')));
    var title = type=='assignments'?this.props.data.name_with_namespace:
                type=='materials'?this.props.data.name:this.props.data.title;
    var content = type=='assignments'?this.props.data.description:
                  type=='materials'?this.props.data.type:this.props.data.description;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={[styles.circle, {backgroundColor: color}]}></View>
          <Text style={styles.header}>{header}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    padding: 10,
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
    paddingLeft: 7.5,
    paddingRight: 7.5,
    fontSize: 14,
    lineHeight: 20,
    paddingBottom: 2.5,
  },
  content: {
    fontSize: 12,
    paddingLeft: 7.5,
    paddingRight: 7.5,
    paddingTop: 2.5,
  }
});

module.exports = ItemDetail;