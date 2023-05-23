import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	FlatList,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
	{
		id: '1',
		name: 'doja',
		image: require('../../assets/img1.png'),
		message: 'commented on your post “Good Work man its too awesome”.',
		time: 'just now',
	},
	{
		id: '2',
		name: 'doja',
		image: require('../../assets/img1.png'),
		message: 'commented on your post “Good Work man its too awesome”.',
		time: 'just now',
	},
	{
		id: '3',
		name: 'doja',
		image: require('../../assets/img1.png'),
		message: 'commented on your post “Good Work man its too awesome”.',
		time: 'just now',
	},
];

export default function Notification({ navigation }) {
	const renderItem = ({ item }) => (
		<View style={styles.notificationbar}>
			<TouchableOpacity
				style={{ width: '90%', height: '100%', flexDirection: 'row' }}>
				<View style={styles.iconimg}>
					<Avatar.Image source={item.image} size={65} />
				</View>
				<View style={styles.notifytext}>
					<View>
						<Text style={{ color: 'black' }}>
							<Text
								style={{ fontWeight: 'bold', color: 'black' }}>
								{item.name}
							</Text>{' '}
							{item.message}
						</Text>

						<Text style={{ color: 'darkgray' }}>{item.time}</Text>
					</View>
				</View>
			</TouchableOpacity>
			<View style={styles.doticon}>
				<TouchableOpacity>
					<Ionicons
						name='ellipsis-vertical'
						color={'darkgray'}
						size={30}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			<View style={styles.uppertab}>
				<View style={styles.innertab}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons
							name='chevron-back'
							color={'black'}
							size={30}
						/>
					</TouchableOpacity>
					<View>
						<Text
							style={{
								fontSize: 20,
								fontWeight: 'semibold',
								color: 'black',
							}}>
							Notification
						</Text>
					</View>
					<View>
						<Ionicons
							name='chevron-back'
							color={'white'}
							size={30}
						/>
					</View>
				</View>
			</View>

			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	uppertab: {
		height: 70,
		backgroundColor: 'white',
		marginBottom: 5,
		alignItems: 'center',
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 10,
	},
	innertab: {
		width: '95%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 'auto',
		justifyContent: 'space-between',
	},
	notificationbar: {
		height: 90,
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	iconimg: {
		width: '25%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	notifytext: {
		width: '75%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	doticon: {
		width: '10%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
