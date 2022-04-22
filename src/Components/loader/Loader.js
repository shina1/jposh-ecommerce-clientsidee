import React from 'react'
import { Spin, Space } from 'antd';

import "./style.css"

const Loader = () => {
  return (
    <Space size="middle" className="example">
      <Spin size="large" />
    </Space>
  )
}



export default Loader
