import { notification, Space } from 'antd';


const OpenNotificationWithIcon = (type, message,desc) => {
    // open notification
    notification[type]({
        message: {message},
        duration: 1,
        description:
         {desc},
      });   
}

export default OpenNotificationWithIcon