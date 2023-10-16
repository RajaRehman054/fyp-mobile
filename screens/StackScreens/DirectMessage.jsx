import React, { useState } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	TextInput,
	Image,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DirectMessage({ navigation, route }) {
	const { itemId } = route.params;
	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			<View style={{ flex: 1 }}>
				<View style={styles.uppertab}>
					<View style={styles.innertab}>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Ionicons
								name='chevron-back'
								color={'black'}
								size={30}
							/>
						</TouchableOpacity>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}>
							<Avatar.Image
								source={itemId.image}
								size={45}
								style={{ marginRight: 10 }}
							/>
							<Text
								style={{
									fontSize: 20,
									fontWeight: 'bold',
									color: 'black',
									marginLeft: 10,
								}}>
								{itemId.name}
							</Text>
						</View>
						<TouchableOpacity>
							<Ionicons
								name='ellipsis-horizontal'
								color={'black'}
								size={30}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={styles.buttonview}>
				<View style={styles.messagebar}>
					<View style={styles.container}>
						<TouchableOpacity>
							<TextInput
								style={styles.input}
								placeholder='Type message....'
								placeholderTextColor={'darkgray'}
							/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.iconview}>
						<Ionicons
							name='paper-plane'
							color={'white'}
							size={25}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconview}>
						<Ionicons name='camera' color={'white'} size={25} />
					</TouchableOpacity>
				</View>
			</View>
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
	buttonview: {
		flexDirection: 'row',
		height: 90,
		width: '90%',
		alignSelf: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	messagebar: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	iconview: {
		width: '16%',
		height: 50,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FF8216',
		elevation: 5,
	},
	container: {
		width: '65%',
		alignItems: 'center',
		backgroundColor: '#F5F5F5',
		elevation: 5,
		height: 50,
		borderRadius: 50,
	},
	input: {
		fontSize: 18,
		color: 'darkgray',
		padding: 10,
	},
});
