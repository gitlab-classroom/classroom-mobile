'use strict'

var React = require('react-native');
var ItemDeadline =require('./itemDeadline.js');
var ItemAssignment = require('./itemAssignment');
var config = require('./config');
var {
  Image,
  Platform,
  ListView,
  StyleSheet,
  SearchBar,
  Text,
  View,
} = React;

var DEADLINE_URL = config.baseUrl + '/assignments';

var Deadline = React.createClass({

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
    fetch(DEADLINE_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
        });
      })
      .done();
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(
    //             [{id: 23333, name: "Monkey Tong", path: "...", description: "miao!", avatar_url: "https://pic4.zhimg.com/8e54087c7_m.jpg", web_url: "www.zhihu.com"},
    //             {id: 101110101, name: "miao", path: "...", description: "wang!", avatar_url: "https://pic4.zhimg.com/8e54087c7_m.jpg", web_url: "www.zhihu.com"}]
    //           )
    // });
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading...
        </Text>
      </View>
    );
  },

  selectDeadline: function(course) {
    if (Platform.OS === 'ios') {
      var data = course;
      this.props.navigator.push({
        title: course.name,
        component: ItemAssignment,
        passProps: {data},
      });
    } else {
      //todo: android
    }
  },

  renderCourse: function(course) {
    if (course == undefined) {
      return (<Text>Loading!</Text>);
    }
    return (
      <ItemDeadline data = {course} onPress={() => this.selectDeadline(course)}/>
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


module.exports = Deadline;
