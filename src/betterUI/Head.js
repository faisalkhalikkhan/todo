import React, { useState } from 'react'
import { DownOutlined, SearchOutlined, SmileOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message } from "antd";


const Head = ({ setShowForm, setShowAllTODOS, setFilterMode }) => {

    const handleMenuClick = ({ key }) => {
        message.info(`Click on . ${key} `);
        setFilterMode(key)
    }
    const menu = (
        <Menu onClick={handleMenuClick} >
            <Menu.Item key="all" icon={<SmileOutlined />}>
                All ToDOs
            </Menu.Item>
            <Menu.Item key="completed" icon={<EyeOutlined />}>
                Completed ToDos
            </Menu.Item>
            <Menu.Item key="incomplete" icon={<EyeInvisibleOutlined />}>
                Incomplete ToDos
            </Menu.Item>
        </Menu>
    );


    return (
        <div className='header'>
            <header>
                <h1>NetLink's ToDo App</h1>
                <ul>
                    <li onClick={() => {
                        setFilterMode('all')
                        setShowForm(false)
                        setShowAllTODOS(true)
                    }}>ToDo's</li>
                    <li>
                        <Dropdown overlay={menu}>
                            <span>ToDo's Filter <DownOutlined /></span>
                        </Dropdown>
                    </li>
                    <li onClick={() => {
                        setShowAllTODOS(false)
                        setShowForm(true)
                    }}>Add ToDo</li>
                    <li>
                        <div className="header__input">
                            <SearchOutlined />
                            <input type='text' placeholder='Search here...' required />
                        </div>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Head
