/**
 * Created by zhanjiyuan on 15/11/7.
 */

'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  View,
  } = React;


var ItemProfile = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            source={{uri: this.props.data.avatar_url}}
            style={styles.thumbnail}
          />
          <Text style={styles.username} numberOfLines={1}>{this.props.data.username}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.name} numberOfLines={1}>{this.props.data.name}</Text>
          <Text style={styles.web_url} numberOfLines={1}>{this.props.data.bio}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  left:{
    alignItems: 'center',
    flex: 1,
  },
  right:{
    flex: 3,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  web_url: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  }
});

module.exports = ItemProfile;
