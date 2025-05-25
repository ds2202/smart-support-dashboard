import React from 'react'
import { Tabs } from 'react-bootstrap';
import ChatBot from './ChatBot';
import MessageList from './MessageList';
import ChatDetails from './ChatDetails';

const AppLayout = () => {
    return (
        <div className="container-fluid">
            <div className="row m-0 ">
                <div className="col-md-2 p-1 msg-inbox" id='col'>
                    <MessageList />
                </div>
                <div className="col-md-6 p-1 mid-header" id='col'>
                    <ChatDetails />
                </div>
                <div className="col-md-4 p-1 right-header" id='col'>
                    <ChatBot />
                </div>
            </div>
        </div>
    )
};

export default AppLayout;