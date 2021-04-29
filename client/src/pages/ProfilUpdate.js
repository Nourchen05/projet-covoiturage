import React, { useState } from 'react'
// import Image from '../assets/images/profile.png'
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import CarSection from '../components/profil/profilupdate/CarSection';
import ChangePass from '../components/profil/profilupdate/ChangePass';
import GeneralInfo from '../components/profil/profilupdate/GeneralInfo';
import Preference from '../components/profil/profilupdate/Preference';
import ProfilPhoto from '../components/profil/profilupdate/ProfilPhoto';

function UserProfil() {
    return (
        <div className="container">
                <GeneralInfo />
                <ChangePass />
                <ProfilPhoto />
                {/* <Preference />
                <CarSection /> */}
        </div>
    )
}

export default UserProfil
