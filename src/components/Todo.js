import React, { useState } from 'react'
import { DeleteOutlined, CheckOutlined, EditOutlined} from '@ant-design/icons';
import { Button, message, Popconfirm, Input } from 'antd';

function cancel(e) {
    message.error('Click on No');
}

const Todo = ({ setHide, item, data, setData, filters, setItemId }) => {

    const [updatel, setUpdate] = useState(false);

    const confirm = (e) => {
        console.log('click left button', item.text);
        setData(data.filter(el => el.id !== item.id))
        message.success('Click on Yes');
    }
    const completedTask = () => {
        setUpdate(true);
        message.info('Task Completed!');
        setData(data.map(element => {
            if (element.id === item.id) {
                return {
                    ...element, completed: !element.completed
                }
            }
            return element
        }))
    }
    const updateTask = () => {
        setUpdate(true);
        setItemId(item.id)
        setHide(false)
        message.info(`Please Fillup the details Given Below`);

    }
    return (
        <div className='todo '>
            {filters === 'Completed' && item.completed ? <>
                <h1 className={`${item.completed ? "completed" : " "}`}>{item.text}</h1>
                <div>
                    <Button onClick={completedTask} type="primary" shape="circle" icon={<CheckOutlined />} size='large' />

                    <Button onClick={updateTask} type="primary" shape="circle" icon={<EditOutlined />} size='large' />
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
            </> : filters === 'Incomplete' && !item.completed ?
                <>
                    <h1 className={`${item.completed ? "completed" : " "}`}>{item.text}</h1>
                    <div>
                        <Button onClick={completedTask} type="primary" shape="circle" icon={<CheckOutlined />} size='large' />
                            <Button onClick={updateTask} type="primary" shape="circle" icon={<EditOutlined />} size='large' />
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
                </> : filters === 'All' ? <>
                    <h1 className={`${item.completed ? "completed" : " "}`}>{item.text}</h1>
                    <div>
                        <Button onClick={completedTask} type="primary" shape="circle" icon={<CheckOutlined />} size='large' />
                        <Button onClick={updateTask} type="primary" shape="circle" icon={<EditOutlined />} size='large' />
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
                </> : <></>}
        </div>
    )
    // return (
    //     <div className='todo '>
    //         {filters === 'Completed' && item.completed ? <>
    //             updatel ? <>
    //                 <Input required value={updatedText} onChange={e => setUpdateText(e.target.value)} type="text" placeholder='Write your todo here... ' />
    //             </> : <h1 className={`${item.completed ? "completed" : " "}`}>{item.text}</h1>
    //             <div>
    //                 <Button onClick={completedTask} type="primary" shape="circle" icon={<CheckOutlined />} size='large' />
    //                 <Button onClick={completedTask} type="primary" shape="circle" icon={<CheckOutlined />} size='large' />
    //                 <Popconfirm
    //                     title="Are you sure to delete this task?"
    //                     onConfirm={confirm}
    //                     onCancel={cancel}
    //                     okText="Yes"
    //                     cancelText="No"
    //                 >
    //                     <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} size='large' />
    //                 </Popconfirm>
    //             </div>
    //         </> : filters === 'Incomplete' && !item.completed ?
    //             <>
    //                     updatel ? <Input required value={updatedText} onChange={e => setUpdateText(e.target.value)} type="text" placeholder='Write your todo here... ' /> : <h1 className={`${item.completed ? "completed" : " "}`}>{item.text}</h1>
    //                 <div>
    //                     <Button onClick={completedTask} type="primary" shape="circle" icon={<CheckOutlined />} size='large' />
    //                     <Popconfirm
    //                         title="Are you sure to delete this task?"
    //                         onConfirm={confirm}
    //                         onCancel={cancel}
    //                         okText="Yes"
    //                         cancelText="No"
    //                     >
    //                         <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} size='large' />
    //                     </Popconfirm>
    //                 </div>
    //             </> : filters === 'All' ? <>
    //                     updatel ? <Input required value={updatedText} onChange={e => setUpdateText(e.target.value)} type="text" placeholder='Write your todo here... ' /> : <h1 className={`${item.completed ? "completed" : " "}`}>{item.text}</h1>
    //                 <div>
    //                     <Button onClick={completedTask} type="primary" shape="circle" icon={<CheckOutlined />} size='large' />
    //                     <Popconfirm
    //                         title="Are you sure to delete this task?"
    //                         onConfirm={confirm}
    //                         onCancel={cancel}
    //                         okText="Yes"
    //                         cancelText="No"
    //                     >
    //                         <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} size='large' />
    //                     </Popconfirm>
    //                 </div>
    //             </> : <></>}
    //     </div>
    // )
}

export default Todo
