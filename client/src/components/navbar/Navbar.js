import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory,Link } from 'react-router-dom'
//import action 
import { toggleSearch } from '../../JS/actions/search'
import { logout } from '../../JS/actions/user'
//import Image 
import Image from '../../assets/images/profile.png'
//import ICON
import { BiChevronDown } from "react-icons/bi";
import {
    BsChat, BsPerson, BsPlus, BsSearch, BsPersonPlus, BsBoxArrowRight
    , BsPower, BsMap
} from "react-icons/bs";
import { FaBars } from "react-icons/fa";

import './navbar.css'


function Navbar({toggle}) {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const laodUser = useSelector(state => state.userReducer.loadUser)
    const user = useSelector(state => state.userReducer.user)
    // useState for dropdown Menu
    const [drop, setDrop] = useState(false)
    //Use history for links 
    const history= useHistory()


    return (
        <div className="navbar">
            <div className="left_navbar">
                <Link to="/" className="link_style">
                    <h1>CoCar</h1>
                </Link>
                <ul>
                    <li onClick={() => dispatch(toggleSearch())}>
                        <Link to="/search" className="link_style">
                            <BsSearch className="nav_icon" />Rechercher
                        </Link>
                    </li>
                    <li>
                        <Link to="/road/add" className="link_style">
                            <BsPlus className="nav_icon" />Proposer un trajet
                        </Link>
                    </li>
                </ul>
            </div>


            <div className="right_navbar">
                <div className="Mobile_Icon" onClick={toggle}>
                    <FaBars />
                </div>
                {laodUser ? null : isAuth ?
                    <ul>
                        <li className="nav_link">Bienvenu {user.firstname} {user.lastname}</li>
                        <li className="nav_link">
                            {user.picture ? 
                            <img src={`/images/${user.picture}`} alt="profil" className="profile_image" />:
                            <img src={Image} alt="profil" className="profile_image" />}

                        </li>
                        <li className="dropdown"> <BiChevronDown className="parameter_icon" onClick={() => setDrop(!drop)} />
                            <ul className={drop ? "" : "hide_dropdown"}>
                                <li onClick={() => {setDrop(false);history.push('/user/profil')}}>
                                        <BsPerson className="drop_icon" />
                                    Profil
                                </li>
                                <li onClick={() => {setDrop(false);history.push('/user/road')}}>
                                        <BsMap className="drop_icon" />
                                    Vos trajets
                                </li>
                                <li onClick={() => setDrop(false)}>
                                    <BsChat className="drop_icon" />
                                    Boite de réception
                                    </li>
                                <li onClick={() => { setDrop(false); dispatch(logout()); history.push('/')}}>
                                    <BsPower className="drop_icon" />
                                    Déconnexion
                                    </li>
                            </ul>
                        </li>
                    </ul>
                    :
                    <ul>
                        <li className="nav_link">
                            <Link to="/inscription" className="link_style">
                                <BsPersonPlus className="nav_icon" />
                            Inscription
                        </Link>
                        </li>
                        <li className="nav_link">
                            <Link to="/connexion" className="link_style">
                                <BsBoxArrowRight className="nav_icon" />
                            Connexion
                        </Link>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default Navbar
