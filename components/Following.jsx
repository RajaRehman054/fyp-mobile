import React, { useState } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	StyleSheet,
	ScrollView,
	SafeAreaView,
	FlatList,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyScreen from './Modal';
import VideoPlayer from './VideoPlayer';

const data = [
	{
		id: '1',
		name: 'Stephaine Liver',
		time: '1 Hour ago',
		profileimage: require('../assets/img1.png'),
		message: 'Natural market london is back to life',
		hashtag: '#London #UK',
		videoimage: require('../assets/imgrect.png'),
	},
];

export default function Following({ navigation }) {
	const [heartFilled, setHeartFilled] = useState(false);

	const onPressHeart = () => {
		setHeartFilled(!heartFilled);
	};

	const [modalVisible, setModalVisible] = useState(false);

	const onCloseModal = visible => {
		setModalVisible(visible);
	};

	const renderItem = ({ item }) => (
		<View style={styles.contentbar}>
			<View style={styles.profileandstateview}>
				<View style={styles.profilebar}>
					<Avatar.Image source={item.profileimage} size={45} />
					<View style={{ marginLeft: 10 }}>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('OthersProfile')
							}>
							<Text
								style={{
									fontSize: 15,
									color: 'black',
									fontWeight: 'bold',
								}}>
								{item.name}
							</Text>
						</TouchableOpacity>
						<Text style={{ fontSize: 10, color: 'gray' }}>
							{item.time}
						</Text>
					</View>
				</View>
				<TouchableOpacity onPress={() => setModalVisible(true)}>
					<Ionicons
						name='ellipsis-horizontal'
						color={'black'}
						size={30}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.tagview}>
				<Text style={{ color: 'black' }}>{item.message}</Text>
				<Text style={{ color: '#FF8216' }}>{item.hashtag}</Text>
			</View>

			<View style={styles.videoview}>
				<Image source={item.videoimage} style={styles.imgs}></Image>
			</View>

			<View style={styles.profileandstateview}>
				<TouchableOpacity style={styles.icon} onPress={onPressHeart}>
					<Ionicons
						name={heartFilled ? 'heart' : 'heart-outline'}
						color={'#FF8216'}
						size={30}
					/>
					<Text style={{ color: '#FF8216' }}>16</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.icon}>
					<Ionicons name='chatbox-outline' color={'gray'} size={25} />
					<Text style={{ color: 'gray' }}>16</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.icon}
					onPress={() => navigation.navigate('BuyContent')}>
					<Ionicons
						name='download-outline'
						color={'gray'}
						size={25}
					/>
					<Text style={{ color: 'gray' }}>16</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.icon}>
					<Ionicons
						name='paper-plane-outline'
						color={'gray'}
						size={25}
					/>
					<Text style={{ color: 'gray' }}>16</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

	return (
		<SafeAreaView style={styles.screen}>
			<FlatList
				data={data}
				keyExtractor={item => item.id}
				renderItem={renderItem}
			/>

			<MyScreen
				modalVisible={modalVisible}
				onCloseModal={onCloseModal}
				title='loading'
				message="I'm thinking"
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: { backgroundColor: '#d9d9d9', flex: 1 },
	contentbar: {
		backgroundColor: 'white',
		height: 350,
		marginTop: 5,
		marginBottom: 5,
		alignItems: 'center',
	},
	profileandstateview: {
		width: '92%',
		height: '15%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	profilebar: {
		flexDirection: 'row',
		width: '90%',
		marginTop: 'auto',
		alignItems: 'center',
	},
	tagview: {
		width: '92%',
		height: '15%',
		justifyContent: 'space-around',
	},
	videoview: {
		height: '55%',
		width: '92%',
		borderRadius: 20,
	},
	imgs: {
		width: '100%',
		height: '100%',
		borderRadius: 20,
	},
	icon: {
		width: '25%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
});
