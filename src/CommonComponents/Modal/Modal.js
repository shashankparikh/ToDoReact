import React from 'react'
import { Modal, Button } from 'antd'

export function Popup ({ title, show, cancel, add, children }) {
    console.log(show,"show")
  return (
    <Modal centered onCancel={cancel} onOk={add} visible={show} title={title}>
      {children}
    </Modal>
  )
}
