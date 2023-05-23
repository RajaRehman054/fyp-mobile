import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	TextInput,
	FlatList,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
	{
		id: '1',
		name: 'roja',
		image: require('../../assets/img1.png'),
		message: 'Good Work man its too awesome',
	},
	{
		id: '2',
		name: 'soja',
		image: require('../../assets/imgrect.png'),
		message: 'Good Work man its too awesome  ',
	},
	{
		id: '3',
		name: 'doja',
		image: require('../../assets/img1.png'),
		message: 'Good Work man its too awesome',
	},
	{
		id: '4',
		name: 'doja',
		image: require('../../assets/img1.png'),
		message: 'Good Work man its too awesome',
	},
	{
		id: '5',
		name: 'doja',
		image: require('../../assets/img1.png'),
		message: 'Good Work man its too awesome',
	},
];

export default function MessageChat({ navigation }) {
	const renderItem = ({ item }) => (
		<View style={styles.notificationbar}>
			<TouchableOpacity
				style={{ width: '100%', flexDirection: 'row' }}
				onPress={() =>
					navigation.navigate('DirectMessage', {
						itemId: item,
					})
				}>
				<View style={styles.iconimg}>
					<Avatar.Image source={item.image} size={50} />
				</View>
				<View style={styles.notifytext}>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							height: '50%',
							width: '100%',
							alignItems: 'center',
						}}>
						<Text style={{ fontWeight: 'bold', color: 'black' }}>
							{item.name}
						</Text>
						<Text style={{ color: 'darkgray', marginRight: 10 }}>
							just now
						</Text>
					</View>
					<View
						style={{
							height: '50%',
							width: '100%',
							justifyContent: 'center',
						}}>
						<Text style={{ color: 'darkgray' }}>
							{item.message}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
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
								fontWeight: 'medium',
								color: 'black',
							}}>
							Chats
						</Text>
					</View>
					<TouchableOpacity>
						<Ionicons name='add' color={'black'} size={30} />
					</TouchableOpacity>
				</View>
			</View>

			<TouchableOpacity style={styles.container}>
				<Ionicons name='search' style={styles.icon} size={20} />
				<TouchableOpacity>
					<TextInput
						style={styles.input}
						placeholder='Search'
						placeholderTextColor={'darkgray'}
					/>
				</TouchableOpacity>
			</TouchableOpacity>
			<FlatList
				style={{ alignSelf: 'center', width: '95%' }}
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
		height: 60,
		flexDirection: 'row',
		backgroundColor: 'white',
		marginBottom: 5,
		marginTop: 5,
	},
	iconimg: {
		width: '20%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	notifytext: {
		width: '80%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#F5F5F5',
		alignSelf: 'center',
		height: 40,
		borderRadius: 50,
		width: '95%',
		marginTop: 20,
		marginBottom: 20,
	},
	icon: {
		color: 'darkgray',
		margin: 8,
	},
	input: {
		flex: 1,
		fontSize: 18,
		color: 'darkgray',
		padding: 10,
	},
});
