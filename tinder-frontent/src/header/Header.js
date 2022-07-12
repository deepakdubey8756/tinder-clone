import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import tinderImage from "../assets/tinderLogo.svg"
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <PersonIcon fontSize="large" className="header-icons"/>
        <img src={tinderImage} alt="tinder-clone.com" className="header-icons"/>
        <ForumIcon fontSize="large" className="header-icons"/>
    </div>
  )

}

export default Header