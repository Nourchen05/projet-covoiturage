import React, { useEffect, useState } from 'react'
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import {updateUser} from '../../../JS/actions/user'

function GeneralInfo() {
    const dispatch = useDispatch()
    const [info, setInfo] = useState(false)
    const user_id = localStorage.getItem('user')
    const user = useSelector(state => state.userReducer.user)
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        bio: "",
        gender: "",

    })
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (isAuth) {
            setInput(user)
        }

    }, [user, isAuth])
    return (
        <>
            <div className={info ? "userprofil_header_clicked" : "userprofil_header"} onClick={() => setInfo(!info)}>
                <p>Information personnel</p>
                {info ? <BsChevronUp className="userprofil_icon" /> :
                    <BsChevronDown className="userprofil_icon" />}
            </div>
            {info ?
                <div>
                    <form>
                        <input type="text"
                            name="firstname"
                            value={input.firstname}
                            placeholder="wael"
                            onChange={handleChange} />
                        <input type="text"
                            name="lastname"
                            value={input.lastname}
                            placeholder="gharbi"
                            onChange={handleChange} />
                        <input type="text"
                            name="email"
                            value={input.email} disabled
                            placeholder="wael.gharbi@gmail.com"
                        />
                        <select
                            name="gender"
                            onChange={handleChange}
                            value={input.gender}>
                            <option value="Inconnu">Inconnu</option>
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
                        </select>
                        <textarea name="bio"
                            value={input.bio}
                            placeholder="this is my description"
                            onChange={handleChange} />
                        <button type="submit"
                            className="btn" onClick={(e)=> {e.preventDefault();dispatch(updateUser(user_id,input))}}>Modifier</button>
                    </form>
                </div> : null}
        </>
    )
}

export default GeneralInfo
