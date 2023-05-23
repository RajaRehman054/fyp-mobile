import React, { useState, useEffect, useContext } from 'react';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from '../auth/AuthContext';
import Loader from '../components/Loader';

const data = [
	{ id: '1', image: require('../assets/img1.png') },
	{ id: '2', image: require('../assets/imgrect.png') },
	{ id: '3', image: require('../assets/img1.png') },
	{ id: '4', image: require('../assets/imgrect.png') },
];

const renderItem = ({ item }) => (
	<TouchableOpacity style={styles.item}>
		<Image
			source={{
				uri: `${url}/videos/thumbnails?path=${item.thumbnail}`,
			}}
			style={styles.image}
		/>
	</TouchableOpacity>
);

export default function ColumnView() {
	const [loading, setLoading] = useState(false);
	const { user } = useContext(AuthContext);
	const [data, setData] = useState([]);
	const getVideos = async () => {
		setLoading(true);
		const res = await fetch(`${url}/videos/myvideos`, {
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${user}`,
			},
		});
		const response = await res.json();
		setData(response);
		setLoading(false);
	};

	useEffect(() => {
		getVideos();
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (data === []) {
		return <Text style={{ color: 'orange' }}>No Videos Uploaded.</Text>;
	}

	return (
		<FlatList
			data={data}
			keyExtractor={item => item.id}
			numColumns={2}
			renderItem={renderItem}
			style={{ width: '95%', alignSelf: 'center' }}
		/>
	);
}

const styles = StyleSheet.create({
	item: {
		flex: 1,
		height: 100,
		margin: 5,
		borderRadius: 10,
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 10,
	},
	screen: { backgroundColor: '#d9d9d9', flex: 1 },
});
