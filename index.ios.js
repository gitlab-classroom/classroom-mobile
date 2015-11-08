/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Homepage = require('./Homepage.js');
var Deadline = require('./Deadline.js');
var Profile = require('./Profile');
var config = require('./config');
var Login = require('./itemLogin');
var {
  AppRegistry,
  AsyncStorage,
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  } = React;

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var homeIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAKzElEQVR4Xu2dd8w1RRXGHxRiA4MVAxoEI5IoJqgkICBYKTYEEmwUiYl0QVQQRUUUEAg1RmP5Q0pCDZ/YYgVEKZqIQCgJVQEBQcEuiEB+MheWeWdndvbu3nd39pzk++N77+zOzJlnzpyZc57ZlTRd2VXSAZIekXSspNOnqIqVpthpSftIOtnr+2mSdp6aPqYIgN0lfatmoLEKp0wJBFMDwPucqa/r98OS3ivp7KmAYEoAeI8b2KcmBvchSdtL+u4UQDAVAGwj6TuSVmk4qA9KeoeknzQsP9piUwDAGyX9QNLTA6N0uyR0sFbgt39L2lrSL0Y7ug0aXjoAXi/px5KeFdDFdZK2lPQUSRdJWi9Q5h+S3iLp8ga6HGWRkgHwWkk/l/TswMjcJOkNkv7ofnuxm+nrBMreLwkr8rtRjnCi0aUCYANJF0p6bqD/t0naXNLvvd8Y/ItrloN7JW0h6drSQFAiAF7hZvMLA4N1p5v5N9YM5DzPjhIbpQGgi1kcsx5/cADyrccoB59GlwQA1nFM+Es7WMdz/Icmg/8CSWs3KRgo8z9JV7R8NvlYKQB4UQ+efGoHgU9wT1LDjxXYQ9JXG5b1i/1T0qotn00+VgIAnuccvlcFejvvXv5Nkr5fc4Zwpdsd3JfUsgGggYraFVld0s8kvSbweFenebFTxF9LequkvyWabxag3fhGn8IscsizSaBU1+f5sTgCfgcnhv+KtNYA0DEAnuGOdznJ84WIHlG/szqu8/2SyBkILZvEDN4l6T81dYYAgIXyl4+VJbGkVcV8AE8hT5O0ws26kL77jOnHcgmIHu4g6b+BRoUA8KNAH/BjrjYA1E9donlnSsIkh2RPSV/reOb7rwtlE83KkEeApWAJqooBoINBIY5/qjPvodd9TNLxHdTT5BWflPTlmoJkFH1IEkvRTN4u6XteebMATTTtyhCx+6ZTbOixz0j6Usb7uij6eUmfq3kRVmgvl3A6K/IJSUdXyhsAGo4CThcJnHvXlD9C0qcbvqvLYrQLK8DAhgRrdKAHgs9KOswVNgA0GI2Ukk+spHY3eF3nRVLg/KKkQ71aj5R0sCQDQIPhwMRiakPydXfESl7/ckpqecI6YaWqcoKk9W0XEB+2mKOFM7ib52gtJwhwUDkjIKM4JBBQGPSqsGU81/ubbQOdQmJbrXPcTsDfai0nAKibLSrbwHfXNOQjkrBaMTEASIodthCYIWWbU7QhCodUZB9vFWgcSxWHVFivOpk8AGLEjZ9KemfkuHUogHimiyDWHVPvJAkrFpJJAyAWcPmlc5g4Fx+DrOYCVRsHGsvStZ0Dif/zZAEQC7n+xqVmp0KuQwMGoWqykjcMNOwBRzzBqlVlkgCIETeuckkXfxna6DZsz/NdssorA+UJHxNGJpw8E1LYL5FULV90NDCWdnW9S8X+U0NlD7UY6Wqwi14eaODfnXUjsWQmfnpbsQCIJV7e7LJv7xjqqGa26yVupocSQ8kJwAqSYjYTqGqAZl1JRQIgRdyAtXNrppKHXpzBxNyvGWgoyaUkmUJXmwlgAQQkiBSVFBojX9zlZv4NQx/Nlu3j+BceYh1pBcYStLWZvMxlPqGzXmTRWcEx4saf3Sy4ppeeDuelr3aO4XMCTYJwgvWDgDITdHZLX81fJABixI2/unWwNwJEXwps+d7XuWzmEHEV2hoggMbWuywKACniBqnVl/Xe22FVsKk7LOLk0BdIqJwkNiWetO7ZIgDAXvgCSXXEDQ6BWBenKBBPuLyCGIIv0NH5vQnxpLXu+gZAirjB2T65/VOWbV2Wc+j6Gi6mwDpyXtCL9AmAFHGDePj5vfRqfC9FF2Q7hy6wYiuIlYwRT1r3uC8ApIgbpE7TYZMnNPABFyoOjQlWEuIJMYROpQ8ApIgbZPJ8u9NelPOyD0v6Rk13sJY71hBPWmugawCwjkHJItwZElKl29KkW3dyZA/uJ4lk15CgW6wndwZ0Il0CIEXcIEX6uE5aXf5LDpJ0VE03sZ5kTVWJJ6010hUAUpmx5MMf3rqV03zwC4GU8pkmsKLwJObOiO4CAKnceJB8SBeNnRgO0OsxjlwS6jrW9OPz6nVeAKSIGydJ2n/eRk5s4KvdRb9fkQTpNSRYVaxra5kXADHiBt4sqdBzm6nWvSvjQZZXrrdn9xSST0X8haQG5gFAjLjB1zdIge7MW032pOwCONjolIzikHxUEtY2W9oCoEpy9CuF7QJDZmjEjWzlDOyBFPGEnUOVfdyo+W0AEDusILBBevdQiRuNlDLgQhyycSD0tpo27pIgnix5LBcAMeIGKdBchFB3T86A9TqqphE+/qHLGfAbzpLLMuFzDms7mAOAGHGDe3G4mJnr1U361wDEE1LluVTKF8aCsYJGl5SmAEh9cYPU7TWStVmBLjVACl3oNnTqIGiENeYOxag0AUDstszZy++WRNaPyeI0wBX2/pVy1doJH+Mr/CrWpBQAYsSN6nsNAIsb+FlNKQBQjkSSN0uCXheUGABixA3/ZQaAYQKAVpFSRn4hNLslUgeAGHGD9d7PazcADAMAJJFyNb0v/J1MY+h2T5IQAGLEDQaamL6/zTAADAMAeP/cQhICAd9HAgRV4smSe29TxA1MCZ9f89cUA8AwAAAVndgLWdh1xBPYR3w36f9StQAp4ga7gd9KgtRgAFj8gPs1hpxAAEA6+UZuC8h5gS/Q7rAE0PAeB0CMuAE7ldTkS92bDADLP/i0IAYAft/M3UUYIp5Av8Oa34sFwFSQehwibnCsyyEQn2CbiQFgHACglXz0kjuKQ8QTaHhbAoBja7JOCOiQisyNllUxAIwHALSUE8Hzar6bfAQA4MwYdkpVCCpAVuDKM18MAOMCAK1lLMkoJrmkKisAgH+LNV4kqcdn1PTTADA+ANDiD0riKvuq478//yGiRPLhzu7UiIuMY+FEA8A4AUCrCRVzbzG0dNLLD07FAkJdHQoA+LRKaK+7HMPDSVvoOrg+25LaBTSqe8wAaBIMaaSEDgotx0GYASARDu1gXBu/wgCwDPkAZgGW5gPMTgIbI9eWgMaqihY0CzAQC7CvOwvvZljDb8EJ9r9OZgAYCACyTWALpAxlF2ROYMAJNAA8Fg1sLKX5AAYAA0DeDGg8VZ4oaEvAQBJCOlkDDQD5GihqBuR3fzAZUZ1MAPMB8hFQ1AQwABgAsjVQ1AzI7v1wkmJtCbBzgCXcwOxtsC0B+SagKAtoADAAZGugqBmQ3XvzAcraBxsA8jVgFmAY1DjbBdguwHYB/hUp2dugfANY1hJou4B8BBS1BBoADADZGihqBmT33raBZa2BBoB8DZgFsG3gIK6I6WQfnI//siygOYH5CCjKAhoADADZGihqBmT33nYBZa2BBoB8DZgFsF2A7QK8eWPkUCOHLvx7CZ1sg20XMPEl0ABgAMjWgDmB5gSaE2hO4JM1MFovONv+2UGQHQSVRI83JzDfBBTlAxkADADZGihqBmT33nwA8wHMByhoH2wWIF8DtgQUNAHMCZz4BDAAGACyNWBLgC0BFguwWIDFAqoaGG0spCsfAGXw4elFCt8x9j8axUcSr+25ERtIOt+rg+wcvte7SLklUFk2Pb5LACyy81ZXWAMGgIkjwwBgAMi7Lt+WgLIQszALcNlA9MbHkAEx3zue/VtE06hz9o96H15EpQ3q4Iwm65MxjwIVHoBjOVZx3wAAAABJRU5ErkJggg==';
var deadlineIcon = 'data:image/png;base64,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';
var userIcon = 'data:image/png;base64,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';

