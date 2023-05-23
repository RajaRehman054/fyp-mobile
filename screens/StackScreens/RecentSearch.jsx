import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
	TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Jane' },
	{ id: 3, name: 'Jack' },
	{ id: 4, name: 'Jill' },
	{ id: 5, name: 'Jim' },
];

const RecentSearch = ({ navigation }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredData, setFilteredData] = useState(data);

	const handleSearch = query => {
		setSearchQuery(query);
		const filtered = data.filter(item =>
			item.name.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredData(filtered);
	};

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
					<View style={styles.container}>
						<Ionicons name='search' style={styles.icon} size={20} />
						<TouchableOpacity>
							<TextInput
								style={styles.input}
								placeholder='Search'
								placeholderTextColor='darkgray'
								onChangeText={handleSearch}
								value={searchQuery}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<ScrollView style={styles.topscooper}>
				<View
					style={{
						marginTop: 10,
						borderBottomWidth: 1,
						borderBottomColor: 'darkgray',
					}}>
					<Text
						style={{
							fontSize: 18,
							paddingVertical: 8,
							color: 'black',
						}}>
						Recent Search
					</Text>
				</View>
				<View style={styles.resultContainer}>
					{filteredData.map(item => (
						<Text style={styles.result} key={item.id}>
							{item.name}
						</Text>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

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
	},
	topscooper: {
		width: '90%',
		alignSelf: 'center',
	},

	container: {
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#F5F5F5',

		elevation: 5,
		height: 40,
		borderRadius: 50,
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
	resultContainer: {
		marginTop: 16,
	},
	result: {
		fontSize: 18,
		paddingVertical: 5,
		color: 'darkgray',
	},
});

export default RecentSearch;
