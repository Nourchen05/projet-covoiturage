import React from 'react'
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './sidebar.css'

function Sidebar({ toggle, isOpen }) {
    return (
        <>
            <aside className={isOpen ? "sidebarContainerOpen" : "sidebarContainerClose"}>
                <div className="icon" onClick={toggle}>
                    <FaTimes className="closeIcon" />
                </div>
                <div className="SideBarWrapper">
                    {/* SLIDEBAR LINKS  */}
                    <ul className="SideBarMenu">
                        <li className="SideBarLink" onClick={toggle}>
                            Rechercher
                        </li>
                        <li className="SideBarLink" onClick={toggle} >
                            Proposer un trajet
                        </li>
                        <li className="SideBarLink" onClick={toggle}>
                            Inscription
                        </li>
                        <li className="SideBarLink" onClick={toggle}>
                            Connexion
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
