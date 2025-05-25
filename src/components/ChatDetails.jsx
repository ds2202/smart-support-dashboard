import React from 'react'

const ChatDetails = () => {
    return (
        <div className='chatDetails mb-1'>
            <div className='navbar m-0 p-1'>
                <h4>Luis Easton</h4>
                <div className='icons p-0 mr-3 mt-0'>
                    <div className='i1 mr-1'>
                        <button className='more-btn pt-0'><i className="bi bi-three-dots"></i></button>
                    </div>
                    <div className='i2 pr-0 mr-1'>
                        <button className='theme-btn pt-0'><i className="bi bi-moon-stars-fill"></i></button>
                    </div>
                    <div className='i3 pr-1 mr-1'>
                        <button className='close-btn pt-0'><i className="bi bi-x-octagon"></i>Close</button>
                    </div>
                </div>
            </div>

            <div className='mt-4 dialogue-box'>
                <div className='chats m-1 p-1'>
                    <p id='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas fugit recusandae placeat, a vel vero impedit illum ex ipsam ullam.
                    </p>

                    <p id='p2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>

            <div className='editor mb-1 pb-1'>
                <div className='ml-1 pl-2 pt-1'> <i className="bi bi-chat-left-text ml-0 pr-1"></i> <b>Chat</b> </div>
                <p className='ml-1 pl-2'> Use <i class="bi bi-command"></i> K for shortcuts</p>

                <div className='selector'>
                    <div className='icon-grp ml-0 pl-0'>
                        <button className='btn pr-0'><i className="bi bi-lightning-charge-fill"></i></button>
                        <button className='btn pr-0'><i className="bi bi-pencil-square"></i></button>
                        <button className='btn'><i className="bi bi-filter-circle"></i></button>
                    </div>
                    <div className='last-icon mr-1'>
                    <button className='btn p-2'> Send <i className="bi bi-arrow-return-left"></i></button>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default ChatDetails;