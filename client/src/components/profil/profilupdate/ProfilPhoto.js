import React, { useState } from 'react'
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../JS/actions/user'

function ProfilPhoto() {
    const dispatch = useDispatch()
    const user_id= localStorage.getItem('user')
    const [image, setImage] = useState(false)
    const [picture, setPicture] = useState("")
    const data = new FormData()
    data.append('picture', picture)
    return (
        <>
            <div className="userprofil_header" onClick={() => setImage(!image)}>
                <p>Photo de profil</p>
                {image ? <BsChevronUp className="userprofil_icon" /> :
                    <BsChevronDown className="userprofil_icon" />}
            </div>
            {image ?
                <form>
                    <input type="file" name="picture"
                        onChange={(e) => setPicture(e.target.files[0])} />
                    <button type="submit"
                        className="btn"
                        onClick={(e)=> {e.preventDefault();dispatch(updateUser(user_id,data))}}
                    >Modifier</button>
                </form>
                : null}
        </>
    )
}

export default ProfilPhoto
