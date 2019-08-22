import React from 'react'
import ChatLayout from 'components/ChatLayout'
import SEO from 'components/SEO'
import Chat from 'components/Chat/index'

const ChatPage = () => (
  <ChatLayout>
    <SEO title="Chat" />
    <Chat />
  </ChatLayout>
)

export default ChatPage
