import React from 'react'
import './sidebar.css'

// IMPORTED IMAGES 
import flower1 from '../../assets/images/flower1.jpg'


const SideBar = () => {
    return (
        <div className='sideBar grid  '>
            <div className="logDiv flex">
                <img src={flower1} alt="Image Name" />
                <h2>Planti.</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">QUICK MENU</h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="" className="menuLink"></a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default SideBar