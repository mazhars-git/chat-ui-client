import React from 'react';

const LeftSidebarContent = ({data}) => {
    return (
        <div>
            <div className="profile-box d-flex py-2">
                <div className="profile-img d-flex align-self-center">
                    <img className="img-style" src={data.img} alt="" />
                </div>
                <div className="content-box profile-content">
                    <h6 style={{color: 'blue'}}>{data.name}</h6>
                    <p className="text-style">{data.message}</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebarContent;