/**
 * Created by lifengshuang on 11/7/15.
 */
'use strict';

var React = require('react-native');
var ItemMaterials =require('./itemMaterials');
var CourseDetails = require('./CourseDetails');
var EventBus = require('./EventBus');
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

var CLASS_URL = config.baseUrl + '/classes';

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
    fetch(CLASS_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
        });
      })
      .done();
    // Static data
    // this.setState({
      // dataSource: this.state.dataSource.cloneWithRows(
      //           [{id: 23333, name: "Monkey Tong", path: "...", description: "miao!", avatar_url: "https://pic4.zhimg.com/8e54087c7_m.jpg", web_url: "www.zhihu.com"},
      //           {id: 101110101, name: "miao", path: "...", description: "wang!", avatar_url: "https://pic4.zhimg.com/8e54087c7_m.jpg", web_url: "www.zhihu.com"}]
      //         )
    // });
  },

  selectCourse: function(course) {
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        title: course.name,
        component: CourseDetails,
        passProps: {course},
        rightButtonTitle: 'More',
        onRightButtonPress: () => {EventBus.dispatch("show_modal")},
      });
    } else {
      //todo: android
    }
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

  renderSeparator: function(
    sectionID: number | string,
    rowID: number | string,
    adjacentRowHighlighted: boolean
  ) {
    var style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
    );
  },

  renderCourse: function(course) {
    if (course == undefined) {
      return (<Text>miao!</Text>);
    }
    return (
      <ItemMaterials
        key={course.id}
        data = {course}
        onSelect={() => this.selectCourse(course)}
      />
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
          renderSeparator={this.renderSeparator}
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
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
});


module.exports = Homepage;
