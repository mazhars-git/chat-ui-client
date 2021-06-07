import React from 'react';
import image from '../../../images/profile.JPG';
import image_1 from '../../../images/profile-1.JPG';
import './LeftSidebar.css';
import LeftSidebarContent from './LeftSidebarContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const LeftSidebar = () => {
    const sidebarInfos = [
        {
            name: 'Lina Roy',
            message: 'Then ok, lets meeting with client tomorrow.',
            time: '10:11 AM',
            img: image_1
        },
        {
            name: 'Lina Roy',
            message: 'Then ok, lets meeting with client tomorrow.',
            time: '10:11 AM',
            img: image_1
        },
        {
            name: 'Lina Roy',
            message: 'Then ok, lets meeting with client tomorrow.',
            time: '10:11 AM',
            img: image_1
        },
        {
            name: 'Lina Roy',
            message: 'Then ok, lets meeting with client tomorrow.',
            time: '10:11 AM',
            img: image_1
        },
        {
            name: 'Lina Roy',
            message: 'Then ok, lets meeting with client tomorrow.',
            time: '10:11 AM',
            img: image_1
        }
     
    ]
    return (
        <div className="col-md-3 py-4 bg-brand left-sidebar">
            <div className="header d-flex pb-3">
                <div className="profile-img d-flex align-self-center">
                    <img className="img-style" src={image} alt="" />
                </div>
                <div className="profile-content">
                    <h4 className="m-0">Gravid Cristofer</h4>
                    <p className="text-style p-0">Senior Developer</p>
                </div>
            </div>

            <div className="search-input py-2 text-center">
                <FontAwesomeIcon className="search-icon" icon={faSearch} /> 
                <input className='input-box' type="text" placeholder="Search people" />
            </div>

            {
                sidebarInfos.map(data => <LeftSidebarContent data={data}></LeftSidebarContent>)
            }
        </div>
    );
};

export default LeftSidebar;