import React from 'react'
import { Alert } from 'antd';

const Message = ({ type, message, desc='' }) => {
  return <Alert
  message={message}
  description={desc}
  type={type}
  showIcon
/>
}




export default Message
