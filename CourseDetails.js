'use strict'

var React = require('react-native');
var {
  Modal,
  PixelRatio,
  Image,
  Platform,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;
var ItemDetail = require('./itemDetail.js');
var ItemAssignment = require('./itemAssignment');
var EventBus = require('./EventBus');



var Button = React.createClass({
  getInitialState() {
    return {
      active: false,
    };
  },

  _onHighlight() {
    this.setState({active: true});
  },

  _onUnhighlight() {
    this.setState({active: false});
  },

  render() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
          <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
});

var CourseDetails = React.createClass({

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


  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      animated: true,
      modalVisible: false,
      transparent: true,
      data_assignments: null,
      data_materials: null,
      data_members: null,
      data_notifications: null,
      // loaded: false,
      ACTIVITY_URL: 'https://htc.fdu13ss.org/api/v1/classes/' + this.props.course.id + '/activities',
      ASSIGNMENT_URL: 'https://htc.fdu13ss.org/api/v1/classes/' + this.props.course.id + '/assignments',
      MATERIAL_URL: 'https://htc.fdu13ss.org/api/v1/classes/' + this.props.course.id + '/materials',
      MENBER_URL: 'https://htc.fdu13ss.org/api/v1/classes/' + this.props.course.id + '/members',
      NOTIFICATION_URL: 'https://htc.fdu13ss.org/api/v1/classes/' + this.props.course.id + '/notifications',
    };
  },
  componentDidMount: function() {
      this.fetchData(this.state.ACTIVITY_URL);
      var ctx = this;
      EventBus.addEventListener('show_modal', function(){ctx._setModalVisible(true)});
  },

  fetchData: function(url) {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
        });
      })
      .done();
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(
    //             [{id: this.props.id, name: "Monkey Tong", path: "...", description: this.props.course.name, avatar_url: "https://pic4.zhimg.com/8e54087c7_m.jpg", web_url: "www.zhihu.com"},
    //             {id: 101110101, name: "miao", path: "...", description: "wang!", avatar_url: "https://pic4.zhimg.com/8e54087c7_m.jpg", web_url: "www.zhihu.com"}]
    //           )
    // });
  },

  selectActivity: function(activity) {
    if (Platform.OS === 'ios') {
      var data = activity;
      this.props.navigator.push({
        title: activity.name,
        component: ItemAssignment,
        passProps: {data},
      });
    } else {
      //todo: android
    }
  },


  renderActivity: function(activity, sectionID, rowID, highlightRowFunc) {

    return (
      <ItemDetail
        data = {activity}
        onSelect={() => this.selectActivity(activity)}

      />
    );
  },

  setModalVisible: function (visible) {
    this.setState({modalVisible: visible});
  },

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  },

  render: function() {
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;

    return (
      <View style={styles.container}>
        <Modal
          animated={this.state.animated}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}>
          <View style={[styles.modalContainer, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <Text>This modal was presented {this.state.animated ? 'with' : 'without'} animation.</Text>
              <Button
                onPress={this._setModalVisible.bind(this, false)}
                style={styles.modalButton}>
                Close
              </Button>
            </View>
          </View>
        </Modal>

        <ListView
          dataSource={this.state.dataSource}
          // renderSeparator={this.renderSeparator}
          renderRow={this.renderActivity}

          // style={styles.listView}
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



  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});


module.exports = CourseDetails;