var homeSelected = 'data:image/png;base64,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';
var deadlineSelected = 'data:image/png;base64,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';
var userSelected = 'data:image/png;base64,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';

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
      login: false,
      loginErrorText: '',
      username: '',
      password: '',
    };
  },

  componentDidMount: function() {
    // this.fetchData();
    // this.setState({
    //   login: true
    // });
    // try {
    //   var username = AsyncStorage.getItem('username');
    //   if (username == null){
    //     this.fetchData();
    //   }
    //   else {
    //     this.setState({
    //       login: true,
    //     });
    //     this.fetchData();
    //   }
    // } catch (error) {
    //   this.setState({
    //     login: true,
    //   });
    // }
  },

  fetchData: function(username, password) {
    fetch(config.baseUrl + '/session/login?username=' + username + '&password=' + password)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.message == 'ok'){
          this.setState({
            login: true,
          });
          // AsyncStorage.setItem('username', 'lfs');
        } else {
          this.setState({
            loginErrorText: 'Login failed, Try again!',//this.state.username + '|' + this.state.password + '|' + responseData.message,
          });
        }
      })
      .done();
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

  renderLogin: function () {
    var ctx = this;
    return (
      <Login
        onPressButton = {() => {ctx.fetchData(ctx.state.username, ctx.state.password)}}
        errorText = {this.state.loginErrorText}
        changeUsername = {(username) => {ctx.setState({username: username});}}
        changePassword = {(password) => {ctx.setState({password: password});}}/>
    )
  },

  renderTabBar: function() {
    return (


      <TabBarIOS
        tintColor="#4169E1"
        barTintColor="white">
        <TabBarIOS.Item
          title="Home"
          icon={{uri: homeIcon, scale: 5}}
          selectedIcon={{uri: homeSelected, scale: 5}}
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
          icon={{uri: deadlineIcon, scale: 5}}
          selectedIcon={{uri: deadlineSelected, scale: 5}}
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
          icon={{uri: userIcon, scale: 4.5}}
          selectedIcon={{uri: userSelected, scale: 4.5}}
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
  },

  render: function () {
    if (this.state.login) {
      return this.renderTabBar();
    } else {
      return this.renderLogin();
    }
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
