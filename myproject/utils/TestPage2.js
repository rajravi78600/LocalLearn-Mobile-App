import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import io from "socket.io-client";

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




export default function TestPage2() {
  const [connected, setConnected] = useState(false);
  const [myplaceholder, setMyplaceholder] = useState("Go on, ask me something");

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

    socket.on("broadcast", (data) => { });
    socket.on("send-msg-response", (data) => {
      // console.log("response msg  ----> ", data);

    });
    return () => {
      socket.disconnect();
    };
  }, []);


  const handleQuickReplyClick = (item) => {
    send.play();
    appendMsg({
      type: "text",
      content: { text: item.name },
      user: {
        avatar:
          "https://avatars.dicebear.com/api/croodles-neutral/shivansh.svg",
      },

      position: "right",
    });
    setTyping(true);

    setTimeout(() => {
      receive.play();
      appendMsg({
        type: "qr",
        content: { text: item.answer },
      });
    }, 1000);
  };



  





  return (
    <View>
      <Text>TestPage2</Text>
    </View>
  )
}