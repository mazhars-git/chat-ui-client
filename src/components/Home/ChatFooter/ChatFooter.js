import { faPaperPlane, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ChatFooter = () => {
    return (
        <div className="py-3">
            <div className="input-area px-3">
                <form action="">
                    <input type="text" placeholder="Write Something"/>
                    <button className="btn btn-primary"><FontAwesomeIcon icon={faPaperPlane}/></button>
                </form>
            </div>

        </div>
    );
};

export default ChatFooter;