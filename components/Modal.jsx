import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ModalComponent = ({ modalVisible, onCloseModal, title, message }) => {
	return (
		<Modal
			animationType='fade'
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => onCloseModal(false)}>
			<View style={styles.modalContainer}>
				<View style={styles.modal}>
					<Text style={styles.modalTitle}>{title}</Text>
					<Text style={styles.modalMessage}>{message}</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => onCloseModal(false)}>
						<Text style={styles.buttonText}>Close Modal</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
		width: '80%',
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
		color: 'black',
	},
	modalMessage: {
		fontSize: 16,
		marginBottom: 20,
		color: 'black',
	},
	button: {
		backgroundColor: '#1E88E5',
		borderRadius: 10,
		padding: 10,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
});

export default ModalComponent;
