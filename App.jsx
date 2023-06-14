import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CometChat} from '@cometchat-pro/chat';
import GroupListScreen from './Grouplistscreen';

function App() {
  var appID = '240805dc16cf0e12';
  var region = 'us';
  var appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers() 
    .setRegion(region)
    .build();
  useEffect(() => {
    // Initialize CometChat
   CometChat.init(appID, appSetting).then(
     () => {
       console.log('Initialization completed successfully');
     },
     error => {
       console.log('Initialization failed with error:', error);
     },
   );
  }, []);

  return (
    <View style={styles.container}>
      <GroupListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
