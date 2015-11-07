/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Homepage = require('./Homepage.js');
var Deadline = require('./Deadline.js');
var Profile = require('./Profile');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  } = React;

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var homeIcon = 'data:image/png;base64,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';
var deadlineIcon = 'data:image/png;base64,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';
var userIcon = 'data:image/png;base64,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';

var Classroom = React.createClass({

  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBarExample',

  getInitialState: function() {
    return {
      selectedTab: 'homeTab',
      notifCount: 0,
    };
  },



  _renderContent: function(color: string, pageText: string) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}> re-renders of the {pageText}</Text>
      </View>
    );
  },

  _renderTab: function(index) {
    if (index == 0) {
      return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Classroom',
            component: Homepage,
          }}
        />
      );
    }
    else if (index == 1) {
      return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Deadline',
            component: Deadline,
          }}
        />
      );
    }
    else {
      return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'My profile',
            component: Profile,
          }}
        />
      );
    }
    return this._renderContent('#414A8C', 'Home');
  },

  render: function () {
    return (


      <TabBarIOS
        tintColor="#4169E1"
        barTintColor="white">
        <TabBarIOS.Item
          title="Home"
          icon={{uri: homeIcon, scale: 7}}
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
            });
          }}>
          {this._renderTab(0)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          // systemIcon="history"
          title="Deadline"
          icon={{uri: deadlineIcon, scale: 4}}
          // badge={3}
          selected={this.state.selectedTab === 'scheduleTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'scheduleTab',
              notifCount: 3,
            });
          }}>
          {this._renderTab(1)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: userIcon, scale: 4}}
          title="Me"
          selected={this.state.selectedTab === 'profileTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'profileTab',
            });
          }}>
          {this._renderTab(2)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

AppRegistry.registerComponent('Classroom', () => Classroom);

module.exports = Classroom;
