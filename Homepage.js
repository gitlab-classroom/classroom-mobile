/**
 * Created by lifengshuang on 11/7/15.
 */
'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  SearchBar,
  Text,
  View,
  } = React;

var Homepage = React.createClass({
  render: function () {
    return (
      <View style={styles.background}>

        <Text style={styles.text}>
          First Test!
        </Text>
        <Image
          source={{uri: "https://pic4.zhimg.com/8e54087c7_m.jpg"}}
          style={styles.image}
          />
        
      </View>
    );
  }
});

var styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 60,
  },

  text: {
    fontSize: 30,
    color: 'black',
  },

  image: {
    backgroundColor: '#dddddd',
    height: 100,
    width: 100,
  },
});


module.exports = Homepage;
