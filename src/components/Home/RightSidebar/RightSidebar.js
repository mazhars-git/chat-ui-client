import { faComment, faHeart, faSearch, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../../../images/profile-3.JPG';
import './RightSidebar.css';

const RightSidebar = () => {
    return (
        <div className="col-md-3 py-4 bg-brand right-sidebar">
            <div className="rightSidebar text-center">
               <div className="search-input">
                    <FontAwesomeIcon className="search-icon" icon={faSearch} /> 
                    <input className='input-box' type="text" placeholder="Search people" />
               </div>
                <div className="img-box py-2">
                    <img style={{borderRadius: '50%'}} src={image} alt="" />
                </div>
                <h4>Dianne Vanhorn</h4>
                <p>Junior Developer</p>
                <div className="chat-icon d-flex justify-content-around">
                    <div className="container-fluid row">
                        <div className="chat col-6">
                            <div className="icon-style">
                                <FontAwesomeIcon className="chat-icon" icon={faComment} />
                            </div>
                            <p>Chat</p>
                        </div>
                        <div className="video col-6">
                            <div className="icon-style">
                                <FontAwesomeIcon icon={faVideo} />
                            </div>
                            <p>Video Call</p>
                        </div>
                    </div>
                </div>
            </div>
            <p><FontAwesomeIcon icon={faUser} /> View Friends</p>
            <p><FontAwesomeIcon icon={faHeart} /> Add to favorite</p>
            <p>Attachments</p>
            <div className="attachment">
                <a href="#">PDF</a>
                <a href="#">Video</a>
                <a href="#">MP3</a>
                <a href="#">Image</a>
            </div>
            <div className="text-center">
                <button className="btn btn-style">View All</button>
            </div>
        </div>
    );
};

export default RightSidebar;