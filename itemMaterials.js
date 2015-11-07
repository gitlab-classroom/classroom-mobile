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
          <Text style={styles.name}>{this.props.data.name}</Text>
          <Text style={styles.description}>{cutString(50, this.props.data.description)}</Text>
        </View>
      </View>
    </TouchableElement>
    </View>
    );
  }
});

function cutString(len, src){
  if (src.length > len - 2)
    return src.substr(0, len - 2) + "..";
  else
    return src;
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5 * ratio,
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 25 * ratio,
    height: 25 * ratio,
    borderRadius: 10 * ratio,
    marginLeft: 5 * ratio,
    marginRight: 5 * ratio,
  },
  name: {
    flex: 1,
    fontSize: 8 * ratio,
    fontWeight: 'bold',
    paddingBottom: 1.5 * ratio,
  },
  description: {
    flex: 1,
    fontSize: 6 * ratio,
    color: '#666666',
    paddingTop: 1.5 * ratio,
  },
  right: {
    flex: 1,
  }
});

module.exports = ItemMaterials;
