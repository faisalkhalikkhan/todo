import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, message, Popconfirm, Popover } from 'antd'
import React from 'react'

const Todo = ({ setData, data, item, filterMode, setUpdate, setUpdateData }) => {

    const updateHandler = () => {
        setUpdateData(item)
        setUpdate(true)
    }
    const confirm = (e) => {
        setData(data.filter(el => el.id !== item.id))
        message.success('Task Deleted!');
    }
    function cancel(e) {
        message.error('Click on No');
    }
    const completedTask = () => {
        if (!item.completed) {
            message.info('Task Completed!');
        } else {
            message.info('Task InComplete');
        }
        const date = new Date()
        setData(data.map(element => {
            if (element.id === item.id) {
                return {
                    ...element, completed: !element.completed, createdAt: date.toString()
                }
            }
            return element
        }))
    }

    return (
        <div className='todo'>
            <Popover placement="bottomRight" content={<p>{item.createdAt}</p>}>
                <h1 className={`${item.completed ? "seenText" : " "}`}>{item.text}</h1>
            </Popover>
            <div className='todo__btn_group'>
                <Button onClick={completedTask} type="primary" shape="circle" icon={<CheckOutlined />} size='large' />
                <Button onClick={updateHandler} type="primary" shape="circle" icon={<EditOutlined />} size='large' />
                <Popconfirm
                    title="Are you sure to delete this task?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} size='large' />
                </Popconfirm>
            </div>
        </div>
    )
}

export default Todo
