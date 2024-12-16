import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
function Profile() {
    const getDeviceToken = async () => {
        const token = await messaging().getToken();
        console.log(token);
    };
    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });

        getDeviceToken();

        return unsubscribe;
      }, []);

    return (
        <View>
            <Text>
                This is the profile page
            </Text>
        </View>
    );

}

export default Profile;
