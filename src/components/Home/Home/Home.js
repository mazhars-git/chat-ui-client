import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import MainBody from '../MainBody/MainBody';
import RightSidebar from '../RightSidebar/RightSidebar';

const Home = () => {
    return (
        <section className="container">
            <div className="row">
                <LeftSidebar></LeftSidebar>
                <MainBody></MainBody>
                <RightSidebar></RightSidebar>
            </div>
        </section>
    );
};

export default Home;