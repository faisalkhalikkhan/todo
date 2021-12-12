import React, { useState, useEffect } from 'react'
import { Input, Button } from 'antd';

const Footer = ({ updateFunction, updatedText, setUpdateText, hideme }) => {

    useEffect(() => {

    }, [hideme])

    return (
        <div className={`footer ${hideme ? "hideMe" : " "}`}>
            <form onSubmit={updateFunction}>
                <Input style={{ width: '450px' }} value={updatedText} onChange={e => setUpdateText(e.target.value)} required type="text" placeholder='Write your todo here... ' />
                <Button type="primary" htmlType="submit">submit</Button>
            </form>
        </div>
    )
}

export default Footer
