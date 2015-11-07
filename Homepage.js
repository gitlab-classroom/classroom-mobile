/**
 * Created by lifengshuang on 11/7/15.
 */
'use strict';

var React = require('react-native');
var ItemMaterials =require('./itemMaterials');

var {
  Image,
  ListView,
  StyleSheet,
  SearchBar,
  Text,
  View,
  } = React;

var Homepage = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(
                [{id: 23333, name: "Monkey Tong", path: "...", description: "miao!", avatar_url: "https://pic4.zhimg.com/8e54087c7_m.jpg", web_url: "www.zhihu.com"},
                {id: 101110101, name: "miao", path: "...", description: "wang!", avatar_url: "https://pic4.zhimg.com/8e54087c7_m.jpg", web_url: "www.zhihu.com"}]
              )
    });
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  },

  renderCourse: function(course) {
    if (course == undefined) {
      return (<Text>miao!</Text>);
    }
    return (
      <ItemMaterials data = {course}/>
    );
  },

  render: function () {
    if (!this.state.dataSource) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.container}>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderCourse}
          style={styles.listView}
        />

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginTop: 60,
  },



  listcell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
});


module.exports = Homepage;
