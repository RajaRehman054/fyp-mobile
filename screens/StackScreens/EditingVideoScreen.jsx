import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function EditingVideoScreen({ navigation }) {
	return (
		<SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
			<View style={styles.uppertab}>
				<View style={styles.innertab}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons
							name='chevron-back'
							color={'white'}
							size={40}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ margin: 10 }}
						onPress={() =>
							navigation.navigate('PostContentScreen')
						}>
						<Ionicons
							name='arrow-forward-circle'
							color={'#0f89da'}
							size={40}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.middletab}>
				<View style={{ width: '16%' }}></View>
				<View style={{ width: '68%', height: '100%' }}></View>
				<View style={{ width: '16%' }}>
					<TouchableOpacity style={{ margin: 10 }}>
						<Ionicons
							name='musical-notes'
							color={'white'}
							size={30}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={{ margin: 10 }}>
						<Ionicons name='cut' color={'white'} size={30} />
					</TouchableOpacity>
					<TouchableOpacity style={{ margin: 10 }}>
						<Ionicons name='brush' color={'white'} size={30} />
					</TouchableOpacity>
					<TouchableOpacity style={{ margin: 10 }}>
						<Ionicons name='text' color={'white'} size={30} />
					</TouchableOpacity>
					<TouchableOpacity style={{ margin: 10 }}>
						<Ionicons name='happy' color={'white'} size={30} />
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.lasttab}></View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	uppertab: {
		height: '10%',
		backgroundColor: 'black',
		alignItems: 'center',
	},
	innertab: {
		width: '92%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 'auto',
		justifyContent: 'space-between',
	},
	middletab: {
		height: '70%',
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	lasttab: {
		height: '20%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	lasttabicon: {
		margin: 10,
		alignItems: 'center',
		borderColor: 'white',
		justifyContent: 'center',
		borderRadius: 50,
	},
});
