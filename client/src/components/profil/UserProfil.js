import React from 'react'
import { useSelector } from 'react-redux'
import Image from '../../assets/images/profile.png'
import './userProfil.css'

function UserProfil() {
    const user_id = useSelector(state => state.userReducer.user_id)
    return (
        <div className="user_profil">
            <div className="user_profil_image">
                {user_id.picture ? 
                <img src={`/images/${user_id.picture}`} alt="profil"/>:
                <img src={Image} alt="profil"/>
            }
            </div>
            <div className="user_profil_fullname">
                <h1>{user_id.firstname} {user_id.lastname} </h1>
                <p>{user_id.gender}</p>
            </div>
            <hr />
            <div className="user_profil_mail">
                <p>{user_id.email}</p>
            </div>
            <div className="user_profil_bio">
                <p>{user_id.bio}</p>
            </div>
        </div>
    )
}

export default UserProfil
