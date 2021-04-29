import React, { useState } from 'react'
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { changePassword } from '../../../JS/actions/user'

function ChangePass() {
    const dispatch = useDispatch()
    const [pass, setPass] = useState(false)
    const user_id = localStorage.getItem('user')
    const [passwords, setPasswords] = useState({
        password: "",
        newpassword: ""
    })
    const handleChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="userprofil_header" onClick={() => setPass(!pass)}>
                <p>Changer mot de passe</p>
                {pass ? <BsChevronUp className="userprofil_icon" /> :
                    <BsChevronDown className="userprofil_icon" />}
            </div>
            {pass ?
                <form>
                    <input type="password"
                        placeholder="ancien mot de passe"
                        onChange={handleChange}
                        name="password"
                        value={passwords.password} />
                    <input type="password"
                        placeholder="nouveau mot de passe"
                        onChange={handleChange}
                        name="newpassword"
                        value={passwords.newpassword} />
                    <button type="submit"
                        className="btn"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(changePassword(user_id, passwords));
                            setPasswords({
                                password: "",
                                newpassword: ""
                            })
                        }}
                    >Modifier
                    </button>
                </form> :
                null}
        </>
    )
}

export default ChangePass
