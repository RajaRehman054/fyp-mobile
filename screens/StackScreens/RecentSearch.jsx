import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";

const RecentSearch = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.uppertab}>
        <View style={styles.innertab}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" color={"black"} size={30} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "medium",
                color: "black",
              }}
            >
              Search
            </Text>
          </View>
          <TouchableOpacity disabled>
            <Ionicons name="chevron-back" color={"transparent"} size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.topscooper}>
        <View style={styles.container}>
          <Ionicons name="search" style={styles.icon} size={20} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="darkgray"
            onChangeText={handleSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: "orange",
              height: "100%",
              width: "30%",
              borderBottomLeftRadius: 50,
              borderTopLeftRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Picker
              selectedValue={selectedValue}
              onValueChange={handleValueChange}
            >
              <Picker.Item label="Name" value="name" />
              <Picker.Item label="Tag" value="tag" />
              <Picker.Item label="Description" value="descp" />
            </Picker>

            {/* Display the chosen value */}
            <Text style={{ color: "black" }}>{selectedValue}</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "20%",
              borderBottomRightRadius: 50,
              borderTopRightRadius: 50,
            }}
          >
            <Text style={{ color: "white" }}>Search</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "medium",
              color: "black",
            }}
          >
            hi
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  uppertab: {
    height: 70,
    backgroundColor: "white",
    marginBottom: 5,
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  innertab: {
    width: "95%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    justifyContent: "space-between",
  },
  topscooper: {
    width: "100%",
    padding: 20,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    alignSelf: "center",
    elevation: 5,
    height: 40,
    borderRadius: 50,
    marginBottom: 10,
  },
  icon: {
    color: "darkgray",
    margin: 8,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "darkgray",
    padding: 10,
  },
});

export default RecentSearch;
