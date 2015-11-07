'use strict';

var React = require('react-native');
var {
  PixelRatio,
  NavigatorIOS,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  } = React;

var ratio = PixelRatio.get()

var Profile = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            source={{uri: 'https://pic4.zhimg.com/8e54087c7_m.jpg'}}
            style={styles.thumbnail}
          />
          <View style={styles.right}>
            <Text style={styles.name}>何天成</Text>
            <Text style={styles.description}>汪汪汪！</Text>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5 * ratio,
    backgroundColor: 'white',
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

module.exports = Profile;
