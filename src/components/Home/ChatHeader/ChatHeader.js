import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../../images/profile-3.JPG';
import './ChatHeader.css';
import { faBell, faCoffee, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

const ChatHeader = () => {
    return (
        <section className="chatBox-header d-flex justify-content-between pt-3">
            <div className="chatBox-content">
                <div className="d-flex">
                    <div className="img-box d-flex align-self-center">
                        <img className="header-img" src={image} alt="" />
                    </div>
                    <div className="name d-flex align-self-center ms-2">
                        <h5>Dianne Vanhorn</h5>
                    </div>
                </div>
            </div>
            <div className="chatBox-icon">
                <ul>
                    <li><FontAwesomeIcon icon={faSearch} /></li>
                    <li><FontAwesomeIcon icon={faBell} /></li>
                    <li><FontAwesomeIcon icon={faHeart} /></li>
                </ul>
            </div>
        </section>
    );
};

export default ChatHeader;