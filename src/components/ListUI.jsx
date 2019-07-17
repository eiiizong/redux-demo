import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'

const ListUI = (props) => {
  // console.log('compont render', props)
  const { changeInputValue, inputValue, clickAddItemButton, list, deleteItem } = props
  return (
    <div style={{ margin: '40px' }}>
      <div>
        <Input
          placeholder="some thing you want to do..."
          style={{ width: '250px', marginRight: '20px', marginBottom: '20px' }}
          onChange={changeInputValue}
          value={inputValue}
        />
        <Button onClick={clickAddItemButton}>增加</Button>
        <List
          bordered
          dataSource={list}
          renderItem={
            (item, index) => (
              <List.Item onClick={() => { deleteItem(index) }}>
                {item}
              </List.Item>
            )
          }
        ></List>
      </div>
    </div>
  )
}

export default ListUI