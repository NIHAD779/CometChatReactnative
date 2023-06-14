import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {CometChat} from '@cometchat-pro/chat';
import {useNavigation} from '@react-navigation/native';
const GroupListScreen = () => {
  const [groups, setGroups] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    // Retrieve groups
    CometChat.getGroups()
      .then(groupList => {
        setGroups(groupList);
      })
      .catch(error => {
        console.log('Groups fetching failed with error:', error);
      });
  }, []);

  return (
    <View>
      {groups.map(group => (
        <TouchableOpacity
          key={group.guid}
          onPress={() =>
            navigation.navigate('GroupDetails', {groupId: group.guid})
          }>
          <Text>{group.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default GroupListScreen;
