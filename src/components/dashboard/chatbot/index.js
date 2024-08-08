// Material Dashboard 2 React components
"use client";

// import MDBox from "components/MDComponents/MDBox";

// import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";

import MessageList from "./components/message-list";
import MessageInput from "./components/message-input";

import { demoMsgs } from "@/lib/demo-message-list"
import { roRO } from '@mui/x-date-pickers/locales';


export function ChatBot() {
  const [messages, setMessages] = useState([]);


  // *** 获取mongodb中的 msg **** //
  // useEffect(() => {
  //   async function getHistoryData() {
  //     try {
  //       const response = await fetch('/api/message');
  //       if (!response.ok) {
  //         throw new Error("获取聊天记录时出现问题");
  //       }
  //       const result = await response.json();
  //       const messages = result.map((res) => {
  //         return {
  //           role: res.sender,
  //           content: res.text
  //         }
  //       })
  //       setMessages(messages);
  //     } catch (error) {
  //       console.log("获取聊天记录时出现问题", error)
  //     }
  //   }
  //   getHistoryData();
  // }, [])
  // *************************** //
  


  async function handleNewMessage(value) {
    const message = {
      content: value,
      role: "user"
    }
    setMessages((prevMessages) => [...prevMessages, message])
    
    // ******* 调用模型获取回复 ****** //
      // const response = await fetch('/api/message', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ messages: [message] }),
      // })
      
      // const resJSON = await response.json();
      // const resMsg = resJSON.response.choices[0].message;
      // setMessages((prevMessages) => [...prevMessages, resMsg]);
    // ****************************** //
  
    // ******* use demo messages ****** //
    const loadingMsg = {
      content: "loading...",
      role: "assistant"
    };

    const resMsg = {
      content: demoMsgs.get((messages.length + 2) / 2),
      role: "assistant"
    };
    setMessages((prevMessages) => [...prevMessages, loadingMsg])
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.map((item, index) => {
        if (index === prevMessages.length - 1) {
          return resMsg;
        } else {
          return item;
        }
      }))
    }, 1000);
    // ******************************** //

  }
  return (
    // <DashboardLayout>
      <Container pt={6} pb={3} sx={{ overflow: 'hidden', position:'absolute', left: '20vw' , top: '12vh', height: '85vh', width: '80vw' }}>
        { messages.length > 0 ?
            <MessageList messages={messages} /> : 
            <Typography sx={{ display: 'flex', height:'80%', justifyContent: 'center', alignItems: 'center'}}>Nothing here...</Typography>
        }
        <MessageInput handleNewMessage={handleNewMessage}/>
      </Container>
    // </DashboardLayout>
  );
}
