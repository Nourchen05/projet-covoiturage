import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../JS/actions/user'

function Login() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    return (
        <div className="sign">
            <h1 className="title">Je me connecte !</h1>
            <form>
                <input type="text"
                    name="mail"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password"
                    name="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className="btn"
                    onClick={(e) => { e.preventDefault(); dispatch(loginUser({ email, password },history)) }}>Se connecter</button>
            </form>

        </div>
    )
}

export default Login
