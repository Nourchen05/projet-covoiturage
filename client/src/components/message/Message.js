import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages, addMessage } from '../../JS/actions/message'
import './message.css'

function Message() {
    const dispatch = useDispatch()
    //getting the users id (sender and receiver)
    const loadUser = useSelector(state => state.userReducer.loadUser)
    const user_id = useSelector(state => state.userReducer.user_id)
    //get the messages and the user_by id 
    const loading = useSelector(state => state.messageReducer.LoadMessage)
    const messages = useSelector(state => state.messageReducer.messages)
    const user_r = localStorage.getItem('user')
    // message input 
    const [input, setInput] = useState({
        message:""
    })
    const handleChange = (e) => {
        setInput({...input ,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        if (loadUser) {
            dispatch(getMessages(user_r, user_id._id))
        }
    }, [dispatch])

    return (
        <div className="message_container">
            <div className="message_contents">
                <div className="message_content">
                    {loading ? null :
                        messages.map(el => <div key={el._id} className={el.receiver._id === user_r ? "message_receiver" : "message_sender"}>
                            <p> {el.message}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className="message_input">
                <form>
                    <input type="text" placeholder="Ton message ...." name="message" onChange={handleChange} value={input.message}/>
                    <button type="submit" className='btn'
                    onClick={(e)=> {e.preventDefault();dispatch(addMessage(user_id,user_r,input)); setInput({message:""})}}
                    >Send</button>
                </form>
            </div>
        </div>
    )
}

export default Message
