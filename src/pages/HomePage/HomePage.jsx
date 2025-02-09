import React from 'react';
import './HomePage.css';

const HomePage = () => {

    

    return (
        <div className='homeContainer'>
            <div className='leftPane'>

            </div>
            <div className='middlePane'>
                
            </div>
            <div className='rightPane'>
                <div className='rightPaneCommunities'>
                    <div className='communitiesHeader'>
                        Your Communities
                    </div>
                    <div className='communitiesContent'>
                        <ul>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                        </ul>
                    </div>
                </div>
                <div className='rightPaneFriends'>
                    <div className='friendsHeader'>
                        Active Friends
                    </div>
                    <div className='friendsContent'>
                        <ul>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                            <li>TEST</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;