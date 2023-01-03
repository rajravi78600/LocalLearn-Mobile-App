import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useRef } from "react";
import {
  Bubble,
  GiftedChat,
  Avatar,
} from 'react-native-gifted-chat';
import LinearGradient from 'react-native-linear-gradient';
import io from "socket.io-client";
import { useNavigation } from '@react-navigation/native';


let socket;
const ENDPOINT = "https://locallearn.in/";
let msg1 = {
  type: "text",
  content: { text: "I would like to learn something new" },
};
const initialMessages = [
  {
    type: "qr",
    content: { text: "Hi there! How are you?" },
    // user: {
    //   avatar: "https://avatars.dicebear.com/api/croodles-neutral/vibhavari.svg",
    // },
  },
];
// need to be replaced with the sukruti file
const defaultQuickReplies = [
  {
    name: "What is locallearn.in?",
    isNew: false,
    isHighlight: false,
    answer:
      " Local learn is a learning platform where new and interesting educational content is streamed 24 by 7 based on your interests and inclinations. Along with it, I am there to assist you in identifying your learning goals & to help you achieve them.",
    url: "",
  },

  {
    name: "Why would I need a Co-learner?",
    isNew: false,
    url: "video2.mp4",
    answer:
      "Having a co-learner provides you with a companion who has the same learning goals as yours. This will promote a healthy environment to learn, interact, discuss, brainstorm new ideas and perceptions which will support you in your learning journey.",
  },
  {
    name: "What is Co-Learning/collaborative learning?",
    isNew: false,
    isHighlight: false,
    answer:
      "Co-learning is a manner of group learning that enhances communication skills, cultural awareness, thinking skills and so much more. Working in a group also allows students to provide checks and balances of their work on the spot, rather than finding out later, to make the workflow more efficient",
    url: "",
  },
  {
    name: "What is trending?",
    isNew: false,
    isHighlight: false,
    answer:
      "Locallearn is making a bot and its trending as well, so talk to the bot",
    url: "video1.mp4",
  },
  {
    name: "How do i share my learning journey?",
    isNew: false,
    isHighlight: false,
    answer:
      "Myty is a platform where you can create your portfolio and publish your learning journey and showcase it to everyone from anywhere using a link.In this new normal, where the consumer searches everything on the internet before making a decision, myty enables you to appear in those searches and make the most of your web presence with its user friendly and powerful SEO tools. Learn more about making a digital presence on myty here",
    url: "video3.mp4",
  },
  {
    name: "I am bored, entertain me.",
    isHighlight: false,
    url: "video3.mp4",
  },
  {
    name: "I need help",
    isNew: false,
    isHighlight: false,
    answer:
      "Sure, I'm here for you. Can you please explain briefly what you need help with.",
    url: "",
  },
];





export default function ChatSrc(props) {
  const navigation = useNavigation();
  const { messages, appendMsg, setMessages } = useState('')
  const [connected, setConnected] = useState(false);
  const [myplaceholder, setMyplaceholder] = useState("Go on, ask me something");
  const referenceForMessageBox = useRef();
  const chatUiRef = useRef();
  const composerRef = useRef();
  const msgdata = { question: "", answer: "" };


  useEffect(() => {
    socket = io(ENDPOINT);

    if (connected) {
      socket.emit(
        "user connected",
        {
          name: "anurag",
        },
        () => {
          setConnected(true);
        }
      );
    }
  }, [connected]);

  useEffect(() => {
   
    socket.emit("onlineStatus", { id: "hi you are online" }, (response) => {
      console.log("response", response);
    });
//  sir yaha par problme hai yeh  {socket.on }  undefind function bata  ra hai 
    socket.on("broadcast", (data) => { });
    socket.on("send-msg-response", (data) => {
      // console.log("response msg  ----> ", data);
      appendMsg({
        type: "qr",
        content: { text: data },
        // user: {
        //   avatar:
        //     "https://avatars.dicebear.com/api/croodles-neutral/vibhavari.svg",
        // },
      });
    });
    return () => {
      socket.disconnect();
    };
  }, [appendMsg]);




  function handleSend(type, val) {
    var tenor = true;
    if (type === "text" && val.trim()) {
      if (val.length > 10) {
        socket.emit("SendMessage", { text: val }, () => { });
        tenor = false;
      }
      appendMsg({
        type: "text",
        content: { text: val },
        // user: {
        //   avatar:
        //     "https://avatars.dicebear.com/api/croodles-neutral/shivansh.svg",
        // },
        position: "right",
      });
      send.play();

      setTyping(true);
      if (tenor) {
        setTimeout(() => {
          appendMsg({
            type: "tenor",
            content: { item: val },
          });
          receive.play();
        }, 1000);
      }
    }
  }





  

  const email = ("email");

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (msgdata.question === "" || msgdata.answer === "" || !email) {
        return;
      }
      await fetch("http://doornextshop.com/quesans", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, msgdata }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      msgdata.question = "";
      msgdata.answer = "";
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [msgdata.answer]);
  

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#00072D',
            borderRadius: 5,
          },
          right: {
            borderWidth: 2,
            borderColor: '#00072D',
            borderRadius: 5,
            backgroundColor: '',
          },
        }}
        textStyle={{
          left: {
            color: '#ffffff',
          },
          right: {
            color: '#000000',
          },
        }}
      />
    );
  };

  function renderAvatar({ props }) {
    return (
      <Avatar
        {...props}
        onPressAvatar={clickedUser => {
          kitty
            .createChannel({
              type: 'DIRECT',
              members: [{ id: clickedUser._id }],
            })
            .then(result => {
              navigation.navigate('Chat', { channel: result.channel });
            });
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#40E0D0', '#A9DBB8']} style={{ flex: 1 }}>
        <View style={styles.Header}>
          <View style={{ flexDirection: 'row', marginHorizontal: 100 }}>
            <Image
              style={{ width: 40, height: 40, marginTop: 6 }}
              source={require('../../assets/1.png')}
            />
            <Text
              style={{
                color: '#FFFFFF',
                marginLeft: 10,
                marginTop: 8,
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Locallearn
            </Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Image
                style={{ width: 40, height: 40, marginTop: 8 }}
                source={require('../../assets/menu.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* chat screen */}

        <GiftedChat
          scrollToBottom
          infiniteScroll
          placeholder="Go on, ask me something...."
          messages={messages}
          onSend={handleSend}
          // user={{
          //   _id: user.uid,
          //   name: user.name,
          //   avatar: user.avatar,
          // }}
          // renderActions={renderActions}
          // renderMessageVideo={renderVideo}
          renderBubble={renderBubble}
          // alwaysShowSend
          // renderSend={renderSend}
          // scrollToBottomComponent={scrollToBottomComponent}
          renderAvatar={renderAvatar}
          textInputStyle={{
            backgroundColor: '#C4C5CB',
          }}


          quickReplyTextStyle={{
            fontWeight: '200',
            width: '100%',
            height: 30,
          }}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#00072D',
  },
});
