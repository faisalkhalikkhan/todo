import { Button, Input, message } from 'antd'
import { useState, useEffect } from 'react'
import Lottie from "react-lottie";
import formAnimation from '../animations/formanimation.json'

const Form = ({ setData, data, update, setUpdate, updateData }) => {
    const [input, setInput] = useState('')

    useEffect(() => {
        if (update) {
            console.log("i am working too");
            setInput(updateData.text);
            console.log(input);
        }
    }, [update])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: formAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const onSubmitHandler = (e) => {
        if (update) {
            const date = new Date()
            e.preventDefault();
            setData(data.map(element => {
                if (element.id === updateData.id) {
                    return {
                        ...element, text: input, createdAt: date.toString()
                    }
                }
                return element
            }))
            setInput('')
            setUpdate(false)
            message.info('Task Updated Successfully!');
        } else {
            const date = new Date()
            e.preventDefault();
            setData([
                ...data,
                {
                    id: Math.random() * 1000,
                    completed: false,
                    text: input,
                    createdAt: date.toString()
                }
            ])
            setInput('')
            message.info('Task Added Successfully!');
        }
    }

    return (
        <div className='submit__form'>
            <div>
                {update ? <h1>Update ToDo</h1> : <h1>Add ToDo</h1>}
            </div>
            <form onSubmit={onSubmitHandler}>
                <Input required value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Write your todo here... ' />
                <Button style={{ marginTop: '15px' }} htmlType='submit' type='primary' >Submit</Button>
            </form>
            <div>
                <Lottie options={defaultOptions} height={300} width={300} />
            </div>
        </div>
    )
}

export default Form
