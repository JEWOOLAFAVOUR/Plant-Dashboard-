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

const SideBar = () => {
    return (
        <div className='sideBar grid'>
            <div className="logDiv flex">
                <img src={flower1} alt="Image Name" />
                <h2>Planti.</h2>
            </div>
            {/* MENU */}
            <div className="menuDiv">
                <h3 className="divTitle">QUICK MENU</h3>
                <ul className="menuLists grid">
                    {/* DASH ONE  */}
                    <li className="listItem">
                        <a href="" className="menuLink"></a>
                        <IoMdSpeedometer className='icons' />
                        <span className='smallText'>Dashboard</span>
                    </li>
                    {/* DASH TWO */}
                    <li className="listItem">
                        <a href="" className="menuLink"></a>
                        <MdDeliveryDining className='icons' />
                        <span className='smallText'>My Orders</span>
                    </li>
                    {/* DASH THREE */}
                    <li className="listItem">
                        <a href="" className="menuLink"></a>
                        <MdOutlineExplore className='icons' />
                        <span className='smallText'>Explore</span>
                    </li>
                    {/* DASH FOUR */}
                    <li className="listItem">
                        <a href="" className="menuLink"></a>
                        <BsTrophy className='icons' />
                        <span className='smallText'>Products</span>
                    </li>
                </ul>
            </div>

            {/* SETTING */}
            <div className="settingsDiv">
                <h3 className="divTitle">SETTINGS</h3>
                <ul className="menuLists grid">
                    {/* DASH ONE  */}
                    <li className="listItem">
                        <a href="" className="menuLink"></a>
                        <AiOutlinePieChart className='icons' />
                        <span className='smallText'>Dashboard</span>
                    </li>
                    {/* DASH TWO */}
                    <li className="listItem">
                        <a href="" className="menuLink"></a>
                        <BiTrendingUp className='icons' />
                        <span className='smallText'>Trends</span>
                    </li>
                    {/* DASH THREE */}
                    <li className="listItem">
                        <a href="" className="menuLink"></a>
                        <MdOutlinePermContactCalendar className='icons' />
                        <span className='smallText'>Contract</span>
                    </li>
                    {/* DASH FOUR */}
                    <li className="listItem">
                        <a href="" className="menuLink"></a>
                        <BsCreditCard2Front className='icons' />
                        <span className='smallText'>Products</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar