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
        tintColor="blue"
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
          icon={{uri: base64Icon, scale: 3}}
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
