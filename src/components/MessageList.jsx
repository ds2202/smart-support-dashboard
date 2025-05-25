import React from 'react'
import { useState } from 'react';

const MessageList = () => {

    // Initial messages state
    const initialMessages = [
        { id: 1, name: 'Luis - Github', time: 40, message: 'hey, there...' },
        { id: 2, name: 'Ivan - Nike', time: 25, message: 'Good morning, Let me know...' },
        { id: 3, name: 'Smith', time: 55, message: 'Hi, have a Question...' },
        { id: 4, name: 'Joe', time: 90, message: 'hello,...' }
    ];

    const [messages, setMessages] = useState(initialMessages);
    const [displayMode, setDisplayMode] = useState('open');
    // const [selectedMessageId, setSelectedMessageId] = useState([1, 2, 3, 4]);

    const ResetList = () => {
        setMessages(initialMessages);
        setDisplayMode('open');
    }

    const UpdateList = () => {
        let longest_time = 1;
        let longest_time_id = -1;

        messages.forEach((m) => {
            if (m.time > longest_time) {
                longest_time = m.time;
                longest_time_id = m.id;
            }
        });

        setMessages(messages.filter(m => m.id == longest_time_id));
        setDisplayMode('waiting');
    }

    const changeColor = (id) => {
       
    }

    return (
        <div className='msg-list p-1'>

            <h4>Your Inbox</h4>

            <div className="accordion" id="accordionExample">

                <div className="accordion-item m-0 p-0">
                    <div className="accordion-header mt-4 p-1 mb-1">
                        <button id='list-btn' className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={ResetList}>
                            5 Open
                        </button>

                        <button id='waitingList-btn' className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" onClick={UpdateList}>
                            Waiting longest
                        </button>
                    </div>
                </div>

            </div>


            <div className='btn-contents mt-3'>

                <div id="collapseOne" className={`accordion-collapse collapse ${displayMode === 'open' ? 'show' : ''}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {messages.map((msg, index) => (
                            <button key={msg.id} id={`msg-btn-${msg.id}`} className="msg-btn btn w-100 text-start mt-0 mb-0 p-0" onClick={() => changeColor(msg.id)}>

                                <div className='msg-content'>
                                    <div className='senderName'>
                                        <strong>{msg.name}</strong>
                                    </div>

                                    <div className='msgWithTime'>
                                        <p>{msg.message}</p>
                                        <span>{`${msg.time}m`}</span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div id="collapseTwo" className={`accordion-collapse collapse ${displayMode === 'waiting' ? 'show' : ''}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {messages.map((msg, index) => (
                            <button key={msg.id} id={`msg-btn-${msg.id}`} className="msg-btn btn w-100 text-start mt-0 mb-0 p-0" onClick={() => changeColor(msg.id)}>

                                <div className='msg-content'>
                                    <div className='senderName'>
                                        <strong>{msg.name}</strong>
                                    </div>

                                    <div className='msgWithTime'>
                                        <p>{msg.message}</p>
                                        <span>{`${msg.time}m`}</span>
                                    </div>

                                </div>
                            </button>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
};

export default MessageList;