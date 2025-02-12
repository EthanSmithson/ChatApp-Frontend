import React from 'react';
import './HomePage.css';

const HomePage = () => {

    

    return (
        <div className='home'>
            <div className='homeHeader'>
                
            </div>
            <div className='leftSidebar'>
    
                </div>
            <div className='homeContainer'>
                <div className='leftPane'>
                    <div className='explorePane'>

                    </div>
                </div>
                <div className='middlePane'>
                    <div className='mainPane'>
                        
                    </div>
                </div>
                <div className='rightPane'>
                    <div className='rightPaneCommunities'>
                        <div className='communitiesHeader'>
                            <div className='communitiesTab'>
                                Your Communities
                            </div>
                            <div className='findCommunitiesTab'>
                                Find Communities
                            </div>
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
        </div>
    )
}

export default HomePage;