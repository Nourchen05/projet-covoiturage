import React from 'react'
import Image from '../../assets/images/header.svg'
import './header.css'

function Header() {
    return (
        <div className="home_header">
            <img src={Image} alt="header" />
            <div className="home_header_contents">
                <h1>Pour votre prochaine voyage <br /> choissisez le covoiturage</h1>
                {/* <form>
                    <input type="text" placeholder="Départ" />
                    <input type="text" placeholder="Destination" />
                    <input type="date" placeholder="Aujourd'hui" />
                    <button type="submit">Search</button>
                </form> */}
            </div>
        </div>
    )
}

export default Header
