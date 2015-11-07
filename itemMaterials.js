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

var ItemMaterials = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.data.avatar_url}}
          style={styles.thumbnail}
        />
        <View>
          <Text style={styles.title}>{this.props.data.name}</Text>
          <Text style={styles.instructions}>{this.props.data.description}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  thumbnail: {
    width: 30 * ratio,
    height: 30 * ratio,
    borderRadius: 15 * ratio,
    marginLeft: 10 * ratio,
    marginRight: 10 * ratio,
  },
  container: {
    flexDirection: 'row',
    height: 50 * ratio,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 10 * ratio,
    margin: 2 * ratio,
    fontWeight: 'bold',
  },
  instructions: {
    flex: 1,
    fontSize: 7 * ratio,
    color: '#666666',
    margin: 2 * ratio,
  },
});

module.exports = ItemMaterials;