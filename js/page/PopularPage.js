import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';

export default class PopularPage extends Component {

  _tabNavigator() {
    return createAppContainer(createMaterialTopTabNavigator({
      PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
          title: 'tab1'
        }
      },
      PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
          title: 'tab2'
        }
      }
    }))
  }

  render() {
    const Tab = this._tabNavigator()
    return <Tab />
  }
}

class PopularTab extends Component {
  render() {
    const { tabLabel } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {tabLabel}
        </Text>
        <Text onPress={() => {
          NavigationUtil.goPage({}, 'DetailPage')
        }}>
          跳转到详情页
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

