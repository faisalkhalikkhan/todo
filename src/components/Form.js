import { useState } from 'react'
import { Input, Button } from 'antd'

const Form = ({ data, setData }) => {

    const [input, setInput] = useState('')

    return (
        <div className="form">
            <form onSubmit={e => {
                e.preventDefault();
                setData([
                    ...data,
                    {
                        id: Math.random() * 1000,
                        completed: false,
                        text: input
                    }
                ])
                setInput('')
            }}>
                <Input required value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Write your todo here... ' />
                <div>
                    <Button type="primary" htmlType="submit">submit</Button>
                </div>
            </form>
        </div>
    )
}

export default Form
