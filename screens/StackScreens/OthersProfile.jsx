import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList
} from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from 'react-native-paper';

import Featured from '../../components/Featured';
import ColumnView from '../../components/ColumnView';

const img1 = require('../../assets/img1.png');

export default function OthersProfile({navigation}) {
  const [activeComponent, setActiveComponent] = useState(1);

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 1:
        return <Featured navigation={navigation}/>;
      case 2:
        return <ColumnView  />;
    }
  };

  const ListFooterComponent = () => (
    <View>
      <View style={styles.imageicon}>
          <Avatar.Image source={img1} size={110} />
          <Text
            style={{ fontSize: 18, fontWeight: 'semibold', color: 'darkgray' }}>
            @alex_johns
          </Text>
        </View>

        <View style={styles.followercount}>
          <TouchableOpacity style={{ alignItems: 'center', width: '30%' }}>
            <Text style={styles.followtext}>180</Text>
            <Text style={{ color: 'darkgray' }}>Following</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', width: '30%' }}>
            <Text style={styles.followtext}>1.2k</Text>
            <Text style={{ color: 'darkgray' }}>Followers</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', width: '30%' }}>
            <Text style={styles.followtext}>120</Text>
            <Text style={{ color: 'darkgray' }}>Sales</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.followercount2}>
          <TouchableOpacity style={styles.messagebutton}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Follow
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingsbutton}>
                <Text
                  style={{ color: '#FF8216', fontWeight: 'bold' }}>
                  Message
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingsbutton}>
                <Text
                  style={{
                    color: '#FF8216',
                    fontWeight: 'bold',
                  }}>
                  Hire
                </Text>
              </TouchableOpacity>
        </View>

        <View style={styles.followercount1}>
          <TouchableOpacity
            onPress={() => handleComponentChange(1)}
            style={{
              width: '49%',
              borderBottomColor: activeComponent === 1 ? '#FF8216' : 'white',
              borderBottomWidth: 3,
              alignItems: 'center',
            }}>
            <Ionicons
              name={activeComponent === 1 ? 'list' : 'list-outline'}
              color={activeComponent === 1 ? '#FF8216' : 'gray'}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleComponentChange(2)}
            style={{
              width: '49%',
              borderBottomColor: activeComponent === 2 ? '#FF8216' : 'white',
              borderBottomWidth: 3,
              alignItems: 'center',
            }}>
            <Ionicons
              name={activeComponent === 2 ? 'grid' : 'grid-outline'}
              color={activeComponent === 2 ? '#FF8216' : 'gray'}
              size={25}
            />
          </TouchableOpacity>
          
        </View>
        
        {renderActiveComponent()}
    </View>
  
);
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.uppertab}>
        <View style={styles.innertab}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" color={'black'} size={30} />
          </TouchableOpacity>
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: 'medium', color: 'black' }}>
              Alex Johns
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" color={'black'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      
      <FlatList 
        data={[]}
        renderItem={() => null}
        ListFooterComponent={ListFooterComponent}
        
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
    height: 150,
    marginTop: 10,
  },
  followercount: {
    flexDirection: 'row',
    height: 50,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 10,
  },
  followercount2: {
    flexDirection: 'row',
    height: 50,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  followtext: { fontSize: 20, fontWeight: 'semibold', color: 'black' },
  followercount1: {
    flexDirection: 'row',
    height: 45,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,


  },
   messagebutton: {
    backgroundColor: '#FF8216',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 90,
    marginRight: 3,
    height:30
  },

  settingsbutton: {
    borderColor: '#FF8216',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 90,
    height:30
  },
});
