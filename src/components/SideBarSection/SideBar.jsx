import React from 'react'
import './sidebar.css'

// IMPORT IMAGES 
import flower1 from '../../assets/images/flower1.jpg'
import flower2 from '../../assets/images/flower2.jpg'

// IMPORTS ICONS 
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from 'react-icons/md';
import { MdOutlineExplore } from 'react-icons/md';
import { BsTrophy } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsCreditCard2Front } from 'react-icons/bs';
import { BsQuestionCircle } from 'react-icons/bs';

const SideBar = () => {
    return (
        <div className='sideBar grid'>
            <div className="logoDiv flex">
                <img src={flower1} alt="Image Name" />
                <h2>Planti.</h2>
            </div>
            {/* MENU */}
            <div className="menuDiv">
                <h3 className="divTitle">QUICK MENU</h3>
                <ul className="menuLists grid">
                    {/* DASH ONE  */}
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className='icon' />
                            <span className='smallText'>Dashboard</span>
                        </a>
                    </li>
                    {/* DASH TWO */}
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <MdDeliveryDining className='icon' />
                            <span className='smallText'>My Orders</span>
                        </a>
                    </li>
                    {/* DASH THREE */}
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <MdOutlineExplore className='icon' />
                            <span className='smallText'>Explore</span>
                        </a>
                    </li>
                    {/* DASH FOUR */}
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BsTrophy className='icon' />
                            <span className='smallText'>Products</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* SETTING */}
            <div className="settingsDiv">
                <h3 className="divTitle">SETTINGS</h3>
                <ul className="menuLists grid">
                    {/* DASH ONE  */}
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <AiOutlinePieChart className='icon' />
                            <span className='smallText'>Dashboard</span>
                        </a>
                    </li>
                    {/* DASH TWO */}
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BiTrendingUp className='icon' />
                            <span className='smallText'>Trends</span>
                        </a>
                    </li>
                    {/* DASH THREE */}
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <MdOutlinePermContactCalendar className='icon' />
                            <span className='smallText'>Contract</span>
                        </a>
                    </li>
                    {/* DASH FOUR */}
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BsCreditCard2Front className='icon' />
                            <span className='smallText'>Products</span>
                        </a>
                    </li>
                </ul>
            </div>



            <div className="sideBarCard">
                <BsQuestionCircle className='icon' />
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>Help Center</h3>
                    <p>Having trouble in Planti, please contact us for more questions.</p>
                    <button className='endBtn'>Go to help center</button>
                </div>
            </div>
        </div>
    )
}

export default SideBar