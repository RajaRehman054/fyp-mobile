import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { io } from "socket.io-client";
import url from "../../utils/url.js";
import Converstion from "../../components/ChatComp/Converstion.jsx";

export default function MessageChat({ navigation, route }) {
  const { userData } = route.params;
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChatUser, setCurrentChatUser] = useState("");
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:4000");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userData.user._id);
  }, [userData.user]);

  // get converstions of the current user
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await fetch(`${url}/conversation/${userData.user._id}`, {
          headers: {
            "content-type": "application/json",
          },
        });
        const response = await res.json();
        setConversations(response);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [userData.user._id]);

  //converstions are called here
  const renderItem = ({ item }) => (
    <Converstion
      key={item._id}
      navigation={navigation}
      conversation={item}
      currentUser={userData.user}
    />
  );

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
              Chats
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="add" color={"black"} size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.container}>
        <Ionicons name="search" style={styles.icon} size={20} />
        <TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={"darkgray"}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <FlatList
        style={{ alignSelf: "center", width: "95%" }}
        data={conversations}
        renderItem={renderItem}
        keyExtractor={(item, index) => item._id || index.toString()}
      />
    </SafeAreaView>
  );
}

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
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    alignSelf: "center",
    height: 40,
    borderRadius: 50,
    width: "95%",
    marginTop: 20,
    marginBottom: 20,
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
