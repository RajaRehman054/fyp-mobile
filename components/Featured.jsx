import React, { useState, useCallback, useContext } from 'react';
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

import MyScreen from './Modal';
import url from '../utils/url';
import VideoPlayer from './VideoPlayer';
import { AuthContext } from '../auth/AuthContext';
import Loader from '../components/Loader';
import { useFocusEffect } from '@react-navigation/native';

export default function Featured({ navigation, profile, render }) {
	const [heartFilled, setHeartFilled] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const { user } = useContext(AuthContext);
	const [data, setData] = useState([]);
	const onPressHeart = () => {
		setHeartFilled(!heartFilled);
	};
	const onCloseModal = visible => {
		setModalVisible(visible);
	};

	const getVideos = async () => {
		setLoading(true);
		const res = await fetch(
			profile ? `${url}/videos/myvideos` : `${url}/videos/`,
			{
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${user}`,
				},
			}
		);
		const response = await res.json();
		setData(response);
		setLoading(false);
	};

	useFocusEffect(
		useCallback(() => {
			getVideos();
			return () => setData([]);
		}, [render])
	);

	const renderItem = ({ item }) => (
		<View style={styles.contentbar}>
			<View style={styles.profileandstateview}>
				<View style={styles.profilebar}>
					<Avatar.Image
						source={
							item.owner.picture
								? {
										uri: `${url}/users/picture?path=${item.owner.picture}`,
								  }
								: require('../assets/img1.png')
						}
						size={45}
					/>
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
								{item.owner.username}
							</Text>
						</TouchableOpacity>
						<Text style={{ fontSize: 10, color: 'gray' }}>
							{item.created_on}
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
				<Text style={{ color: 'black' }}>{item.description}</Text>
				<Text style={{ color: '#FF8216' }}>{item.tags}</Text>
			</View>

			<View style={styles.videoview}>
				<VideoPlayer fullscreenIcon={false} source={item.path} />
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

	if (loading) {
		return <Loader />;
	}

	return (
		<SafeAreaView style={styles.screen}>
			<FlatList
				data={data}
				keyExtractor={item => item._id}
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
	backgroundVideo: {
		height: '50%',
		width: '92%',
	},
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
