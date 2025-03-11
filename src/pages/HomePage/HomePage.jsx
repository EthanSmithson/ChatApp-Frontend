import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {

    var [communitiesActive, setCommunitiesActive] = useState(true);
    var [activeFriendsActive, setActiveFriendsActive] = useState(1);
    var [minimizeCommunities, setMinimizeCommunities] = useState(false);
    var [minimizeFriends, setMinimizeFriends] = useState(false);
    var [communitiesDialog, setCommunitiesDialog] = useState(false);
    var [tagOptionsShow, setTagOptionsShow] = useState(false);
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target) && !document.getElementById("tagDropDown").contains(e.target)) {
            setTagOptionsShow(false);
        }
    };

    const handleClickInside = () => setTagOptionsShow(true);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    const communitiesSetTrue = () => {
        setCommunitiesActive(true);
    }

    const communitiesSetFalse = () => {
        setCommunitiesActive(false);
    }

    const activeFriendsSetTrue = () => {
        setActiveFriendsActive(1);
    }

    const allFriendsSetTrue = () => {
        setActiveFriendsActive(2);
    }

    const findFriendsSetTrue = () => {
        setActiveFriendsActive(3);
    }

    const minimizeCommunitiesFunc = () => {
        setMinimizeFriends(false);
        if (!minimizeCommunities) {
            setMinimizeCommunities(true);
        } else {
            setMinimizeCommunities(false);
        }
    }

    const minimizeFriendsFunc = () => {
        setMinimizeCommunities(false);
        if (!minimizeFriends) {
            setMinimizeFriends(true);

        } else {
            setMinimizeFriends(false);
        }
    }

    const createCommunitiesDialog = () => {
        if (communitiesDialog) {
            setCommunitiesDialog(false);
        } else {
            setCommunitiesDialog(true);
        }
    }

    const tagOptionsHideFunc = (event) => {
        if (tagOptionsShow) {
            setTagOptionsShow(false);
        } else {
            setTagOptionsShow(true);
        }
    }

    const communityTags = {
        1 : <div><input type='checkbox'/>🏈<span>Sports</span></div>,
        2 : <div><input type='checkbox'/>🎮<span>Gaming</span></div>,
        3 : <div><input type='checkbox'/>🏃<span>Fitness</span></div>,
        4 : <div><input type='checkbox'/>🍔<span>Foodies</span></div>,
        5 : <div><input type='checkbox'/>💻<span>Tech</span></div>,
        6 : <div><input type='checkbox'/>📈<span>Trending</span></div>,
        7 : <div><input type='checkbox'/>🎶<span>Music</span></div>,
        8 : <div><input type='checkbox'/>🎤<span>Concerts</span></div>
    }

    var tempActiveTags = [];
    var tempActiveNums = [];

    const activateTag = (val) => {
        if (!tempActiveTags.includes(communityTags[val])) {
            tempActiveTags.push(communityTags[val]);
            tempActiveNums.push(val);
            document.getElementById("tag" + val).checked = true;
        } else {
            tempActiveTags = tempActiveTags.filter(item => item !== communityTags[val]);
            tempActiveNums = tempActiveNums.filter(item => item !== val);
            document.getElementById("tag" + val).checked = false;
        }
        console.log(tempActiveTags)
        document.getElementById("activeTags").innerHTML = "";
        document.getElementById("activeTags").append(tempActiveTags);
    }

    return (
        <div className='home'>
            <div onClick={createCommunitiesDialog} className={communitiesDialog ? 'bufferShow' : ''}>

            </div>
            <div className='homeHeader'>
                <div className='headerLogo'>
                    <img alt='myLogo'></img>
                </div>
                <div className='headerSearchBar'>
                    <input placeholder='Search' />
                </div>
                <div className='logout'>
                    <NavLink to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
                        Logout
                    </NavLink>
                </div>
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
                <div className={communitiesDialog ? 'createCommunitiesPopup communitiesDialogBorder' : 'createCommunitiesPopup'}></div>
                <div className={communitiesDialog ? 'createCommunitiesPopup createCommunitiesPopupShow' : 'createCommunitiesPopup'}>
                    <div className='createCommunitiesContainer'>
                        <div className='createCommunityTitle'>
                            <input placeholder='Community Name' />
                        </div>
                        <div className='communityDescriptionMembers'>
                            <div className='createCommunityDescription'>
                                <textarea placeholder='What is this community about?'></textarea>
                            </div>
                            <div className='communityMembers'>
                                <div className='createCommunityMembers'>
                                    <input placeholder="Add Members" />
                                </div>
                                <div className='addedMembers'>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                    test<br></br>
                                </div>
                            </div>
                        </div>
                        <div className='communitySettings'>
                            <div className='communitySettingsSection'>
                                <span>Privacy Setting</span>
                                <select className='communityPrivacy'>
                                    <option>Public</option>
                                    <option>Private</option>
                                </select>
                            </div>
                            <div className='communitySettingsSectionTags'>
                                <div className='selectTags'>
                                    <div className='selectTagsContainer'>
                                        <div onClick={tagOptionsHideFunc} id='tagDropDown' className='tagDropDown'>
                                            <span>Add Your Tag's</span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div id='tagOptions' ref={myRef} onClick={handleClickInside} className={tagOptionsShow ? "tagOptions" : 'tagOptionsHide'}>
                                            <div onClick={() => activateTag(1)}><input id='tag1' type='checkbox'/>🏈<span>Sports</span></div>
                                            <div onClick={() => activateTag(2)}><input id='tag2' type='checkbox'/>🎮<span>Gaming</span></div>
                                            <div onClick={() => activateTag(3)}><input id='tag3' type='checkbox'/>🏃<span>Fitness</span></div>
                                            <div onClick={() => activateTag(4)}><input id='tag4' type='checkbox'/>🍔<span>Foodies</span></div>
                                            <div onClick={() => activateTag(5)}><input id='tag5' type='checkbox'/>💻<span>Tech</span></div>
                                            <div onClick={() => activateTag(6)}><input id='tag6' type='checkbox'/>📈<span>Trending</span></div>
                                            <div onClick={() => activateTag(7)}><input id='tag7' type='checkbox'/>🎶<span>Music</span></div>
                                            <div onClick={() => activateTag(8)}><input id='tag8' type='checkbox'/>🎤<span>Concerts</span></div>
                                        </div>
                                    </div>
                                    <div id='activeTags' className='activeTags'>
                                        <ul>
                                            {
                                                tempActiveTags
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='createCommunityButtons'>
                            <button onClick={createCommunitiesDialog} className='createCommunityButtonsCncl'>Cancel</button>
                            <button className='createCommunityButtonsCrt'>Create</button>
                        </div>
                    </div>
                </div>
                <div className='rightPane'>
                    <div className={minimizeCommunities ? "rightPaneCommunities hidePane" : minimizeFriends ? "rightPaneCommunitiesExpand" : 'rightPaneCommunities'}>
                        <div className={minimizeCommunities ? "communitiesControlMinimize" : 'communitiesControl'}>
                            <div className={minimizeCommunities ? "minimizeCommunitierHeader" : "hideMinimizeCommunitierHeader"}>
                                Communities
                            </div>
                            <i onClick={minimizeCommunitiesFunc} class={!minimizeCommunities ? "hideHeaderOption" : "fa-solid fa-plus fa-sm"}></i>
                            <i onClick={minimizeCommunitiesFunc} class={minimizeCommunities ? "hideHeaderOption" : "fa-solid fa-minus fa-sm"}></i>
                        </div>
                        <div className='communitiesHeader'>
                            <div className={communitiesActive ? 'communitiesTabActive' : 'communitiesTab'} onClick={communitiesSetTrue}>
                                Your Communities
                            </div>
                            <div className={!communitiesActive ? 'communitiesTabActive' : 'findCommunitiesTab'} onClick={communitiesSetFalse}>
                                Find Communities
                            </div>
                        </div>
                        <div className='communitiesSearhbar'>
                            <div className='searchbar'>
                                <input placeholder='search communities' />
                            </div>
                        </div>
                        <div className='bothCommunities'>
                            <div className='communitiesBody'>
                                <div id='communitiesContent' className={communitiesActive ? 'communitiesContent' : 'communitiesContent communitiesContentHide'}>
                                    <ul>
                                        <li>
                                            <div className='communityImage'>

                                            </div>
                                            <span>Community Name</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='findCommunititesBody'>
                                <div className={!communitiesActive ? 'findCommunitiesContent' : 'findCommunitiesContent findCommunitiesContentHide'}>
                                    <ul>
                                        <li>
                                            <div className='communityImage'>

                                            </div>
                                            <span>Community Name</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div onClick={createCommunitiesDialog} className={minimizeCommunities ? "createCommunitiesbtnHide" : 'createCommunitiesBtn'}>
                            <i className="fa-solid fa-plus fa-lg"></i>
                        </div>
                    </div>
                    <div className={minimizeCommunities ? "rightPaneFriendsExpand" : minimizeFriends ? "rightPaneFriendsCollapse" : 'rightPaneFriends'}>
                        <div className={minimizeFriends ? "communitiesControlMinimize" : 'communitiesControl'}>
                            <div className={minimizeFriends ? "minimizeCommunitierHeader" : "hideMinimizeCommunitierHeader"}>
                                Friends
                            </div>
                            <i onClick={minimizeFriendsFunc} class={!minimizeFriends ? "hideHeaderOption" : "fa-solid fa-plus fa-sm"}></i>
                            <i onClick={minimizeFriendsFunc} class={minimizeFriends ? "hideHeaderOption" : "fa-solid fa-minus fa-sm"}></i>
                        </div>
                        <div className='communitiesHeader'>
                            <div className={activeFriendsActive === 1 ? 'communitiesTabActive' : 'communitiesTab'} onClick={activeFriendsSetTrue}>
                                Active Friends
                            </div>
                            <div className={activeFriendsActive === 2 ? 'communitiesTabActive' : 'findCommunitiesTab'} onClick={allFriendsSetTrue}>
                                All Friends
                            </div>
                            <div className={activeFriendsActive === 3 ? 'communitiesTabActive' : 'findCommunitiesTab'} onClick={findFriendsSetTrue}>
                                Find Friends
                            </div>
                        </div>
                        <div className='communitiesSearhbar'>
                            <div className='searchbar'>
                                <input placeholder='search friends' />
                            </div>
                        </div>
                        <div className='allFriendsTabs'>
                            <div className='friendsBody'>
                                <div id='friendsContent' className={activeFriendsActive === 1 ? 'friendsContent' : 'friendsContent activeFriendsContentHide'}>
                                    <ul>
                                        <li>
                                            <div className='communityImage'>

                                            </div>
                                            <span>Community Name</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='friendsBody'>
                                <div className={activeFriendsActive === 2 ? 'allFriendsContent' : activeFriendsActive === 3 ? 'friendsContent allFriendsContentLeftHide' : 'friendsContent allFriendsContentRightHide'}>
                                    <ul>
                                        <li>
                                            <div className='communityImage'>

                                            </div>
                                            <span>Community Name</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='friendsBody'>
                                <div className={activeFriendsActive === 3 ? 'findFriendsContent' : 'friendsContent findFriendsContentHide'}>
                                    <ul>
                                        <li>
                                            <div className='communityImage'>

                                            </div>
                                            <span>Community Name</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;