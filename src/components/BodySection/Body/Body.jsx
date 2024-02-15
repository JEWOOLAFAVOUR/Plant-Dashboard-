import React from 'react'
import './body.css'
import Top from '../TopSection/Top'
import Listing from '../ListingSection/Listing'
import Activity from '../ActivitySection/Activity'

const Body = () => {
    return (
        <div className='mainContext'>
            <Top />

            <div className="bottom flex">
                <Listing />
                <Activity />
            </div>
        </div>
    )
}

export default Body