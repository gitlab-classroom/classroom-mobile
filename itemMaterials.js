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
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,

  } = React;

var ratio = PixelRatio.get();

var ItemMaterials = React.createClass({
  render: function() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    return (
      <View>
    <TouchableElement
      onPress={this.props.onSelect}
      >
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
    </TouchableElement>
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
    backgroundColor: '#F5FCFF',
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
