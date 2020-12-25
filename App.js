/* -- Bottom navigation: quick navigation in bottom bar */
import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import styles from './AppStyle';
import ProgressHeader from './components/Progress/ProgressHeader/ProgressHeader';
import EveryDayTasks from './components/Progress/EveryDayTasks/EveryDayTasks';

const StateRoute = () => 
  <View style={styles.page}>
    <View style={styles.titleTextContainer}>
      <Text style={styles.titleText}>PROGRESS</Text>
    </View>

    <View style={styles.titleBlock}>
      <View />
      <ProgressHeader />
      <EveryDayTasks />
      <View />
    </View>

  </View>;

const ClientRoute = () => <Text>Jobs</Text>;

const SettingRoute = () => <Text>Recents</Text>;

const LogoutRoute = () => <Text>logout</Text>

export default class BottomNavigatonComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'state', title: 'Home', icon: 'queue-music' },
      { key: 'client', title: 'Service Log', icon: 'album' },
      { key: 'setting', title: 'Notifications', icon: 'recent_actors' },
      { key: 'logout', title: 'My Wallet', icon: 'recent_actors' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    state: StateRoute,
    client: ClientRoute,
    setting: SettingRoute,
    logout: LogoutRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

