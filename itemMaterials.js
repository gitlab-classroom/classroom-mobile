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
        <View style={styles.right}>
          <Text style={styles.name}  numberOfLines = {1}>{this.props.data.name}</Text>
          <Text style={styles.description}  numberOfLines = {1}>{this.props.data.description}</Text>
        </View>
      </View>
    </TouchableElement>
    </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 3,
    paddingRight: 2,
  },
  description: {
    flex: 1,
    fontSize: 12,
    color: '#666666',
    paddingTop: 3,
    paddingRight: 2,
  },
  right: {
    flex: 1,
  }
});

module.exports = ItemMaterials;
