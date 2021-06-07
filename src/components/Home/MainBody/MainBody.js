import React from 'react';
import ChatBox from '../ChatBox/ChatBox';
import ChatFooter from '../ChatFooter/ChatFooter';
import ChatHeader from '../ChatHeader/ChatHeader';

const MainBody = () => {
    return (
        <div className="col-md-6">
           <ChatHeader></ChatHeader> 
           <ChatBox></ChatBox>
           <ChatFooter></ChatFooter>
        </div>
    );
};

export default MainBody;