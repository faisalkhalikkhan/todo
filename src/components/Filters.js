import React from 'react'
import { Menu, Dropdown, message } from 'antd';

function handleButtonClick(e) {
    message.info('Click on left button.');
}


const Filters = ({ filters, setFiletrs }) => {

    const handleMenuClick = ({ key }) => {
        message.info(`Click on . ${key} `);
        setFiletrs(key)
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="All">
                All
            </Menu.Item>
            <Menu.Item key="Completed">
                Completed
            </Menu.Item>
            <Menu.Item key="Incomplete">
                Incomplete
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                {filters}
            </Dropdown.Button>
        </div>
    )
}

export default Filters
