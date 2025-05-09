import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import { data } from 'jquery';
import $ from 'jquery';

const HomePage = () => {

    var [communitiesActive, setCommunitiesActive] = useState(true);
    var [activeFriendsActive, setActiveFriendsActive] = useState(1);
    var [minimizeCommunities, setMinimizeCommunities] = useState(false);
    var [minimizeFriends, setMinimizeFriends] = useState(false);
    var [communitiesDialog, setCommunitiesDialog] = useState(false);
    var [tagOptionsShow, setTagOptionsShow] = useState(false);
    var [activeTags, setActiveTags] = useState([]);
    var [activeTagsVals, setActiveTagsVals] = useState([]);
    var [returnedUsers, setReturnedUsers] = useState([]);
    var [communityUsers, setCommunityUsers] = useState([]);
    var [communityMembersList, setCommunityMembersList] = useState([]);
    var [membersList, setMembersList] = useState(false);
    const myRef = useRef();
    const myRef2 = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target) && !document.getElementById("tagDropDown").contains(e.target)) {
            setTagOptionsShow(false);
        }
    };

    const handleClickOutside2 = e => {
        if (!myRef2.current.contains(e.target) && !document.getElementById("membersList").contains(e.target)) {
            setReturnedUsers([]);
        }
    };

    const handleClickInside = () => setTagOptionsShow(true);
    const handleClickInside2 = () => setMembersList(true);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside2);
        return () => document.removeEventListener('mousedown', handleClickOutside2);
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

    const cancelCommunitiesDialog = () => {
        setCommunitiesDialog(false);
        var dialogInputs = document.getElementsByClassName("dialogInput");
        for (var i=0; i<dialogInputs.length; i++) {
            dialogInputs[i].value = ""
        }
        setActiveTags([]);
        setCommunityMembersList([]);
        // communityMembersList = [];
        var dropDown = document.getElementsByClassName("communityPrivacy");
        dropDown[0][0].selected = true;
        for (var j=1; j<9; j++) {
            document.getElementById("tag" + j).checked = false;
        }

        setReturnedUsers([]);
    }

    const tagOptionsHideFunc = (event) => {
        if (tagOptionsShow) {
            setTagOptionsShow(false);
        } else {
            setTagOptionsShow(true);
        }
    }

    const communityTags = {
        1 : `🏈 Sports`,
        2 : `🎮 Gaming`,
        3 : `🏃 Fitness`,
        4 : `🍔 Foodies`,
        5 : `💻 Tech`,
        6 : `📈 Trending`,
        7 : `🎶 Music`,
        8 : `🎤 Concerts`
    }

    var tempActiveTags = [];
    var tempActiveNums = [];
    var listItemTags;

    const activateTag = (val) => {
        if (!activeTags.includes(communityTags[val])) {
            setActiveTags([...activeTags, communityTags[val]]);
            setActiveTagsVals([...activeTagsVals, val]);
            tempActiveNums.push(val);
            document.getElementById("tag" + val).checked = true;
        } else {
            setActiveTags(activeTags.filter((_, i) => i !== activeTags.indexOf(communityTags[val])));
            setActiveTagsVals(activeTagsVals.filter((_, i) => i !== activeTagsVals.indexOf(val)));
            tempActiveNums = tempActiveNums.filter(item => item !== val);
            document.getElementById("tag" + val).checked = false;
        }
    }

    const addMembertoCommunity = (id) => {
        console.log(id)
        if(!communityMembersList.includes(id)) {
            setCommunityMembersList([...communityMembersList, id]);
        } else {
            setCommunityMembersList(communityMembersList.filter((_, i) => i !== communityMembersList.indexOf(id)));
        }
    }

    const postCommunity = (formData) => {
        data = {}
        data.communityTitle = formData.get("communityName");
        data.communityDescription = formData.get("communityDesc");
        data.communityPrivacy = formData.get("communityPriv");
        data.communityTags = activeTagsVals;
        data.communityMembers = communityMembersList;
        console.log(data)

        fetch('http://localhost:8080/createCommunity', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));

        setActiveTagsVals([]);
        setActiveTags([]);
        setCommunityMembersList([]);
        setReturnedUsers([]);
        setCommunitiesDialog(false);
    }

    const fetchUsers = (e) => {
        console.log(e.target.value)
        if (e.target.value !== "") {
            fetch(`http://localhost:8080/searchUser?user=${e.target.value}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
              })
                .then(response => response.json())
                .then(data => {
                  console.log(data)
                  setReturnedUsers(data)
                })
                .catch(error => {console.error('Error:', error)
                  setReturnedUsers(["No User's Found!"])
                });
        } else {
            setReturnedUsers([])
        }
        
    }

    $('body').on('keydown input', 'textarea[data-expandable]', function() {
        //Auto-expanding textarea
        this.style.removeProperty('height');
        this.style.height = (this.scrollHeight+2) + 'px';
      }).on('mousedown focus', 'textarea[data-expandable]', function() {
        //Do this on focus, to allow textarea to animate to height...
        this.style.removeProperty('height');
        this.style.height = (this.scrollHeight+2) + 'px';
      });

      const sendMessage = (data) => {
        fetch('http://localhost:8080/sendMessage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
      }

    return (
        <div className='home'>
            <div onClick={cancelCommunitiesDialog} className={communitiesDialog ? 'bufferShow' : ''}>

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
                        <div className='mainPaneConversation'>

                        </div>
                        <div className='mainPaneMessageBar'>
                            <div className='messageBarSection'>
                            <div className='messageBar'>
                                {/* <input placeholder="What's on your mind?"  type='text'/> */}
                                <textarea data-expandable placeholder="What's on your mind?" id='messageTextArea'  type='text'></textarea>
                                <i onClick={() =>  sendMessage(document.getElementById("messageTextArea").value)} class="fa-solid fa-paper-plane"></i>
                            </div>
                            <div className='optionsMessageBar'>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={communitiesDialog ? 'createCommunitiesPopup communitiesDialogBorder' : 'createCommunitiesPopup'}></div>
                <div className={communitiesDialog ? 'createCommunitiesPopup createCommunitiesPopupShow' : 'createCommunitiesPopup'}>
                    <div id='createCommunitiesContainer' className='createCommunitiesContainer'>
                        <form className='createCommunityForm' action={postCommunity}>
                            <div className='createCommunityTitle'>
                                <input name='communityName' className='dialogInput' placeholder='Community Name' />
                            </div>
                            <div className='communityDescriptionMembers'>
                                <div className='createCommunityDescription'>
                                    <textarea name='communityDesc' className='dialogInput' placeholder='What is this community about?'></textarea>
                                </div>
                                <div className='communityMembers'>
                                    <div className='createCommunityMembers'>
                                        <input onKeyUp={fetchUsers} className='dialogInput' placeholder="Add Members" />
                                    </div>
                                    <div ref={myRef2} id='membersList' onClick={handleClickInside2} className={returnedUsers.length === 0  ? 'foundMemberHide' :'foundMember'}>
                                        <ul className='searchUserList'>
                                            {
                                                returnedUsers.map(user => (
                                                    <li>
                                                        <div className={returnedUsers[0] === "No User's Found!"  ? 'foundMemberHide' :'searchUserImg'}>
                                                        </div>
                                                        {user[0]}
                                                        <input type='hidden' value={user[1]} />
                                                        <div className={returnedUsers[0] === "No User's Found!"  ? 'foundMemberHide' :'addMemberBtn'}>
                                                            <i onClick={() => addMembertoCommunity(user[1])} class="fa-solid fa-plus"></i>
                                                            <i class="fa-solid fa-ellipsis"></i>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className='addedMembers'>
                                    </div>
                                </div>
                            </div>
                            <div className='communitySettings'>
                                <div className='communitySettingsSection'>
                                    <span>Privacy Setting</span>
                                    <select name='communityPriv' className='communityPrivacy'>
                                        <option value="1">Public</option>
                                        <option value="2">Private</option>
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
                                                    activeTags.map(tag => (
                                                        <li>{tag}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='createCommunityButtons'>
                                <button onClick={cancelCommunitiesDialog} className='createCommunityButtonsCncl'>Cancel</button>
                                <button type="submit" className='createCommunityButtonsCrt'>Create</button>
                            </div>
                        </form>
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