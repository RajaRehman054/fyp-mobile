import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export const getFCM = async () => {
	try {
		const fcmToken = await messaging().getToken();
		return fcmToken;
	} catch (error) {
		console.log(error);
	}
};

export const notificationListener = () => {
	messaging().onNotificationOpenedApp(remoteMessage => {
		console.log('Notification caused app to open from background state.');
	});
	messaging()
		.getInitialNotification()
		.then(remoteMessage => {
			if (remoteMessage) {
				console.log('Notification caused app to open from quit state.');
			}
		});
};
