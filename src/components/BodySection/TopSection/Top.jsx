import React from 'react'
import './top.css'

// IMPORTS ICONS 
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';

// IMAGES
import adminImage from '../../../assets/images/flower1.jpg'
import dashImage from '../../../assets/images/flower1.jpg'
import profile from '../../../assets/images/flower1.jpg'


const Top = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to Planti</h1>
                    <p>Hello IsraTech, Welcome back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder='Search Dashboard' />
                    <BiSearchAlt className='icon' />
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className='icon' />
                    <MdOutlineNotificationsNone className='icon' />
                    <div className="adminImage">
                        <img src={adminImage} alt="Admin Image" />
                    </div>
                </div>

            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and sell extraordinary products</h1>
                    <p>The world's fast growing industry today are natural made products!</p>

                    <div className="flex">
                        <button className="dash-btn">Explore More</button>
                        <button className="dash-btn transparent">Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <img src={dashImage} alt="dash image" />
                    </div>

                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        {/* <div className="textDiv">
                            <h1>My Stat</h1>

                            <div className="flex">
                                <span>
                                    Today <br /> <small>4 Orders</small>
                                </span>
                                <span>
                                    This Month <br /> <small>175 Orders</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Go to my orders <BsArrowRightShort className='icon' />
                            </span>

                        </div> */}

                        {/* <div className="imgDiv">
                            <img src={profile} alt="Image Name" />
                        </div> */}


                    </div>
                </div>

            </div >
        </div >
    )
}


export default Top