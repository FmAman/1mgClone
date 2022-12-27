import React from "react";
import "../styles/Navbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import {useState} from 'react';

function Navbar() {
  return (
    <div className="nav-bar-main">
      <div className="nav-bar-health-resource"
      >
        <div className="nav-bar-health-text"
        >
        Health Resource Center</div>
        <div className="nav-bar-icon">
          <MdKeyboardArrowDown />
        </div>
        <div className='health-dropdown-main'>
    <ul className='health-dropdown-ul'>
        <li className='health-dropdown-li'>All Diseases</li>
        <li className='health-dropdown-li'>All Medicines</li>
        <li className='health-dropdown-li'>Medicines by Therapeutic Class</li>
    </ul></div>
      </div>
      <div className="nav-bar-vitamins">
        <div className="nav-bar-vitamin-text">Vitamins & Nutrition</div>
        <div className="nav-bar-icon">
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div className="nav-bar-diabetes">
        <div className="nav-bar-diabetes-text">Diabetes</div>
        <div className="nav-bar-icon">
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div className="nav-bar-healthcare">
        <div className="nav-bar-healthcare-text">Healthcare Devices</div>
        <div className="nav-bar-icon">
          <MdKeyboardArrowDown />
        </div>
        </div>
      <div className="nav-bar-health-conditions">
        <div className="nav-bar-health-conditions-text">Health Conditions</div>
        <div className="nav-bar-icon">
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div className="nav-bar-personal">
      <div className="nav-bar-personal-text">
    Personal Care

</div>
<div className="nav-bar-icon">
    <MdKeyboardArrowDown/>
</div>
      </div>
      <div className="nav-bar-ayurveda">
        <div className="nav-bar-ayurveda-text">Ayurveda</div>
        <div className="nav-bar-icon">
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div className="nav-bar-homeopathy">
        <div className="nav-bar-homeopathy-text">Homeopathy</div>
        <div className="nav-bar-icon">
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div className="nav-bar-featured">
        <div className="nav-bar-featured-text">Featured</div>
        <div className="nav-bar-icon">
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
