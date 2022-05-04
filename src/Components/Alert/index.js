import React from 'react'
import { Alert } from 'antd';



const AlertComponent = (message, type) => {
    const onClose = (e) => {
      };
  return (
    <div>
    <Alert
      message={message}
      type={type}
      closable
      onClose={onClose}
    />
    </div>
  )
}

export default AlertComponent
