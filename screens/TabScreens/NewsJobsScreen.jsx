import React, { useState, useRef } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Dimensions,
	TextInput,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Featured from '../../components/Featured';
import ColumnView from '../../components/ColumnView';

const SCREEN_WIDTH = Dimensions.get('window').width;
const img1 = require('../../assets/img1.png');

export default function ProfileHomeScreen({ navigation }) {
	const [activeScreenIndex, setActiveScreenIndex] = useState(0);
	const scrollViewRef = useRef(null);
	const [searchQuery, setSearchQuery] = useState('');
	const handleScreenPress = index => {
		setActiveScreenIndex(index);
		scrollViewRef.current.scrollTo({
			x: index * SCREEN_WIDTH,
			y: 0,
			animated: true,
		});
	};

	const handleScroll = event => {
		const contentOffset = event.nativeEvent.contentOffset.x;
		const currentIndex = Math.round(contentOffset / SCREEN_WIDTH);
		setActiveScreenIndex(currentIndex);
	};

	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			<View style={styles.uppertab}>
				<View style={styles.innertab}>
					<TouchableOpacity>
						<Ionicons
							name='paper-plane-outline'
							color={'black'}
							size={30}
						/>
					</TouchableOpacity>
					<View
						style={{
							height: 40,
							borderRadius: 10,
							width: '70%',
							elevation: 5,
							backgroundColor: '#FF8216',
						}}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: 'bold',
								color: 'white',
								padding: 5,
								alignSelf: 'center',
							}}>
							Jobs Accepted | (2)
						</Text>
					</View>
					<TouchableOpacity>
						<Ionicons name='earth' color={'black'} size={30} />
					</TouchableOpacity>
				</View>
			</View>

			<ScrollView>
				<View style={styles.imageicon}>
					<View style={{ width: '85%' }}>
						<Text
							style={{
								fontSize: 23,
								fontWeight: 'bold',
								color: 'white',
								margin: 5,
							}}>
							Hello! whoever
						</Text>
						<Text
							style={{
								fontSize: 16,
								fontWeight: 'bold',
								color: 'white',
								margin: 5,
							}}>
							Let's find a story around you
						</Text>
					</View>

					<View style={styles.container}>
						<Ionicons name='search' style={styles.icon} size={20} />
						<TouchableOpacity>
							<TextInput
								style={styles.input}
								placeholder='Search'
								placeholderTextColor='darkgray'
								onChangeText={setSearchQuery}
								value={searchQuery}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.followercount1}>
					<TouchableOpacity
						onPress={() => handleScreenPress(0)}
						style={{
							width: '45%',
							borderBottomColor:
								activeScreenIndex === 0 ? '#FF8216' : 'white',
							borderBottomWidth: 3,
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Text
							style={{
								color:
									activeScreenIndex === 0
										? '#FF8216'
										: 'gray',
								fontSize: 16,
								fontWeight: 'bold',
							}}>
							Public Jobs
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handleScreenPress(1)}
						style={{
							width: '45%',
							borderBottomColor:
								activeScreenIndex === 1 ? '#FF8216' : 'white',
							borderBottomWidth: 3,
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Text
							style={{
								color:
									activeScreenIndex === 1
										? '#FF8216'
										: 'gray',
								fontSize: 16,
								fontWeight: 'bold',
							}}>
							Your Jobs
						</Text>
					</TouchableOpacity>
				</View>
				<ScrollView
					ref={scrollViewRef}
					horizontal={true}
					pagingEnabled={true}
					showsHorizontalScrollIndicator={false}
					onMomentumScrollEnd={handleScroll}>
					<SafeAreaView style={styles.screen}></SafeAreaView>
					<SafeAreaView style={styles.screen}></SafeAreaView>
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	uppertab: {
		height: 70,
		backgroundColor: 'white',
		alignItems: 'center',
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 10,
	},
	innertab: {
		width: '92%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 'auto',
		justifyContent: 'space-between',
	},
	imageicon: {
		alignItems: 'center',
		justifyContent: 'space-around',
		height: 160,
		marginTop: 10,
		backgroundColor: '#FF8216',
		width: '92%',
		alignSelf: 'center',
		borderRadius: 20,
		elevation: 10,
	},
	followercount1: {
		flexDirection: 'row',
		height: 45,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'space-around',
		marginTop: 20,
		marginBottom: 10,
	},
	container: {
		width: '85%',
		alignItems: 'center',
		backgroundColor: '#F5F5F5',
		elevation: 5,
		height: 40,
		borderRadius: 50,
		flexDirection: 'row',
	},
	input: {
		fontSize: 18,
		color: 'darkgray',
		padding: 10,
	},
	icon: {
		color: 'darkgray',
		margin: 8,
	},
	screen: { backgroundColor: '#d9d9d9', flex: 1, width: SCREEN_WIDTH },
	screen1: { backgroundColor: 'white', flex: 1, width: SCREEN_WIDTH },
});
